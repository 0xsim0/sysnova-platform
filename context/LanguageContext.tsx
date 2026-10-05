"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import useIsomorphicLayoutEffect from "@/components/hooks/useIsomorphicLayoutEffect";
import { Translations } from "@/lib/i18n/types";
import en from "@/lib/i18n/en";
import de from "@/lib/i18n/de";

type Lang = "en" | "de";

const translations: Record<Lang, Translations> = { en, de };

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  toggle: () => void;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  // Read lang preference before first paint — no flash.
  // localStorage is primary; cookie is fallback so SSR and client stay in sync
  // when localStorage was cleared but the cookie still holds the user's preference.
  useIsomorphicLayoutEffect(() => {
    const stored = localStorage.getItem("sn-lang") as Lang | null;
    if (stored === "en" || stored === "de") {
      setLangState(stored);
      return;
    }
    const cookieMatch = document.cookie.match(/(?:^|;\s*)sn-lang=([^;]*)/);
    const fromCookie = cookieMatch?.[1];
    if (fromCookie === "en" || fromCookie === "de") {
      setLangState(fromCookie);
    }
  }, []);

  // Only sync the <html lang=""> attribute — never write to localStorage here
  useIsomorphicLayoutEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Persist to localStorage + cookie so SSR <html lang> is correct on next request.
  // Cookie is read by proxy.ts and forwarded as x-lang header to layout.tsx.
  const persistLang = (l: Lang) => {
    localStorage.setItem("sn-lang", l);
    document.cookie = `sn-lang=${l}; path=/; max-age=31536000; SameSite=Lax; Secure`;
  };

  // Write only on explicit user action, never on mount.
  const toggle = () => {
    const next = lang === "en" ? "de" : "en";
    persistLang(next);
    setLangState(next);
  };

  const setLang = (l: Lang) => {
    setLangState(l);
    persistLang(l);
  };

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang], toggle, setLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
