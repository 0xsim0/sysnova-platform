import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const url = `${SITE_URL}/blog/it-support-berlin-kleine-unternehmen`;

export const metadata: Metadata = {
  title: "IT-Support Berlin für kleine Unternehmen | SysNova",
  description:
    "Welche IT-Leistungen brauchen kleine Unternehmen in Berlin wirklich? Von WLAN über Microsoft 365 bis Backup — Praxisleitfaden mit Branchen-Beispielen. SysNova ab 30 €/h.",
  keywords: [
    "IT Support kleine Unternehmen Berlin",
    "IT Leistungen KMU Berlin",
    "IT Hilfe Firma Berlin",
    "PC Support Berlin Unternehmen",
    "WLAN Support Berlin Büro",
    "Microsoft 365 Hilfe Berlin",
    "Backup KMU Berlin",
    "IT für Gastronomie Berlin",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "IT-Support für kleine Unternehmen Berlin: Was Sie wirklich brauchen",
    description:
      "Welche IT-Leistungen brauchen Berliner KMU? Praxisleitfaden mit Branchen-Beispielen, häufigen Problemen und Lösungen.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("it-support-berlin-kleine-unternehmen"), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT-Support für kleine Unternehmen Berlin",
    description:
      "Was brauchen Berliner KMU wirklich? Leitfaden mit Branchen-Beispielen und Lösungen.",
    images: [ogImageUrl("it-support-berlin-kleine-unternehmen")],
  },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline:
        "IT-Support für kleine Unternehmen Berlin: Was Sie wirklich brauchen",
      description:
        "Welche IT-Leistungen brauchen Berliner KMU wirklich? Branchen-Beispiele, häufige Probleme und konkrete Lösungen — von WLAN bis Backup.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("it-support-berlin-kleine-unternehmen"),
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
        "IT Support kleine Unternehmen Berlin, IT Leistungen KMU, PC Support Berlin, IT für Gastronomie Berlin",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "IT-Support für kleine Unternehmen Berlin",
          item: url,
        },
      ],
    },
  ],
};

export default function ITSupportBerlinKleineUnternehmen() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
