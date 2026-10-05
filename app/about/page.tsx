import { Metadata } from "next";
import AboutContent from "./AboutContent";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/config";

const url = `${SITE_URL}/about`;

export const metadata: Metadata = {
  title: "Über uns | SysNova — Ihr IT-Team in Berlin",
  description:
    "SysNova — Ihr direkter IT-Partner in Berlin. Cloud, Webentwicklung, KI & IT-Support für KMU. Persönlicher Kontakt, faire Preise, auf Deutsch, Englisch und Arabisch.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Über uns | SysNova",
    description:
      "Das Berliner IT-Team, das direkt mit Ihnen arbeitet — ohne Mittelsmann, ohne Overhead.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Über uns | SysNova",
    description:
      "Das Berliner IT-Team, das direkt mit Ihnen arbeitet — ohne Mittelsmann, ohne Overhead.",
  },
  alternates: {
    canonical: url,
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${url}#aboutpage`,
      url,
      name: "Über uns | SysNova",
      description:
        "Das Berliner IT-Team SysNova: Cloud, Webentwicklung, KI und IT-Support für kleine und mittelständische Unternehmen — auf Deutsch, Englisch und Arabisch.",
      inLanguage: "de",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      mainEntity: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Über uns", item: url },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <AboutContent />
    </>
  );
}
