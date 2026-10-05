"use client";
import { useEffect, useRef } from "react";

export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // F77: when the user prefers reduced motion, mark the container so its
    // CSS rule (`.reveal-reduced-motion .reveal`) forces every current AND
    // future `.reveal` descendant visible. Skip the IntersectionObserver.
    // Without this guard, elements briefly render at opacity:0 / translateY(28px)
    // on slow connections (invisible flash); a one-shot querySelectorAll would
    // also miss late-rendered children (multi-step forms etc.).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("reveal-reduced-motion");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((child) => {
              child.classList.add("visible");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
