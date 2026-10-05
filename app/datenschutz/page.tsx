import type { Metadata } from "next";
import Link from "next/link";
import SkipLink from "@/components/SkipLink";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — SysNova",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
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

        <h1 className="font-display text-4xl font-bold text-white mb-2">Datenschutzerklärung</h1>
        <div className="h-px bg-gradient-to-r from-sn-primary to-sn-secondary w-24 mb-10 opacity-60" />

        <div className="space-y-8 text-gray-400 text-sm leading-relaxed font-body">

          <section>
            <h2 className="font-display font-semibold text-white text-base mb-3">1. Verantwortlicher</h2>
            <p>
              Wasiem Abd Albaki<br />
              Elsenstr. 47a, 12059 Berlin<br />
              E-Mail:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sn-primary hover:text-sn-secondary transition-colors">
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-white text-base mb-3">2. Kontaktformular</h2>
            <p>
              Wenn Sie uns über das Kontaktformular auf unserer Website kontaktieren, werden die
              eingegebenen Daten (Name, E-Mail-Adresse, Firmenname, Nachricht) ausschließlich zur
              Bearbeitung Ihrer Anfrage verwendet. Die Daten werden per E-Mail über den Dienst{" "}
              <strong className="text-gray-300">Resend</strong> an uns weitergeleitet und{" "}
              <strong className="text-gray-300">nicht in einer Datenbank gespeichert</strong>.
            </p>
            <p className="mt-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw.
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
            <p className="mt-3">
              <strong className="text-gray-300">Auftragsverarbeitung:</strong> Der E-Mail-Versand
              erfolgt über <strong className="text-gray-300">Resend</strong> (Resend Inc., 2261 Market
              Street #5039, San Francisco, CA 94114, USA). Resend verarbeitet die übermittelten Daten
              als Auftragsverarbeiter gemäß Art. 28 DSGVO. Es besteht ein Auftragsverarbeitungsvertrag
              (Data Processing Agreement). Weitere Informationen:{" "}
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sn-primary hover:text-sn-secondary transition-colors"
              >
                Resend Datenschutzerklärung
              </a>
              .
            </p>
            <p className="mt-3">
              <strong className="text-gray-300">Speicherdauer:</strong> Eingehende E-Mails werden
              nach Bearbeitung Ihrer Anfrage innerhalb von 30 Tagen gelöscht.
              Rechtsgrundlage für die Aufbewahrung: Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an der Nachverfolgung offener Anfragen).
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-white text-base mb-3">3. Lokaler Speicher (localStorage &amp; Cookie)</h2>
            <p>
              Diese Website speichert folgende Werte lokal in Ihrem Browser:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="w-1 h-1 rounded-full bg-sn-primary flex-shrink-0 mt-2" />
                <span>
                  <code className="text-sn-secondary text-xs">sn-lang</code>{" "}
                  — Ihre Sprachpräferenz (Deutsch oder Englisch), gespeichert sowohl im localStorage als auch als Cookie (Laufzeit: 1 Jahr, SameSite=Lax). Dient ausschließlich der korrekten Sprachdarstellung beim Seitenaufruf. Enthält keine personenbezogenen Daten.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="w-1 h-1 rounded-full bg-sn-primary flex-shrink-0 mt-2" />
                <span>
                  <code className="text-sn-secondary text-xs">sn-cookie-consent</code>{" "}
                  — Ihre Cookie-Einwilligungsentscheidung (Wert: <code className="text-sn-secondary text-xs">accepted</code> oder{" "}
                  <code className="text-sn-secondary text-xs">declined</code>). Rechtsgrundlage: Art. 6 Abs. 1 lit.{" "}c DSGVO
                  (rechtliche Verpflichtung zur Dokumentation der Einwilligung).
                </span>
              </li>
            </ul>
            <p className="mt-3">
              Beide Werte können jederzeit durch Löschen des Browser-Cache oder über den
              Cookie-Banner (&bdquo;Cookie-Einstellungen&ldquo; in der Fußzeile) entfernt werden.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-white text-base mb-3">4. Google Analytics</h2>
            <p>
              Diese Website verwendet <strong className="text-gray-300">Google Analytics 4</strong>,
              einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street,
              Dublin 4, Irland. Google Analytics verwendet Cookies und ähnliche Technologien,
              um Informationen über die Nutzung dieser Website zu sammeln und auszuwerten.
            </p>
            <p className="mt-3">
              Die dabei erzeugten Informationen (z. B. aufgerufene Seiten, Verweildauer,
              Herkunftsland) werden in der Regel an einen Server von Google in den USA
              übertragen und dort gespeichert. Wir haben die IP-Anonymisierung aktiviert.
            </p>
            <p className="mt-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Einwilligung
              kann jederzeit über den Cookie-Banner am unteren Bildschirmrand widerrufen werden.
              Sie können der Datenerhebung durch Google Analytics zusätzlich widersprechen, indem Sie das{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sn-primary hover:text-sn-secondary transition-colors"
              >
                Browser-Add-on zur Deaktivierung von Google Analytics
              </a>{" "}
              installieren.
            </p>
            <p className="mt-3">
              Weitere Informationen:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sn-primary hover:text-sn-secondary transition-colors"
              >
                Google Datenschutzerklärung
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-white text-base mb-3">5. Vercel Web Analytics &amp; Speed Insights</h2>
            <p>
              Diese Website verwendet <strong className="text-gray-300">Vercel Web Analytics</strong>{" "}
              und <strong className="text-gray-300">Vercel Speed Insights</strong>, Dienste der
              Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, USA. Diese Dienste
              erheben anonymisierte Nutzungsdaten (aufgerufene Seiten, Web-Vitals-Metriken) ohne
              den Einsatz von Cookies und ohne Speicherung personenbezogener Daten.
            </p>
            <p className="mt-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              Verbesserung der Website-Performance). Es werden keine IP-Adressen dauerhaft
              gespeichert. Weitere Informationen:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sn-primary hover:text-sn-secondary transition-colors"
              >
                Vercel Datenschutzerklärung
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-white text-base mb-3">6. Cookies</h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige Cookies sowie
              Cookies von Google Analytics (siehe Abschnitt 4). Vercel Web Analytics und
              Speed Insights arbeiten cookielos. Es werden keine Cookies zu Werbezwecken gesetzt.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-white text-base mb-3">7. Ihre Rechte (DSGVO)</h2>
            <p>Sie haben gemäß DSGVO folgende Rechte:</p>
            <ul className="mt-3 space-y-1.5 list-none">
              {[
                "Recht auf Auskunft (Art. 15 DSGVO)",
                "Recht auf Berichtigung (Art. 16 DSGVO)",
                "Recht auf Löschung (Art. 17 DSGVO)",
                "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Recht auf Widerspruch (Art. 21 DSGVO)",
                "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
              ].map((right) => (
                <li key={right} className="flex items-start gap-2">
                  <span aria-hidden="true" className="w-1 h-1 rounded-full bg-sn-primary flex-shrink-0 mt-2" />
                  {right}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sn-primary hover:text-sn-secondary transition-colors">
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-white text-base mb-3">8. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
              Die zuständige Behörde für Berlin ist der{" "}
              <strong className="text-gray-300">Berliner Beauftragte für Datenschutz und Informationsfreiheit</strong>.
            </p>
          </section>

        </div>
        </div>
      </main>
    </>
  );
}
