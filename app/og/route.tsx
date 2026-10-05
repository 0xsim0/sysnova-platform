import { ImageResponse } from "next/og";
import { BLOG_POSTS } from "@/lib/blogsMeta";

export const runtime = "nodejs"; // ImageResponse works on node; explicit for clarity
export const contentType = "image/png";

// NOTE: satori (next/og renderer) only supports flexbox — every container below sets
// `display: "flex"`. Do not add a plain <p>/<span> wrapper without it, or layout breaks.

/**
 * Dynamic per-article Open Graph / Twitter image: `/og?slug=<post-slug>`.
 * Renders the article title + category on the SysNova brand background so every
 * blog share shows a unique, title-specific preview (not the generic site image).
 * Falls back to a generic SysNova card for unknown slugs.
 * Lives at /og (not /api/, which robots.txt disallows) so social/search can fetch it.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") ?? "";
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  const title = post?.title ?? "IT-Services & Webentwicklung in Berlin";
  const category = post?.category ?? "SysNova Blog";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#111211",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "#A26720",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#111211", fontSize: "30px", fontWeight: 800 }}>S</span>
          </div>
          <span style={{ color: "#F9D977", fontSize: "40px", fontWeight: 800 }}>SysNova</span>
        </div>

        {/* Title block */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              background: "#1E1A10",
              borderRadius: "24px",
              padding: "8px 22px",
              color: "#F9D977",
              fontSize: "22px",
            }}
          >
            {category}
          </div>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: "60px",
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
        </div>

        {/* Footer row */}
        <div style={{ display: "flex", color: "#9CA3AF", fontSize: "24px" }}>
          Berlin · sysnova-it.de · DE · EN · AR
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
      },
    }
  );
}
