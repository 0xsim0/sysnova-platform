import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { headers } from "next/headers";
import { LanguageProvider } from "@/context/LanguageContext";
import { CONTACT_EMAIL, SITE_URL, WHATSAPP_NUMBER, AUTHOR_NAME, AUTHOR_JOB_TITLE } from "@/lib/config";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "SysNova — Moderner IT-Service für wachsende Unternehmen",
  description:
    "Berliner IT-Team für Cloud-Architektur, IT-Support, Webentwicklung und KI-Automatisierung – für kleine und mittelständische Unternehmen in der DACH-Region.",
  keywords: [
    "SysNova",
    "SysNova Berlin",
    "IT Service Berlin",
    "IT Support Berlin",
    "IT Dienstleister Berlin",
    "IT Support kleine Unternehmen Berlin",
    "IT Support auf Arabisch Berlin",
    "mehrsprachige IT Berlin",
    "Cloud Migration Berlin",
    "AWS Setup Berlin",
    "Webentwicklung Berlin",
    "Website erstellen Berlin",
    "Next.js Entwickler Berlin",
    "KI Automatisierung Berlin",
    "n8n Automatisierung Berlin",
    "Geschäftsprozesse automatisieren Berlin",
    "IT Support DACH",
    "IT Services KMU Berlin",
  ],
  openGraph: {
    url: SITE_URL,
    title: "SysNova — Moderner IT-Service",
    description:
      "Wir bauen, verwalten und automatisieren Ihre IT – damit Sie sich auf Ihr Geschäft konzentrieren können.",
    siteName: "SysNova",
    locale: "de_DE",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SysNova — Moderner IT-Service",
    description:
      "Wir bauen, verwalten und automatisieren Ihre IT – damit Sie sich auf Ihr Geschäft konzentrieren können.",
    images: [{ url: `${SITE_URL}/twitter-image`, width: 1200, height: 630 }],
  },
  verification: {
    google: "U8V5SxR5TLyBEC_4OK-CkoLFMKS6gKV_d5i1dloff3I",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "SysNova",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  telephone: `+${WHATSAPP_NUMBER}`,
  email: CONTACT_EMAIL,
  sameAs: [
    "https://www.linkedin.com/company/sysnova-it-berlin",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Elsenstr. 47a",
    addressLocality: "Berlin",
    postalCode: "12059",
    addressCountry: "DE",
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: AUTHOR_NAME,
  jobTitle: AUTHOR_JOB_TITLE,
  url: `${SITE_URL}/about`,
  sameAs: ["https://www.linkedin.com/in/wasiem-abd-albaki-3996a0224/"],
  worksFor: { "@id": `${SITE_URL}/#organization` },
  knowsAbout: [
    "Web Development",
    "IT Support",
    "Cloud Architecture",
    "AI Automation",
    "n8n Workflows",
    "Next.js",
    "React",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "SysNova",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: ["de", "en"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#localbusiness`,
  name: "SysNova",
  description:
    "Berlin-based IT team offering cloud architecture, IT support, web development, and AI automation for small and medium businesses.",
  url: SITE_URL,
  telephone: `+${WHATSAPP_NUMBER}`,
  email: CONTACT_EMAIL,
  image: `${SITE_URL}/logo-full.png`,
  logo: `${SITE_URL}/logo-icon.png`,
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Elsenstr. 47a",
    addressLocality: "Berlin",
    postalCode: "12059",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.47630,
    longitude: 13.44940,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Berlin" },
    { "@type": "Country", name: "Germany" },
  ],
  availableLanguage: ["English", "German", "Arabic"],
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "9",
    bestRating: "5",
    worstRating: "1",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${WHATSAPP_NUMBER}`,
    contactType: "customer service",
    availableLanguage: ["English", "German", "Arabic"],
    areaServed: "DE",
  },
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Architecture" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Network & PC Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CCTV & Surveillance" } },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const rawNonce = headersList.get("x-nonce");
  const nonceProps = rawNonce !== null ? { nonce: rawNonce } : {};
  const ssrLang = (headersList.get("x-lang") ?? "de") as "de" | "en";
  const analyticsEnabled = process.env.ANALYTICS_ENABLED === "true";
  return (
    <html lang={ssrLang} className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <JsonLd data={jsonLd} {...nonceProps} />
        <JsonLd data={jsonLdOrganization} {...nonceProps} />
        <JsonLd data={jsonLdWebSite} {...nonceProps} />
        <JsonLd data={jsonLdPerson} {...nonceProps} />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable} font-body bg-sn-bg text-sn-text antialiased`}
      >
        <LanguageProvider>
          {children}
          <WhatsAppButton />
          <CookieBanner />
          {analyticsEnabled && (
            <>
              <GoogleAnalytics {...nonceProps} />
              <Analytics />
              <SpeedInsights />
            </>
          )}
        </LanguageProvider>
      </body>
    </html>
  );
}
