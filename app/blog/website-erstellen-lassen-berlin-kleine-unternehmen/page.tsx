import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const url = `${SITE_URL}/blog/website-erstellen-lassen-berlin-kleine-unternehmen`;

export const metadata: Metadata = {
  title: "Website erstellen lassen Berlin für KMU | SysNova",
  description:
    "Website erstellen lassen in Berlin: Kosten, Ablauf, SEO und Checkliste für kleine Unternehmen, Selbständige und lokale Dienstleister. Beratung durch SysNova.",
  keywords: [
    "Website erstellen lassen Berlin kleine Unternehmen",
    "Webdesign Berlin kleine Unternehmen",
    "Homepage erstellen lassen Berlin",
    "Website für Selbständige Berlin",
    "Webentwicklung Berlin KMU",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Website erstellen lassen Berlin für kleine Unternehmen",
    description:
      "Kosten, Ablauf, SEO und Checkliste für kleine Unternehmen in Berlin. So wird aus einer Website ein Anfragekanal.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("website-erstellen-lassen-berlin-kleine-unternehmen"), width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [ogImageUrl("website-erstellen-lassen-berlin-kleine-unternehmen")] },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "Website erstellen lassen Berlin für kleine Unternehmen",
      description:
        "Praxisguide für kleine Unternehmen in Berlin: Kosten, Seitenstruktur, SEO, Technik, DSGVO und typische Fehler beim Website-Projekt.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("website-erstellen-lassen-berlin-kleine-unternehmen"),
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
      datePublished: "2026-04-27",
      dateModified: "2026-05-05",
      url,
      inLanguage: "de",
      keywords:
        "Website erstellen lassen Berlin, Webdesign Berlin kleine Unternehmen, Website Kosten Berlin, Webentwicklung KMU",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Website erstellen lassen Berlin für kleine Unternehmen",
          item: url,
        },
      ],
    },
  ],
};

export default function WebsiteBerlinSmallBusinessPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
