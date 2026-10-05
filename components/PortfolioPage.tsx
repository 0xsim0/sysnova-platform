"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/components/hooks/useReveal";
import { PORTFOLIO_PROJECTS, type PortfolioCategory } from "@/lib/portfolioProjects";

type Category = "all" | PortfolioCategory;

const PROJECTS_META = PORTFOLIO_PROJECTS;

const CATEGORY_COLORS: Record<Category, string> = {
  all:    "",
  webdev: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  ai:     "text-amber-400 bg-amber-500/10 border-amber-500/20",
  cloud:  "text-blue-400 bg-blue-500/10 border-blue-500/20",
};

export default function PortfolioPage() {
  const { t } = useLanguage();
  const headerRef = useReveal();
  const gridRef = useReveal();
  const [active, setActive] = useState<Category>("all");

  const filters: Category[] = ["all", "webdev", "ai", "cloud"];

  const categoryLabel = (cat: Category): string => {
    switch (cat) {
      case "all":
        return t.portfolio.filterAll;
      case "webdev":
        return t.portfolio.categoryWebdev;
      case "ai":
        return t.portfolio.categoryAi;
      case "cloud":
        return t.portfolio.categoryCloud;
    }
  };

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-sn-bg text-sn-text outline-none">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
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
        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center" ref={headerRef}>
          <p className="reveal reveal-delay-1 font-mono text-xs tracking-[0.2em] uppercase text-sn-primary mb-4 opacity-90">
            {t.portfolio.label}
          </p>
          <h1 className="reveal reveal-delay-2 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t.portfolio.title}{" "}
            <span className="gradient-text">{t.portfolio.highlight}</span>
          </h1>
          <p className="reveal reveal-delay-3 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t.portfolio.subtitle}
          </p>
          <div className="reveal reveal-delay-4 amber-line mt-10" />
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-5 lg:px-8" ref={gridRef}>

          {/* Filter bar */}
          <div className="reveal reveal-delay-1 flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                  active === cat
                    ? "border-sn-primary bg-sn-primary/10 text-sn-secondary"
                    : "border-sn-border text-gray-500 hover:border-sn-primary/50 hover:text-gray-300"
                }`}
              >
                {categoryLabel(cat)}
              </button>
            ))}
          </div>

          {/* Cards grid — always render ALL cards, hide with display:none to preserve .visible class */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS_META.map((meta, i) => {
              const project = t.portfolio.projects[i];
              if (!project) return null;
              const catColor = CATEGORY_COLORS[meta.category];
              const shown = active === "all" || meta.category === active;
              return (
                <div
                  key={meta.id}
                  id={meta.id}
                  className={`group reveal reveal-delay-${i + 2}${shown ? " visible" : ""} rounded-2xl bg-sn-card card-glow border border-sn-border overflow-hidden scroll-mt-24`}
                  style={shown ? undefined : { display: "none" }}
                >
                  {/* Image */}
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={meta.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category chip */}
                    <span
                      className={`inline-block font-mono text-xs px-3 py-1 rounded-full border mb-3 ${catColor}`}
                    >
                      {categoryLabel(meta.category)}
                    </span>

                    <h3 className="font-display text-lg font-bold text-sn-text mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {meta.tech.map((tag) => (
                        <span key={tag} className="skill-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty state */}
          {PROJECTS_META.filter((m) => active === "all" || m.category === active).length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
              <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                {t.portfolio.emptyState}
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="reveal reveal-delay-2 mt-16 text-center">
            <p className="text-gray-500 text-sm font-mono mb-4 tracking-wide">
              {t.portfolio.ctaTeaser}
            </p>
            <Button href="/#contact" size="md">
              {t.nav.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="pb-16 text-center">
        <Link
          href="/"
          className="font-mono text-xs text-gray-500 hover:text-sn-secondary transition-colors tracking-wide"
        >
          {t.portfolio.backLink}
        </Link>
      </div>
    </main>
    <Footer />
    </>
  );
}
