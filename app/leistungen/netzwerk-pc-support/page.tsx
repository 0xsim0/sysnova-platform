import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Netzwerk & PC-Support Berlin | SysNova — WLAN & Router",
  description:
    "Router, Switch & WLAN-Einrichtung, PC-Setup und Netzwerkoptimierung für Berliner Unternehmen. Vor-Ort-Service. SysNova.",
  keywords: [
    "Netzwerk Support Berlin",
    "WLAN Einrichtung Berlin",
    "Router Installation Berlin",
    "PC Einrichtung Berlin",
    "Netzwerk für Unternehmen Berlin",
    "Switch Konfiguration Berlin",
    "IT Netzwerk KMU Berlin",
    "WLAN Optimierung Büro Berlin",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Netzwerk & PC-Support Berlin | SysNova",
    description:
      "Router, WLAN, Switch & PC-Setup für Berliner Unternehmen — alles aus einer Hand. SysNova.",
    url: `${SITE_URL}/leistungen/netzwerk-pc-support`,
    siteName: "SysNova",
    locale: "de_DE",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Netzwerk & PC-Support Berlin | SysNova",
    description:
      "Router, WLAN, Switch & PC-Setup für Berliner Unternehmen — alles aus einer Hand.",
  },
  alternates: {
    canonical: `${SITE_URL}/leistungen/netzwerk-pc-support`,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Netzwerk & PC-Support Berlin",
  description:
    "Professionelle Netzwerkinstallation, WLAN-Optimierung und PC-Einrichtung für Berliner Unternehmen. Vor-Ort-Service, kein Vertrag, faire Preise.",
  provider: { "@type": "LocalBusiness", name: "SysNova", url: SITE_URL },
  areaServed: [{ "@type": "City", name: "Berlin" }, { "@type": "Country", name: "Germany" }],
  url: `${SITE_URL}/leistungen/netzwerk-pc-support`,
  inLanguage: "de",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_URL}/leistungen` },
    { "@type": "ListItem", position: 3, name: "Netzwerk & PC-Support", item: `${SITE_URL}/leistungen/netzwerk-pc-support` },
  ],
};

export default function NetzwerkPcSupportPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <ServicePageTemplate serviceKey="network" />
    </>
  );
}
