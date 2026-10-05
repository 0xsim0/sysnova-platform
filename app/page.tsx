import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HashScrollOnMount from "@/components/HashScrollOnMount";
import SkipLink from "@/components/SkipLink";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "SysNova — IT-Service Berlin: Cloud, Support, Web & KI",
  description:
    "Berliner IT-Team für Cloud, IT-Support, Webentwicklung und KI-Automatisierung. Mehrsprachig (DE/EN/AR), faire Preise, schnelle Reaktion — für KMU in der DACH-Region.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "SysNova — IT-Service Berlin: Cloud, Support, Web & KI",
    description:
      "Berliner IT-Team für Cloud, IT-Support, Webentwicklung und KI-Automatisierung. Mehrsprachig, faire Preise, schnelle Reaktion.",
    url: SITE_URL,
    siteName: "SysNova",
    locale: "de_DE",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SysNova — IT-Service Berlin: Cloud, Support, Web & KI",
    description:
      "Berliner IT-Team für Cloud, IT-Support, Webentwicklung und KI-Automatisierung.",
    images: [`${SITE_URL}/twitter-image`],
  },
};

export default function Home() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <HashScrollOnMount />
        <Hero />
        <Stats />
        <Services />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
