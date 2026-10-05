# SysNova Website

Next.js 16 (App Router) + React 19 + Tailwind CSS 3 + TypeScript 5.

## Getting Started

```bash
npm install
cp .env.example .env.local
# Fill in .env.local with real values (see .env.example for required vars)
npm run dev
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on localhost:3000 |
| `npm run build` | Production build + TypeScript check |
| `npm run lint` | ESLint check |
| `npm run check-config` | Verify no hardcoded domain strings outside lib/config.ts |

## Required Environment Variables

See `.env.example` for the full list. Required: `RESEND_API_KEY`, `OTP_SECRET`. Optional for local dev (KV falls back to in-memory): `KV_REST_API_URL`, `KV_REST_API_TOKEN`.

## Stack

- **Framework**: Next.js 16, App Router, React Server Components
- **Styling**: Tailwind CSS 3, Space Grotesk / Inter / JetBrains Mono
- **Email**: Resend API with HMAC-signed OTP verification
- **Rate limiting**: Vercel KV (in-memory fallback for local dev)
- **Analytics**: GA4 (consent-gated) + Vercel Analytics (cookieless)
- **Security**: Per-request CSP nonce via middleware, HSTS, X-Frame-Options: DENY
