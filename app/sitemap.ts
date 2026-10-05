import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import { BLOG_POSTS } from "@/lib/blogsMeta";

const STATIC_ROUTES: Array<{ path: string; lastModified: string }> = [
  { path: "",                                lastModified: "2026-05-28" },
  { path: "/about",                          lastModified: "2026-05-18" },
  { path: "/portfolio",                      lastModified: "2026-04-27" },
  { path: "/leistungen",                     lastModified: "2026-05-28" },
  { path: "/leistungen/webentwicklung",      lastModified: "2026-05-28" },
  { path: "/leistungen/ki-automatisierung",  lastModified: "2026-05-28" },
  { path: "/leistungen/cloud-architektur",   lastModified: "2026-05-28" },
  { path: "/leistungen/it-support",          lastModified: "2026-05-28" },
  { path: "/leistungen/netzwerk-pc-support", lastModified: "2026-05-28" },
  { path: "/leistungen/cctv-uberwachung",    lastModified: "2026-05-28" },
  { path: "/blog",                           lastModified: "2026-06-08" },
  { path: "/webdesign-agentur-berlin",       lastModified: "2026-06-08" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ path, lastModified }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
    })
  );

  const blogUrls: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...staticUrls, ...blogUrls];
}
