import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleContent from "./ArticleContent";
import { SITE_URL, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import { ogImageUrl } from "@/lib/blogsMeta";

export const metadata: Metadata = {
  title: "n8n Automatisierung für KMU: Guide + Kosten 2026 | SysNova",
  description: "n8n Tutorial für kleine Unternehmen: 5 praktische Automatisierungen, Kostenvergleich mit Zapier/Make, Schritt-für-Schritt Anleitung. Setup ab 390 €.",
  keywords: ["n8n Automatisierung", "n8n Tutorial Deutsch", "KI Automatisierung kleine Unternehmen", "n8n vs Zapier", "Workflow Automatisierung Berlin"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "n8n Automatisierung für KMU: Komplett-Guide 2026",
    description: "5 praxisnahe Automatisierungen, Kostenvergleich mit Zapier und Make. Setup ab 390 €.",
    url: `${SITE_URL}/blog/n8n-automatisierung-kleine-unternehmen`,
    siteName: "SysNova",
    locale: "de_DE",
    type: "article",
    images: [{ url: ogImageUrl("n8n-automatisierung-kleine-unternehmen"), width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [ogImageUrl("n8n-automatisierung-kleine-unternehmen")] },
  alternates: { canonical: `${SITE_URL}/blog/n8n-automatisierung-kleine-unternehmen` },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "n8n Automatisierung für kleine Unternehmen: Komplett-Guide 2026",
      description: "n8n Tutorial für KMU: 5 praktische Automatisierungen, Kostenvergleich mit Zapier/Make.",
      image: {
        "@type": "ImageObject",
        url: ogImageUrl("n8n-automatisierung-kleine-unternehmen"),
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/n8n-automatisierung-kleine-unternehmen` },
      author: { "@type": "Person", name: AUTHOR_NAME, jobTitle: AUTHOR_JOB_TITLE, worksFor: { "@type": "Organization", name: "SysNova", url: SITE_URL } },
      publisher: { "@type": "Organization", name: "SysNova", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-full.png` } },
      datePublished: "2026-04-23",
      dateModified: "2026-05-05",
      url: `${SITE_URL}/blog/n8n-automatisierung-kleine-unternehmen`,
      inLanguage: "de",
      keywords: "n8n Automatisierung, n8n Tutorial Deutsch, KI Automatisierung KMU",
    },
    {
      "@type": "HowTo",
      name: "Erste n8n Automatisierung einrichten",
      description: "So richten Sie Ihren ersten automatischen Workflow mit n8n ein.",
      step: [
        { "@type": "HowToStep", position: 1, name: "n8n installieren", text: "n8n via Docker starten: docker run -p 5678:5678 n8nio/n8n" },
        { "@type": "HowToStep", position: 2, name: "Trigger wählen", text: "Wählen Sie einen Auslöser — z.B. 'Neue Zeile in Google Sheets' oder 'Neues E-Mail'." },
        { "@type": "HowToStep", position: 3, name: "Aktion hinzufügen", text: "Fügen Sie eine Aktion hinzu, z.B. 'Sende E-Mail via Gmail'." },
        { "@type": "HowToStep", position: 4, name: "Testen und aktivieren", text: "Klicken Sie auf 'Test Workflow' und aktivieren Sie den Workflow." },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "n8n Automatisierung für kleine Unternehmen: Komplett-Guide 2026", item: `${SITE_URL}/blog/n8n-automatisierung-kleine-unternehmen` },
      ],
    },
  ],
};

export default function Article3Page() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <ArticleContent />
    </>
  );
}
