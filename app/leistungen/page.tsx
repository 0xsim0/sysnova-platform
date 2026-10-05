import { Metadata } from "next";
import LeistungenContent from "./LeistungenContent";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "IT-Leistungen Berlin | SysNova — Cloud, Support, Web & KI",
  description:
    "Cloud-Architektur, IT-Support, Webentwicklung, KI-Automatisierung, Netzwerk & CCTV — alle IT-Leistungen von SysNova in Berlin. Persönlich & schnell.",
  keywords: [
    "IT Dienstleistungen Berlin",
    "IT Service Berlin",
    "Cloud Architektur Berlin",
    "IT Support Berlin",
    "Webentwicklung Berlin",
    "KI Automatisierung Berlin",
    "Netzwerk Support Berlin",
    "CCTV Installation Berlin",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "IT-Leistungen | SysNova Berlin",
    description:
      "Cloud, IT-Support, Webentwicklung, KI-Automatisierung, Netzwerk & CCTV — alle IT-Dienstleistungen von SysNova in Berlin.",
    url: `${SITE_URL}/leistungen`,
    siteName: "SysNova",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT-Leistungen | SysNova Berlin",
    description:
      "Cloud, IT-Support, Webentwicklung, KI-Automatisierung, Netzwerk & CCTV — alle IT-Dienstleistungen von SysNova in Berlin.",
  },
  alternates: {
    canonical: `${SITE_URL}/leistungen`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_URL}/leistungen` },
  ],
};

export default function LeistungenPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <LeistungenContent />
    </>
  );
}
