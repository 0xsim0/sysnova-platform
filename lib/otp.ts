import "server-only";
import crypto from "crypto";
import { clearOtpChallenge, getOtpChallenge, storeOtpChallenge } from "@/lib/rateLimit";

const DEV_FALLBACK = "sysnova-otp-dev-secret";

function getSecret(): string {
  const secret = process.env.OTP_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("OTP_SECRET environment variable is required in production");
    }
    console.warn("[otp] OTP_SECRET is not set — using insecure dev fallback");
    return DEV_FALLBACK;
  }
  return secret;
}

/** Generates a cryptographically random 6-digit code (000000–999999), bias-free. */
export function generateOtp(): string {
  // Rejection sampling: discard values above the largest multiple of 1_000_000
  // that fits in a uint32, eliminating modulo bias entirely.
  const MAX_SAFE = 0xffffffff - (0x100000000 % 1000000); // 4294000000
  let value: number;
  do {
    value = crypto.randomBytes(4).readUInt32BE(0);
  } while (value > MAX_SAFE);
  return (value % 1000000).toString().padStart(6, "0");
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/** @param email Must be pre-normalized via normalizeEmail() by the caller. */
function hashOtpCode(token: string, email: string, code: string): string {
  return crypto
    .createHmac("sha256", getSecret())
    .update(`${token}:${email}:${code}`)
    .digest("hex");
}

function timingSafeHexEqual(expected: string, actual: string): boolean {
  const expectedBuf = Buffer.from(expected, "hex");
  const actualBuf = Buffer.from(actual, "hex");
  return expectedBuf.length === actualBuf.length && crypto.timingSafeEqual(expectedBuf, actualBuf);
}

/** Creates an opaque token and stores the OTP challenge server-side. */
export async function createOtpToken(email: string, code: string): Promise<string> {
  const token = crypto.randomBytes(32).toString("base64url");
  await storeOtpChallenge(token, {
    email: normalizeEmail(email),
    codeHash: hashOtpCode(token, normalizeEmail(email), code),
  });
  return token;
}

/**
 * Verifies and consumes a server-side OTP challenge.
 * Returns true only if the opaque token exists, the email matches, and the code matches.
 */
export async function verifyOtpToken(token: string, email: string, code: string): Promise<boolean> {
  try {
    if (!/^[A-Za-z0-9_-]{32,128}$/.test(token)) return false;

    const challenge = await getOtpChallenge(token);
    if (!challenge) return false;
    if (challenge.email !== normalizeEmail(email)) return false;

    const expectedHash = hashOtpCode(token, normalizeEmail(email), code);
    if (!timingSafeHexEqual(expectedHash, challenge.codeHash)) return false;

    await clearOtpChallenge(token);
    return true;
  } catch {
    return false;
  }
}
