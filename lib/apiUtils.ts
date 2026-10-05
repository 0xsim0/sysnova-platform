import { NextRequest } from "next/server";
import { SITE_URL } from "@/lib/config";

const allowedProductionOrigin = new URL(SITE_URL).origin;
const LOCAL_DEV_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

/**
 * Extracts the verified client IP from a Next.js API request.
 * Vercel overwrites x-forwarded-for with the verified client IP — safe to trust in production.
 */
export function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const firstForwarded = forwarded?.split(",")[0]?.trim();
  return (
    firstForwarded ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

/**
 * Returns true when the request Origin is the production site or a local
 * dev server. Null origins (headless tools, server-to-server) are rejected —
 * browsers always include Origin on cross-origin POST requests, and same-origin
 * POST requests from the SysNova frontend always include it too.
 */
export function isAllowedOrigin(origin: string | null): boolean {
  if (origin === null) return false;

  try {
    const parsed = new URL(origin);
    if (parsed.origin === allowedProductionOrigin) return true;

    return process.env.NODE_ENV === "development" && LOCAL_DEV_HOSTS.has(parsed.hostname);
  } catch {
    return false;
  }
}
