import { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
  SITE_URL,
  AUTHOR_NAME,
  AUTHOR_JOB_TITLE,
  WHATSAPP_URL,
  WHATSAPP_NUMBER_DISPLAY,
  BUSINESS_ADDRESS,
  WHATSAPP_NUMBER,
} from "@/lib/config";

const url = `${SITE_URL}/webdesign-agentur-berlin`;

export const metadata: Metadata = {
  title: "Webdesign Agentur Berlin | SysNova",
  description:
    "SysNova: Webdesign Agentur Berlin für kleine Unternehmen. Websites ab 500 €, dreisprachig (DE/EN/AR), Next.js, lokale SEO. Kostenlose Beratung — direkt mit dem Entwickler.",
  keywords: [
    "Webdesign Agentur Berlin",
    "Webdesigner Berlin",
    "Website erstellen lassen Berlin",
    "Webdesign kleine Unternehmen Berlin",
    "Next.js Agentur Berlin",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Webdesign Agentur Berlin für kleine Unternehmen | SysNova",
    description:
      "Websites ab 500 €, dreisprachig (DE/EN/AR), Next.js, lokale SEO. SysNova — Webdesign Agentur Berlin.",
    url,
    siteName: "SysNova",
    locale: "de_DE",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/opengraph-image`],
  },
  alternates: { canonical: url },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: "SysNova",
      description:
        "Webdesign Agentur Berlin für kleine Unternehmen: Websites ab 500 €, dreisprachig (DE/EN/AR), Next.js, lokale SEO.",
      url: SITE_URL,
      telephone: `+${WHATSAPP_NUMBER}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Elsenstr. 47a",
        addressLocality: "Berlin",
        postalCode: "12059",
        addressCountry: "DE",
      },
      areaServed: [
        { "@type": "City", name: "Berlin" },
        { "@type": "Country", name: "Germany" },
      ],
      founder: {
        "@type": "Person",
        name: AUTHOR_NAME,
        jobTitle: AUTHOR_JOB_TITLE,
      },
      inLanguage: "de",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "12",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "Service",
      name: "Webdesign Berlin",
      description:
        "Professionelle Websites für kleine Unternehmen in Berlin: Landing Pages, Unternehmenswebsites, Onlineshops — mit Next.js, lokaler SEO und dreisprachig (DE/EN/AR).",
      provider: {
        "@type": "LocalBusiness",
        name: "SysNova",
        url: SITE_URL,
      },
      areaServed: [
        { "@type": "City", name: "Berlin" },
        { "@type": "Country", name: "Germany" },
      ],
      url,
      inLanguage: "de",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Webdesign Agentur Berlin",
          item: url,
        },
      ],
    },
  ],
};

export default function WebdesignAgenturBerlinPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />

      <main className="min-h-screen bg-sn-bg text-white">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
            Webdesign Agentur Berlin{" "}
            <span className="gradient-text">für kleine Unternehmen</span>
          </h1>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            SysNova ist eine Webdesign-Agentur in Berlin, die Websites für kleine Unternehmen,
            Selbstständige und KMU baut. Wir erstellen professionelle Websites ab 500 €,
            optimiert für Google und mobil-first — auf Deutsch, Englisch und Arabisch.
            Sie sprechen direkt mit dem Entwickler — kein Account Manager, kein Overhead.
          </p>
          <p className="text-gray-400 mb-8">
            Standort: {BUSINESS_ADDRESS} · Beratung: kostenlos und unverbindlich
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 bg-sn-primary text-white font-semibold rounded-lg hover:bg-sn-primary/80 transition-colors"
            >
              Kostenlose Beratung anfragen
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-sn-border text-gray-300 font-semibold rounded-lg hover:border-sn-primary/50 transition-colors"
            >
              WhatsApp: {WHATSAPP_NUMBER_DISPLAY}
            </a>
          </div>
        </section>

        {/* Für wen */}
        <section className="py-16 px-4 max-w-4xl mx-auto border-t border-sn-border">
          <h2 className="text-3xl font-display font-bold mb-8">
            Für wen ist SysNova die richtige Wahl?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Handwerker & Dienstleister",
                text: "Elektriker, Sanitär, Maler, Reinigung — eine professionelle Website bringt mehr Anfragen als jede Empfehlung.",
              },
              {
                title: "Gastronomie & Einzelhandel",
                text: "Restaurant, Café, Boutique — Speisekarte online, Reservierungen entgegennehmen, Öffnungszeiten aktuell halten.",
              },
              {
                title: "Arabischsprachige Unternehmen",
                text: "SysNova spricht Arabisch als Muttersprache — zweisprachige Websites (AR+DE) ohne Übersetzungsbüro.",
              },
              {
                title: "Unternehmen mit veralteter Website",
                text: "Website sieht aus wie 2015? SysNova überarbeitet oder baut neu — je nachdem, was günstiger und schneller ist.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-sn-card border border-sn-border rounded-xl p-6"
              >
                <h3 className="font-display font-semibold text-sn-secondary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Was macht SysNova anders */}
        <section className="py-16 px-4 max-w-4xl mx-auto border-t border-sn-border">
          <h2 className="text-3xl font-display font-bold mb-8">Was macht SysNova anders?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Next.js & moderne Technik",
                text: "Keine WordPress-Template-Websites. SysNova baut mit Next.js — schnellste Ladezeiten, beste Core Web Vitals, top Google-Ranking.",
              },
              {
                title: "DE / EN / AR aus einer Hand",
                text: "Dreisprachig ohne Übersetzungsbüro: Deutsch, Englisch, Arabisch — echte Texte, nicht Google Translate.",
              },
              {
                title: "Kein Agentur-Overhead",
                text: "Kein teures Büro in Mitte, kein Projektmanager als Zwischenschicht. Faire Preise: Stundensatz 30–50 €/h.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-sn-card border border-sn-border rounded-xl p-6"
              >
                <h3 className="font-display font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leistungen */}
        <section className="py-16 px-4 max-w-4xl mx-auto border-t border-sn-border">
          <h2 className="text-3xl font-display font-bold mb-8">Leistungen & Preise</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sn-border">
                  <th
                    scope="col"
                    className="text-left py-3 pr-6 font-semibold text-gray-300"
                  >
                    Leistung
                  </th>
                  <th
                    scope="col"
                    className="text-left py-3 pr-6 font-semibold text-gray-300"
                  >
                    Ab
                  </th>
                  <th
                    scope="col"
                    className="text-left py-3 font-semibold text-gray-300"
                  >
                    Beschreibung
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sn-border">
                {[
                  {
                    name: "Landing Page",
                    price: "500 €",
                    desc: "1 Seite, Kontaktformular, Google Maps, mobil-optimiert",
                  },
                  {
                    name: "Unternehmenswebsite",
                    price: "1.000 €",
                    desc: "5–8 Seiten, lokale SEO, Blog, Google Search Console",
                  },
                  {
                    name: "Onlineshop",
                    price: "1.500 €",
                    desc: "Shopify oder Next.js, Produktseiten, Zahlungsintegration",
                  },
                  {
                    name: "Hosting & Wartung",
                    price: "49 €/Monat",
                    desc: "Hosting, SSL, Updates, Sicherheit, kleine Änderungen",
                  },
                  {
                    name: "SEO",
                    price: "Auf Anfrage",
                    desc: "Lokale SEO Berlin, Google Business Profile, Rankings",
                  },
                  {
                    name: "KI-Automatisierung",
                    price: "Auf Anfrage",
                    desc: "Chatbots, n8n-Workflows, automatische Anfragenbearbeitung",
                  },
                ].map((row) => (
                  <tr key={row.name}>
                    <td className="py-4 pr-6 font-medium">{row.name}</td>
                    <td className="py-4 pr-6 text-sn-secondary font-semibold">{row.price}</td>
                    <td className="py-4 text-gray-400">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Alle Preise sind Nettopreise zzgl. MwSt. Kostenlose Erstberatung (30 Min.) —
            danach transparentes Angebot ohne Überraschungen.
          </p>
        </section>

        {/* Portfolio */}
        <section className="py-16 px-4 max-w-4xl mx-auto border-t border-sn-border">
          <h2 className="text-3xl font-display font-bold mb-4">Referenzen</h2>
          <p className="text-gray-400 mb-8">
            Einige Beispiele unserer Arbeit — alle Websites sind live und bei Google Berlin
            auffindbar.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "SysNova Website",
                type: "Unternehmenswebsite",
                text: "Next.js, dreisprachig (DE/EN/AR), lokale SEO, Kontaktformular mit OTP",
              },
              {
                name: "Kundenprojekte",
                type: "Landing Pages & KMU-Websites",
                text: "Next.js, Google Maps, Kontaktformular, SEO für Berliner Branchen",
              },
              {
                name: "Mehr Projekte ansehen",
                type: "Portfolio",
                text: "Alle Referenzen und Details auf unserer Portfolio-Seite.",
                link: "/portfolio",
              },
            ].map((project) => (
              <div
                key={project.name}
                className="bg-sn-card border border-sn-border rounded-xl p-6"
              >
                <h3 className="font-display font-semibold mb-1">{project.name}</h3>
                <p className="text-sn-primary text-xs font-medium mb-2">{project.type}</p>
                <p className="text-gray-400 text-sm">{project.text}</p>
                {project.link && (
                  <Link
                    href={project.link}
                    className="inline-block mt-3 text-sn-secondary text-sm hover:underline"
                  >
                    Alle Projekte ansehen →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Ablauf */}
        <section className="py-16 px-4 max-w-4xl mx-auto border-t border-sn-border">
          <h2 className="text-3xl font-display font-bold mb-8">
            So läuft die Zusammenarbeit ab
          </h2>
          <ol className="space-y-6">
            {[
              {
                step: "1",
                title: "Kostenlose Beratung (30 Min.)",
                text: "Wir besprechen Ihre Ziele, Zielgruppe und Budget. Kein Verkaufsgespräch — ehrliche Einschätzung, was sinnvoll ist.",
              },
              {
                step: "2",
                title: "Konzept & Angebot",
                text: "SysNova erstellt ein schriftliches Angebot mit Seitenstruktur, Zeitplan und Festpreis — transparent, ohne versteckte Kosten.",
              },
              {
                step: "3",
                title: "Design & Entwicklung",
                text: "Wir bauen Ihre Website und zeigen Zwischenstände zur Freigabe. Typische Laufzeit: 1–3 Wochen.",
              },
              {
                step: "4",
                title: "Launch & SEO-Setup",
                text: "Google Search Console, Sitemap, lokale Keywords, Google Business Profile — alles eingerichtet, bevor die Website live geht.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-sn-primary/20 border border-sn-primary/40 flex items-center justify-center text-sn-primary font-bold font-display">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 max-w-4xl mx-auto border-t border-sn-border">
          <h2 className="text-3xl font-display font-bold mb-8">Häufige Fragen</h2>
          <div className="space-y-6">
            {[
              {
                q: "Was kostet eine Website von einer Berliner Webdesign-Agentur?",
                a: "SysNova baut Landing Pages ab 500 €, Unternehmenswebsites ab 1.000 € und Onlineshops ab 1.500 €. Monatliche Wartung ab 49 €. Großagenturen verlangen oft das 3–5-Fache für ähnliche Leistungen.",
              },
              {
                q: "Wie lange dauert der Aufbau einer Website?",
                a: "Landing Page: 5–7 Werktage. Unternehmenswebsite: 10–14 Werktage. Onlineshop: 2–4 Wochen. Voraussetzung: Texte und Fotos werden rechtzeitig geliefert.",
              },
              {
                q: "Kann ich meine Website auf Arabisch oder Englisch haben?",
                a: "Ja — SysNova baut dreisprachige Websites (DE, EN, AR) aus einer Hand. Kein Übersetzungsbüro nötig. Zweisprachig ab 1.200 €, dreisprachig ab 1.800 €.",
              },
              {
                q: "Warum Next.js statt WordPress?",
                a: "Next.js-Websites laden 3–5× schneller als WordPress-Seiten, haben keine Plugin-Sicherheitslücken und erreichen deutlich bessere Core Web Vitals — ein wichtiger Google-Rankingfaktor.",
              },
              {
                q: "Übernimmt SysNova auch die laufende Pflege der Website?",
                a: "Ja — mit dem Wartungspaket ab 49 €/Monat: Hosting, SSL, Updates, Sicherheit und bis zu 1 Stunde kleine Änderungen pro Monat.",
              },
              {
                q: "Was passiert, wenn ich eine bestehende Website habe?",
                a: "SysNova analysiert die bestehende Seite auf SEO, Ladezeit und Conversion-Schwächen und empfiehlt entweder eine Überarbeitung (50–70 % günstiger als Neubau) oder einen kompletten Neubau.",
              },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interne Links zu Blog-Artikeln */}
        <section className="py-12 px-4 max-w-4xl mx-auto border-t border-sn-border">
          <h2 className="text-xl font-display font-semibold mb-4 text-gray-300">
            Weiterführende Artikel
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/blog/webdesign-berlin-preise"
                className="text-sn-secondary hover:underline"
              >
                Webdesign Berlin Preise 2026: Freelancer, Agentur oder kleines IT-Team
              </Link>
            </li>
            <li>
              <Link
                href="/blog/was-kostet-eine-website-berlin-2026"
                className="text-sn-secondary hover:underline"
              >
                Was kostet eine Website in Berlin 2026?
              </Link>
            </li>
            <li>
              <Link
                href="/blog/warum-website-keine-anfragen-bringt"
                className="text-sn-secondary hover:underline"
              >
                Warum Ihre Website keine Anfragen bringt: 12 Fehler
              </Link>
            </li>
            <li>
              <Link
                href="/blog/mehrsprachige-website-berlin"
                className="text-sn-secondary hover:underline"
              >
                Mehrsprachige Website Berlin: Deutsch, Englisch und Arabisch
              </Link>
            </li>
          </ul>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 max-w-4xl mx-auto border-t border-sn-border">
          <div className="bg-sn-card border border-sn-border rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">
              Bereit für Ihre neue Website?
            </h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Kostenlose Beratung (30 Min.) — wir besprechen Ihre Ziele und erstellen ein
              transparentes Angebot. Kein Verkaufsdruck, keine versteckten Kosten.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-3 bg-sn-primary text-white font-semibold rounded-lg hover:bg-sn-primary/80 transition-colors"
              >
                Beratung anfragen
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-sn-border text-gray-300 font-semibold rounded-lg hover:border-sn-primary/50 transition-colors"
              >
                WhatsApp: {WHATSAPP_NUMBER_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
