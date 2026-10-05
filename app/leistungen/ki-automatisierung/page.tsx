import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "KI Automatisierung Berlin | SysNova — Workflows",
  description:
    "KI-gestützte Automatisierung für KMU. Manuelle Abläufe eliminieren, Tools verbinden, Stunden sparen. SysNova — KI-Automatisierung Berlin.",
  keywords: [
    "KI Automatisierung Berlin",
    "Workflow Automatisierung",
    "ChatGPT Integration",
    "n8n Automatisierung",
    "Zapier Alternative Berlin",
    "Prozessautomatisierung Berlin",
    "AI Automation Berlin",
    "Geschäftsprozesse automatisieren",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "KI Automatisierung Berlin | SysNova",
    description:
      "KI-gestützte Automatisierungen für Ihr Unternehmen. Manuelle Abläufe eliminieren, Tools verbinden, Stunden sparen. SysNova — Berlin.",
    url: `${SITE_URL}/leistungen/ki-automatisierung`,
    siteName: "SysNova",
    locale: "de_DE",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KI Automatisierung Berlin | SysNova",
    description:
      "KI-gestützte Automatisierungen für Ihr Unternehmen. Manuelle Abläufe eliminieren, Stunden sparen.",
  },
  alternates: {
    canonical: `${SITE_URL}/leistungen/ki-automatisierung`,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "KI-Automatisierung Berlin",
  description:
    "Automatisierung von Geschäftsprozessen mit KI-Tools wie n8n, ChatGPT und Zapier. Manuelle Aufgaben eliminieren, Workflows verbinden, bis zu 80 % Aufwand einsparen.",
  provider: { "@type": "LocalBusiness", name: "SysNova", url: SITE_URL },
  areaServed: [{ "@type": "City", name: "Berlin" }, { "@type": "Country", name: "Germany" }],
  url: `${SITE_URL}/leistungen/ki-automatisierung`,
  inLanguage: "de",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_URL}/leistungen` },
    { "@type": "ListItem", position: 3, name: "KI-Automatisierung", item: `${SITE_URL}/leistungen/ki-automatisierung` },
  ],
};

export default function KIAutomatisierungPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <ServicePageTemplate serviceKey="ai" />
    </>
  );
}
