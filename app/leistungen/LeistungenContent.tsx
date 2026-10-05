"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/components/hooks/useReveal";
import { SERVICE_META } from "@/lib/servicesMeta";

const MAX_REVEAL_DELAY = 7;

export default function LeistungenContent() {
  const { t } = useLanguage();
  const heroRef = useReveal();
  const cardsRef = useReveal();
  const ctaRef = useReveal();

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
          <div
            className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center"
            ref={heroRef}
          >
            <p className="reveal reveal-delay-1 font-mono text-xs tracking-[0.2em] uppercase text-sn-primary mb-4 opacity-90">
              {t.services.label}
            </p>
            <h1 className="reveal reveal-delay-2 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t.services.title}{" "}
              <span className="gradient-text">{t.services.highlight}</span>
            </h1>
            <p className="reveal reveal-delay-3 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t.services.subtitle}
            </p>
            <div className="amber-line mt-10" />
          </div>
        </section>

        {/* ── Service Cards ── */}
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
            ref={cardsRef}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICE_META.map((meta, i) => {
                // t.services.items has exactly 6 entries, matching SERVICE_META length
                const s = t.services.items[i]!;
                return (
                  <Link
                    key={s.title}
                    href={meta.href}
                    className={`reveal reveal-delay-${Math.min(i + 1, MAX_REVEAL_DELAY)} group relative rounded-2xl bg-sn-card card-glow overflow-hidden block border border-sn-border hover:border-sn-primary/40 transition-all duration-300 hover:-translate-y-1`}
                  >
                    {/* per-card ambient accent gradient */}
                    <div
                      className={`absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br ${meta.accent} pointer-events-none`}
                      aria-hidden="true"
                    />
                    {/* top accent bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${
                        i % 2 === 0
                          ? "from-sn-primary/60 via-sn-secondary/40 to-transparent"
                          : "from-transparent via-sn-primary/40 to-sn-secondary/60"
                      }`}
                    />

                    <div className="p-6">
                      {/* Icon */}
                      <div className="mb-5">
                        <div className="w-12 h-12 rounded-xl bg-sn-primary/10 border border-sn-primary/20 flex items-center justify-center text-xl group-hover:bg-sn-primary/15 group-hover:border-sn-primary/40 transition-all duration-300">
                          {meta.emoji}
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="font-display text-lg font-bold text-sn-text mb-2 group-hover:text-sn-secondary transition-colors duration-300">
                        {s.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-5">
                        {s.description}
                      </p>

                      {/* Detail list */}
                      <ul className="space-y-1.5 mb-6">
                        {s.details.map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-2 text-xs text-gray-500"
                          >
                            <span className="w-1 h-1 rounded-full bg-sn-primary flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>

                      {/* Learn more */}
                      <span className="inline-flex items-center gap-1 font-mono text-sm text-sn-secondary/70 group-hover:text-sn-secondary transition-colors duration-200">
                        {t.services.learnMore} →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding pb-24">
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
                  {t.services.ctaTitle}
                </h2>
                <Button href="/#contact" size="lg">
                  {t.services.ctaButton}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Back link ── */}
        <div className="pb-16 text-center">
          <Link
            href="/"
            className="font-mono text-xs text-gray-500 hover:text-sn-secondary transition-colors tracking-wide"
          >
            {t.services.backLink}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
