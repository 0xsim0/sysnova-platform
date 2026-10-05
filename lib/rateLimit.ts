// KV-backed rate limiting and OTP storage with in-memory fallback when KV is unavailable.
// In production (Vercel), set KV_REST_API_URL and KV_REST_API_TOKEN for shared TTL storage.
import "server-only";
import type { VercelKV } from "@vercel/kv";

let _kv: VercelKV | null = null;

async function getKv(): Promise<VercelKV | null> {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    if (process.env.NODE_ENV === "production") {
      console.warn("[rateLimit] KV env vars not set — falling back to in-memory rate limiting");
    }
    return null;
  }
  if (!_kv) {
    const { kv } = await import("@vercel/kv");
    _kv = kv;
  }
  return _kv;
}

// ── In-memory fallback stores ────────────────────────────────────────────────

const memCooldowns = new Map<string, number>();
const memIp = new Map<string, { count: number; ts: number }>();
const memAttempts = new Map<string, { count: number; ts: number }>();
const memOtpChallenges = new Map<string, OtpChallenge & { expiresAt: number }>();

const COOLDOWN_MS = 60_000;
const IP_WINDOW_MS = 3_600_000;
const ATTEMPT_TTL_MS = 600_000;
const OTP_CHALLENGE_TTL_SECONDS = 600;

export const IP_LIMIT = 10;
export const MAX_ATTEMPTS = 5;

// Prune helpers — bound the in-memory fallback stores so long-running dev
// servers (or short windows before KV env vars are set in prod) do not leak.
const PRUNE_THRESHOLD = 1000;

function pruneMemCooldowns(): void {
  if (memCooldowns.size < PRUNE_THRESHOLD) return;
  const now = Date.now();
  for (const [key, ts] of memCooldowns) {
    if (now - ts >= COOLDOWN_MS) memCooldowns.delete(key);
  }
}

function pruneMemIp(): void {
  if (memIp.size < PRUNE_THRESHOLD) return;
  const now = Date.now();
  for (const [key, entry] of memIp) {
    if (now - entry.ts >= IP_WINDOW_MS) memIp.delete(key);
  }
}

function pruneMemAttempts(): void {
  if (memAttempts.size < PRUNE_THRESHOLD) return;
  const now = Date.now();
  for (const [key, entry] of memAttempts) {
    if (now - entry.ts > ATTEMPT_TTL_MS) memAttempts.delete(key);
  }
}

function pruneMemOtpChallenges(): void {
  if (memOtpChallenges.size < PRUNE_THRESHOLD) return;
  const now = Date.now();
  for (const [key, challenge] of memOtpChallenges) {
    if (now > challenge.expiresAt) memOtpChallenges.delete(key);
  }
}

export interface OtpChallenge {
  email: string;
  codeHash: string;
}

// ── Per-email OTP send cooldown ──────────────────────────────────────────────

export async function checkAndSetCooldown(email: string): Promise<boolean> {
  const kv = await getKv();
  if (kv) {
    // kv.set with nx:true returns "OK" on success, null if the key already exists (cooldown active)
    const result = await kv.set(`otp:cooldown:${email}`, "1", { nx: true, ex: 60 });
    return result !== null;
  }
  pruneMemCooldowns();
  const last = memCooldowns.get(email) ?? 0;
  if (Date.now() - last < COOLDOWN_MS) return false;
  memCooldowns.set(email, Date.now());
  return true;
}

// ── Per-IP OTP request rate limit ────────────────────────────────────────────

export async function checkIpLimit(ip: string): Promise<boolean> {
  const kv = await getKv();
  if (kv) {
    const key = `otp:ip:${ip}`;
    const pipeline = kv.pipeline();
    pipeline.set(key, 0, { nx: true, ex: 3600 });
    pipeline.incr(key);
    const [, count] = (await pipeline.exec()) as [unknown, number];
    return count <= IP_LIMIT;
  }
  pruneMemIp();
  const entry = memIp.get(ip);
  const now = Date.now();
  if (!entry || now - entry.ts >= IP_WINDOW_MS) {
    memIp.set(ip, { count: 1, ts: now });
    return true;
  }
  if (entry.count >= IP_LIMIT) return false;
  memIp.set(ip, { count: entry.count + 1, ts: entry.ts });
  return true;
}

// ── Per-IP contact form submission limit ─────────────────────────────────────

export async function checkContactIpLimit(ip: string): Promise<boolean> {
  const kv = await getKv();
  if (kv) {
    const key = `contact:ip:${ip}`;
    const pipeline = kv.pipeline();
    pipeline.set(key, 0, { nx: true, ex: 3600 });
    pipeline.incr(key);
    const [, count] = (await pipeline.exec()) as [unknown, number];
    return count <= IP_LIMIT;
  }
  pruneMemIp();
  const key = `contact:ip:${ip}`;
  const entry = memIp.get(key);
  const now = Date.now();
  if (!entry || now - entry.ts >= IP_WINDOW_MS) {
    memIp.set(key, { count: 1, ts: now });
    return true;
  }
  if (entry.count >= IP_LIMIT) return false;
  memIp.set(key, { count: entry.count + 1, ts: entry.ts });
  return true;
}

// ── Per-token OTP verify attempt limit ───────────────────────────────────────

export async function getAttemptCount(tokenId: string): Promise<number> {
  const kv = await getKv();
  if (kv) return (await kv.get<number>(`otp:attempts:${tokenId}`)) ?? 0;
  pruneMemAttempts();
  const entry = memAttempts.get(tokenId);
  if (!entry) return 0;
  if (Date.now() - entry.ts > ATTEMPT_TTL_MS) { memAttempts.delete(tokenId); return 0; }
  return entry.count;
}

export async function incrementAttempts(tokenId: string): Promise<void> {
  const kv = await getKv();
  if (kv) {
    const key = `otp:attempts:${tokenId}`;
    const pipeline = kv.pipeline();
    pipeline.set(key, 0, { nx: true, ex: 600 });
    pipeline.incr(key);
    await pipeline.exec();
    return;
  }
  pruneMemAttempts();
  const entry = memAttempts.get(tokenId);
  memAttempts.set(tokenId, { count: (entry?.count ?? 0) + 1, ts: entry?.ts ?? Date.now() });
}

export async function clearAttempts(tokenId: string): Promise<void> {
  const kv = await getKv();
  if (kv) { await kv.del(`otp:attempts:${tokenId}`); return; }
  pruneMemAttempts();
  memAttempts.delete(tokenId);
}

// ── Server-side OTP challenge storage ────────────────────────────────────────

export async function storeOtpChallenge(token: string, challenge: OtpChallenge): Promise<void> {
  const kv = await getKv();
  if (kv) {
    await kv.set(`otp:challenge:${token}`, challenge, { ex: OTP_CHALLENGE_TTL_SECONDS });
    return;
  }

  pruneMemOtpChallenges();
  memOtpChallenges.set(token, {
    ...challenge,
    expiresAt: Date.now() + OTP_CHALLENGE_TTL_SECONDS * 1000,
  });
}

export async function getOtpChallenge(token: string): Promise<OtpChallenge | null> {
  const kv = await getKv();
  if (kv) return (await kv.get<OtpChallenge>(`otp:challenge:${token}`)) ?? null;

  const challenge = memOtpChallenges.get(token);
  if (!challenge) return null;
  if (Date.now() > challenge.expiresAt) {
    memOtpChallenges.delete(token);
    return null;
  }
  return { email: challenge.email, codeHash: challenge.codeHash };
}

export async function clearOtpChallenge(token: string): Promise<void> {
  const kv = await getKv();
  if (kv) {
    await kv.del(`otp:challenge:${token}`);
    return;
  }
  memOtpChallenges.delete(token);
}
