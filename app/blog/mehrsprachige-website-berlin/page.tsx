import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const url = `${SITE_URL}/blog/mehrsprachige-website-berlin`;

export const metadata: Metadata = {
  title: "Mehrsprachige Website Berlin: DE, EN & AR | SysNova",
  description:
    "Mehrsprachige Website Berlin — zweisprachig (DE+EN oder DE+AR) ab 1.200 €, dreisprachig ab 1.800 €. SysNova spricht alle 3 Sprachen muttersprachlich.",
  keywords: [
    "mehrsprachige Website Berlin",
    "zweisprachige Website Berlin deutsch englisch",
    "Website Arabisch Deutsch Berlin",
    "Website Englisch Berlin erstellen",
    "multilingual website Berlin",
    "Website drei Sprachen Berlin",
    "arabisch englisch deutsch Website Berlin",
    "mehrsprachige Homepage Berlin",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Mehrsprachige Website Berlin: Deutsch, Englisch & Arabisch aus einer Hand",
    description:
      "Zweisprachig ab 1.200 €, dreisprachig ab 1.800 €. SysNova baut mehrsprachige Websites auf Muttersprachler-Niveau — ohne Übersetzungsbüro.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("mehrsprachige-website-berlin"), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehrsprachige Website Berlin: DE + EN + AR",
    description:
      "Zweisprachig ab 1.200 €, dreisprachig ab 1.800 €. Alle 3 Sprachen aus einer Hand.",
    images: [ogImageUrl("mehrsprachige-website-berlin")],
  },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline:
        "Mehrsprachige Website Berlin: Deutsch, Englisch und Arabisch aus einer Hand",
      description:
        "Mehrsprachige Website für Berliner Unternehmen — zweisprachig (DE+EN oder DE+AR) ab 1.200 €, dreisprachig (DE+EN+AR) ab 1.800 €. SysNova spricht alle 3 Sprachen als Muttersprachler.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("mehrsprachige-website-berlin"),
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
        "mehrsprachige Website Berlin, zweisprachige Website deutsch englisch, Website Arabisch Deutsch Berlin",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mehrsprachige Website Berlin",
          item: url,
        },
      ],
    },
  ],
};

export default function MehrsprachigeWebsiteBerlin() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
