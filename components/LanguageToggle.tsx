"use client";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.common.languageSelection}
      className="flex items-center rounded-full border border-sn-border bg-sn-card/60 p-0.5 text-xs font-mono tracking-widest"
    >
      <button
        onClick={() => setLang("en")}
        aria-label={t.common.langToggleEn}
        aria-pressed={lang === "en"}
        className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
          lang === "en"
            ? "bg-sn-primary/20 text-sn-secondary border border-sn-primary/40"
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("de")}
        aria-label={t.common.langToggleDe}
        aria-pressed={lang === "de"}
        className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
          lang === "de"
            ? "bg-sn-primary/20 text-sn-secondary border border-sn-primary/40"
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        DE
      </button>
    </div>
  );
}
