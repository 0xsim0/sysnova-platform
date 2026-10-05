import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

const slug = "cloud-backup-kleine-unternehmen";
const url = `${SITE_URL}/blog/${slug}`;

export const metadata: Metadata = {
  title: "Cloud-Backup kleine Unternehmen | SysNova",
  description:
    "Cloud-Backup für kleine Unternehmen ab 15–50 €/Monat: Vergleich der besten Backup-Lösungen für KMU. DSGVO-konform, automatisch und sicher. SysNova berät in Berlin.",
  keywords: [
    "Cloud Backup kleine Unternehmen",
    "Datensicherung Firma",
    "Backup Lösung KMU",
    "Cloud Backup Kosten",
    "Datensicherung Berlin",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Cloud-Backup für kleine Unternehmen: sicher und bezahlbar",
    description:
      "Ab 15–50 €/Monat: Vergleich der besten Backup-Lösungen für KMU. DSGVO-konform und automatisch.",
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
      headline:
        "Cloud-Backup für kleine Unternehmen: Welche Lösung ist sicher und bezahlbar?",
      description:
        "Vergleich der besten Cloud-Backup-Lösungen für KMU: Kosten, DSGVO, Wiederherstellung. Ab 15–50 €/Monat — automatisch und sicher.",
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
        "Cloud Backup kleine Unternehmen, Datensicherung Firma, Backup Lösung KMU, Cloud Backup Kosten",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cloud-Backup kleine Unternehmen",
          item: url,
        },
      ],
    },
  ],
};

export default function CloudBackupKleineUnternehmenPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
