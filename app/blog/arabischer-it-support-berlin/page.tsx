import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const url = `${SITE_URL}/blog/arabischer-it-support-berlin`;

export const metadata: Metadata = {
  title: "IT-Support Berlin auf Arabisch für arabische KMU | SysNova",
  description:
    "IT-Support Berlin auf Arabisch ab 30 €/h. PC, WLAN, Microsoft 365, Kassensysteme — klar auf Arabisch erklärt. SysNova: kostenlose Erstberatung.",
  keywords: [
    "Arabischer IT Support Berlin",
    "IT Hilfe Arabisch Berlin",
    "arabischsprachiger IT Dienstleister Berlin",
    "IT Betreuung Arabisch",
    "IT Support Berlin arabisch deutsch",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "IT-Support Berlin auf Arabisch — IT-Hilfe für arabischsprachige Unternehmen",
    description:
      "IT-Support auf Arabisch in Berlin: 30–50 €/h, vor Ort + remote, kein Wettbewerb. SysNova — كلامنا بالعربي.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("arabischer-it-support-berlin"), width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [ogImageUrl("arabischer-it-support-berlin")] },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "IT-Support Berlin auf Arabisch — IT-Hilfe für arabischsprachige Unternehmen",
      description:
        "SysNova bietet IT-Support in Berlin auf Arabisch, Deutsch und Englisch. Stundensatz 30–50 €/h. Vor Ort und remote in ganz Berlin.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("arabischer-it-support-berlin"),
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
      datePublished: "2026-05-03",
      dateModified: "2026-05-03",
      url,
      inLanguage: "de",
      keywords:
        "Arabischer IT Support Berlin, IT Hilfe Arabisch Berlin, arabischsprachiger IT-Dienstleister, IT Betreuung Arabisch",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "IT-Support Berlin auf Arabisch",
          item: url,
        },
      ],
    },
  ],
};

export default function ArabischerItSupportBerlinPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
