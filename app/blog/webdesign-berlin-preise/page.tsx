import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const url = `${SITE_URL}/blog/webdesign-berlin-preise`;

export const metadata: Metadata = {
  title: "Webdesign Berlin Preise 2026: Kosten im Überblick | SysNova",
  description:
    "Webdesign-Preise Berlin 2026 ehrlich erklärt: Landing Page ab 500 €, Unternehmenswebsite ab 1.000 €, Onlineshop ab 1.500 €. Freelancer vs. Agentur vs. kleines IT-Team — ein Vergleich.",
  keywords: [
    "Webdesign Berlin Preise",
    "Website erstellen lassen Kosten Berlin",
    "Webdesign Kosten Berlin",
    "Homepage erstellen lassen Berlin Preis",
    "Webdesign Freelancer Berlin Preise",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Webdesign Berlin Preise 2026",
    description:
      "Was kostet eine Website in Berlin wirklich? Ehrlicher Preisvergleich: Freelancer, Agentur und kleines IT-Team.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("webdesign-berlin-preise"), width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [ogImageUrl("webdesign-berlin-preise")] },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "Webdesign Berlin Preise 2026: Freelancer, Agentur oder kleines IT-Team — was kostet was?",
      description:
        "Webdesign-Preise Berlin 2026: Landing Page ab 500 €, Unternehmenswebsite ab 1.000 €, Onlineshop ab 1.500 €. Vergleich von Freelancer, Agentur und kleinem IT-Team.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("webdesign-berlin-preise"),
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
      datePublished: "2026-05-19",
      dateModified: "2026-05-19",
      url,
      inLanguage: "de",
      keywords:
        "Webdesign Berlin Preise, Website Kosten Berlin, Webdesign Freelancer Berlin, Agentur Website Berlin",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "Webdesign Berlin Preise 2026", item: url },
      ],
    },
  ],
};

export default function WebdesignBerlinPreisePage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
