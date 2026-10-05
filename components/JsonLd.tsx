import { headers } from "next/headers";

interface JsonLdProps {
  data: unknown;
  nonce?: string;
}

// Accepts an explicit nonce prop (preferred, e.g. from layout.tsx).
// Falls back to reading x-nonce from request headers so page-level
// Server Components can use <JsonLd> without threading the nonce down.
export default async function JsonLd({ data, nonce }: JsonLdProps) {
  let resolvedNonce = nonce;
  if (!resolvedNonce) {
    try {
      resolvedNonce = (await headers()).get("x-nonce") ?? undefined;
    } catch {
      // headers() throws outside request scope (static generation, tests).
      // Nonce unavailable in those contexts — script renders without one, which is safe
      // because static pages are not covered by the per-request nonce CSP flow.
    }
  }

  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    // JSON-LD: static data only — never inject user-controlled values here
    <script
      nonce={resolvedNonce}
      suppressHydrationWarning
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
