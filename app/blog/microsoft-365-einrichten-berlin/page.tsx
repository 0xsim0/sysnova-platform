import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const slug = "microsoft-365-einrichten-berlin";
const url = `${SITE_URL}/blog/${slug}`;

export const metadata: Metadata = {
  title: "Microsoft 365 einrichten Berlin | SysNova",
  description:
    "Microsoft 365 für kleine Unternehmen einrichten: E-Mail, Teams und Sicherheit ab 6 €/Nutzer/Monat. SysNova richtet Microsoft 365 in Berlin ein — DSGVO-konform und schnell.",
  keywords: [
    "Microsoft 365 einrichten Berlin",
    "Outlook einrichten Firma",
    "Teams einrichten kleines Unternehmen",
    "Microsoft 365 KMU",
    "Microsoft 365 Business Berlin",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Microsoft 365 für kleine Unternehmen einrichten",
    description:
      "E-Mail, Teams und Sicherheit ab 6 €/Nutzer/Monat. SysNova richtet Microsoft 365 in Berlin ein.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl(slug), width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [ogImageUrl(slug)] },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "Microsoft 365 für kleine Unternehmen einrichten: E-Mail, Teams und Sicherheit",
      description:
        "Schritt-für-Schritt-Guide für die Microsoft 365 Einrichtung in kleinen Unternehmen: E-Mail mit eigenem Domain, Teams, Sicherheit und DSGVO ab 6 €/Nutzer/Monat.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl(slug),
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
      datePublished: "2026-06-08",
      dateModified: "2026-06-08",
      url,
      inLanguage: "de",
      keywords:
        "Microsoft 365 einrichten Berlin, Outlook einrichten Firma, Teams einrichten, Microsoft 365 KMU",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft 365 einrichten Berlin",
          item: url,
        },
      ],
    },
  ],
};

export default function Microsoft365EinrichtenBerlinPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
