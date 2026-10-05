"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import useIsomorphicLayoutEffect from "@/components/hooks/useIsomorphicLayoutEffect";
import { useLanguage } from "@/context/LanguageContext";

export default function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (!localStorage.getItem("sn-cookie-consent")) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    const handleReset = () => setVisible(true);
    window.addEventListener("sn-consent-reset", handleReset);
    return () => window.removeEventListener("sn-consent-reset", handleReset);
  }, []);

  const accept = () => {
    localStorage.setItem("sn-cookie-consent", "accepted");
    window.dispatchEvent(new Event("sn-consent-accepted"));
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("sn-cookie-consent", "declined");
    window.dispatchEvent(new Event("sn-consent-declined"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label={t.cookieBanner.ariaLabel}
      className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up-cookie"
      style={{ borderTop: "1px solid #262826" }}
    >
      {/* Amber accent line at top */}
      <div
        style={{
          height: 2,
          background: "linear-gradient(to right, #A26720, #F9D977, #A26720)",
        }}
      />

      <div
        style={{ backgroundColor: "#181A18" }}
        className="px-6 py-5 md:px-10"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="font-mono text-xs text-sn-primary uppercase tracking-widest mb-1">
              {t.cookieBanner.title}
            </p>
            <p className="text-sn-muted text-sm leading-relaxed">
              {t.cookieBanner.description}{" "}
              <Link
                href="/datenschutz"
                className="text-sn-primary hover:text-sn-secondary underline underline-offset-2 transition-colors"
              >
                {t.cookieBanner.learnMore}
              </Link>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={decline}
              aria-label={t.cookieBanner.declineAriaLabel}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-sn-muted border border-sn-border hover:border-sn-primary hover:text-white transition-colors"
            >
              {t.cookieBanner.decline}
            </button>
            <button
              onClick={accept}
              aria-label={t.cookieBanner.acceptAriaLabel}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-sn-bg transition-all hover:shadow-amber-md"
              style={{
                background: "linear-gradient(135deg, #A26720, #F9D977)",
              }}
            >
              {t.cookieBanner.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
