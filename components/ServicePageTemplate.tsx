"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/components/hooks/useReveal";

type ServiceKey = "webdev" | "ai" | "cloud" | "itsupport" | "network" | "cctv";

interface Props {
  serviceKey: ServiceKey;
}

const SERVICE_LINKS: Record<ServiceKey, { href: string; emoji: string }> = {
  cloud: { href: "/leistungen/cloud-architektur", emoji: "☁️" },
  itsupport: { href: "/leistungen/it-support", emoji: "🖥️" },
  webdev: { href: "/leistungen/webentwicklung", emoji: "🌐" },
  ai: { href: "/leistungen/ki-automatisierung", emoji: "🤖" },
  network: { href: "/leistungen/netzwerk-pc-support", emoji: "🔧" },
  cctv: { href: "/leistungen/cctv-uberwachung", emoji: "📷" },
};

const ALL_SERVICE_KEYS: ServiceKey[] = ["cloud", "itsupport", "webdev", "ai", "network", "cctv"];
const MAX_REVEAL_DELAY = 7;

export default function ServicePageTemplate({ serviceKey }: Props) {
  const { t } = useLanguage();
  const processRef = useReveal();
  const benefitsRef = useReveal();
  const extrasRef = useReveal();
  const ctaRef = useReveal();
  const relatedRef = useReveal();
  const page = t.servicePages[serviceKey];
  const relatedServices = ALL_SERVICE_KEYS.filter((k) => k !== serviceKey);
  const relatedTitle = t.common.relatedServices;

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-sn-bg text-sn-text outline-none">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="dot-grid absolute inset-0 opacity-30 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(162,103,32,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-sn-primary mb-4 opacity-90">
            {page.hero.label}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="gradient-text">{page.hero.title}</span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {page.hero.subtitle}
          </p>
          <div className="amber-line mt-10" />
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-5 lg:px-8" ref={processRef}>
          <div className="reveal reveal-delay-1 mb-12 text-center">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-sn-primary opacity-90">
              {page.process.title}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {page.process.steps.map((step, i) => (
              <div
                key={step.title}
                className={`reveal reveal-delay-${i + 2} relative rounded-2xl bg-sn-card border border-sn-border p-6 overflow-hidden`}
              >
                <span
                  className="absolute top-3 right-5 font-display text-7xl font-bold leading-none select-none pointer-events-none"
                  style={{ color: "rgba(162,103,32,0.08)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-8 h-8 rounded-full bg-sn-primary/10 border border-sn-primary/30 flex items-center justify-center font-mono text-xs text-sn-primary mb-4">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-sn-text mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="section-padding relative">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(162,103,32,0.04) 0%, transparent 60%)",
          }}
        />
        <div
          className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8"
          ref={benefitsRef}
        >
          <div className="reveal reveal-delay-1 mb-12 text-center">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-sn-primary opacity-90">
              {page.benefits.title}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {page.benefits.items.map((item, i) => (
              <div
                key={item.title}
                className={`reveal reveal-delay-${i + 2} rounded-2xl bg-sn-card card-glow border border-sn-border p-6`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-sn-primary/20 border border-sn-primary/40 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-sn-primary block" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-sn-text mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Optional extras (stats, scope, techStack, targetClients, arabicCallout, faq) ── */}
      {(page.stats || page.scope || page.techStack || page.targetClients || page.arabicCallout || page.faq) && (
        <div className="max-w-7xl mx-auto px-5 lg:px-8 space-y-20" ref={extrasRef}>

          {/* Stats bar */}
          {page.stats && (
            <section className="section-padding pt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {page.stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`reveal reveal-delay-${Math.min(i + 1, MAX_REVEAL_DELAY)} rounded-2xl bg-sn-card border border-sn-border p-6 text-center`}
                  >
                    <p className="font-display text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                    <p className="text-gray-400 text-xs leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Scope */}
          {page.scope && (
            <section className="section-padding pt-0">
              <div className="reveal reveal-delay-1 mb-8 text-center">
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-sn-primary opacity-90">{page.scope.title}</p>
              </div>
              <p className="reveal reveal-delay-2 text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto text-center mb-10">
                {page.scope.intro}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="reveal reveal-delay-3 rounded-2xl bg-sn-card border border-sn-border p-6">
                  <h3 className="font-display text-sm font-bold text-sn-secondary mb-4">{t.common.scopeIncludes}</h3>
                  <ul className="space-y-2">
                    {page.scope.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-sn-primary mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {page.scope.excludes && (
                  <div className="reveal reveal-delay-4 rounded-2xl bg-sn-card border border-sn-border p-6">
                    <h3 className="font-display text-sm font-bold text-gray-400 mb-4">{t.common.scopeExcludes}</h3>
                    <ul className="space-y-2">
                      {page.scope.excludes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                          <span className="text-gray-600 mt-0.5 flex-shrink-0">✗</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Tech stack */}
          {page.techStack && (
            <section className="section-padding pt-0">
              <div className="reveal reveal-delay-1 mb-6 text-center">
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-sn-primary opacity-90">{page.techStack.title}</p>
              </div>
              <div className="reveal reveal-delay-2 flex flex-wrap gap-2 justify-center">
                {page.techStack.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </section>
          )}

          {/* Target clients */}
          {page.targetClients && (
            <section className="section-padding pt-0">
              <div className="reveal reveal-delay-1 mb-6 text-center">
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-sn-primary opacity-90">{page.targetClients.title}</p>
              </div>
              <p className="reveal reveal-delay-2 text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto text-center mb-8">
                {page.targetClients.intro}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {page.targetClients.items.map((item, i) => (
                  <div
                    key={item}
                    className={`reveal reveal-delay-${Math.min(i + 3, MAX_REVEAL_DELAY)} rounded-xl bg-sn-card border border-sn-border p-4 text-center`}
                  >
                    <p className="text-sm font-display font-semibold text-sn-text">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Arabic callout */}
          {page.arabicCallout && (
            <section className="section-padding pt-0">
              <div className="reveal reveal-delay-1 rounded-2xl border border-sn-primary/40 bg-sn-primary/5 p-8 md:p-10">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-display font-bold text-sn-secondary leading-none mt-1">{page.arabicCallout.badge}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-sn-secondary mb-2">{page.arabicCallout.heading}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{page.arabicCallout.body}</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* FAQ */}
          {page.faq && (
            <section className="section-padding pt-0">
              <div className="reveal reveal-delay-1 mb-8 text-center">
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-sn-primary opacity-90">{page.faq.title}</p>
              </div>
              <div className="space-y-3 max-w-3xl mx-auto">
                {page.faq.items.map((item, i) => (
                  <details
                    key={item.question}
                    className={`reveal reveal-delay-${Math.min(i + 2, MAX_REVEAL_DELAY)} group rounded-2xl bg-sn-card border border-sn-border overflow-hidden`}
                  >
                    <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-display text-sm font-semibold text-sn-text hover:text-sn-secondary transition-colors">
                      {item.question}
                      <span className="flex-shrink-0 w-5 h-5 rounded-full border border-sn-border flex items-center justify-center text-sn-primary text-xs group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-6 pb-5 pt-0 text-sm text-gray-400 leading-relaxed border-t border-sn-border">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

        </div>
      )}

      {/* ── CTA ── */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-5 lg:px-8" ref={ctaRef}>
          <div className="reveal reveal-delay-1 rounded-2xl border border-sn-primary/30 bg-sn-card relative overflow-hidden p-10 md:p-14 text-center">
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(162,103,32,0.1) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-sn-text mb-6">
                {page.cta.title}
              </h2>
              <Button href="/#contact" size="lg">
                {page.cta.button}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-5 lg:px-8" ref={relatedRef}>
          <div className="reveal reveal-delay-1 mb-10 text-center">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-sn-primary opacity-90">
              {relatedTitle}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {relatedServices.map((key, i) => (
              <Link
                key={key}
                href={SERVICE_LINKS[key].href}
                className={`reveal reveal-delay-${Math.min(i + 2, MAX_REVEAL_DELAY)} group rounded-xl bg-sn-card card-glow border border-sn-border p-5 hover:border-sn-primary/40 transition-colors`}
              >
                <div className="w-10 h-10 rounded-lg bg-sn-primary/10 border border-sn-primary/20 flex items-center justify-center text-lg mb-3 group-hover:border-sn-primary/40 transition-colors">
                  {SERVICE_LINKS[key].emoji}
                </div>
                <h3 className="font-display text-sm font-bold text-sn-text group-hover:text-sn-secondary transition-colors leading-snug">
                  {t.servicePages[key].hero.label}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Back link ── */}
      <div className="pb-16 text-center">
        <Link
          href="/"
          className="font-mono text-xs text-gray-500 hover:text-sn-secondary transition-colors tracking-wide"
        >
          {page.back}
        </Link>
      </div>
      </main>
      <Footer />
    </>
  );
}
