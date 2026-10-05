"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/components/hooks/useReveal";
import { Button } from "@/components/ui/Button";
import { LINKEDIN_PERSONAL_URL } from "@/lib/config";

const MAX_REVEAL_DELAY = 7;

export default function AboutContent() {
  const { t } = useLanguage();
  const a = t.about;

  const heroRef = useReveal();
  const storyRef = useReveal();
  const valuesRef = useReveal();
  const missionRef = useReveal();
  const ctaRef = useReveal();

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="bg-sn-bg min-h-screen text-sn-text font-body outline-none">

      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-sn-primary/10 rounded-full blur-[120px]" />
        </div>

        <div ref={heroRef} className="max-w-5xl mx-auto px-5 lg:px-8 text-center">
          <div className="reveal reveal-delay-1">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-sn-primary">
              {a.label}
            </span>
          </div>

          <h1 className="reveal reveal-delay-2 mt-5 font-display text-4xl md:text-6xl font-bold text-white leading-tight">
            {a.headline1}{" "}
            <span className="gradient-text">{a.headline2}</span>
          </h1>

          <p className="reveal reveal-delay-3 mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {a.subtitle}
          </p>

          <div className="reveal reveal-delay-4 mt-8">
            <div className="h-px bg-gradient-to-r from-transparent via-sn-primary to-transparent w-48 mx-auto opacity-60" />
          </div>

          <div className="reveal reveal-delay-5 mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-sn-secondary transition-colors duration-200 tracking-wide"
            >
              <ArrowLeft size={14} />
              {a.backHome}
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div ref={storyRef} className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="reveal reveal-delay-1 mb-10">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-sn-primary">
              {a.storyLabel}
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white">
              {a.storyTitle}{" "}
              <span className="gradient-text">{a.storyHighlight}</span>
            </h2>
            <div className="mt-4 h-px bg-gradient-to-r from-sn-primary to-sn-secondary w-24 opacity-60" />
          </div>

          <div className="reveal reveal-delay-2 bg-sn-card card-glow rounded-2xl border border-sn-border p-8 md:p-10 space-y-5">
            {a.storyParagraphs.map((para, i) => (
              <p key={i} className="text-gray-300 text-base md:text-lg leading-relaxed">
                {para}
              </p>
            ))}
            <div className="pt-2">
              <a
                href={LINKEDIN_PERSONAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-sn-primary/40 text-sn-secondary text-sm font-mono hover:bg-sn-primary/10 transition-colors"
              >
                LinkedIn — Wasiem Abd Albaki ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 border-t border-sn-border/40">
        <div ref={valuesRef} className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="reveal reveal-delay-1 mb-12 text-center">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-sn-primary">
              {a.valuesLabel}
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white">
              {a.valuesTitle}{" "}
              <span className="gradient-text">{a.valuesHighlight}</span>
            </h2>
            <div className="mt-4 h-px bg-gradient-to-r from-sn-primary to-sn-secondary w-24 opacity-60 mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {a.values.map((value, i) => (
              <div
                key={value.title}
                className={`reveal reveal-delay-${Math.min(i + 2, MAX_REVEAL_DELAY)} bg-sn-card card-glow rounded-2xl border border-sn-border p-7`}
              >
                <h3 className="font-display text-lg font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div ref={missionRef} className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="reveal reveal-delay-1 relative rounded-2xl border border-sn-primary/40 bg-sn-card p-10 md:p-14 text-center overflow-hidden">
            {/* Subtle amber glow inside card */}
            <div className="absolute inset-0 bg-gradient-to-b from-sn-primary/5 to-transparent pointer-events-none rounded-2xl" />

            <span className="relative font-mono text-xs tracking-[0.2em] uppercase text-sn-primary">
              {a.missionLabel}
            </span>
            <p className="relative mt-6 font-display text-xl md:text-3xl font-semibold text-white leading-snug max-w-2xl mx-auto">
              &ldquo;{a.mission}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-sn-border/40">
        <div ref={ctaRef} className="max-w-5xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-4xl font-bold text-white mb-6">
            {a.ctaTitle}
          </h2>
          <div className="reveal reveal-delay-2">
            <Button href="/#contact" size="lg">
              {a.ctaButton}
            </Button>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
