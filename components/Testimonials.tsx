"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReveal } from "@/components/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const ref = useReveal();
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8" ref={ref}>
        <div className="reveal reveal-delay-1 mb-16">
          <SectionHeading
            label={t.testimonials.label}
            title={t.testimonials.title}
            highlight={t.testimonials.highlight}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <div
              key={item.name}
              className={`reveal reveal-delay-${i + 2} flex flex-col bg-sn-card card-glow rounded-2xl p-7`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4" role="img" aria-label={t.common.ratingLabel}>
                {Array.from({ length: 5 }).map((_, si) => (
                  <span key={si} className="text-sn-secondary text-base" aria-hidden="true">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed italic flex-1 mb-6">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-sn-border flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-sn-text text-sm">{item.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.company}</p>
                </div>
                <span className="skill-tag">{item.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
