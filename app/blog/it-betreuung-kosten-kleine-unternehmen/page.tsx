import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const url = `${SITE_URL}/blog/it-betreuung-kosten-kleine-unternehmen`;

export const metadata: Metadata = {
  title: "IT-Betreuung Kosten 2026: Flatrate vs. Stundensatz | SysNova",
  description:
    "Welches IT-Preismodell passt zu Ihrem Unternehmen? Stundenbasis vs. Flatrate vs. MSP-Vertrag — mit Rechenbeispielen, Break-even-Analyse und konkreten Empfehlungen für KMU.",
  keywords: [
    "IT Betreuung Kosten Modelle",
    "IT Stundensatz vs Flatrate",
    "Managed IT Vertrag KMU",
    "IT Support Preismodell Berlin",
    "IT Flatrate Vergleich",
    "IT Wartung Kosten Berechnung",
    "Break-even IT Mitarbeiter extern",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "IT-Betreuung Kosten 2026: Stundensatz, Flatrate oder Vertrag?",
    description:
      "Welches IT-Preismodell passt zu Ihrem KMU? Stundenbasis vs. Flatrate vs. MSP-Vertrag — Rechenbeispiele und Break-even-Analyse.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("it-betreuung-kosten-kleine-unternehmen"), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT-Betreuung Kosten 2026: Stundensatz vs. Flatrate vs. Vertrag",
    description:
      "Welches IT-Preismodell passt zu Ihrem KMU? Mit Rechenbeispielen und Break-even.",
    images: [ogImageUrl("it-betreuung-kosten-kleine-unternehmen")],
  },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline:
        "IT-Betreuung Kosten 2026: Stundensatz, Flatrate oder Vertrag — was lohnt sich?",
      description:
        "Welches IT-Preismodell ist für KMU am wirtschaftlichsten? Stundenbasis vs. Flatrate vs. MSP-Vertrag — mit Rechenbeispielen und Break-even-Analyse.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("it-betreuung-kosten-kleine-unternehmen"),
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
        "IT Betreuung Kosten Modelle, Stundensatz vs Flatrate, Managed IT Vertrag KMU, IT Preismodell Berlin",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "IT-Betreuung Kosten — Preismodelle 2026",
          item: url,
        },
      ],
    },
  ],
};

export default function ITBetreuungKostenKleineUnternehmen() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
