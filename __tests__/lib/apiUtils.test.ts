import { describe, it, expect, beforeEach } from "vitest";

// isAllowedOrigin prüft NODE_ENV + SITE_URL; Modul beim Import evaluieren.
// NODE_ENV = 'production' setzen bevor Import.
const OLD_ENV = process.env;

beforeEach(() => {
  process.env = { ...OLD_ENV };
});

describe("isAllowedOrigin (production)", () => {
  it("erlaubt die echte Domain", async () => {
    process.env.NODE_ENV = "production";
    const { isAllowedOrigin } = await import("@/lib/apiUtils");
    expect(isAllowedOrigin("https://sysnova-it.de")).toBe(true);
  });

  it("blockt eine fremde Domain", async () => {
    process.env.NODE_ENV = "production";
    const { isAllowedOrigin } = await import("@/lib/apiUtils");
    expect(isAllowedOrigin("https://evil.com")).toBe(false);
  });

  it("blockt null-Origin", async () => {
    process.env.NODE_ENV = "production";
    const { isAllowedOrigin } = await import("@/lib/apiUtils");
    expect(isAllowedOrigin(null)).toBe(false);
  });

  it("blockt leeren String", async () => {
    process.env.NODE_ENV = "production";
    const { isAllowedOrigin } = await import("@/lib/apiUtils");
    expect(isAllowedOrigin("")).toBe(false);
  });

  it("blockt Subdomain-Angriff (sysnova-it.de.evil.com)", async () => {
    process.env.NODE_ENV = "production";
    const { isAllowedOrigin } = await import("@/lib/apiUtils");
    expect(isAllowedOrigin("https://sysnova-it.de.evil.com")).toBe(false);
  });
});

describe("isAllowedOrigin (development)", () => {
  it("erlaubt localhost:3000 in dev", async () => {
    process.env.NODE_ENV = "development";
    const { isAllowedOrigin } = await import("@/lib/apiUtils");
    expect(isAllowedOrigin("http://localhost:3000")).toBe(true);
  });
});
