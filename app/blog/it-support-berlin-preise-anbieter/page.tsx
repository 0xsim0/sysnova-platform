import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

export const metadata: Metadata = {
  title: "IT-Support Berlin: Freelancer, Agentur oder MSP? | SysNova",
  description: "Welcher IT-Support-Anbieter passt zu Ihrem Unternehmen? Vergleich von Freelancer, Kleinagentur, Großagentur und MSP — mit Preisen, Stärken und Schwächen.",
  keywords: ["IT Support Berlin Anbieter Vergleich", "IT Dienstleister Berlin Vergleich", "Freelancer vs Agentur IT", "MSP Berlin", "IT Support Anbieter wählen"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "IT-Support Berlin: Anbieter-Vergleich — Freelancer, Agentur oder MSP?",
    description: "Welcher IT-Support-Anbieter passt zu Ihrem Unternehmen? Vergleich von Freelancer, Agentur und MSP — mit Preisen, Stärken und Schwächen.",
    url: `${SITE_URL}/blog/it-support-berlin-preise-anbieter`,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("it-support-berlin-preise-anbieter"), width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [ogImageUrl("it-support-berlin-preise-anbieter")] },
  alternates: { canonical: `${SITE_URL}/blog/it-support-berlin-preise-anbieter` },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "IT-Support Berlin: Anbieter-Vergleich — Freelancer, Agentur oder MSP?",
      description: "Welcher IT-Support-Anbieter passt zu Ihrem Berliner Unternehmen? Vergleich der Anbietertypen mit Stärken, Schwächen und realistischen Preisen.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("it-support-berlin-preise-anbieter"),
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/it-support-berlin-preise-anbieter` },
      author: { "@type": "Person", name: AUTHOR_NAME, jobTitle: AUTHOR_JOB_TITLE, worksFor: { "@type": "Organization", name: "SysNova", url: SITE_URL } },
      publisher: { "@type": "Organization", name: "SysNova", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-full.png` } },
      datePublished: "2026-04-23",
      dateModified: "2026-05-05",
      url: `${SITE_URL}/blog/it-support-berlin-preise-anbieter`,
      inLanguage: "de",
      keywords: "IT Support Berlin Anbieter Vergleich, Freelancer vs Agentur IT, MSP Berlin, IT Dienstleister wählen",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "IT-Support Berlin: Anbieter-Vergleich", item: `${SITE_URL}/blog/it-support-berlin-preise-anbieter` },
      ],
    },
  ],
};

export default function Article2Page() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
