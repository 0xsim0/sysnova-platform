"use client";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReveal } from "@/components/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";
import { AUTHOR_NAME } from "@/lib/config";

type LangKey = "arabic" | "english" | "german";
type LangLevel = "native" | "b2" | "basic";

const MEMBER_META = [
  {
    initials: "W",
    name: AUTHOR_NAME,
    languages: [
      { flag: "🇸🇦", key: "arabic" as LangKey,  level: "native" as LangLevel },
      { flag: "🇬🇧", key: "english" as LangKey, level: "b2" as LangLevel     },
      { flag: "🇩🇪", key: "german" as LangKey,  level: "basic" as LangLevel  },
    ],
    gradient: "from-amber-600 to-yellow-400",
  },
];

export default function Team() {
  const ref = useReveal();
  const { t } = useLanguage();

  return (
    <section id="team" className="section-padding relative">
      {/* Right-side glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(162,103,32,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-8" ref={ref}>
        {/* Heading */}
        <div className="reveal reveal-delay-1 mb-16">
          <SectionHeading
            label={t.team.label}
            title={t.team.title}
            highlight={t.team.highlight}
            subtitle={t.team.subtitle}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MEMBER_META.map((meta, i) => {
            const member = t.team.members[i];
            if (!member) return null;
            return (
              <div
                key={meta.initials}
                className={`reveal reveal-delay-${i + 2} group bg-sn-card card-glow rounded-2xl p-8 flex flex-col`}
              >
                {/* Top Row */}
                <div className="flex items-start gap-5 mb-6">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center text-sn-bg font-display font-bold text-2xl shadow-amber-sm group-hover:shadow-amber-md transition-shadow duration-300`}
                    >
                      {meta.initials}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-sn-bg border-2 border-sn-bg">
                      <div className="w-full h-full rounded-full bg-green-400" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="min-w-0">
                    {meta.name && (
                      <h3 className="font-display font-bold text-xl text-sn-text mb-1 group-hover:text-sn-secondary transition-colors">
                        {meta.name}
                      </h3>
                    )}
                    <p className="font-mono text-xs text-sn-primary tracking-wide leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <p className="text-gray-600 text-xs uppercase tracking-widest font-mono mb-3">
                    {t.team.skillsLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mt-auto pt-5 border-t border-sn-border">
                  <p className="text-gray-600 text-xs uppercase tracking-widest font-mono mb-3">
                    {t.team.languagesLabel}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {meta.languages.map((lang) => (
                      <div key={lang.key} className="flex items-center gap-1.5">
                        <span className="text-base leading-none">{lang.flag}</span>
                        <div>
                          <span className="text-gray-300 text-xs font-body">{t.team.langNames[lang.key]}</span>
                          <span className="text-gray-600 text-xs ml-1 font-mono">· {t.team.langLevels[lang.level]}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="reveal reveal-delay-2 mt-12">
          <div className="rounded-2xl border border-sn-border/60 bg-gradient-to-r from-sn-card to-sn-bg p-7 text-center">
            <p className="text-gray-400 text-sm mb-1 font-body">
              {t.team.availableBanner}
            </p>
            <p className="font-mono text-xs text-sn-primary tracking-wider uppercase">
              {t.team.languagesBanner}
            </p>
          </div>
        </div>

        {/* About link */}
        <div className="reveal reveal-delay-3 mt-5 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-1 font-mono text-sm text-sn-secondary/60 hover:text-sn-secondary transition-colors duration-200"
          >
            {t.team.aboutLink}
          </Link>
        </div>
      </div>
    </section>
  );
}
