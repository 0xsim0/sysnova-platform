"use client";

import { useEffect } from "react";

/**
 * Scrolls to the URL fragment on initial mount.
 *
 * Fixes B16: Next.js App Router does not reliably scroll to hash targets on
 * cross-route navigation, so links like `/about` → `/#pricing` land at the
 * top of the homepage instead of the anchored section. This component runs
 * once when the homepage mounts (which happens on every entry from another
 * route) and scrolls to the requested fragment.
 *
 * Also acts as a safety net for direct URL hits like /#pricing whose native
 * anchor scroll may fire before below-the-fold sections have laid out.
 *
 * Honors prefers-reduced-motion. Two requestAnimationFrame calls give the
 * browser a paint cycle so the target's bounding rect is final.
 */
export default function HashScrollOnMount() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    let raf1 = 0;
    let raf2 = 0;

    raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(() => {
        let target: Element | null = null;
        try {
          target = document.querySelector(hash);
        } catch {
          // Malformed fragment (e.g. starts with a digit) → CSS selector throws.
          return;
        }
        if (!target) return;

        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        target.scrollIntoView({
          behavior: reduced ? "auto" : "smooth",
          block: "start",
        });
      });
    });

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
    };
  }, []);

  return null;
}
