import { Metadata } from "next";
import PortfolioPage from "@/components/PortfolioPage";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/config";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolioProjects";

export const metadata: Metadata = {
  title: "Portfolio | SysNova — Unsere Projekte & Referenzen",
  description:
    "SysNova Portfolio: Webentwicklung, KI-Automatisierung und Cloud-Lösungen für Berliner KMU. Echte Projekte — von Landing Pages bis n8n-Workflows.",
  keywords: [
    "SysNova Portfolio",
    "Webentwicklung Referenzen Berlin",
    "KI Automatisierung Projekte",
    "IT Projekte Berlin",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Portfolio | SysNova",
    description:
      "Echte Projekte für echte Unternehmen — von Websites bis KI-Automatisierungen.",
    url: `${SITE_URL}/portfolio`,
    siteName: "SysNova",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | SysNova",
    description:
      "Echte Projekte für echte Unternehmen — von Websites bis KI-Automatisierungen.",
  },
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Portfolio | SysNova",
  description:
    "Projekte von SysNova: Webentwicklung, KI-Automatisierung und Cloud-Lösungen für Unternehmen in Berlin und der DACH-Region.",
  url: `${SITE_URL}/portfolio`,
  inLanguage: "de",
  numberOfItems: PORTFOLIO_PROJECTS.length,
  itemListElement: PORTFOLIO_PROJECTS.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: project.jsonLdName,
    description: project.jsonLdDescription,
    url: `${SITE_URL}/portfolio#${project.id}`,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: `${SITE_URL}/portfolio` },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <PortfolioPage />
    </>
  );
}
