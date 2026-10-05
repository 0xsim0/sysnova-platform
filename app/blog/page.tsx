import { Metadata } from "next";
import BlogContent from "./BlogContent";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/config";
import { BLOG_POSTS } from "@/lib/blogsMeta";

export const metadata: Metadata = {
  title: "IT-Blog Berlin | SysNova — Tipps für KMU",
  description: "IT-Wissen für kleine Unternehmen in Berlin: Website-Kosten, IT-Support-Vergleich, Automatisierung mit n8n. Praxistipps von SysNova.",
  keywords: ["IT Blog Berlin", "Website Kosten Berlin", "IT Support Berlin", "n8n Automatisierung", "KI für KMU"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "IT-Blog | SysNova Berlin",
    description: "IT-Wissen für Berliner KMU: Website-Kosten, IT-Support-Vergleiche und Automatisierung mit n8n. Praxistipps von SysNova.",
    url: `${SITE_URL}/blog`,
    siteName: "SysNova",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT-Blog | SysNova Berlin",
    description: "IT-Wissen für Berliner KMU: Website-Kosten, IT-Support-Vergleiche und Automatisierung mit n8n.",
  },
  alternates: { canonical: `${SITE_URL}/blog` },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SysNova IT-Blog",
  description: "IT-Tipps und Praxisratgeber für kleine Unternehmen in Berlin",
  url: `${SITE_URL}/blog`,
  numberOfItems: BLOG_POSTS.length,
  itemListElement: BLOG_POSTS.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE_URL}/blog/${post.slug}`,
    name: post.title,
  })),
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <BlogContent />
    </>
  );
}
