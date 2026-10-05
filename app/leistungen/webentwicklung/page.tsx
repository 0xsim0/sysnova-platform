import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Webentwicklung Berlin | SysNova — Websites & Apps",
  description:
    "Moderne Websites mit React & Next.js. SEO-optimiert, mobil-first. Domain, Hosting und SSL inklusive. SysNova — Webentwicklung in Berlin.",
  keywords: [
    "Webentwicklung Berlin",
    "Website erstellen Berlin",
    "Next.js Entwicklung",
    "React Agentur Berlin",
    "Landing Page erstellen",
    "Web App Entwicklung Berlin",
    "SEO Website Berlin",
    "Webdesign Berlin",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Webentwicklung Berlin | SysNova",
    description:
      "Moderne Websites und Web-Apps mit React & Next.js. SEO-optimiert, schnell, mobil-first. SysNova — Berlin.",
    url: `${SITE_URL}/leistungen/webentwicklung`,
    siteName: "SysNova",
    locale: "de_DE",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webentwicklung Berlin | SysNova",
    description:
      "Moderne Websites und Web-Apps mit React & Next.js. SEO-optimiert, schnell, mobil-first.",
  },
  alternates: {
    canonical: `${SITE_URL}/leistungen/webentwicklung`,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Webentwicklung Berlin",
  description:
    "Moderne Websites und Web-Apps mit React & Next.js. SEO-optimiert, schnell ladend, mobil-first. Domain, Hosting und SSL inklusive.",
  provider: { "@type": "LocalBusiness", name: "SysNova", url: SITE_URL },
  areaServed: [{ "@type": "City", name: "Berlin" }, { "@type": "Country", name: "Germany" }],
  url: `${SITE_URL}/leistungen/webentwicklung`,
  inLanguage: "de",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_URL}/leistungen` },
    { "@type": "ListItem", position: 3, name: "Webentwicklung", item: `${SITE_URL}/leistungen/webentwicklung` },
  ],
};

export default function WebentwicklungPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <ServicePageTemplate serviceKey="webdev" />
    </>
  );
}
