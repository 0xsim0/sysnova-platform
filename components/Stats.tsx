"use client";
import { useReveal } from "@/components/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";

type StatItem = { num: string; label: string; subLabel?: string; ariaLabel: string };

export default function Stats() {
  const ref = useReveal();
  const { t } = useLanguage();

  const stats: StatItem[] = [
    { num: t.stats.clientsNum, label: t.stats.clientsLabel, subLabel: t.stats.clientsSubLabel, ariaLabel: t.stats.ariaLabels.rating },
    { num: t.stats.responseNum, label: t.stats.responseLabel, ariaLabel: t.stats.ariaLabels.response },
    { num: t.stats.languagesNum, label: t.stats.languagesLabel, ariaLabel: t.stats.ariaLabels.languages },
    { num: t.stats.teamNum, label: t.stats.teamLabel, ariaLabel: t.stats.ariaLabels.team },
  ];

  return (
    <section className="border-y border-sn-border bg-sn-card/40" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">{t.stats.sectionLabel}</h2>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center`}>
              <span
                className="font-display text-4xl md:text-5xl font-bold gradient-text"
                aria-label={s.ariaLabel}
              >
                {s.num}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mt-2">
                {s.label}
              </span>
              {s.subLabel && (
                <span className="font-mono text-xs text-gray-600 mt-0.5">
                  {s.subLabel}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
