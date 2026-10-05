import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const url = `${SITE_URL}/blog/warum-website-keine-anfragen-bringt`;

export const metadata: Metadata = {
  title: "Keine Website-Anfragen? 12 Fehler & Lösungen | SysNova",
  description:
    "Ihre Website bekommt Besucher, aber keine Anfragen? Diese 12 Fehler blockieren kleine Unternehmen in Berlin. Mit Lösungen, Kosten und kostenloser Erstberatung.",
  keywords: [
    "Website bringt keine Anfragen",
    "Website optimieren mehr Kunden",
    "Conversion Website KMU",
    "lokale SEO Fehler kleine Unternehmen",
    "Website keine Kunden Berlin",
    "Website Anfragen steigern",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Warum Ihre Website keine Anfragen bringt: 12 Fehler kleiner Unternehmen",
    description:
      "12 konkrete Fehler, die verhindern, dass Ihre Website Anfragen bringt — mit Lösungen und Kosten.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("warum-website-keine-anfragen-bringt"), width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [ogImageUrl("warum-website-keine-anfragen-bringt")] },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline:
        "Warum Ihre Website keine Anfragen bringt: 12 Fehler kleiner Unternehmen",
      description:
        "Diese 12 Fehler verhindern, dass kleine Unternehmen über ihre Website Anfragen bekommen — mit konkreten Lösungen und Kostenangaben.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("warum-website-keine-anfragen-bringt"),
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
      datePublished: "2026-05-05",
      dateModified: "2026-05-05",
      url,
      inLanguage: "de",
      keywords:
        "Website bringt keine Anfragen, Website optimieren KMU, Conversion Website, lokale SEO Fehler, Website keine Kunden Berlin",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Warum Ihre Website keine Anfragen bringt",
          item: url,
        },
      ],
    },
  ],
};

export default function WarumWebsiteKeineAnfragenPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
