import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "CCTV & Videoüberwachung Berlin | SysNova — Kameras",
  description:
    "Sicherheitskameras, NVR/DVR-Einrichtung & Smartphone-Fernzugriff für Berliner Unternehmen — DSGVO-konform installiert. SysNova.",
  keywords: [
    "CCTV Berlin",
    "Videoüberwachung Berlin",
    "Sicherheitskameras Berlin",
    "Überwachungskameras Unternehmen Berlin",
    "NVR Installation Berlin",
    "IP Kamera Einrichtung Berlin",
    "DSGVO Videoüberwachung",
    "Kamerainstallation Gewerbe Berlin",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "CCTV & Videoüberwachung Berlin | SysNova",
    description:
      "Sicherheitskameras, NVR-Setup & Fernzugriff für Berliner Unternehmen — DSGVO-konform. SysNova.",
    url: `${SITE_URL}/leistungen/cctv-uberwachung`,
    siteName: "SysNova",
    locale: "de_DE",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CCTV & Videoüberwachung Berlin | SysNova",
    description:
      "Sicherheitskameras, NVR-Setup & Fernzugriff für Berliner Unternehmen — DSGVO-konform.",
  },
  alternates: {
    canonical: `${SITE_URL}/leistungen/cctv-uberwachung`,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CCTV & Videoüberwachung Berlin",
  description:
    "Professionelle IP-Kamera-Systeme, NVR/DVR-Einrichtung und Smartphone-Fernzugriff für Berliner Gewerbeimmobilien. DSGVO-konform installiert.",
  provider: { "@type": "LocalBusiness", name: "SysNova", url: SITE_URL },
  areaServed: [{ "@type": "City", name: "Berlin" }, { "@type": "Country", name: "Germany" }],
  url: `${SITE_URL}/leistungen/cctv-uberwachung`,
  inLanguage: "de",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_URL}/leistungen` },
    { "@type": "ListItem", position: 3, name: "CCTV & Videoüberwachung", item: `${SITE_URL}/leistungen/cctv-uberwachung` },
  ],
};

export default function CctvUberwachungPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <ServicePageTemplate serviceKey="cctv" />
    </>
  );
}
