import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "IT-Support Berlin | SysNova — Schnelle IT-Hilfe",
  description:
    "Fernwartung & Vor-Ort-IT-Support in Berlin. Windows, Linux, System-Administration auf Arabisch, Deutsch und Englisch. Keine Vertragsbindung.",
  keywords: [
    "IT Support Berlin",
    "IT Betreuung Berlin",
    "Fernwartung Berlin",
    "IT Dienstleister Berlin",
    "IT Support Kleinunternehmen Berlin",
    "IT Support Arabisch Berlin",
    "System Administration Berlin",
    "IT Helpdesk Berlin",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "IT-Support Berlin | SysNova",
    description:
      "Schnelle Fernwartung & Vor-Ort-IT-Support in Berlin. Mehrsprachig (DE · EN · AR). SysNova.",
    url: `${SITE_URL}/leistungen/it-support`,
    siteName: "SysNova",
    locale: "de_DE",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT-Support Berlin | SysNova",
    description:
      "Schnelle Fernwartung & Vor-Ort-IT-Support in Berlin. Mehrsprachig (DE · EN · AR).",
  },
  alternates: {
    canonical: `${SITE_URL}/leistungen/it-support`,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IT-Support Berlin",
  description:
    "Fernwartung und Vor-Ort-IT-Support für Unternehmen in Berlin. Mehrsprachig (DE, EN, AR). Windows & Linux, keine Vertragsbindung.",
  provider: { "@type": "LocalBusiness", name: "SysNova", url: SITE_URL },
  areaServed: [{ "@type": "City", name: "Berlin" }, { "@type": "Country", name: "Germany" }],
  url: `${SITE_URL}/leistungen/it-support`,
  inLanguage: "de",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_URL}/leistungen` },
    { "@type": "ListItem", position: 3, name: "IT-Support", item: `${SITE_URL}/leistungen/it-support` },
  ],
};

export default function ItSupportPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <ServicePageTemplate serviceKey="itsupport" />
    </>
  );
}
