"use client";

import { useLanguage } from "@/context/LanguageContext";

/**
 * WCAG 2.4.1 "bypass blocks" — keyboard skip link to <main id="main-content">.
 * Visible only on focus. Translated via i18n.
 *
 * Pair with `tabIndex={-1}` on the target <main> so activating the link
 * actually moves focus (not just scrolls) — without that, the next Tab
 * keystroke goes back to the Navbar and the skip is useless.
 */
export default function SkipLink() {
  const { t } = useLanguage();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:z-[200] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:rounded focus:bg-sn-secondary focus:text-sn-bg focus:font-mono focus:text-sm"
    >
      {t.common.skipToMain}
    </a>
  );
}
