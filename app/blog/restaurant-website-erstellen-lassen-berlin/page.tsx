import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const url = `${SITE_URL}/blog/restaurant-website-erstellen-lassen-berlin`;

export const metadata: Metadata = {
  title: "Restaurant Website erstellen lassen Berlin | SysNova",
  description:
    "Restaurant-Website in Berlin erstellen lassen: Speisekarte, Reservierung, Google Maps, lokale SEO, Kosten und Checkliste für Gastronomie.",
  keywords: [
    "Restaurant Website erstellen lassen Berlin",
    "Gastro Website Berlin",
    "Restaurant Webseite Kosten",
    "Speisekarte online erstellen",
    "Webdesign Gastronomie Berlin",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Restaurant Website erstellen lassen Berlin",
    description:
      "Speisekarte, Reservierung, Google Maps, lokale SEO und klare Kosten für Gastronomie-Websites in Berlin.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("restaurant-website-erstellen-lassen-berlin"), width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [ogImageUrl("restaurant-website-erstellen-lassen-berlin")] },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "Restaurant Website erstellen lassen Berlin",
      description:
        "Leitfaden für Restaurant-Websites in Berlin: digitale Speisekarte, Reservierung, lokale SEO, Google Business Profile und Kosten.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("restaurant-website-erstellen-lassen-berlin"),
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
        "Restaurant Website Berlin, Gastro Website erstellen lassen, Speisekarte online, Restaurant Reservierung Website",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "Restaurant Website erstellen lassen Berlin", item: url },
      ],
    },
  ],
};

export default function RestaurantWebsiteBerlinPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
