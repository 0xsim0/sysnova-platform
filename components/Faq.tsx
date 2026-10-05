"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReveal } from "@/components/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Faq() {
  const ref = useReveal();
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(162,103,32,0.03) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8" ref={ref}>
        <div className="reveal reveal-delay-1 mb-16">
          <SectionHeading
            label={t.faq.label}
            title={t.faq.title}
            highlight={t.faq.highlight}
          />
        </div>

        <div className="max-w-3xl mx-auto reveal reveal-delay-2">
          {t.faq.items.map((item, i) => (
            <div key={item.question} className="border-b border-sn-border last:border-b-0">
              <button
                id={`faq-btn-${i}`}
                className="w-full flex items-center justify-between py-5 text-left group"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
                aria-controls={`faq-panel-${i}`}
              >
                <span className={`font-display font-semibold text-base pr-4 transition-colors duration-200 ${
                  openIdx === i ? "text-sn-secondary" : "text-sn-text group-hover:text-sn-secondary"
                }`}>
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-sn-primary transition-transform duration-300 ${
                    openIdx === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIdx === i ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-400 text-sm leading-relaxed pb-5">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
