"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/config";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app/error.tsx]", error);
  }, [error]);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      aria-label="Fehlerseite"
      className="min-h-screen bg-sn-bg text-white flex items-center justify-center px-4 outline-none"
    >
      <div className="max-w-lg w-full text-center">
        <div role="alert" aria-live="assertive">
          <p className="font-mono text-xs text-sn-primary tracking-widest uppercase mb-4">
            Fehler 500
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-5">
            Etwas ist schiefgelaufen.
          </h1>
          <p className="text-sn-muted mb-8 leading-relaxed">
            Wir konnten diese Seite gerade nicht laden. Bitte versuchen Sie es erneut
            oder schreiben Sie uns kurz an{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sn-secondary hover:underline">
              {CONTACT_EMAIL}
            </a>.
          </p>
          {error.digest && (
            <p className="font-mono text-xs text-sn-muted mb-8">
              Fehler-ID: {error.digest}
            </p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={reset}
            className="btn-primary inline-flex items-center justify-center gap-2 text-sm px-6 py-3"
          >
            Erneut versuchen
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 text-sm px-6 py-3 rounded-md border border-sn-border text-white hover:bg-sn-card transition-colors"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
