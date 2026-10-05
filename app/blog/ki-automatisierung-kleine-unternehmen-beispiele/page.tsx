import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const url = `${SITE_URL}/blog/ki-automatisierung-kleine-unternehmen-beispiele`;

export const metadata: Metadata = {
  title: "KI-Automatisierung für KMU: 10 Beispiele 2026 | SysNova",
  description:
    "10 KI-Automatisierungen, die für Berliner KMU sofort funktionieren: E-Mail-Antworten, CRM, Rechnungen, Terminbuchung, Bewertungen. n8n, Make, Zapier. Ab 150 €.",
  keywords: [
    "KI Automatisierung kleine Unternehmen",
    "KI Beratung KMU Berlin",
    "Workflow Automatisierung KMU",
    "KI Beispiele kleines Unternehmen",
    "n8n KMU Berlin",
    "Make Automatisierung Berlin",
    "KI Prozesse automatisieren KMU",
    "ChatGPT Automatisierung Unternehmen",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "KI-Automatisierung für kleine Unternehmen: 10 konkrete Beispiele 2026",
    description:
      "10 praxiserprobte KI-Workflows für KMU: E-Mail, CRM, Rechnungen, Termine, Bewertungen. n8n und Make. SysNova baut Workflows ab 150 €.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("ki-automatisierung-kleine-unternehmen-beispiele"), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Automatisierung für kleine Unternehmen: 10 Beispiele",
    description:
      "10 KI-Workflows, die für KMU sofort Stunden sparen. n8n, Make, Zapier. Ab 150 €.",
    images: [ogImageUrl("ki-automatisierung-kleine-unternehmen-beispiele")],
  },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline:
        "KI-Automatisierung für kleine Unternehmen: 10 konkrete Beispiele 2026",
      description:
        "10 KI-Automatisierungen, die für kleine Unternehmen sofort funktionieren: E-Mail-Antworten, CRM, Rechnungen, Terminbuchung, Bewertungsanfragen, Reporting. Mit n8n, Make und Zapier.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("ki-automatisierung-kleine-unternehmen-beispiele"),
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
        "KI Automatisierung kleine Unternehmen, Workflow Automatisierung KMU, n8n KMU, Make Automatisierung",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "KI-Automatisierung kleine Unternehmen Beispiele",
          item: url,
        },
      ],
    },
  ],
};

export default function KIAutomatisierungKleineUnternehmen() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
