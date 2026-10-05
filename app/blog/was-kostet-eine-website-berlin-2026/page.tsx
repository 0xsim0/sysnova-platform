import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const url = `${SITE_URL}/blog/was-kostet-eine-website-berlin-2026`;

export const metadata: Metadata = {
  title: "Was kostet eine Website Berlin 2026? | SysNova",
  description: "Website-Kosten Berlin 2026: Landing Page ab 500 €, Unternehmenswebsite ab 1.000 €, Webshop ab 1.500 €. Stundensatz SysNova: 30 €/h. Kostenlose Erstberatung.",
  keywords: ["Was kostet eine Website Berlin", "Website erstellen Berlin Preise", "Webentwicklung Berlin Kosten", "Webdesign Preise Berlin 2026"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Was kostet eine Website in Berlin 2026?",
    description: "Landing Page ab 500 €, Unternehmenswebsite ab 1.000 €. Stundensatz SysNova Berlin: 30 €/h. Tipps für KMU.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("was-kostet-eine-website-berlin-2026"), width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [ogImageUrl("was-kostet-eine-website-berlin-2026")] },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "Was kostet eine Website in Berlin 2026?",
      description: "Website-Kosten Berlin 2026: Landing Page ab 500 €, Unternehmenswebsite ab 1.000 €, Webshop ab 1.500 €. Stundensatz 30 €/h.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("was-kostet-eine-website-berlin-2026"),
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Person", name: AUTHOR_NAME, jobTitle: AUTHOR_JOB_TITLE, worksFor: { "@type": "Organization", name: "SysNova", url: SITE_URL } },
      publisher: { "@type": "Organization", name: "SysNova", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-full.png` } },
      datePublished: "2026-04-23",
      dateModified: "2026-05-05",
      url,
      inLanguage: "de",
      keywords: "Website Kosten Berlin, Webentwicklung Berlin, Landing Page Preis",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "Was kostet eine Website in Berlin 2026?", item: url },
      ],
    },
  ],
};

export default function Article1Page() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
