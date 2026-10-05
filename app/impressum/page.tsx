import type { Metadata } from "next";
import Link from "next/link";
import SkipLink from "@/components/SkipLink";
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WHATSAPP_NUMBER_DISPLAY } from "@/lib/config";

export const metadata: Metadata = {
  title: "Impressum — SysNova",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <>
      <SkipLink />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-sn-bg text-white outline-none">
        <div className="max-w-3xl mx-auto px-5 py-20">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-sn-primary hover:text-sn-secondary transition-colors mb-12"
        >
          ← Zurück zu SysNova
        </Link>

        <h1 className="font-display text-4xl font-bold text-white mb-2">Impressum</h1>
        <div className="h-px bg-gradient-to-r from-sn-primary to-sn-secondary w-24 mb-10 opacity-60" />

        <div className="space-y-8 text-gray-400 text-sm leading-relaxed font-body">

          <section>
            <h2 className="font-display font-semibold text-white text-base mb-3">
              Angaben gemäß § 5 DDG
            </h2>
            <p>
              Wasiem Abd Albaki<br />
              Elsenstr. 47a<br />
              12059 Berlin<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-white text-base mb-3">Kontakt</h2>
            <p>
              Telefon:{" "}
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="text-sn-primary hover:text-sn-secondary transition-colors"
              >
                {WHATSAPP_NUMBER_DISPLAY}
              </a>
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sn-primary hover:text-sn-secondary transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-white text-base mb-3">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>Wasiem Abd Albaki, Elsenstr. 47a, 12059 Berlin</p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-white text-base mb-3">Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann keine Gewähr übernommen
              werden. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-white text-base mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
              und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

        </div>
        </div>
      </main>
    </>
  );
}
