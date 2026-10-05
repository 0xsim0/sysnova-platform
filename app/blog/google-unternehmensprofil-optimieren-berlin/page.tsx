import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const url = `${SITE_URL}/blog/google-unternehmensprofil-optimieren-berlin`;

export const metadata: Metadata = {
  title: "Google Unternehmensprofil Berlin optimieren | SysNova",
  description:
    "Google Unternehmensprofil in 8 Schritten optimieren — Local Pack, mehr Bewertungen, mehr Anrufe. Für Berliner KMU. Einmal-Optimierung bei SysNova ab 150 €.",
  keywords: [
    "Google Unternehmensprofil optimieren Berlin",
    "Google Maps Ranking verbessern Berlin",
    "lokale SEO Berlin kleine Unternehmen",
    "Google Bewertungen sammeln",
    "Google Business Profile optimieren",
    "Google Local Pack Berlin",
    "lokale Suchmaschinenoptimierung KMU",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Google Unternehmensprofil optimieren Berlin — Lokale SEO für kleine Unternehmen",
    description:
      "In 8 Schritten im Google Local Pack erscheinen: Profi-Tipps, Fehler-Liste und Kosten für Berliner KMU. Einmal-Optimierung ab 150 €.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("google-unternehmensprofil-optimieren-berlin"), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Unternehmensprofil optimieren Berlin",
    description:
      "In 8 Schritten im Google Local Pack erscheinen: Profi-Tipps, Fehler-Liste und Kosten für Berliner KMU.",
    images: [ogImageUrl("google-unternehmensprofil-optimieren-berlin")],
  },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline:
        "Google Unternehmensprofil optimieren: Lokale SEO für kleine Unternehmen in Berlin",
      description:
        "In 8 Schritten das Google Unternehmensprofil optimieren und im Local Pack erscheinen. Fehler vermeiden, mehr Bewertungen sammeln, mehr Anrufe — für Berliner KMU.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("google-unternehmensprofil-optimieren-berlin"),
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
        "Google Unternehmensprofil optimieren Berlin, Google Maps Ranking, lokale SEO Berlin, Google Bewertungen",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Google Unternehmensprofil optimieren Berlin",
          item: url,
        },
      ],
    },
  ],
};

export default function GoogleUnternehmensprofil() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
