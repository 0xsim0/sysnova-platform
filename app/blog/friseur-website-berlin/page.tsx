import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const url = `${SITE_URL}/blog/friseur-website-berlin`;

export const metadata: Metadata = {
  title: "Friseur Website erstellen lassen Berlin | SysNova",
  description:
    "Friseur-Website Berlin ab 500 €: Online-Terminbuchung, Google Maps, lokale SEO, Preise. SysNova baut schnelle Websites für Friseursalons in Berlin.",
  keywords: [
    "Friseur Website Berlin",
    "Friseur Website erstellen lassen",
    "Webdesign Friseur Berlin",
    "Friseur Online Terminbuchung",
    "Friseursalon Website Kosten",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Friseur Website erstellen lassen Berlin",
    description:
      "Friseur-Website ab 500 €: Terminbuchung, Google Maps und lokale SEO für Berliner Friseursalons.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("friseur-website-berlin"), width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [ogImageUrl("friseur-website-berlin")] },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "Friseur Website erstellen lassen Berlin: Kosten, Terminbuchung und was wirklich zählt",
      description:
        "Friseur-Website für Berliner Friseursalons: Terminbuchung, lokale SEO, Google Maps und Kosten — alles was ein Salon braucht, um online Kunden zu gewinnen.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("friseur-website-berlin"),
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
        "Friseur Website Berlin, Webdesign Friseur, Online Terminbuchung Friseur, Friseursalon Website Kosten",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "Friseur Website Berlin", item: url },
      ],
    },
  ],
};

export default function FriseurWebsiteBerlinPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
