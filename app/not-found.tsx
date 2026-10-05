import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | SysNova",
  description: "Die angeforderte Seite existiert nicht oder wurde verschoben.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-sn-bg text-white">
      <SkipLink />
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        aria-label="Seite nicht gefunden"
        className="pt-28 pb-20 outline-none flex items-center justify-center px-4"
      >
        <div className="max-w-lg w-full text-center">
          <p className="font-mono text-xs text-sn-primary tracking-widest uppercase mb-4">
            Fehler 404
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-5">
            Seite nicht gefunden.
          </h1>
          <p className="text-sn-muted mb-8 leading-relaxed">
            Die Seite, die Sie suchen, existiert nicht oder wurde verschoben. Sie
            können auf die Startseite zurückkehren oder uns unter{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sn-secondary hover:underline"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            erreichen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="btn-primary inline-flex items-center justify-center gap-2 text-sm px-6 py-3"
            >
              Zur Startseite
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 text-sm px-6 py-3 rounded-md border border-sn-border text-white hover:bg-sn-card transition-colors"
            >
              Zum Blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
