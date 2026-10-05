import { Translations } from "./types";

const de: Translations = {
  nav: {
    services: "Leistungen",
    pricing: "Preise",
    team: "Team",
    about: "Über uns",
    portfolio: "Portfolio",
    blog: "Blog",
    contact: "Kontakt",
    cta: "Kostenlose Beratung",
    primaryNavLabel: "Hauptnavigation",
    toggleMenuLabel: "Menü öffnen",
    serviceLinks: [
      { label: "Cloud-Architektur" },
      { label: "IT-Support" },
      { label: "Webentwicklung" },
      { label: "KI-Automatisierung" },
      { label: "Netzwerk & PC-Support" },
      { label: "CCTV & Überwachung" },
    ],
  },
  hero: {
    badge: "Berlin · IT-Dienstleistungen · Seit 2025",
    headline1: "Ihr IT-Partner &",
    headline2: "Webentwicklung in ",
    headlineGradient: "Berlin",
    subline1: "Damit Sie sich auf Ihr Geschäft konzentrieren können.",
    subline2:
      "Cloud, Support, Web & KI-Workflows — persönlich, schnell, erschwinglich.",
    cta1: "Kostenlose Beratung anfragen",
    cta2: "Unsere Leistungen ansehen",
    trust: {
      berlin: "Ansässig in Berlin",
      languages: "EN · DE · AR",
      noOverhead: "Kein Agentur-Overhead",
    },
  },
  services: {
    label: "Was wir tun",
    title: "Leistungen für",
    highlight: "echte Geschäftsbedürfnisse",
    subtitle:
      "Von Cloud-Infrastruktur bis zum täglichen IT-Support — wir kümmern uns um die Technik, damit Sie wachsen können.",
    bookCta: "Kostenlose 30-Min-Beratung verfügbar —",
    bookLink: "jetzt buchen",
    learnMore: "Mehr erfahren",
    ctaTitle: "Welche Leistung passt zu Ihnen?",
    ctaButton: "Kostenlose Beratung anfragen",
    portfolioLink: "Unsere Arbeiten ansehen →",
    backLink: "← Zurück zu SysNova",
    items: [
      {
        title: "Cloud-Architektur",
        description:
          "AWS, Azure & GCP-Einrichtung, Migration von On-Premise, Kostenoptimierung, Sicherheits- & IAM-Konfiguration.",
        details: [
          "Konto-Einrichtung & Konfiguration",
          "Cloud-Migration",
          "Kostenoptimierung",
          "Sicherheit & IAM",
        ],
      },
      {
        title: "IT-Support",
        description:
          "Remote- und Vor-Ort-Support für Berliner Unternehmen. Windows- & Linux-Administration, Fehlerbehebung, Incident Response.",
        details: [
          "Remote via TeamViewer / RustDesk",
          "Vor-Ort (Raum Berlin)",
          "Windows & Linux Admin",
          "Incident Response",
        ],
      },
      {
        title: "Webentwicklung",
        description:
          "Moderne Landing Pages, Unternehmenswebseiten und Web-Apps. Domain, Hosting, SSL — alles aus einer Hand.",
        details: [
          "Landing Pages & Websites",
          "Web-Apps (React / Next.js)",
          "Domain, Hosting, SSL",
          "Wartung & Updates",
        ],
      },
      {
        title: "KI-Automatisierung",
        description:
          "KI-gestützte Geschäftsprozesse, API-Integrationen mit Zapier / n8n, Dokument- und E-Mail-Automatisierung.",
        details: [
          "KI-gestützte Workflows",
          "API-Integrationen (n8n / Zapier)",
          "Dokumentenautomatisierung",
          "E-Mail- & Kalender-Bots",
        ],
      },
      {
        title: "Netzwerk & PC-Support",
        description:
          "Router-, Switch- und Kabelinstallation, WLAN-Einrichtung, PC-Konfiguration und Vor-Ort-Fehlerbehebung für Berliner Unternehmen.",
        details: [
          "Router & Switch-Einrichtung",
          "WLAN-Einrichtung",
          "PC-Einrichtung & Konfiguration",
          "Vor-Ort-Fehlerbehebung",
        ],
      },
      {
        title: "CCTV & Überwachung",
        description:
          "Professionelle Sicherheitskamera-Installation, NVR/DVR-Konfiguration und Remote-Monitoring für Privat und Gewerbe.",
        details: [
          "Kamera-Installation",
          "NVR & DVR-Einrichtung",
          "Remote-Monitoring-Zugang",
          "Wartung & Support",
        ],
      },
    ],
  },
  pricing: {
    label: "Transparente Preise",
    title: "Einfache Pakete,",
    highlight: "keine versteckten Kosten",
    subtitle:
      "Drei flexible Pakete — wählen Sie das passende für Ihr Unternehmen.",
    getStarted: "Jetzt starten",
    packages: [
      {
        name: "Starter",
        description:
          "Ideal für kleine Unternehmen, die zuverlässigen IT-Support benötigen.",
        features: [
          "5 Std. IT-Support / Monat",
          "Remote-Fehlerbehebung",
          "E-Mail- & Chat-Support",
          "Antwort innerhalb von 24h",
          "Monatlicher Statusbericht",
          "Netzwerk & PC-Support",
        ],
      },
      {
        name: "Business",
        description: "Die beliebteste Wahl — Support plus Cloud-Ressourcen.",
        badge: "Am beliebtesten",
        features: [
          "10 Std. Support / Monat",
          "1 Cloud-Aufgabe / Monat",
          "Prioritäts-Reaktion (4h SLA)",
          "Remote & Vor-Ort (Berlin)",
          "Monatliches Review-Gespräch",
          "Sicherheitsüberwachung",
          "Netzwerk & CCTV-Einrichtung (1 Aufgabe/Monat)",
        ],
      },
      {
        name: "Pro",
        description:
          "Unbegrenzter Support mit vollständigen Automatisierungsfähigkeiten.",
        features: [
          "Unbegrenzter IT-Support",
          "Vollständige Automatisierungssuite",
          "Persönlicher Ansprechpartner",
          "1h Reaktions-SLA",
          "Cloud-Architektur-Review",
          "Individuelle KI-Workflows",
          "Vollständiges Netzwerk & CCTV-Management",
        ],
      },
    ],
  },
  team: {
    label: "Das Team",
    title: "Kleines Team,",
    highlight: "Senior-Expertise",
    subtitle:
      "Direkte Kommunikation mit der Person, die die Arbeit macht. Keine Account-Manager dazwischen.",
    skillsLabel: "Kenntnisse",
    languagesLabel: "Sprachen",
    availableBanner:
      "Verfügbar für neue Kunden in Berlin und der DACH-Region",
    languagesBanner: "· Englisch · Deutsch · Arabisch ·",
    aboutLink: "Mehr über uns →",
    langNames: { arabic: "Arabisch", english: "Englisch", german: "Deutsch" },
    langLevels: { native: "Muttersprache", b2: "B2", basic: "Grundkenntnisse" },
    members: [
      {
        role: "IT-Support · Webentwicklung · KI & Automatisierung",
        bio: "Informatik-Student mit praktischer Erfahrung in IT-Support, moderner Webentwicklung und KI-Workflow-Automatisierung. Verbindet Technologie und Geschäftsziele effizient.",
        skills: ["React / Next.js", "Python", "n8n / Claude API", "Linux & Windows", "SQL & Data"],
      },
    ],
  },
  contact: {
    label: "Kontakt",
    title: "Bereit",
    highlight: "loszulegen?",
    subtitle:
      "Erzählen Sie uns von Ihrem Unternehmen und Ihren IT-Bedürfnissen — wir melden uns innerhalb von 24 Stunden.",
    whyLabel: "Warum SysNova?",
    reasons: [
      "Kostenlose 30-Min-Beratung",
      "Schnelle Reaktion — keine Agentur-Verzögerungen",
      "Mehrsprachig: EN · DE · AR",
      "Transparente Preise, keine versteckten Gebühren",
      "Berlin-basiert, auch vor Ort verfügbar",
    ],
    directLabel: "Oder direkt erreichen",
    addressLabel: "Standort",
    mapLink: "Auf Google Maps anzeigen",
    googleReviewLabel: "Jetzt auf Google bewerten",
    form: {
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "ihre@email.de",
      companyPlaceholder: "Firmenname (optional)",
      messagePlaceholder: "Beschreiben Sie Ihre IT-Bedürfnisse...",
      nameLabel: "Name",
      emailLabel: "E-Mail",
      companyLabel: "Unternehmen",
      messageLabel: "Nachricht",
      submit: "Nachricht senden",
      sending: "Wird gesendet…",
      otpTitle: "Posteingang prüfen",
      otpSubtitle: "Wir haben einen 6-stelligen Code gesendet an",
      otpLabel: "Bestätigungscode",
      otpPlaceholder: "123456",
      otpVerify: "Verifizieren & Senden",
      otpResend: "Code erneut senden",
      otpBack: "Zurück",
    },
    validation: {
      nameRequired: "Name ist erforderlich",
      emailRequired: "E-Mail ist erforderlich",
      emailInvalid: "Bitte gültige E-Mail eingeben",
      messageRequired: "Nachricht ist erforderlich",
      apiFallback:
        "Etwas ist schiefgelaufen — bitte erneut versuchen oder schreiben Sie uns an {email}.",
      otpRequired: "Bitte geben Sie den Bestätigungscode ein",
      otpInvalid: "Ungültiger oder abgelaufener Code — bitte erneut versuchen",
      sendFailed: "Etwas ist schiefgelaufen — bitte erneut versuchen.",
    },
    success: {
      heading: "Nachricht erhalten!",
      body: "Wir melden uns innerhalb von 24 Stunden.",
      again: "Weitere Nachricht senden",
    },
  },
  footer: {
    tagline:
      "Moderne IT-Dienstleistungen für wachsende Unternehmen in Berlin und der DACH-Region.",
    location: "Berlin, Deutschland · 2025",
    nav: "Navigation",
    contact: "Kontakt",
    languages: "Verfügbar auf Englisch, Deutsch & Arabisch",
    copyright: "© 2026 SysNova. Alle Rechte vorbehalten.",
    slogan: "Wir bauen, verwalten und automatisieren Ihre IT.",
    impressum: "Impressum",
    privacy: "Datenschutz",
    cookieSettings: "Cookie-Einstellungen",
  },
  stats: {
    sectionLabel: "Unsere Zahlen",
    clientsNum: "5,0★",
    responseNum: "<4h",
    languagesNum: "3",
    teamNum: "1",
    clientsLabel: "Google-Bewertung",
    clientsSubLabel: "(9 Bewertungen)",
    responseLabel: "Ø Reaktionszeit",
    languagesLabel: "Sprachen",
    teamLabel: "IT-Spezialist",
    ariaLabels: {
      rating: "5,0 von 5 Sternen Google-Bewertung",
      response: "Durchschnittliche Reaktionszeit unter 4 Stunden",
      languages: "Support in 3 Sprachen",
      team: "1 IT-Spezialist",
    },
  },
  howItWorks: {
    label: "Unser Ablauf",
    title: "Wie wir",
    highlight: "es umsetzen",
    subtitle: "Drei einfache Schritte vom ersten Kontakt bis zur fertigen Lösung.",
    steps: [
      {
        title: "Kostenlose Beratung",
        description: "Schildern Sie uns Ihre IT-Bedürfnisse in einem kostenlosen 30-minütigen Gespräch — kein Verkaufsdruck, nur ein offenes Gespräch.",
      },
      {
        title: "Wir legen los",
        description: "Wir setzen die Lösung schnell um — Cloud-Einrichtung, Netzwerk-Installation oder Automatisierung. Minimale Unterbrechung Ihres Tagesgeschäfts.",
      },
      {
        title: "Laufender Support",
        description: "Wir bleiben an Ihrer Seite mit Monitoring, Wartung und schneller Reaktion. Sie sind nie auf sich allein gestellt.",
      },
    ],
  },
  testimonials: {
    label: "Kundenbewertungen",
    title: "Was unsere",
    highlight: "Kunden sagen",
    items: [
      {
        text: "Wir hatten lange eine veraltete Website, die kaum Kunden brachte. SysNova hat uns eine neue Landing Page erstellt, die wirklich beeindruckend ist. Absolute Empfehlung!",
        name: "Kado K.",
        company: "via Google ★★★★★",
        service: "Webentwicklung",
      },
      {
        text: "Ein sehr freundliches Team mit viel Fachwissen. Sie haben mir nicht nur eine moderne Website erstellt, sondern auch alles verständlich erklärt. Ich fühle mich jetzt viel sicherer im Umgang mit meiner Website.",
        name: "Osama A.",
        company: "via Google ★★★★★",
        service: "Webentwicklung",
      },
      {
        text: "Ich bin absolut begeistert von der Zusammenarbeit! Meine Website sieht jetzt professionell und ansprechend aus. Auch bei technischen Problemen wurde ich immer schnell und kompetent unterstützt.",
        name: "Hamza H.",
        company: "via Google ★★★★★",
        service: "Web & IT-Support",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Häufig gestellte",
    highlight: "Fragen",
    items: [
      {
        question: "Arbeiten Sie nur in Berlin?",
        answer: "Unsere Remote-Leistungen — Cloud-Architektur, IT-Support, Webentwicklung und KI-Automatisierung — decken ganz Deutschland und die DACH-Region ab. Vor-Ort-Besuche sind auf den Raum Berlin beschränkt.",
      },
      {
        question: "Gibt es eine Mindestvertragslaufzeit?",
        answer: "Kein Lock-in. Monatspakete können mit 30 Tagen Frist gekündigt werden. Stundenprojekte werden nach Abschluss abgerechnet — keine Langzeitverpflichtung erforderlich.",
      },
      {
        question: "Wie schnell reagieren Sie bei dringenden Problemen?",
        answer: "Business-Kunden erhalten 4h SLA, Pro-Kunden 1h. Starter-Kunden werden innerhalb von 24 Stunden bedient. Bei kritischen Ausfällen priorisieren wir immer — unabhängig vom Paket.",
      },
      {
        question: "Unterzeichnen Sie NDAs?",
        answer: "Ja, wir unterzeichnen gerne eine gegenseitige NDA bevor ein Projekt beginnt. DSGVO-Konformität und Datenschutz sind in allen unseren Projekten selbstverständlich.",
      },
      {
        question: "Welche Zahlungsmethoden akzeptieren Sie?",
        answer: "Banküberweisung (SEPA) und PayPal. Rechnungen werden nach jedem Monat oder Projektmeilenstein gestellt. Neukunden können um eine kleine Anzahlung gebeten werden.",
      },
      {
        question: "Kann ich mit nur einem Service starten?",
        answer: "Natürlich. Viele Kunden starten mit einer einzelnen Aufgabe — einer Website, einem Netzwerk-Setup oder einem Automatisierungs-Workflow — und erweitern dann. Kein Vollpaket vorab nötig.",
      },
    ],
  },
  cookieBanner: {
    ariaLabel: "Cookie-Hinweis und Datenschutzeinstellungen",
    title: "Wir nutzen Cookies",
    description:
      "Wir verwenden Google Analytics, um zu verstehen, wie Besucher unsere Website nutzen. Es werden keine persönlichen Daten verkauft. Sie können jederzeit zustimmen oder ablehnen.",
    accept: "Alle akzeptieren",
    decline: "Ablehnen",
    acceptAriaLabel: "Alle Cookies akzeptieren",
    declineAriaLabel: "Alle Cookies ablehnen",
    learnMore: "Datenschutz",
  },
  about: {
    label: "Über uns",
    headline1: "Der Kopf hinter",
    headline2: "SysNova",
    subtitle: "Ein Spezialist, eine Mission: schnelle, ehrliche und bezahlbare IT für Unternehmen in Berlin.",
    storyLabel: "Meine Geschichte",
    storyTitle: "Aufgebaut aus echter",
    storyHighlight: "Erfahrung",
    storyParagraphs: [
      "Ich bin Wasiem Abd Albaki — IT-Ingenieur aus Berlin mit mehr als 3 Jahren Erfahrung in Webentwicklung, Cloud-Architektur, IT-Support und KI-Automatisierung.",
      "SysNova habe ich 2025 gegründet, weil ich gesehen habe, wie kleine Unternehmen von großen Agenturen überteuert und schlecht bedient werden. Meine Kunden sprechen direkt mit mir — ohne Account-Manager, ohne Ticket-Warteschlangen, ohne versteckte Kosten.",
      "Ich spreche Arabisch, Deutsch und Englisch. Das ermöglicht mir, Berliner Unternehmen — auch aus der arabischsprachigen Community — in ihrer eigenen Sprache zu helfen.",
      "Ob neue Website, IT-Betreuung oder Prozessautomatisierung: Sie bekommen Enterprise-Qualität zum KMU-Preis — und immer einen direkten Ansprechpartner.",
    ],
    valuesLabel: "Wofür wir stehen",
    valuesTitle: "Unsere",
    valuesHighlight: "Werte",
    values: [
      {
        title: "Direkte Kommunikation",
        description: "Sie sprechen mit dem Ingenieur, nicht mit einem Mittelsmann. Klar, ehrlich und ohne Fachjargon.",
      },
      {
        title: "Schnelle Reaktion",
        description: "IT-Probleme warten nicht auf Geschäftszeiten. Wir reagieren schnell — weil Ihre Ausfallzeit Geld kostet.",
      },
      {
        title: "Transparente Preise",
        description: "Was wir anbieten, das zahlen Sie. Keine versteckten Gebühren, keine Überraschungen, kein Agentur-Aufschlag.",
      },
      {
        title: "Mehrsprachiger Support",
        description: "Wir arbeiten auf Englisch, Deutsch und Arabisch — damit nichts in der Übersetzung verloren geht.",
      },
    ],
    missionLabel: "Unsere Mission",
    mission: "Jedem Unternehmen — egal wie groß — Zugang zu IT-Qualität auf Enterprise-Niveau zu ermöglichen, ohne den Enterprise-Preis.",
    ctaTitle: "Bereit, mit uns zu arbeiten?",
    ctaButton: "Kostenlose Beratung anfragen",
    backHome: "Zurück zur Startseite",
  },
  portfolio: {
    label: "Unsere Arbeit",
    title: "Projekte auf die",
    highlight: "wir stolz sind",
    subtitle: "Echte Projekte für echte Unternehmen — von Websites bis KI-Automatisierungen.",
    filterAll: "Alle",
    categoryWebdev: "Web Development",
    categoryAi: "KI-Automatisierung",
    categoryCloud: "Cloud",
    ctaTeaser: "Ihr Projekt könnte hier stehen —",
    backLink: "← Zurück zu SysNova",
    emptyState: "Noch keine Projekte in dieser Kategorie",
    projects: [
      {
        title: "Nour — Hochzeitsfotografie",
        description:
          "Professionelle Website für einen Berliner Hochzeitsfotografen. Mehrsprachiges Galerie-System (DE/AR), Kontaktformular mit E-Mail-Integration und vollständige Mobile-Optimierung.",
      },
      {
        title: "Kosmetikstudio — Natürliche Schönheit",
        description:
          "Moderne Website für ein Kosmetikstudio. Elegantes Design mit Leistungsübersicht, Buchungsbereich und vollständiger Mobile-Optimierung — für ein erstklassiges Beauty-Erlebnis.",
      },
    ],
  },
  servicePages: {
    webdev: {
      hero: {
        label: "Webentwicklung",
        title: "Moderne Websites & Web-Apps",
        subtitle:
          "Wir entwickeln schnelle, SEO-optimierte Websites und Web-Apps mit React & Next.js. Domain, Hosting und SSL inklusive.",
      },
      process: {
        title: "So arbeiten wir",
        steps: [
          {
            title: "Beratungsgespräch",
            description:
              "Wir analysieren Ihre Anforderungen, Ziele und Zielgruppe in einem kostenlosen 30-minütigen Gespräch — ohne Verpflichtung.",
          },
          {
            title: "Design & Konzept",
            description:
              "Wir erstellen ein auf Ihre Marke zugeschnittenes Designkonzept. Sie überprüfen und genehmigen es, bevor wir eine einzige Zeile Code schreiben.",
          },
          {
            title: "Entwicklung",
            description:
              "Sauberer Code mit React / Next.js — schnell ladend, barrierefrei und SEO-ready vom ersten Tag an.",
          },
          {
            title: "Risikofreie Lieferung",
            description:
              "Wir liefern die fertige Website zur Prüfung. Sie zahlen nur, wenn Sie zu 100 % zufrieden sind. Keine Zufriedenheit — keine Rechnung. Null Risiko für Sie.",
          },
        ],
      },
      benefits: {
        title: "Warum SysNova",
        items: [
          {
            title: "Blitzschnell",
            description:
              "Optimiert für Core Web Vitals und Google PageSpeed. Schnelle Seiten ranken besser und konvertieren mehr.",
          },
          {
            title: "SEO-ready von Anfang an",
            description:
              "Korrekte HTML-Struktur, Meta-Tags, Schema-Markup und Sitemap — alles standardmäßig enthalten.",
          },
          {
            title: "Mobil-first Design",
            description:
              "Sieht auf jedem Gerät perfekt aus und funktioniert einwandfrei — vom Smartphone bis zum Breitbildmonitor.",
          },
          {
            title: "Wartung inklusive",
            description:
              "Kein Kopfzerbrechen nach dem Launch. Wir übernehmen Updates, Sicherheits-Patches und Inhaltsänderungen.",
          },
        ],
      },
      cta: {
        title: "Bereit für Ihre neue Website?",
        button: "Kostenlose Beratung anfragen",
      },
      back: "← Zurück zu SysNova",
      stats: [
        { value: "< 1s", label: "Ladezeit (Lighthouse)" },
        { value: "100 %", label: "Mobil-optimiert" },
        { value: "SSL", label: "Inklusive & automatisch" },
        { value: "∞", label: "Revisionen bis zur Abnahme" },
      ],
      scope: {
        title: "Was ist enthalten",
        intro:
          "Vom ersten Gespräch bis zum Live-Gang übernehmen wir alles — damit Sie sich auf Ihr Business konzentrieren können. Keine technischen Vorkenntnisse erforderlich, kein Wirrwarr mit verschiedenen Dienstleistern.",
        includes: [
          "Design & Konzept (auf Ihre Marke zugeschnitten)",
          "React / Next.js Entwicklung",
          "Mobile-First & vollständig Responsive",
          "SEO-Grundoptimierung (Meta-Tags, Schema, Sitemap)",
          "Domain- & Hosting-Setup",
          "SSL-Zertifikat (automatisch & kostenlos)",
          "Kontaktformular mit Spam-Schutz",
          "Google Analytics / Vercel Analytics Integration",
          "30 Tage kostenloser Support nach Launch",
          "Quellcode-Übergabe — die Website gehört Ihnen",
        ],
        excludes: [
          "Redaktionelle Texte (außer auf Anfrage — wir helfen gern)",
          "Produktfotografie & professionelle Bildbearbeitung",
          "Laufende monatliche Pflege (separates Retainer-Angebot verfügbar)",
        ],
      },
      techStack: {
        title: "Unser Tech-Stack",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Vercel",
          "AWS / Hetzner",
          "Framer Motion",
          "Resend",
          "SEO & Schema-Markup",
        ],
      },
      targetClients: {
        title: "Für wen ist das richtig?",
        intro:
          "Wir bauen Websites für kleine Berliner Unternehmen — die eine professionelle Online-Präsenz brauchen, aber keine Zeit für bürokratische Agenturen haben.",
        items: [
          "Restaurants & Cafés",
          "Handwerker & Handwerksbetriebe",
          "Start-ups & Gründer",
          "Einzelhändler & Boutiquen",
          "Arabischsprachige Unternehmen",
        ],
      },
      faq: {
        title: "Häufige Fragen",
        items: [
          {
            question: "Wie lange dauert die Entwicklung einer Website?",
            answer:
              "Eine Unternehmenswebsite mit fünf bis acht Seiten ist in der Regel in zwei bis vier Wochen fertig. Das hängt davon ab, wie schnell Inhalte und Feedback geliefert werden. Wir arbeiten strukturiert mit klaren Meilensteinen und halten Sie in jeder Phase auf dem Laufenden — keine langen Wartezeiten, keine Überraschungen kurz vor dem Launch.",
          },
          {
            question: "Kann ich meine bestehende Domain behalten?",
            answer:
              "Ja. Wir migrieren Ihre Domain zum neuen Hosting-Setup — inklusive DNS-Konfiguration, SSL-Einrichtung und Redirect-Management für bestehende URLs. Falls Sie noch keine Domain haben, helfen wir bei der Auswahl und Registrierung. Der Übergang ist für Ihre Besucher nahtlos, ohne Ausfallzeit.",
          },
          {
            question: "Wird die Website auch auf Smartphones gut aussehen?",
            answer:
              "Absolut. Alle unsere Websites sind Mobile-First entwickelt — wir designen zuerst für Smartphones, dann für Tablets und Desktop. Über 70 Prozent Ihrer Besucher kommen vom Handy. Eine Website, die auf dem Smartphone nicht einwandfrei funktioniert, kostet Sie täglich Kunden.",
          },
          {
            question: "Was passiert nach dem Launch?",
            answer:
              "Wir begleiten Sie 30 Tage nach dem Launch kostenlos: kleine Änderungen, Tippfehler, Fragen zur Verwaltung — wir sind per WhatsApp erreichbar. Danach bieten wir optionale Wartungsverträge an. Der Quellcode gehört vollständig Ihnen, und die Website läuft auf Ihrer eigenen Infrastruktur.",
          },
          {
            question: "Ich habe noch keine Texte — ist das ein Problem?",
            answer:
              "Nein. Wir helfen Ihnen beim Texten. Im Erstgespräch erfahren wir, was Ihr Unternehmen ausmacht, und entwickeln Texte, die zu Ihrer Zielgruppe und Ihrem Ton passen. Alternativ liefern Sie Stichpunkte, wir schreiben den Rest. Keine Agentur-Bürokratie, direkte Abstimmung per WhatsApp oder E-Mail.",
          },
        ],
      },
    },
    ai: {
      hero: {
        label: "KI-Automatisierung",
        title: "Workflows automatisieren",
        subtitle:
          "Wir entwickeln KI-gestützte Automatisierungen, die repetitive Aufgaben eliminieren, Ihre Tools verbinden und wöchentlich Stunden sparen.",
      },
      process: {
        title: "So arbeiten wir",
        steps: [
          {
            title: "Prozessanalyse",
            description:
              "Wir erfassen Ihre aktuellen Abläufe und identifizieren Aufgaben mit dem höchsten Automatisierungspotenzial — Dateneingabe, E-Mails, Berichte und mehr.",
          },
          {
            title: "KI-Strategie",
            description:
              "Wir wählen die richtigen Modelle und Tools für Ihren Anwendungsfall — ChatGPT, Claude, n8n, Zapier oder individuelle API-Integrationen.",
          },
          {
            title: "Integration",
            description:
              "Wir verbinden die Automatisierung nahtlos mit Ihrer bestehenden Software — CRM, E-Mail, Kalender, Tabellen oder Datenbanken.",
          },
          {
            title: "Monitoring & Optimierung",
            description:
              "Wir richten Dashboards und Alerts ein, damit Sie die Ergebnisse verfolgen können. Wir optimieren die Automatisierung kontinuierlich.",
          },
        ],
      },
      benefits: {
        title: "Warum SysNova",
        items: [
          {
            title: "Bis zu 80% weniger Aufwand",
            description:
              "Wiederkehrende Aufgaben laufen automatisch — Ihr Team konzentriert sich auf das, was wirklich zählt.",
          },
          {
            title: "24/7 aktiv",
            description:
              "Ihre Automatisierungen machen keine Pause. Sie laufen rund um die Uhr, auch am Wochenende.",
          },
          {
            title: "Skalierbar",
            description:
              "Automatisierungen wachsen mit Ihrem Unternehmen. Neue Workflows lassen sich jederzeit hinzufügen.",
          },
          {
            title: "Messbare Ergebnisse",
            description:
              "KPIs und Reports vom ersten Tag an — damit Sie immer genau wissen, welchen Mehrwert die Automatisierung liefert.",
          },
        ],
      },
      cta: {
        title: "Bereit, Ihr Business zu automatisieren?",
        button: "Kostenlose Beratung anfragen",
      },
      back: "← Zurück zu SysNova",
    },
    cloud: {
      hero: {
        label: "Cloud-Architektur",
        title: "Ihre Cloud-Infrastruktur, professionell aufgebaut",
        subtitle:
          "AWS, Azure & GCP — Migration von On-Premise, Kostenoptimierung und IAM-Konfiguration. Sicher, skalierbar, für KMU gemacht.",
      },
      process: {
        title: "So arbeiten wir",
        steps: [
          {
            title: "Analyse & Bedarfsermittlung",
            description:
              "Wir erfassen Ihre aktuelle IT-Landschaft, Ihr Budget und Ihre Wachstumsziele in einem kostenlosen Gespräch.",
          },
          {
            title: "Cloud-Strategie",
            description:
              "Wir wählen den richtigen Provider (AWS, Azure oder GCP) und die optimale Architektur für Ihre Anforderungen.",
          },
          {
            title: "Migration & Einrichtung",
            description:
              "Schrittweise Migration Ihrer Systeme — ohne Ausfallzeiten. Wir richten Netzwerke, Sicherheitsgruppen und IAM-Rollen ein.",
          },
          {
            title: "Monitoring & Optimierung",
            description:
              "Alerts, Kostenüberwachung und regelmäßige Reviews — damit Ihre Cloud effizient läuft und keine Überraschungen entstehen.",
          },
        ],
      },
      benefits: {
        title: "Warum SysNova",
        items: [
          {
            title: "Kein Overengineering",
            description:
              "Wir bauen nur, was Sie wirklich brauchen — keine unnötigen Dienste, keine versteckten Kosten.",
          },
          {
            title: "Sicherheit von Anfang an",
            description:
              "IAM, Firewalls und Verschlüsselung sind Standard — keine nachträglichen Patches.",
          },
          {
            title: "Skalierbar mit Ihrem Wachstum",
            description:
              "Ihre Cloud wächst mit Ihnen. Neue Services lassen sich jederzeit hinzufügen.",
          },
          {
            title: "Kostenoptimierung inklusive",
            description:
              "Wir konfigurieren Budget-Alerts und empfehlen Reserved Instances — damit Sie nicht zu viel zahlen.",
          },
        ],
      },
      cta: {
        title: "Bereit für die Cloud?",
        button: "Kostenlose Beratung anfragen",
      },
      back: "← Zurück zu SysNova",
    },
    itsupport: {
      hero: {
        label: "IT-Support",
        title: "Schneller IT-Support für Ihr Unternehmen",
        subtitle:
          "Fernwartung, Vor-Ort-Service in Berlin, System-Administration und Incident Response — persönlich, schnell und erschwinglich.",
      },
      process: {
        title: "So arbeiten wir",
        steps: [
          {
            title: "Ticketing & Erstreaktion",
            description:
              "Sie melden ein Problem per E-Mail, WhatsApp oder Telefon — wir reagieren innerhalb von 2 Stunden.",
          },
          {
            title: "Fernwartung",
            description:
              "In den meisten Fällen lösen wir Ihr Problem per Remote-Session via TeamViewer oder RustDesk — ohne Wartezeit.",
          },
          {
            title: "Vor-Ort-Einsatz",
            description:
              "Wenn Remote nicht ausreicht, kommen wir zu Ihnen — im Berliner Stadtgebiet innerhalb von 24 Stunden.",
          },
          {
            title: "Dokumentation & Prävention",
            description:
              "Jeder Vorfall wird dokumentiert. Wir empfehlen Maßnahmen, damit das Problem nicht wiederkommt.",
          },
        ],
      },
      benefits: {
        title: "Warum SysNova",
        items: [
          {
            title: "Mehrsprachig (DE · EN · AR)",
            description:
              "Unser Team spricht Deutsch, Englisch und Arabisch — keine Sprachbarriere, kein Missverständnis.",
          },
          {
            title: "Kein langer Vertrag",
            description:
              "Stunden-basiert oder als monatliches Retainer — Sie wählen, was zu Ihnen passt.",
          },
          {
            title: "Windows & Linux",
            description:
              "Wir unterstützen alle gängigen Betriebssysteme und Server-Umgebungen.",
          },
          {
            title: "Persönlicher Ansprechpartner",
            description:
              "Kein anonymes Call-Center. Sie haben einen festen Ansprechpartner, der Ihre Infrastruktur kennt.",
          },
        ],
      },
      cta: {
        title: "IT-Problem? Wir helfen schnell.",
        button: "Kostenlose Beratung anfragen",
      },
      back: "← Zurück zu SysNova",
      stats: [
        { value: "<4h", label: "Fernwartungs-Reaktionszeit" },
        { value: "24h", label: "Vor-Ort-Service in Berlin" },
        { value: "3", label: "Sprachen: DE · EN · AR" },
        { value: "0", label: "Monate Mindestlaufzeit" },
      ],
      scope: {
        title: "Leistungsübersicht",
        intro:
          "Von Fernwartung bis Vor-Ort-Einsatz — unser IT-Support deckt den gesamten Alltag kleiner Berliner Unternehmen ab. Kein Problem ist zu klein, kein Einsatz zu kurzfristig. Sie konzentrieren sich auf Ihr Business, wir kümmern uns um Ihre IT.",
        includes: [
          "Fernwartung & Helpdesk per TeamViewer / RustDesk",
          "Windows 10/11, Windows Server & Active Directory",
          "macOS & Linux (Ubuntu, Debian, CentOS)",
          "Drucker, Scanner & Peripheriegeräte",
          "Netzwerk, Router & WLAN-Optimierung",
          "E-Mail, Microsoft 365 & Google Workspace",
          "Datensicherung & Disaster Recovery",
          "Virenerkennung & Malware-Entfernung",
          "Software-Installation & Updates",
          "Vor-Ort-Einsatz im gesamten Berliner Stadtgebiet",
          "Ticketsystem & lückenlose Dokumentation",
          "Arabischsprachiger Support auf Anfrage",
        ],
        excludes: [
          "Neugeräte-Kauf (wir empfehlen, kaufen Sie beim Händler Ihrer Wahl)",
          "Vertragsverhandlungen mit Internet-Providern",
          "Buchhaltungssoftware-Schulungen & Steuerthemen",
        ],
      },
      techStack: {
        title: "Tools & Technologien",
        items: [
          "TeamViewer",
          "RustDesk",
          "Windows Server",
          "Active Directory",
          "Microsoft 365",
          "Linux (Ubuntu/Debian)",
          "macOS",
          "pfSense",
          "Veeam Backup",
          "Synology NAS",
        ],
      },
      targetClients: {
        title: "Für wen ist das geeignet?",
        intro:
          "SysNova IT-Support ist auf kleine Berliner Unternehmen zugeschnitten — ohne die Bürokratie großer IT-Dienstleister, ohne Mindestvertrag, ohne Call-Center.",
        items: [
          "Restaurants & Gastronomie",
          "Handwerk & Bauwesen",
          "Einzelhandel & Boutiquen",
          "Kanzleien & Büros",
          "Arabischsprachige Unternehmen in Berlin",
          "Start-ups & KMU",
        ],
      },
      arabicCallout: {
        badge: "عربي",
        heading: "IT-Support auf Arabisch",
        body:
          "Berlin hat eine der größten arabischsprachigen Geschäftsgemeinschaften Deutschlands. Unser Gründer spricht Arabisch als Muttersprache — fließend, ohne Missverständnisse. Egal ob Sie aus dem Libanon, Syrien, Ägypten oder einem anderen arabischen Land kommen: Wir verstehen Ihr Business und lösen Ihre IT-Probleme in Ihrer Sprache. Arabische Tastaturlayouts, arabisch konfigurierte Systeme und arabischsprachiger E-Mail-Verkehr sind für uns selbstverständlich.",
      },
      faq: {
        title: "Häufige Fragen",
        items: [
          {
            question: "Wie schnell reagiert SysNova auf IT-Probleme?",
            answer:
              "Bei Fernwartungsanfragen reagieren wir in der Regel innerhalb von zwei Stunden — oft deutlich schneller. Bei kritischen Ausfällen wie einem kompromittierten System oder einem nicht erreichbaren Server priorisieren wir den Einsatz sofort. Für Vor-Ort-Termine im Berliner Stadtgebiet koordinieren wir innerhalb von 24 Stunden. Sie erreichen uns per WhatsApp, E-Mail und Telefon.",
          },
          {
            question: "Bietet ihr auch Vor-Ort-Service im gesamten Berliner Stadtgebiet an?",
            answer:
              "Ja. Wir fahren in alle 12 Berliner Bezirke — von Mitte und Kreuzberg bis Spandau und Marzahn. Für Neuköllner, Wedding und Charlottenburger Adressen sind wir besonders häufig unterwegs. Bei Bedarf koordinieren wir auch Einsätze im Berliner Umland. Fahrtkosten innerhalb des Berliner Stadtgebiets werden nicht gesondert berechnet.",
          },
          {
            question: "Welche Betriebssysteme und Geräte werden unterstützt?",
            answer:
              "Wir unterstützen Windows 10 und 11, Windows Server (2016, 2019, 2022), macOS sowie gängige Linux-Distributionen wie Ubuntu und Debian. Dazu kommen Netzwerkgeräte (Router, Switches, Access Points verschiedener Hersteller), Drucker und Scanner, NAS-Systeme (Synology, QNAP) sowie mobile Endgeräte. Kurz: alles, was in einem typischen KMU-Büro steht.",
          },
          {
            question: "Muss ich einen langen Vertrag unterschreiben?",
            answer:
              "Nein. Wir bieten zwei Modelle: stundenbasiert, d.h. Sie zahlen nur was Sie nutzen — und als monatliches Retainer-Paket mit einer festen Stundenzahl für planbare Kosten. Beide Optionen sind monatlich kündbar. Keine Mindestlaufzeit, kein Kleingedrucktes, keine versteckten Klauseln.",
          },
          {
            question: "Was kostet IT-Support bei SysNova?",
            answer:
              "Wir arbeiten stunden- oder paketbasiert. Die genauen Konditionen besprechen wir im kostenlosen Erstgespräch — weil jedes Unternehmen andere Anforderungen hat. Was wir garantieren: keine versteckten Fahrtkosten innerhalb Berlins und keine Mindestabrechnung für Remote-Einsätze. Fragen Sie uns einfach an.",
          },
          {
            question: "Wird IT-Support auch auf Arabisch angeboten?",
            answer:
              "Ja. Unser Gründer spricht Arabisch als Muttersprache. Arabischsprachige Unternehmer in Berlin können uns direkt auf Arabisch per WhatsApp, Telefon oder E-Mail kontaktieren. Das umfasst arabische Tastaturlayouts, arabischsprachige Software und auf Arabisch konfigurierte Geräte. Kein Dolmetscher, kein Missverständnis.",
          },
          {
            question: "Wie läuft ein typischer Fernwartungs-Einsatz ab?",
            answer:
              "Sie kontaktieren uns per WhatsApp oder E-Mail und beschreiben das Problem. Wir vereinbaren einen Termin — oft noch am selben Tag. Dann verbinden wir uns per TeamViewer oder RustDesk mit Ihrem Gerät und beheben das Problem direkt. Nach dem Einsatz erhalten Sie eine kurze Dokumentation mit Ursache und Lösung, damit das Problem nicht wiederkommt.",
          },
        ],
      },
    },
    network: {
      hero: {
        label: "Netzwerk & PC-Support",
        title: "Stabile Netzwerke & einwandfreie PCs",
        subtitle:
          "Router, Switches, WLAN-Optimierung und vollständige PC-Einrichtung — professionell installiert und gewartet für Berliner Unternehmen.",
      },
      process: {
        title: "So arbeiten wir",
        steps: [
          {
            title: "Netzwerk-Analyse",
            description:
              "Wir erfassen Ihre bestehende Infrastruktur und identifizieren Schwachstellen wie tote WLAN-Zonen oder Flaschenhälse.",
          },
          {
            title: "Planung & Beschaffung",
            description:
              "Wir erstellen einen Netzwerkplan und empfehlen die passende Hardware — ohne teure Überausstattung.",
          },
          {
            title: "Installation vor Ort",
            description:
              "Verkabelung, Switch-Konfiguration, WLAN-Ausleuchtung und PC-Einrichtung — alles aus einer Hand.",
          },
          {
            title: "Test & Übergabe",
            description:
              "Wir testen jedes Gerät und jeden Anschluss. Sie erhalten eine vollständige Dokumentation Ihrer Infrastruktur.",
          },
        ],
      },
      benefits: {
        title: "Warum SysNova",
        items: [
          {
            title: "Alles aus einer Hand",
            description:
              "Von der Planung bis zur Einrichtung — ein Ansprechpartner, kein Koordinationsaufwand.",
          },
          {
            title: "Berliner Vor-Ort-Service",
            description:
              "Wir kommen zu Ihnen — im gesamten Berliner Stadtgebiet und Umgebung.",
          },
          {
            title: "Business-Hardware zu fairen Preisen",
            description:
              "Wir beschaffen zuverlässige Hardware zu günstigen Preisen und ohne Herstellerbindung.",
          },
          {
            title: "WLAN für jeden Raum",
            description:
              "Professionelle Ausleuchtung mit Access Points — keine toten Zonen mehr in Ihren Büroräumen.",
          },
        ],
      },
      cta: {
        title: "Netzwerkprobleme lösen?",
        button: "Kostenlose Beratung anfragen",
      },
      back: "← Zurück zu SysNova",
    },
    cctv: {
      hero: {
        label: "CCTV & Videoüberwachung",
        title: "Professionelle Videoüberwachung für Ihr Unternehmen",
        subtitle:
          "Sicherheitskameras, NVR/DVR-Einrichtung und Fernzugriff — diskret installiert, DSGVO-konform, für Berliner Gewerbeimmobilien.",
      },
      process: {
        title: "So arbeiten wir",
        steps: [
          {
            title: "Sicherheitsanalyse",
            description:
              "Wir besichtigen Ihr Objekt und ermitteln optimale Kamerapositionen für lückenlose Abdeckung.",
          },
          {
            title: "Systemplanung",
            description:
              "Wir empfehlen das passende Kamerasystem (IP/Analog, Innen/Außen) und dimensionieren NVR/DVR und Speicher.",
          },
          {
            title: "Professionelle Installation",
            description:
              "Saubere Kabelführung, sichere Montage und vollständige Konfiguration — inklusive Smartphone-Fernzugriff.",
          },
          {
            title: "Übergabe & Support",
            description:
              "Wir schulen Sie im Umgang mit dem System und stehen für Wartung und Erweiterungen langfristig zur Verfügung.",
          },
        ],
      },
      benefits: {
        title: "Warum SysNova",
        items: [
          {
            title: "DSGVO-konform",
            description:
              "Wir installieren und konfigurieren datenschutzgerecht — Hinweisschilder, Speicherfristen und Löschkonzept inklusive.",
          },
          {
            title: "Fernzugriff per Smartphone",
            description:
              "Sehen Sie jederzeit und überall, was auf Ihrem Gelände passiert — in Echtzeit auf Ihrem Handy.",
          },
          {
            title: "Skalierbar",
            description:
              "Starten Sie mit wenigen Kameras und erweitern Sie das System bei Bedarf — ohne Neuinstallation.",
          },
          {
            title: "Gewerblich erprobt",
            description:
              "Wir arbeiten mit professioneller IP-Kameratechnik — für Läden, Büros, Lager und Außengelände.",
          },
        ],
      },
      cta: {
        title: "Möchten Sie Ihren Betrieb absichern?",
        button: "Kostenlose Beratung anfragen",
      },
      back: "← Zurück zu SysNova",
    },
  },
  blog: {
    insights: "Wissen & Einblicke",
    insightsSubtitle: "Praxisnahe IT-Tipps für kleine Unternehmen in Berlin — Kosten, Vergleiche und Schritt-für-Schritt-Anleitungen.",
    // Bindestrich am Ende ist Absicht: rendert als "IT-Blog" mit "Blog" im Gradient-Span.
    headingTitle: "IT-",
    headingHighlight: "Blog",
    readTime: "Lesezeit",
    readMore: "Weiterlesen →",
    backToBlog: "Zurück zum Blog",
    deOnlyTitle: "Dieser Artikel ist auf Deutsch",
    deOnlyBody: "Dieser Artikel ist nur auf Deutsch verfügbar.",
    authorName: "Wasiem Abd Albaki",
    authorRole: "IT-Consultant bei SysNova Berlin",
    relatedTitle: "Verwandte Artikel",
    webdesignBannerLabel: "Webdesign Agentur Berlin — Websites ab 500 €",
    webdesignBannerCta: "Mehr erfahren",
  },
  common: {
    relatedServices: "Verwandte Leistungen",
    whatsAppTooltip: "WhatsApp Chat starten",
    skipToMain: "Zum Hauptinhalt springen",
    languageSelection: "Sprachauswahl",
    langToggleEn: "Zu Englisch wechseln",
    langToggleDe: "Zu Deutsch wechseln",
    ratingLabel: "5 von 5 Sternen",
    scopeIncludes: "✓ Inklusive",
    scopeExcludes: "✗ Nicht inklusive",
    blogCta: {
      label: "Kostenlose Erstberatung",
      title: "Bereit, Ihr Projekt zu starten?",
      body: "Sie haben Fragen oder wollen direkt loslegen? Schreiben Sie uns — wir antworten innerhalb von 4 Stunden.",
    },
  },
};

export default de;
