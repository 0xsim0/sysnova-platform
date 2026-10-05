"use client";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReveal } from "@/components/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICE_META, hasSecondaryHref } from "@/lib/servicesMeta";

export default function Services() {
  const ref = useReveal();
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding relative">
      {/* background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(162,103,32,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8" ref={ref}>
        {/* Heading */}
        <div className="reveal reveal-delay-1 mb-16">
          <SectionHeading
            label={t.services.label}
            title={t.services.title}
            highlight={t.services.highlight}
            subtitle={t.services.subtitle}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICE_META.map((meta, i) => {
            const s = t.services.items[i];
            if (!s) return null;
            return (
              <div
                key={s.title}
                className={`reveal reveal-delay-${i + 2} group relative rounded-2xl bg-sn-card card-glow overflow-hidden`}
              >
                {/* accent gradient top */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${
                    i % 2 === 0 ? "from-sn-primary/60 via-sn-secondary/40 to-transparent" : "from-transparent via-sn-primary/40 to-sn-secondary/60"
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
                  <h3 className="font-display text-lg font-bold text-sn-text mb-2 group-hover:text-sn-secondary transition-colors duration-300">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {s.description}
                  </p>

                  {/* Detail list */}
                  <ul className="space-y-1.5 mb-6">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1 h-1 rounded-full bg-sn-primary flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {/* Learn more link — only for services with a dedicated page */}
                  {meta.href && (
                    <div className={`mt-3 flex ${hasSecondaryHref(meta) ? "flex-col items-center gap-1.5" : "justify-center"}`}>
                      <Link
                        href={meta.href}
                        className="inline-flex items-center gap-1 font-mono text-sm text-sn-secondary/70 hover:text-sn-secondary transition-colors duration-200"
                      >
                        {t.services.learnMore} →
                      </Link>
                      {hasSecondaryHref(meta) && (
                        <Link
                          href={meta.secondaryHref}
                          className="inline-flex items-center gap-1 font-mono text-xs text-sn-primary/70 hover:text-sn-primary transition-colors duration-200"
                        >
                          Webdesign Agentur Berlin →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="reveal reveal-delay-2 mt-12 text-center">
          <p className="text-gray-500 text-sm font-mono tracking-wide">
            {t.services.bookCta}{" "}
            <a
              href="#contact"
              className="text-sn-secondary hover:text-sn-primary transition-colors underline underline-offset-4 decoration-sn-primary/40"
            >
              {t.services.bookLink}
            </a>
          </p>
          <p className="mt-2">
            <Link
              href="/portfolio"
              className="font-mono text-sm text-sn-secondary/50 hover:text-sn-secondary transition-colors duration-200 underline underline-offset-4 decoration-sn-border"
            >
              {t.services.portfolioLink}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
