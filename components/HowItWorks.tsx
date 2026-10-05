"use client";
import { MessageCircle, Zap, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReveal } from "@/components/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

const STEP_META = [
  { icon: MessageCircle, color: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/20"   },
  { icon: Zap,           color: "text-sn-secondary", bg: "bg-sn-primary/10", border: "border-sn-primary/20" },
  { icon: Shield,        color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
];

export default function HowItWorks() {
  const ref = useReveal();
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(162,103,32,0.04) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8" ref={ref}>
        <div className="reveal reveal-delay-1 mb-16">
          <SectionHeading
            label={t.howItWorks.label}
            title={t.howItWorks.title}
            highlight={t.howItWorks.highlight}
            subtitle={t.howItWorks.subtitle}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.6%+24px)] right-[calc(16.6%+24px)] h-px bg-gradient-to-r from-transparent via-sn-border to-transparent" />

          {t.howItWorks.steps.map((step, i) => {
            // STEP_META has exactly 3 entries, matching t.howItWorks.steps length
            const meta = STEP_META[i]!;
            const Icon = meta.icon;
            return (
              <div
                key={step.title}
                className={`reveal reveal-delay-${i + 2} relative flex flex-col items-center md:items-start text-center md:text-left bg-sn-card card-glow rounded-2xl p-7`}
              >
                {/* Step number watermark */}
                <span aria-hidden="true" className="absolute top-4 right-5 font-display text-6xl font-bold text-sn-border select-none">
                  {i + 1}
                </span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${meta.bg} border ${meta.border} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={meta.color} />
                </div>

                <h3 className="font-display text-lg font-bold text-sn-text mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
