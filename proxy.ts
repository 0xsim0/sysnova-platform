import { NextRequest, NextResponse } from "next/server";

function createNonce() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return btoa(String.fromCharCode(...Array.from(bytes)));
}

function createCsp(nonce: string) {
  const isDev = process.env.NODE_ENV === "development";
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com`,
    // 'unsafe-inline' required: Tailwind v4 still injects inline styles at runtime (F75 — deliberate trade-off).
    `style-src 'self' 'unsafe-inline'`,
    "font-src 'self' data:",
    "img-src 'self' data: https:",
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.analytics.google.com https://www.googletagmanager.com https://vitals.vercel-insights.com",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join("; ");
}

export default function proxy(request: NextRequest) {
  const nonce = createNonce();
  const csp = createCsp(nonce);
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  // Pass validated lang preference to layout so SSR <html lang> matches user's choice
  const rawLang = request.cookies.get("sn-lang")?.value;
  const safeLang = rawLang === "en" ? "en" : "de";
  requestHeaders.set("x-lang", safeLang);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico|icon.*|apple-icon.png|site.webmanifest).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
