import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const url = `${SITE_URL}/blog/handwerker-website-erstellen-lassen-berlin`;

export const metadata: Metadata = {
  title: "Handwerker Website erstellen lassen Berlin | SysNova",
  description:
    "Handwerker-Website in Berlin erstellen lassen: lokale SEO, Leistungsseiten, Anfrageformulare, Kosten und Checkliste für Elektriker, Sanitär, Maler und Bau.",
  keywords: [
    "Handwerker Website erstellen lassen Berlin",
    "Webdesign Handwerker Berlin",
    "Elektriker Website Berlin",
    "Sanitär Website Berlin",
    "Maler Website erstellen lassen",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Handwerker Website erstellen lassen Berlin",
    description:
      "Lokale SEO, klare Leistungsseiten und Anfragewege für Handwerksbetriebe in Berlin.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("handwerker-website-erstellen-lassen-berlin"), width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [ogImageUrl("handwerker-website-erstellen-lassen-berlin")] },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "Handwerker Website erstellen lassen Berlin",
      description:
        "Praxisguide für Handwerksbetriebe in Berlin: lokale SEO, Leistungsseiten, Vertrauenselemente, Anfrageformulare und Kosten.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("handwerker-website-erstellen-lassen-berlin"),
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
        "Handwerker Website Berlin, Webdesign Handwerker, lokale SEO Handwerker, Elektriker Website, Sanitär Website",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "Handwerker Website erstellen lassen Berlin", item: url },
      ],
    },
  ],
};

export default function HandwerkerWebsiteBerlinPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
