type WithEmailPlaceholder = `${string}{email}${string}`;

interface ServicePageContent {
  hero: { label: string; title: string; subtitle: string };
  process: { title: string; steps: Array<{ title: string; description: string }> };
  benefits: { title: string; items: Array<{ title: string; description: string }> };
  cta: { title: string; button: string };
  back: string;
  stats?: Array<{ value: string; label: string }>;
  scope?: { title: string; intro: string; includes: string[]; excludes?: string[] };
  techStack?: { title: string; items: string[] };
  targetClients?: { title: string; intro: string; items: string[] };
  arabicCallout?: { badge: string; heading: string; body: string };
  faq?: { title: string; items: Array<{ question: string; answer: string }> };
}

export interface Translations {
  nav: {
    services: string;
    pricing: string;
    team: string;
    about: string;
    portfolio: string;
    blog: string;
    contact: string;
    cta: string;
    primaryNavLabel: string;
    toggleMenuLabel: string;
    serviceLinks: Array<{ label: string }>;
  };
  hero: {
    badge: string;
    headline1: string;
    headline2: string;
    headlineGradient: string;
    subline1: string;
    subline2: string;
    cta1: string;
    cta2: string;
    trust: {
      berlin: string;
      languages: string;
      noOverhead: string;
    };
  };
  services: {
    label: string;
    title: string;
    highlight: string;
    subtitle: string;
    bookCta: string;
    bookLink: string;
    learnMore: string;
    ctaTitle: string;
    ctaButton: string;
    portfolioLink: string;
    backLink: string;
    items: Array<{
      title: string;
      description: string;
      details: string[];
    }>;
  };
  pricing: {
    label: string;
    title: string;
    highlight: string;
    subtitle: string;
    getStarted: string;
    packages: Array<{
      name: string;
      description: string;
      features: string[];
      badge?: string;
    }>;
  };
  team: {
    label: string;
    title: string;
    highlight: string;
    subtitle: string;
    skillsLabel: string;
    languagesLabel: string;
    availableBanner: string;
    languagesBanner: string;
    aboutLink: string;
    langNames: { arabic: string; english: string; german: string };
    langLevels: { native: string; b2: string; basic: string };
    members: Array<{
      role: string;
      bio: string;
      skills: string[];
    }>;
  };
  contact: {
    label: string;
    title: string;
    highlight: string;
    subtitle: string;
    whyLabel: string;
    reasons: string[];
    directLabel: string;
    addressLabel: string;
    mapLink: string;
    googleReviewLabel: string;
    form: {
      namePlaceholder: string;
      emailPlaceholder: string;
      companyPlaceholder: string;
      messagePlaceholder: string;
      nameLabel: string;
      emailLabel: string;
      companyLabel: string;
      messageLabel: string;
      submit: string;
      sending: string;
      otpTitle: string;
      otpSubtitle: string;
      otpLabel: string;
      otpPlaceholder: string;
      otpVerify: string;
      otpResend: string;
      otpBack: string;
    };
    validation: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
      apiFallback: WithEmailPlaceholder;
      otpRequired: string;
      otpInvalid: string;
      sendFailed: string;
    };
    success: {
      heading: string;
      body: string;
      again: string;
    };
  };
  footer: {
    tagline: string;
    location: string;
    nav: string;
    contact: string;
    languages: string;
    copyright: string;
    slogan: string;
    impressum: string;
    privacy: string;
    cookieSettings: string;
  };
  stats: {
    sectionLabel: string;
    clientsNum: string;
    responseNum: string;
    languagesNum: string;
    teamNum: string;
    clientsLabel: string;
    clientsSubLabel: string;
    responseLabel: string;
    languagesLabel: string;
    teamLabel: string;
    ariaLabels: {
      rating: string;
      response: string;
      languages: string;
      team: string;
    };
  };
  howItWorks: {
    label: string;
    title: string;
    highlight: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  testimonials: {
    label: string;
    title: string;
    highlight: string;
    items: Array<{
      text: string;
      name: string;
      company: string;
      service: string;
    }>;
  };
  faq: {
    label: string;
    title: string;
    highlight: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  about: {
    label: string;
    headline1: string;
    headline2: string;
    subtitle: string;
    storyLabel: string;
    storyTitle: string;
    storyHighlight: string;
    storyParagraphs: string[];
    valuesLabel: string;
    valuesTitle: string;
    valuesHighlight: string;
    values: Array<{ title: string; description: string }>;
    missionLabel: string;
    mission: string;
    ctaTitle: string;
    ctaButton: string;
    backHome: string;
  };
  cookieBanner: {
    ariaLabel: string;
    title: string;
    description: string;
    accept: string;
    decline: string;
    acceptAriaLabel: string;
    declineAriaLabel: string;
    learnMore: string;
  };
  portfolio: {
    label: string;
    title: string;
    highlight: string;
    subtitle: string;
    filterAll: string;
    categoryWebdev: string;
    categoryAi: string;
    categoryCloud: string;
    ctaTeaser: string;
    backLink: string;
    emptyState: string;
    projects: Array<{ title: string; description: string }>;
  };
  servicePages: {
    webdev: ServicePageContent;
    ai: ServicePageContent;
    cloud: ServicePageContent;
    itsupport: ServicePageContent;
    network: ServicePageContent;
    cctv: ServicePageContent;
  };
  blog: {
    insights: string;
    insightsSubtitle: string;
    headingTitle: string;
    headingHighlight: string;
    readTime: string;
    readMore: string;
    backToBlog: string;
    deOnlyTitle: string;
    deOnlyBody: string;
    authorName: string;
    authorRole: string;
    relatedTitle: string;
    webdesignBannerLabel: string;
    webdesignBannerCta: string;
  };
  common: {
    relatedServices: string;
    whatsAppTooltip: string;
    skipToMain: string;
    languageSelection: string;
    langToggleEn: string;
    langToggleDe: string;
    ratingLabel: string;
    scopeIncludes: string;
    scopeExcludes: string;
    blogCta: {
      label: string;
      title: string;
      body: string;
    };
  };
}
