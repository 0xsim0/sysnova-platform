import { NextRequest } from "next/server";
import { SITE_URL } from "@/lib/config";

const allowedProductionOrigin = new URL(SITE_URL).origin;
const LOCAL_DEV_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

/**
 * Reads client IP headers.
 * These headers are only trustworthy when a trusted proxy overwrites them.
 */
export function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const firstForwarded = forwarded?.split(",")[0]?.trim();

  return firstForwarded ?? req.headers.get("x-real-ip") ?? "unknown";
}

/**
 * Uses ALLOWED_ORIGINS when configured.
 * Otherwise keeps the production/development defaults.
 * Missing or invalid origins are rejected.
 */
export function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;

  try {
    const parsed = new URL(origin);

    if (!["http:", "https:"].includes(parsed.protocol)) return false;
    if (origin !== parsed.origin) return false;

    const configuredOrigins = process.env.ALLOWED_ORIGINS;

    if (configuredOrigins !== undefined) {
      const allowedOrigins = configuredOrigins
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean);

      return allowedOrigins.includes(origin);
    }

    if (origin === allowedProductionOrigin) return true;

    return (
      process.env.NODE_ENV === "development" &&
      LOCAL_DEV_HOSTS.has(parsed.hostname)
    );
  } catch {
    return false;
  }
}
