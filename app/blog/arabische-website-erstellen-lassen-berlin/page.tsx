import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const url = `${SITE_URL}/blog/arabische-website-erstellen-lassen-berlin`;

export const metadata: Metadata = {
  title: "Arabische Website Berlin: AR+DE, RTL & DSGVO | SysNova",
  description:
    "Arabische Website Berlin — zweisprachig (AR+DE), RTL-Layout, arabische SEO, DSGVO-konform. SysNova spricht Arabisch als Muttersprache. Landing Page ab 500 €.",
  keywords: [
    "arabische Website Berlin erstellen",
    "zweisprachige Website Berlin arabisch deutsch",
    "arabische Homepage Berlin",
    "arabischer Webentwickler Berlin",
    "Website auf Arabisch Berlin",
    "RTL Website Berlin",
    "arabische SEO Berlin",
    "mehrsprachige Website Berlin arabisch",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Arabische Website erstellen lassen Berlin: zweisprachig, DSGVO-konform",
    description:
      "Arabische Website für Berliner Unternehmen — echtes Arabisch, RTL-Layout, lokale SEO. SysNova spricht Arabisch als Muttersprache. Ab 500 €.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("arabische-website-erstellen-lassen-berlin"), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arabische Website erstellen lassen Berlin",
    description:
      "Zweisprachige arabisch-deutsche Website für Berliner KMU. RTL-Layout, echtes Arabisch, DSGVO. Ab 500 €.",
    images: [ogImageUrl("arabische-website-erstellen-lassen-berlin")],
  },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline:
        "Arabische Website erstellen lassen Berlin: zweisprachig, DSGVO-konform, schnell",
      description:
        "Arabische Website für Berliner Unternehmen — zweisprachig (Arabisch + Deutsch), RTL-Layout, arabische SEO, DSGVO-konform. SysNova spricht Arabisch als Muttersprache.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("arabische-website-erstellen-lassen-berlin"),
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: {
        "@type": "Person",
        name: AUTHOR_NAME,
        jobTitle: AUTHOR_JOB_TITLE,
        worksFor: { "@type": "Organization", name: "SysNova", url: SITE_URL },
      },
      publisher: {
        "@type": "Organization",
        name: "SysNova",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-full.png` },
      },
      datePublished: "2026-05-06",
      dateModified: "2026-05-06",
      url,
      inLanguage: "de",
      keywords:
        "arabische Website Berlin, zweisprachige Website arabisch deutsch, arabische SEO Berlin, RTL Website",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Arabische Website erstellen lassen Berlin",
          item: url,
        },
      ],
    },
  ],
};

export default function ArabischeWebsiteBerlin() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
