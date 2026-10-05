import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cloud-Architektur Berlin | SysNova — AWS & Azure",
  description:
    "Cloud-Migration, AWS- & Azure-Einrichtung, Kostenoptimierung und IAM-Konfiguration für KMU in Berlin. SysNova — Ihr Cloud-Partner.",
  keywords: [
    "Cloud Architektur Berlin",
    "AWS Setup Berlin",
    "Azure Einrichtung Berlin",
    "Cloud Migration KMU",
    "Cloud Infrastruktur Berlin",
    "GCP Setup Deutschland",
    "Cloud Beratung Berlin",
    "AWS für kleine Unternehmen",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Cloud-Architektur Berlin | SysNova",
    description:
      "AWS, Azure & GCP — Migration, Einrichtung und Kostenoptimierung für KMU. SysNova — Berlin.",
    url: `${SITE_URL}/leistungen/cloud-architektur`,
    siteName: "SysNova",
    locale: "de_DE",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud-Architektur Berlin | SysNova",
    description:
      "AWS, Azure & GCP — Migration, Einrichtung und Kostenoptimierung für KMU.",
  },
  alternates: {
    canonical: `${SITE_URL}/leistungen/cloud-architektur`,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cloud-Architektur Berlin",
  description:
    "Cloud-Migration, AWS- & Azure-Einrichtung, Kostenoptimierung und IAM-Konfiguration für kleine und mittelständische Unternehmen in der DACH-Region.",
  provider: { "@type": "LocalBusiness", name: "SysNova", url: SITE_URL },
  areaServed: [{ "@type": "City", name: "Berlin" }, { "@type": "Country", name: "Germany" }],
  url: `${SITE_URL}/leistungen/cloud-architektur`,
  inLanguage: "de",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_URL}/leistungen` },
    { "@type": "ListItem", position: 3, name: "Cloud-Architektur", item: `${SITE_URL}/leistungen/cloud-architektur` },
  ],
};

export default function CloudArchitekturPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <ServicePageTemplate serviceKey="cloud" />
    </>
  );
}
