import { SITE_URL } from "@/lib/config";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  category: string;
  categoryAccent: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "mehrsprachige-website-berlin",
    title: "Mehrsprachige Website Berlin: Deutsch, Englisch und Arabisch aus einer Hand",
    excerpt:
      "Zweisprachige Website (DE+EN oder DE+AR) ab 1.200 €, dreisprachig ab 1.800 €. SysNova spricht alle 3 Sprachen als Muttersprachler — kein Übersetzungsbüro nötig.",
    date: "2026-05-06",
    readingTime: 7,
    category: "Webentwicklung",
    categoryAccent: "violet",
  },
  {
    slug: "ki-automatisierung-kleine-unternehmen-beispiele",
    title: "KI-Automatisierung für kleine Unternehmen: 10 konkrete Beispiele 2026",
    excerpt:
      "10 KI-Automatisierungen, die für Berliner KMU sofort Zeit sparen: E-Mail-Beantwortung, CRM-Lead-Erfassung, Rechnungserstellung, Terminbuchung, Bewertungsanfragen und mehr.",
    date: "2026-05-06",
    readingTime: 9,
    category: "KI & Automatisierung",
    categoryAccent: "amber",
  },
  {
    slug: "it-betreuung-kosten-kleine-unternehmen",
    title: "IT-Betreuung Kosten 2026: Stundensatz, Flatrate oder Vertrag — was lohnt sich?",
    excerpt:
      "Welches IT-Preismodell passt zu Ihrem KMU? Stundenbasis vs. Flatrate vs. MSP-Vertrag — mit Rechenbeispielen, Break-even-Analyse und konkreten Empfehlungen.",
    date: "2026-05-06",
    readingTime: 7,
    category: "IT Support",
    categoryAccent: "blue",
  },
  {
    slug: "it-support-berlin-kleine-unternehmen",
    title: "IT-Support für kleine Unternehmen Berlin: Was Sie wirklich brauchen",
    excerpt:
      "Welche IT-Leistungen brauchen Berliner KMU wirklich? Praxisleitfaden mit Branchen-Beispielen aus Gastronomie, Handwerk und der arabischsprachigen Community.",
    date: "2026-05-06",
    readingTime: 8,
    category: "IT Support",
    categoryAccent: "blue",
  },
  {
    slug: "arabische-website-erstellen-lassen-berlin",
    title: "Arabische Website erstellen lassen Berlin: zweisprachig, DSGVO-konform, schnell",
    excerpt:
      "Arabische Website für Berliner Unternehmen — echtes Arabisch, RTL-Layout, zweisprachig (AR+DE), DSGVO-konform. SysNova spricht Arabisch als Muttersprache. Landing Page ab 500 €.",
    date: "2026-05-06",
    readingTime: 8,
    category: "Webentwicklung",
    categoryAccent: "violet",
  },
  {
    slug: "google-unternehmensprofil-optimieren-berlin",
    title: "Google Unternehmensprofil optimieren: Lokale SEO für kleine Unternehmen in Berlin",
    excerpt:
      "In 8 Schritten im Google Local Pack erscheinen, mehr Bewertungen sammeln und mehr Anrufe erhalten. Fehler vermeiden, Kosten und Profi-Tipps für Berliner KMU.",
    date: "2026-05-05",
    readingTime: 8,
    category: "Local SEO",
    categoryAccent: "emerald",
  },
  {
    slug: "warum-website-keine-anfragen-bringt",
    title: "Warum Ihre Website keine Anfragen bringt: 12 Fehler kleiner Unternehmen",
    excerpt:
      "Besucher da, aber keine Anfragen? Diese 12 Fehler blockieren kleine Unternehmen in Berlin — mit konkreten Lösungen, Kosten und einem Schritt-für-Schritt-Plan.",
    date: "2026-05-05",
    readingTime: 9,
    category: "Webentwicklung",
    categoryAccent: "violet",
  },
  {
    slug: "arabischer-it-support-berlin",
    title: "IT-Support Berlin auf Arabisch — IT-Hilfe für arabischsprachige Unternehmen",
    excerpt:
      "SysNova bietet IT-Support in Berlin auf Arabisch. Stundensatz 30–50 €/h. PC-Probleme, WLAN, Microsoft 365 und Kassensysteme — klar erklärt auf Arabisch. Kostenlose Erstberatung.",
    date: "2026-05-03",
    readingTime: 7,
    category: "IT Support",
    categoryAccent: "blue",
  },
  {
    slug: "website-erstellen-lassen-berlin-kleine-unternehmen",
    title: "Website erstellen lassen Berlin für kleine Unternehmen",
    excerpt: "Kosten, Ablauf, lokale SEO, Google Search Console und Checkliste für kleine Unternehmen, Selbständige und Dienstleister in Berlin.",
    date: "2026-04-27",
    readingTime: 8,
    category: "Webentwicklung",
    categoryAccent: "violet",
  },
  {
    slug: "restaurant-website-erstellen-lassen-berlin",
    title: "Restaurant Website erstellen lassen Berlin",
    excerpt: "Speisekarte, Reservierung, Google Maps, lokale SEO und Kosten: So wird eine Restaurant-Website zum Anfrage- und Reservierungskanal.",
    date: "2026-04-27",
    readingTime: 8,
    category: "Gastronomie",
    categoryAccent: "amber",
  },
  {
    slug: "handwerker-website-erstellen-lassen-berlin",
    title: "Handwerker Website erstellen lassen Berlin",
    excerpt: "Lokale SEO, Leistungsseiten, Referenzen und Kontaktwege für Elektriker, Sanitär, Maler, Bau und andere Handwerksbetriebe in Berlin.",
    date: "2026-04-27",
    readingTime: 8,
    category: "Handwerk",
    categoryAccent: "blue",
  },
  {
    slug: "was-kostet-eine-website-berlin-2026",
    title: "Was kostet eine Website in Berlin 2026?",
    excerpt: "Landing Page ab 500 €, Unternehmenswebsite ab 1.000 €, Webshop ab 1.500 €. Stundensatz SysNova Berlin: 30 €/h. Alle Kostenfaktoren einfach erklärt.",
    date: "2026-04-23",
    readingTime: 6,
    category: "Webentwicklung",
    categoryAccent: "violet",
  },
  {
    slug: "it-support-berlin-preise-anbieter",
    title: "IT-Support Berlin: Anbieter-Vergleich — Freelancer, Agentur oder MSP?",
    excerpt: "Welcher IT-Support-Anbieter passt zu Ihrem Berliner Unternehmen? Vergleich von Freelancer, Kleinagentur, Großagentur und MSP — mit Preisen und Empfehlungen.",
    date: "2026-04-23",
    readingTime: 7,
    category: "IT Support",
    categoryAccent: "blue",
  },
  {
    slug: "n8n-automatisierung-kleine-unternehmen",
    title: "n8n Automatisierung für kleine Unternehmen: Komplett-Guide 2026",
    excerpt: "n8n ist das Open-Source-Tool für KMU, die Prozesse automatisieren wollen. 5 praxisnahe Beispiele, Kostenvergleich mit Zapier und Make, Schritt-für-Schritt Anleitung.",
    date: "2026-04-23",
    readingTime: 9,
    category: "KI & Automatisierung",
    categoryAccent: "amber",
  },
  {
    slug: "friseur-website-berlin",
    title: "Friseur Website erstellen lassen Berlin: Kosten, Terminbuchung und was wirklich zählt",
    excerpt:
      "Friseur-Website in Berlin ab 500 €. Terminbuchung, Google Maps, lokale SEO und Preise — alles was ein Berliner Friseursalon braucht, um online Kunden zu gewinnen.",
    date: "2026-05-19",
    readingTime: 8,
    category: "Webentwicklung",
    categoryAccent: "violet",
  },
  {
    slug: "onlineshop-erstellen-berlin-kmu",
    title: "Onlineshop erstellen lassen Berlin: Kosten, Plattformen und was KMU wissen müssen",
    excerpt:
      "Shopify, WooCommerce oder Next.js? Onlineshop für Berliner KMU ab 1.500 €. Kosten, Plattformen, DSGVO und lokale SEO — der komplette Leitfaden für 2026.",
    date: "2026-05-19",
    readingTime: 9,
    category: "Webentwicklung",
    categoryAccent: "violet",
  },
  {
    slug: "webdesign-berlin-preise",
    title: "Webdesign Berlin Preise 2026: Freelancer, Agentur oder kleines IT-Team — was kostet was?",
    excerpt:
      "Webdesign-Preise in Berlin ehrlich erklärt: Landing Page ab 500 €, Unternehmenswebsite ab 1.000 €, Onlineshop ab 1.500 €. Wer eignet sich für wen — ein Vergleich ohne Schönfärberei.",
    date: "2026-05-19",
    readingTime: 7,
    category: "Webentwicklung",
    categoryAccent: "violet",
  },
  {
    slug: "microsoft-365-einrichten-berlin",
    title: "Microsoft 365 für kleine Unternehmen einrichten: E-Mail, Teams und Sicherheit",
    excerpt:
      "Microsoft 365 für Berliner KMU ab 6 €/Nutzer/Monat: E-Mail mit eigenem Domain, Teams-Konfiguration, Sicherheit und DSGVO. SysNova richtet alles ein — schnell und ohne IT-Vorkenntnisse.",
    date: "2026-06-08",
    readingTime: 9,
    category: "Cloud",
    categoryAccent: "blue",
  },
  {
    slug: "cloud-backup-kleine-unternehmen",
    title: "Cloud-Backup für kleine Unternehmen: Welche Lösung ist sicher und bezahlbar?",
    excerpt:
      "Cloud-Backup für KMU ab 15–50 €/Monat: Vergleich von Microsoft 365 Backup, Backblaze und lokalen NAS-Lösungen. Sicher, DSGVO-konform, automatisch — ohne IT-Aufwand.",
    date: "2026-06-08",
    readingTime: 8,
    category: "Cloud",
    categoryAccent: "blue",
  },
];

BLOG_POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

/**
 * Per-article social/preview image. Points to the dynamic OG route (`/og?slug=`),
 * which renders the article title. NOT under /api/ — robots.txt blocks /api/, which
 * would prevent crawlers/social scrapers from fetching the image.
 */
export const ogImageUrl = (slug: string) => `${SITE_URL}/og?slug=${encodeURIComponent(slug)}`;

/**
 * Returns up to `count` related posts for the article with the given title:
 * same-category posts first (most recent), then filled with other recent posts.
 * Excludes the article itself. Used for in-template internal linking.
 */
export function getRelatedPosts(title: string, count = 3): BlogPost[] {
  const others = BLOG_POSTS.filter((p) => p.title !== title);
  const current = BLOG_POSTS.find((p) => p.title === title);
  if (process.env.NODE_ENV !== "production" && !current) {
    // Title prop passed to BlogPageTemplate must match a BLOG_POSTS title exactly,
    // otherwise category-based ordering degrades and self-exclusion can't be guaranteed.
    console.warn(`[getRelatedPosts] No BLOG_POSTS entry matches title: "${title}"`);
  }
  const sameCategory = current
    ? others.filter((p) => p.category === current.category)
    : [];
  const rest = others.filter((p) => !sameCategory.includes(p));
  return [...sameCategory, ...rest].slice(0, count);
}

export const CATEGORY_COLORS: Record<string, string> = {
  violet:  "text-violet-400 border-violet-400/30 bg-violet-400/10",
  blue:    "text-blue-400 border-blue-400/30 bg-blue-400/10",
  amber:   "text-sn-primary border-sn-primary/30 bg-sn-primary/10",
  emerald: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
};
