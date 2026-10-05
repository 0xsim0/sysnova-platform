"use client";
import { Check, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/components/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

const PACKAGE_META = [
  { highlight: false },
  { highlight: true  },
  { highlight: false },
];

export default function Pricing() {
  const ref = useReveal();
  const { t } = useLanguage();

  if (process.env.NODE_ENV === "development") {
    const pkgLen = t.pricing.packages?.length ?? 0;
    console.assert(
      PACKAGE_META.length === pkgLen,
      `[Pricing] PACKAGE_META.length (${PACKAGE_META.length}) !== t.pricing.packages.length (${pkgLen})`
    );
  }

  return (
    <section id="pricing" className="section-padding relative">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(162,103,32,0.05) 0%, transparent 55%)",
        }}
      />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8" ref={ref}>
        {/* Heading */}
        <div className="reveal reveal-delay-1 mb-16">
          <SectionHeading
            label={t.pricing.label}
            title={t.pricing.title}
            highlight={t.pricing.highlight}
            subtitle={t.pricing.subtitle}
          />
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGE_META.map((meta, i) => {
            const pkg = t.pricing.packages[i];
            if (!pkg) return null;
            return (
              <div
                key={pkg.name}
                className={`reveal reveal-delay-${i + 2} flex flex-col ${
                  meta.highlight ? "pricing-featured rounded-2xl relative" : "bg-sn-card card-glow rounded-2xl"
                } p-7`}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-sn text-sn-bg text-xs font-display font-bold tracking-wide shadow-amber-sm">
                      <Star size={11} fill="currentColor" />
                      {pkg.badge}
                    </div>
                  </div>
                )}

                {/* Name */}
                <p className={`font-mono text-xs tracking-[0.18em] uppercase mb-2 ${
                  meta.highlight ? "text-sn-secondary" : "text-sn-primary"
                }`}>
                  {pkg.name}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-7">
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                        meta.highlight
                          ? "bg-sn-secondary/20 text-sn-secondary"
                          : "bg-sn-primary/15 text-sn-primary"
                      }`}>
                        <Check size={10} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={meta.highlight ? "primary" : "ghost"}
                  href="#contact"
                  className="w-full justify-center"
                >
                  {t.pricing.getStarted}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
