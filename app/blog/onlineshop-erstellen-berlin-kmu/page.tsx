import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const url = `${SITE_URL}/blog/onlineshop-erstellen-berlin-kmu`;

export const metadata: Metadata = {
  title: "Onlineshop erstellen lassen Berlin KMU | SysNova",
  description:
    "Onlineshop Berlin KMU ab 1.500 €: Shopify, WooCommerce oder Next.js? Kosten, Plattformen, DSGVO und lokale SEO — der Komplettleitfaden 2026 für Berliner Unternehmen.",
  keywords: [
    "Onlineshop erstellen lassen Berlin",
    "Onlineshop Berlin KMU",
    "E-Commerce Berlin",
    "Shopify Berlin",
    "WooCommerce Berlin",
    "Onlineshop Kosten Berlin",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Onlineshop erstellen lassen Berlin KMU",
    description:
      "Onlineshop Berlin ab 1.500 €: Welche Plattform passt zu Ihrem KMU? Kosten, DSGVO und Tipps für Berliner Händler 2026.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("onlineshop-erstellen-berlin-kmu"), width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [ogImageUrl("onlineshop-erstellen-berlin-kmu")] },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "Onlineshop erstellen lassen Berlin: Kosten, Plattformen und was KMU wissen müssen",
      description:
        "Shopify, WooCommerce oder Next.js? Onlineshop für Berliner KMU ab 1.500 €. Kosten, Plattformen, DSGVO und lokale SEO — der komplette Leitfaden für 2026.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("onlineshop-erstellen-berlin-kmu"),
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
        "Onlineshop erstellen Berlin, E-Commerce Berlin KMU, Shopify Berlin, WooCommerce Berlin, Onlineshop Kosten",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "Onlineshop erstellen lassen Berlin KMU", item: url },
      ],
    },
  ],
};

export default function OnlineshopBerlinPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
