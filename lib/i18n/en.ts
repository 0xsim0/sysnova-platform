import { Translations } from "./types";

const en: Translations = {
  nav: {
    services: "Services",
    pricing: "Pricing",
    team: "Team",
    about: "About",
    portfolio: "Portfolio",
    blog: "Blog",
    contact: "Contact",
    cta: "Free Consultation",
    primaryNavLabel: "Primary navigation",
    toggleMenuLabel: "Toggle menu",
    serviceLinks: [
      { label: "Cloud Architecture" },
      { label: "IT Support" },
      { label: "Web Development" },
      { label: "AI Automation" },
      { label: "Network & PC Support" },
      { label: "CCTV & Surveillance" },
    ],
  },
  hero: {
    badge: "Berlin · IT Services · Since 2025",
    headline1: "Your IT Partner &",
    headline2: "Web Development in ",
    headlineGradient: "Berlin",
    subline1: "So you can focus on your business.",
    subline2: "Cloud, support, web & AI workflows — personal, fast, affordable.",
    cta1: "Get Free Consultation",
    cta2: "See Our Services",
    trust: {
      berlin: "Based in Berlin",
      languages: "EN · DE · AR",
      noOverhead: "No agency overhead",
    },
  },
  services: {
    label: "What We Do",
    title: "Services built for",
    highlight: "real business needs",
    subtitle:
      "From cloud infrastructure to daily IT support — we handle the technical side so you can grow.",
    bookCta: "Free 30-min consultation available —",
    bookLink: "book yours today",
    learnMore: "Learn more",
    ctaTitle: "Not sure which service fits?",
    ctaButton: "Get a Free Consultation",
    portfolioLink: "See our work →",
    backLink: "← Back to SysNova",
    items: [
      {
        title: "Cloud Architecture",
        description:
          "AWS, Azure & GCP setup, migration from on-premise, cost optimization, security & IAM configuration.",
        details: [
          "Account setup & configuration",
          "Cloud migration",
          "Cost optimization",
          "Security & IAM",
        ],
      },
      {
        title: "IT Support",
        description:
          "Remote and on-site support for Berlin businesses. Windows & Linux administration, troubleshooting, incident response.",
        details: [
          "Remote via TeamViewer / RustDesk",
          "On-site (Berlin area)",
          "Windows & Linux admin",
          "Incident response",
        ],
      },
      {
        title: "Web Development",
        description:
          "Modern landing pages, business websites, and web apps. Domain, hosting, SSL — everything handled.",
        details: [
          "Landing pages & websites",
          "Web apps (React / Next.js)",
          "Domain, hosting, SSL",
          "Maintenance & updates",
        ],
      },
      {
        title: "AI Automation",
        description:
          "AI-powered business workflows, API integrations with Zapier / n8n, document and email automation.",
        details: [
          "AI-powered workflows",
          "API integrations (n8n / Zapier)",
          "Document automation",
          "Email & calendar bots",
        ],
      },
      {
        title: "Network & PC Support",
        description:
          "Router, switch & cable installation, WiFi setup, PC configuration and on-site troubleshooting for Berlin businesses.",
        details: [
          "Router & switch setup",
          "WiFi network setup",
          "PC setup & configuration",
          "On-site troubleshooting",
        ],
      },
      {
        title: "CCTV & Surveillance",
        description:
          "Professional security camera installation, NVR/DVR configuration, and remote monitoring setup for homes and businesses.",
        details: [
          "Camera installation",
          "NVR & DVR setup",
          "Remote monitoring access",
          "Maintenance & support",
        ],
      },
    ],
  },
  pricing: {
    label: "Transparent Pricing",
    title: "Simple plans,",
    highlight: "no surprises",
    subtitle:
      "Three flexible packages — pick the one that fits your business.",
    getStarted: "Get Started",
    packages: [
      {
        name: "Starter",
        description: "Perfect for small businesses that need reliable IT support.",
        features: [
          "5 hours IT support / month",
          "Remote troubleshooting",
          "Email & chat support",
          "Response within 24h",
          "Monthly status report",
          "Network & PC support",
        ],
      },
      {
        name: "Business",
        description: "The most popular choice — support plus cloud resources.",
        badge: "Most Popular",
        features: [
          "10 hours support / month",
          "1 cloud task / month",
          "Priority response (4h SLA)",
          "Remote & on-site (Berlin)",
          "Monthly review call",
          "Security monitoring",
          "Network & CCTV setup (1 task/month)",
        ],
      },
      {
        name: "Pro",
        description: "Unlimited support with full automation capabilities.",
        features: [
          "Unlimited IT support",
          "Full automation suite",
          "Dedicated account manager",
          "1h response SLA",
          "Cloud architecture review",
          "Custom AI workflows",
          "Full network & CCTV management",
        ],
      },
    ],
  },
  team: {
    label: "The Team",
    title: "Small team,",
    highlight: "senior expertise",
    subtitle:
      "Direct communication with the person doing the work. No account managers in between.",
    skillsLabel: "Skills",
    languagesLabel: "Languages",
    availableBanner: "Available for new clients in the Berlin / DACH region",
    languagesBanner: "· English · German · Arabic ·",
    aboutLink: "Learn more about us →",
    langNames: { arabic: "Arabic", english: "English", german: "German" },
    langLevels: { native: "Native", b2: "B2", basic: "Basic" },
    members: [
      {
        role: "IT Support · Web Dev · AI & Automation",
        bio: "Computer engineering student with hands-on experience in IT support, modern web development, and AI workflow automation. Bridges technology and business goals efficiently.",
        skills: ["React / Next.js", "Python", "n8n / Claude API", "Linux & Windows", "SQL & Data"],
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Ready to get",
    highlight: "started?",
    subtitle:
      "Tell us about your business and IT needs — we'll get back to you within 24 hours.",
    whyLabel: "Why SysNova?",
    reasons: [
      "Free 30-min consultation",
      "Fast response — no agency delays",
      "Multilingual: EN · DE · AR",
      "Transparent pricing, no hidden fees",
      "Berlin-based, available on-site",
    ],
    directLabel: "Or reach us directly",
    addressLabel: "Location",
    mapLink: "View on Google Maps",
    googleReviewLabel: "Review us on Google",
    form: {
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      companyPlaceholder: "Company name (optional)",
      messagePlaceholder: "Tell us about your IT needs...",
      nameLabel: "Name",
      emailLabel: "Email",
      companyLabel: "Company",
      messageLabel: "Message",
      submit: "Send Message",
      sending: "Sending…",
      otpTitle: "Check your inbox",
      otpSubtitle: "We sent a 6-digit code to",
      otpLabel: "Verification Code",
      otpPlaceholder: "123456",
      otpVerify: "Verify & Send",
      otpResend: "Resend code",
      otpBack: "Back",
    },
    validation: {
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Enter a valid email",
      messageRequired: "Message is required",
      apiFallback: "Something went wrong — please try again or contact us at {email}.",
      otpRequired: "Please enter the verification code",
      otpInvalid: "Invalid or expired code — please try again",
      sendFailed: "Something went wrong — please try again.",
    },
    success: {
      heading: "Message received!",
      body: "We'll get back to you within 24 hours.",
      again: "Send another message",
    },
  },
  footer: {
    tagline:
      "Modern IT services for growing businesses in Berlin and the DACH region.",
    location: "Berlin, Germany · 2025",
    nav: "Navigation",
    contact: "Contact",
    languages: "Available in English, German & Arabic",
    copyright: "© 2026 SysNova. All rights reserved.",
    slogan: "We build, manage, and automate your IT.",
    impressum: "Legal Notice",
    privacy: "Privacy Policy",
    cookieSettings: "Cookie Settings",
  },
  stats: {
    sectionLabel: "Our Numbers",
    clientsNum: "5.0★",
    responseNum: "<4h",
    languagesNum: "3",
    teamNum: "1",
    clientsLabel: "Google Rating",
    clientsSubLabel: "(9 reviews)",
    responseLabel: "Avg. Response Time",
    languagesLabel: "Languages Spoken",
    teamLabel: "IT Specialist",
    ariaLabels: {
      rating: "5.0 out of 5 stars Google rating",
      response: "Average response time under 4 hours",
      languages: "Support in 3 languages",
      team: "1 IT Specialist",
    },
  },
  howItWorks: {
    label: "Our Process",
    title: "How we",
    highlight: "get it done",
    subtitle: "Three simple steps from first contact to a fully working solution.",
    steps: [
      {
        title: "Free Consultation",
        description: "Tell us about your business and IT needs in a free 30-minute call. No commitment, no sales pressure — just an honest conversation.",
      },
      {
        title: "We Get to Work",
        description: "We implement the solution quickly — cloud setup, network installation, or automation. Minimal disruption to your daily workflow.",
      },
      {
        title: "Ongoing Support",
        description: "We stay by your side with monitoring, maintenance, and fast response whenever something comes up. You're never on your own.",
      },
    ],
  },
  testimonials: {
    label: "Client Reviews",
    title: "What our",
    highlight: "clients say",
    items: [
      {
        text: "We had an outdated website for a long time that barely brought in customers. SysNova created a new landing page for us that is truly impressive. Highly recommended!",
        name: "Kado K.",
        company: "via Google ★★★★★",
        service: "Web Development",
      },
      {
        text: "A very friendly team with a lot of expertise. They not only created a modern website for me but also explained everything clearly. I now feel much more confident managing my own website.",
        name: "Osama A.",
        company: "via Google ★★★★★",
        service: "Web Development",
      },
      {
        text: "I am absolutely thrilled with the collaboration! My website now looks professional and appealing. Even with technical issues, I always received quick and competent assistance.",
        name: "Hamza H.",
        company: "via Google ★★★★★",
        service: "Web & IT Support",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Frequently asked",
    highlight: "questions",
    items: [
      {
        question: "Do you only work in Berlin?",
        answer: "Our remote services — cloud architecture, IT support, web development, and AI automation — cover all of Germany and the DACH region. On-site visits are limited to the Berlin area.",
      },
      {
        question: "Is there a minimum contract length?",
        answer: "No lock-in. Monthly retainer packages can be cancelled with 30 days' notice. Hourly projects are billed after completion — no long-term commitment required.",
      },
      {
        question: "How fast do you respond to urgent issues?",
        answer: "Business clients get a 4-hour SLA, Pro clients get 1 hour. Starter clients are handled within 24 hours. For critical outages, we always prioritize regardless of plan.",
      },
      {
        question: "Do you sign NDAs?",
        answer: "Yes, we're happy to sign a mutual NDA before any project begins. DSGVO compliance and data privacy are standard in all our engagements.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "Bank transfer (SEPA) and PayPal. Invoices are issued after each month or project milestone. First-time clients may be asked for a small upfront deposit.",
      },
      {
        question: "Can I start with just one service?",
        answer: "Absolutely. Many clients start with a single task — a website, a network setup, or an automation workflow — and expand from there. No need to commit to a full package upfront.",
      },
    ],
  },
  cookieBanner: {
    ariaLabel: "Cookie notice and privacy settings",
    title: "We use cookies",
    description:
      "We use Google Analytics to understand how visitors use our site. No personal data is sold. You can accept or decline at any time.",
    accept: "Accept all",
    decline: "Decline",
    acceptAriaLabel: "Accept all cookies",
    declineAriaLabel: "Decline all cookies",
    learnMore: "Privacy Policy",
  },
  about: {
    label: "About",
    headline1: "The mind behind",
    headline2: "SysNova",
    subtitle: "One specialist, one mission: fast, honest, and affordable IT for businesses in Berlin.",
    storyLabel: "My Story",
    storyTitle: "Built from real",
    storyHighlight: "experience",
    storyParagraphs: [
      "I'm Wasiem Abd Albaki — an IT engineer based in Berlin with more than 3 years of experience in web development, cloud architecture, IT support, and AI automation.",
      "I founded SysNova in 2025 because I kept seeing small businesses get overcharged and underserved by large agencies. My clients talk directly to me — no account managers, no ticket queues, no hidden costs.",
      "I speak Arabic, German, and English. That lets me help Berlin businesses — including those from the Arabic-speaking community — in their own language.",
      "Whether you need a new website, IT support, or process automation: you get enterprise quality at SMB prices — and always one direct point of contact.",
    ],
    valuesLabel: "What We Stand For",
    valuesTitle: "Our core",
    valuesHighlight: "values",
    values: [
      {
        title: "Direct Communication",
        description: "You talk to the engineer, not a middleman. We keep things clear, honest, and jargon-free.",
      },
      {
        title: "Fast Response",
        description: "IT problems don't wait for business hours. We respond fast — because your downtime costs you money.",
      },
      {
        title: "Transparent Pricing",
        description: "What we quote is what you pay. No hidden fees, no scope creep surprises, no agency markup.",
      },
      {
        title: "Multilingual Support",
        description: "We work in English, German, and Arabic — so nothing gets lost in translation with your team or clients.",
      },
    ],
    missionLabel: "Our Mission",
    mission: "To give every business — no matter the size — access to enterprise-quality IT without the enterprise price tag.",
    ctaTitle: "Ready to work with us?",
    ctaButton: "Get a Free Consultation",
    backHome: "Back to Home",
  },
  portfolio: {
    label: "Our Work",
    title: "Projects we",
    highlight: "are proud of",
    subtitle: "Real projects for real businesses — from websites to AI automations.",
    filterAll: "All",
    categoryWebdev: "Web Development",
    categoryAi: "AI Automation",
    categoryCloud: "Cloud",
    ctaTeaser: "Your project could be next —",
    backLink: "← Back to SysNova",
    emptyState: "No projects in this category yet",
    projects: [
      {
        title: "Nour — Wedding Photography",
        description:
          "Professional website for a Berlin-based wedding photographer. Multilingual gallery system (DE/AR), contact form with email integration, and full mobile optimisation.",
      },
      {
        title: "Beauty Studio — Natural Beauty",
        description:
          "Modern website for a cosmetic studio. Elegant design with service overview, booking section, and full mobile optimisation — built for a premium beauty experience.",
      },
    ],
  },
  servicePages: {
    webdev: {
      hero: {
        label: "Web Development",
        title: "Modern websites & web apps",
        subtitle:
          "We build fast, SEO-optimised websites and web apps with React & Next.js. Domain, hosting, and SSL included.",
      },
      process: {
        title: "How we work",
        steps: [
          {
            title: "Discovery Call",
            description:
              "We analyse your requirements, goals, and target audience in a free 30-minute call — no commitment needed.",
          },
          {
            title: "Design & Concept",
            description:
              "We create a tailored design concept aligned with your brand. You review and approve before we write a single line of code.",
          },
          {
            title: "Development",
            description:
              "Clean code with React / Next.js — fast-loading, accessible, and SEO-ready from day one.",
          },
          {
            title: "Risk-Free Delivery",
            description:
              "We deliver the finished website for your review. You only pay when you're 100% satisfied with the result. No satisfaction — no invoice. Zero risk for you.",
          },
        ],
      },
      benefits: {
        title: "Why SysNova",
        items: [
          {
            title: "Lightning fast",
            description:
              "Optimised for Core Web Vitals and Google PageSpeed. Fast sites rank better and convert more.",
          },
          {
            title: "SEO-ready from the start",
            description:
              "Correct HTML structure, meta tags, schema markup, and sitemap — all included by default.",
          },
          {
            title: "Mobile-first design",
            description:
              "Looks and works perfectly on every device — from smartphone to widescreen monitor.",
          },
          {
            title: "Maintenance included",
            description:
              "No headaches after launch. We handle updates, security patches, and content changes.",
          },
        ],
      },
      cta: {
        title: "Ready for your new website?",
        button: "Get Free Consultation",
      },
      back: "← Back to SysNova",
      stats: [
        { value: "< 1s", label: "Load time (Lighthouse)" },
        { value: "100 %", label: "Mobile-optimised" },
        { value: "SSL", label: "Included & automatic" },
        { value: "∞", label: "Revisions until sign-off" },
      ],
      scope: {
        title: "What's included",
        intro:
          "From the first call to go-live, we handle everything — so you can focus on your business. No technical knowledge required, no juggling multiple service providers.",
        includes: [
          "Design & concept (tailored to your brand)",
          "React / Next.js development",
          "Mobile-first & fully responsive",
          "SEO essentials (meta tags, schema, sitemap)",
          "Domain & hosting setup",
          "SSL certificate (automatic & free)",
          "Contact form with spam protection",
          "Google Analytics / Vercel Analytics integration",
          "30 days free support after launch",
          "Source code handover — the website is yours",
        ],
        excludes: [
          "Copywriting (available on request — we're happy to help)",
          "Product photography & professional image editing",
          "Ongoing monthly maintenance (separate retainer available)",
        ],
      },
      techStack: {
        title: "Our tech stack",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Vercel",
          "AWS / Hetzner",
          "Framer Motion",
          "Resend",
          "SEO & Schema Markup",
        ],
      },
      targetClients: {
        title: "Who is this right for?",
        intro:
          "We build websites for small Berlin businesses that need a professional online presence — without the bureaucracy of large agencies.",
        items: [
          "Restaurants & cafés",
          "Tradespeople & craftsmen",
          "Start-ups & founders",
          "Retailers & boutiques",
          "Arabic-speaking businesses",
        ],
      },
      faq: {
        title: "Frequently asked questions",
        items: [
          {
            question: "How long does it take to build a website?",
            answer:
              "A business website with five to eight pages is usually ready within two to four weeks. This depends on how quickly content and feedback are provided. We work with clear milestones and keep you updated at every stage — no long wait times, no last-minute surprises.",
          },
          {
            question: "Can I keep my existing domain?",
            answer:
              "Yes. We migrate your domain to the new hosting setup — including DNS configuration, SSL setup, and redirect management for existing URLs. If you don't have a domain yet, we help you choose and register one. The transition is seamless for your visitors, with zero downtime.",
          },
          {
            question: "Will the website look good on smartphones?",
            answer:
              "Absolutely. All our websites are built mobile-first — we design for smartphones first, then tablets and desktop. Over 70% of your visitors come from mobile devices. A website that doesn't work properly on a phone costs you customers every single day.",
          },
          {
            question: "What happens after launch?",
            answer:
              "We support you for 30 days after launch at no extra cost: small changes, typos, questions about managing the site — we're reachable via WhatsApp. After that, optional maintenance contracts are available. The source code is entirely yours, and the website runs on your own infrastructure.",
          },
          {
            question: "I don't have any copy yet — is that a problem?",
            answer:
              "Not at all. We help you with the text. During our first call we learn what makes your business special and write copy that suits your audience and tone. Alternatively, give us bullet points and we'll handle the rest. No agency bureaucracy — direct communication via WhatsApp or email.",
          },
        ],
      },
    },
    ai: {
      hero: {
        label: "AI Automation",
        title: "Automate your workflows",
        subtitle:
          "We build AI-powered automations that eliminate repetitive tasks, connect your tools, and save hours every week.",
      },
      process: {
        title: "How we work",
        steps: [
          {
            title: "Process Analysis",
            description:
              "We map your current workflows and identify tasks with the highest automation potential — data entry, emails, reports, and more.",
          },
          {
            title: "AI Strategy",
            description:
              "We select the right models and tools for your use case — ChatGPT, Claude, n8n, Zapier, or custom API integrations.",
          },
          {
            title: "Integration",
            description:
              "We connect the automation seamlessly to your existing software — CRM, email, calendar, spreadsheets, or databases.",
          },
          {
            title: "Monitoring & Optimisation",
            description:
              "We set up dashboards and alerts so you can track results. We continuously optimise the automation as your needs evolve.",
          },
        ],
      },
      benefits: {
        title: "Why SysNova",
        items: [
          {
            title: "Up to 80% less manual work",
            description:
              "Recurring tasks run automatically — your team focuses on what actually matters.",
          },
          {
            title: "24/7 active",
            description:
              "Your automations don't take breaks. They run around the clock, even on weekends.",
          },
          {
            title: "Scalable",
            description:
              "Automations grow with your business. Add new workflows anytime without starting from scratch.",
          },
          {
            title: "Measurable results",
            description:
              "KPIs and reports from day one — so you always know the exact value the automation is delivering.",
          },
        ],
      },
      cta: {
        title: "Ready to automate your business?",
        button: "Get Free Consultation",
      },
      back: "← Back to SysNova",
    },
    cloud: {
      hero: {
        label: "Cloud Architecture",
        title: "Your cloud infrastructure, built right",
        subtitle:
          "AWS, Azure & GCP — on-premise migration, cost optimisation, and IAM configuration. Secure, scalable, built for SMBs.",
      },
      process: {
        title: "How we work",
        steps: [
          {
            title: "Analysis & Requirements",
            description:
              "We assess your current IT landscape, budget, and growth goals in a free consultation.",
          },
          {
            title: "Cloud Strategy",
            description:
              "We choose the right provider (AWS, Azure, or GCP) and the optimal architecture for your needs.",
          },
          {
            title: "Migration & Setup",
            description:
              "Step-by-step migration of your systems — zero downtime. We configure networks, security groups, and IAM roles.",
          },
          {
            title: "Monitoring & Optimisation",
            description:
              "Alerts, cost tracking, and regular reviews — so your cloud runs efficiently with no surprises.",
          },
        ],
      },
      benefits: {
        title: "Why SysNova",
        items: [
          {
            title: "No over-engineering",
            description:
              "We build only what you actually need — no unnecessary services, no hidden costs.",
          },
          {
            title: "Security from day one",
            description:
              "IAM, firewalls, and encryption are standard — no retrofitting later.",
          },
          {
            title: "Scales with your growth",
            description:
              "Your cloud grows with you. Add new services at any time without starting from scratch.",
          },
          {
            title: "Cost optimisation included",
            description:
              "We configure budget alerts and recommend reserved instances — so you never overpay.",
          },
        ],
      },
      cta: {
        title: "Ready to move to the cloud?",
        button: "Get Free Consultation",
      },
      back: "← Back to SysNova",
    },
    itsupport: {
      hero: {
        label: "IT Support",
        title: "Fast IT support for your business",
        subtitle:
          "Remote support, on-site service in Berlin, system administration, and incident response — personal, fast, and affordable.",
      },
      process: {
        title: "How we work",
        steps: [
          {
            title: "Ticket & First Response",
            description:
              "Report an issue via email, WhatsApp, or phone — we respond within 2 hours.",
          },
          {
            title: "Remote Support",
            description:
              "Most issues are resolved remotely via TeamViewer or RustDesk — no waiting for a technician.",
          },
          {
            title: "On-Site Visit",
            description:
              "When remote isn't enough, we come to you — anywhere in Berlin within 24 hours.",
          },
          {
            title: "Documentation & Prevention",
            description:
              "Every incident is documented. We recommend steps to make sure the problem doesn't happen again.",
          },
        ],
      },
      benefits: {
        title: "Why SysNova",
        items: [
          {
            title: "Multilingual (DE · EN · AR)",
            description:
              "Our team speaks German, English, and Arabic — no language barrier, no misunderstandings.",
          },
          {
            title: "No long-term contract",
            description:
              "Hourly or monthly retainer — choose what fits your needs.",
          },
          {
            title: "Windows & Linux",
            description:
              "We support all common operating systems and server environments.",
          },
          {
            title: "Dedicated contact person",
            description:
              "No anonymous call centre. You have one point of contact who knows your infrastructure.",
          },
        ],
      },
      cta: {
        title: "IT problem? We respond fast.",
        button: "Get Free Consultation",
      },
      back: "← Back to SysNova",
      stats: [
        { value: "<4h", label: "Remote response time" },
        { value: "24h", label: "On-site service in Berlin" },
        { value: "3", label: "Languages: DE · EN · AR" },
        { value: "0", label: "Months minimum contract" },
      ],
      scope: {
        title: "What we cover",
        intro:
          "From remote support to on-site visits — our IT support covers the full day-to-day of small Berlin businesses. No problem is too small, no call-out too short-notice. You focus on your business, we handle your IT.",
        includes: [
          "Remote support & helpdesk via TeamViewer / RustDesk",
          "Windows 10/11, Windows Server & Active Directory",
          "macOS & Linux (Ubuntu, Debian, CentOS)",
          "Printers, scanners & peripheral devices",
          "Network, router & Wi-Fi optimisation",
          "Email, Microsoft 365 & Google Workspace",
          "Data backup & disaster recovery",
          "Virus detection & malware removal",
          "Software installation & updates",
          "On-site visits across all Berlin districts",
          "Ticket system & full documentation",
          "Arabic-language support on request",
        ],
        excludes: [
          "New device purchases (we advise, you buy from the vendor of your choice)",
          "Contract negotiations with internet service providers",
          "Accounting software training & tax matters",
        ],
      },
      techStack: {
        title: "Tools & technologies",
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
        title: "Who is this right for?",
        intro:
          "SysNova IT support is built for small Berlin businesses — without the bureaucracy of large IT firms, no minimum contract, no call centre.",
        items: [
          "Restaurants & hospitality",
          "Tradespeople & construction",
          "Retail & boutiques",
          "Law firms & offices",
          "Arabic-speaking businesses in Berlin",
          "Start-ups & SMEs",
        ],
      },
      arabicCallout: {
        badge: "عربي",
        heading: "IT support in Arabic",
        body:
          "Berlin is home to one of the largest Arabic-speaking business communities in Germany. Our founder speaks Arabic as a native language — fluently, without misunderstandings. Whether you're from Lebanon, Syria, Egypt or anywhere else in the Arab world: we understand your business and solve your IT problems in your language. Arabic keyboard layouts, Arabic-configured systems, and Arabic-language correspondence are a matter of course for us.",
      },
      faq: {
        title: "Frequently asked questions",
        items: [
          {
            question: "How quickly does SysNova respond to IT problems?",
            answer:
              "For remote support requests we typically respond within two hours — often much faster. For critical failures such as a compromised system or an unreachable server, we prioritise immediately. For on-site appointments in the Berlin area we coordinate within 24 hours. You can reach us via WhatsApp, email, and phone.",
          },
          {
            question: "Do you offer on-site service across all of Berlin?",
            answer:
              "Yes. We cover all 12 Berlin districts — from Mitte and Kreuzberg to Spandau and Marzahn. We're particularly frequent in Neukölln, Wedding, and Charlottenburg. For locations in the greater Berlin area we can coordinate on request. There are no separate call-out fees within the city.",
          },
          {
            question: "Which operating systems and devices do you support?",
            answer:
              "We support Windows 10 and 11, Windows Server (2016, 2019, 2022), macOS, and common Linux distributions including Ubuntu and Debian. We also cover network devices (routers, switches, access points), printers and scanners, NAS systems (Synology, QNAP), and mobile devices. In short: everything you'll find in a typical SME office.",
          },
          {
            question: "Do I need to sign a long-term contract?",
            answer:
              "No. We offer two models: hourly billing where you only pay for what you use, and a monthly retainer with a fixed number of hours for predictable costs. Both are cancellable monthly. No minimum term, no fine print, no hidden clauses.",
          },
          {
            question: "What does IT support cost at SysNova?",
            answer:
              "We work on an hourly or package basis. We discuss the exact terms in a free initial consultation — because every business has different requirements. What we guarantee: no hidden call-out fees within Berlin and no minimum billing for remote sessions. Just get in touch.",
          },
          {
            question: "Is IT support available in Arabic?",
            answer:
              "Yes. Our founder is a native Arabic speaker. Arabic-speaking business owners in Berlin can contact us directly in Arabic via WhatsApp, phone, or email. This includes Arabic keyboard layouts, Arabic-language software, and devices configured in Arabic. No interpreter needed, no misunderstandings.",
          },
          {
            question: "How does a typical remote support session work?",
            answer:
              "You contact us via WhatsApp or email and describe the problem. We arrange a time slot — often the same day. We then connect to your device via TeamViewer or RustDesk and fix the issue directly. After the session you receive a short write-up with the cause and resolution so the problem doesn't recur.",
          },
        ],
      },
    },
    network: {
      hero: {
        label: "Network & PC Support",
        title: "Reliable networks & flawless PCs",
        subtitle:
          "Routers, switches, Wi-Fi optimisation, and full PC setup — professionally installed and maintained for Berlin businesses.",
      },
      process: {
        title: "How we work",
        steps: [
          {
            title: "Network Assessment",
            description:
              "We audit your existing infrastructure and identify weaknesses like dead Wi-Fi zones or bottlenecks.",
          },
          {
            title: "Planning & Procurement",
            description:
              "We create a network plan and recommend the right hardware — without unnecessary over-provisioning.",
          },
          {
            title: "On-Site Installation",
            description:
              "Cabling, switch configuration, Wi-Fi coverage, and PC setup — everything from a single provider.",
          },
          {
            title: "Testing & Handover",
            description:
              "We test every device and connection. You receive full documentation of your infrastructure.",
          },
        ],
      },
      benefits: {
        title: "Why SysNova",
        items: [
          {
            title: "Everything from one provider",
            description:
              "From planning to setup — one contact, no coordination overhead.",
          },
          {
            title: "Berlin on-site service",
            description:
              "We come to you — across the entire Berlin area and surrounding region.",
          },
          {
            title: "Business hardware at fair prices",
            description:
              "We source reliable hardware at competitive prices with no vendor lock-in.",
          },
          {
            title: "Wi-Fi for every room",
            description:
              "Professional coverage with access points — no more dead zones in your office.",
          },
        ],
      },
      cta: {
        title: "Network problems? Let's fix them.",
        button: "Get Free Consultation",
      },
      back: "← Back to SysNova",
    },
    cctv: {
      hero: {
        label: "CCTV & Surveillance",
        title: "Professional video surveillance for your business",
        subtitle:
          "Security cameras, NVR/DVR setup, and remote access — discreetly installed, GDPR-compliant, for Berlin commercial properties.",
      },
      process: {
        title: "How we work",
        steps: [
          {
            title: "Security Assessment",
            description:
              "We visit your premises and identify optimal camera positions for full coverage.",
          },
          {
            title: "System Planning",
            description:
              "We recommend the right camera system (IP/analogue, indoor/outdoor) and size the NVR/DVR and storage.",
          },
          {
            title: "Professional Installation",
            description:
              "Clean cable routing, secure mounting, and full configuration — including smartphone remote access.",
          },
          {
            title: "Handover & Support",
            description:
              "We walk you through the system and remain available for maintenance and expansions long-term.",
          },
        ],
      },
      benefits: {
        title: "Why SysNova",
        items: [
          {
            title: "GDPR-compliant",
            description:
              "We install and configure to data protection standards — notice signs, retention periods, and deletion policy included.",
          },
          {
            title: "Smartphone remote access",
            description:
              "See what's happening on your premises anytime, anywhere — live on your phone.",
          },
          {
            title: "Scalable",
            description:
              "Start with a few cameras and expand when needed — no full reinstall required.",
          },
          {
            title: "Commercially proven",
            description:
              "We use professional IP camera technology — for shops, offices, warehouses, and outdoor areas.",
          },
        ],
      },
      cta: {
        title: "Ready to secure your business?",
        button: "Get Free Consultation",
      },
      back: "← Back to SysNova",
    },
  },
  blog: {
    insights: "Knowledge & Insights",
    insightsSubtitle: "Practical IT tips for small businesses in Berlin — costs, comparisons, and step-by-step guides.",
    // Trailing hyphen is intentional: renders as "IT-Blog" with "Blog" inside a gradient span.
    headingTitle: "IT-",
    headingHighlight: "Blog",
    readTime: "read",
    readMore: "Read more →",
    backToBlog: "Back to Blog",
    deOnlyTitle: "Article in German only",
    deOnlyBody: "This article is currently only available in German. Switch the language to German to read the full content.",
    authorName: "Wasiem Abd Albaki",
    authorRole: "IT Consultant at SysNova Berlin",
    relatedTitle: "Related articles",
    webdesignBannerLabel: "Web Design Agency Berlin — Websites from €500",
    webdesignBannerCta: "Learn more",
  },
  common: {
    relatedServices: "Related Services",
    whatsAppTooltip: "Chat on WhatsApp",
    skipToMain: "Skip to main content",
    languageSelection: "Language selection",
    langToggleEn: "Switch to English",
    langToggleDe: "Switch to German",
    ratingLabel: "5 out of 5 stars",
    scopeIncludes: "✓ Included",
    scopeExcludes: "✗ Not included",
    blogCta: {
      label: "Free Consultation",
      title: "Ready to start your project?",
      body: "Have questions or ready to get started? Write to us — we respond within 4 hours.",
    },
  },
};

export default en;
