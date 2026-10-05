import Link from "next/link";
import BlogPageTemplate from "@/components/BlogPageTemplate";

export default function ArticleContent() {
  return (
    <BlogPageTemplate
      title="Onlineshop erstellen lassen Berlin: Kosten, Plattformen und was KMU wissen müssen"
      date="2026-05-19"
      readingTime={10}
      category="Webentwicklung"
      categoryAccent="violet"
    >
      <div className="highlight-box">
        <strong>Das Wichtigste in Kürze:</strong>
        <ul>
          <li>Ein einfacher Onlineshop für Berliner KMU kostet ab 1.500 €, ein vollständiger ab 3.000 €.</li>
          <li>Shopify ist die einfachste Wahl für Einsteiger; WooCommerce für WordPress-Nutzer; Next.js für Performance-Anforderungen.</li>
          <li>DSGVO ist in Deutschland Pflicht: Cookie-Banner, Datenschutzerklärung und Widerrufsrecht müssen korrekt eingebaut sein.</li>
          <li>Lokale SEO + Google Shopping erhöhen den Umsatz von Berliner Händlern deutlich.</li>
          <li>SysNova liefert DSGVO-konforme Onlineshops für Berlin in 2–4 Wochen.</li>
        </ul>
      </div>

      <p>
        Ein <strong>Onlineshop für ein Berliner KMU</strong> ist 2026 kein Luxus mehr — er
        ist Voraussetzung. Ob Boutique in Prenzlauer Berg, Feinkostladen in Mitte oder
        Handwerksbetrieb in Neukölln: Wer nicht online verkauft, lässt Umsatz liegen.
        Diese Seite zeigt, was ein Onlineshop für Berliner Kleinunternehmen kostet, welche
        Plattform passt und was rechtlich zu beachten ist.
      </p>

      <h2>Kosten: Was kostet ein Onlineshop in Berlin?</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Shop-Typ</th>
            <th scope="col">Einmalige Kosten</th>
            <th scope="col">Laufende Kosten/Monat</th>
            <th scope="col">Geeignet für</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mini-Shop (bis 50 Produkte)</td>
            <td>ab 1.500 €</td>
            <td>ab 49 €</td>
            <td>Boutiquen, Ateliers, Kleinproduzenten</td>
          </tr>
          <tr>
            <td>Mittelgroßer Shop (bis 500 Produkte)</td>
            <td>ab 2.500 €</td>
            <td>ab 99 €</td>
            <td>Händler, Dienstleister mit Produkten</td>
          </tr>
          <tr>
            <td>Großer Shop (500+ Produkte)</td>
            <td>ab 4.000 €</td>
            <td>ab 199 €</td>
            <td>Großhändler, etablierte Händler</td>
          </tr>
          <tr>
            <td>Custom-Shop (Next.js)</td>
            <td>ab 5.000 €</td>
            <td>ab 99 €</td>
            <td>Performance-kritische oder mehrsprachige Shops</td>
          </tr>
        </tbody>
      </table>
      <p>
        Dazu kommen Plattformgebühren (Shopify: ab 29 €/Monat), Zahlungsanbieter
        (Stripe: 1,5 % + 0,25 € pro Transaktion) und ggf. ein SSL-Zertifikat (oft im Hosting inklusive).
      </p>

      <h2>Plattform-Vergleich: Shopify, WooCommerce oder Next.js?</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Plattform</th>
            <th scope="col">Stärken</th>
            <th scope="col">Schwächen</th>
            <th scope="col">Empfehlung</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shopify</td>
            <td>Einfach zu bedienen, viele Apps, stabile Infrastruktur</td>
            <td>Monatliche Gebühren, eingeschränkte Anpassbarkeit, Transaktionsgebühren</td>
            <td>Einsteiger, schneller Launch, bis 200 Produkte</td>
          </tr>
          <tr>
            <td>WooCommerce</td>
            <td>Open Source, WordPress-Integration, kostenlose Basis</td>
            <td>WordPress-Kenntnisse nötig, Sicherheitsupdates selbst verwalten</td>
            <td>Bestehende WordPress-Seite, technikaffine Händler</td>
          </tr>
          <tr>
            <td>Next.js (custom)</td>
            <td>Maximale Performance, volle Kontrolle, kein Vendor Lock-in</td>
            <td>Höhere Entwicklungskosten, kein fertiges Admin-Panel</td>
            <td>Performance-kritisch, mehrsprachig, über 1.000 Produkte</td>
          </tr>
          <tr>
            <td>Wix / Squarespace</td>
            <td>Günstig, selbst bedienbar</td>
            <td>Eingeschränktes SEO, keine professionelle Skalierbarkeit</td>
            <td>Hobbyshops, nicht für ernsthaftes Business</td>
          </tr>
        </tbody>
      </table>

      <h2>DSGVO: Was ein Berliner Onlineshop rechtlich braucht</h2>
      <p>
        In Deutschland ist die DSGVO besonders streng durchgesetzt. Ein Onlineshop
        ohne korrekte Rechtstexte riskiert teure Abmahnungen. Diese Elemente sind Pflicht:
      </p>
      <ul>
        <li><strong>Impressum:</strong> § 5 DDG — vollständige Angaben zum Betreiber.</li>
        <li><strong>Datenschutzerklärung:</strong> Welche Daten werden gesammelt und warum?</li>
        <li><strong>Cookie-Banner:</strong> Einwilligung vor dem Setzen von Tracking-Cookies.</li>
        <li><strong>AGB:</strong> Lieferbedingungen, Rückgaberecht, Zahlungsbedingungen.</li>
        <li><strong>Widerrufsrecht:</strong> 14-tägiges Rückgaberecht für Verbraucher (BGB § 355 ff.).</li>
        <li><strong>SSL-Verschlüsselung:</strong> HTTPS ist Pflicht für jeden Shop mit Zahlungsdaten.</li>
      </ul>
      <p>
        SysNova liefert alle Rechtstexte-Templates und baut den Cookie-Banner DSGVO-konform ein.
        Rechtliche Prüfung durch einen Anwalt wird dennoch empfohlen.
      </p>

      <h2>Zahlungsarten: Was Berliner Kunden wollen</h2>
      <ul>
        <li><strong>PayPal:</strong> Erwartet von 70 % der deutschen Online-Käufer — Pflicht.</li>
        <li><strong>Kreditkarte (Stripe):</strong> International wichtig, niedrige Einrichtungskosten.</li>
        <li><strong>Klarna / BNPL:</strong> Buy-Now-Pay-Later erhöht Warenkorbwert um 20–30 %.</li>
        <li><strong>Sofortüberweisung / SEPA:</strong> Für technikscheue Kunden und B2B-Bestellungen.</li>
        <li><strong>Apple Pay / Google Pay:</strong> Wächst stark, besonders auf dem Smartphone.</li>
      </ul>

      <h2>Lokale SEO und Google Shopping für Berliner Händler</h2>
      <p>
        Ein Onlineshop ohne Besucher bringt keinen Umsatz. Für Berliner KMU sind
        zwei Kanäle besonders wirksam:
      </p>
      <ul>
        <li>
          <strong>Google Shopping:</strong> Produkte erscheinen direkt in der Google-Suche mit Bild
          und Preis. Für physische Produkte ist das der stärkste bezahlte Kanal.
        </li>
        <li>
          <strong>Lokale SEO:</strong> Produktseiten mit Berlin-Bezug (z.B. &quot;handgemachte Seife Berlin kaufen&quot;)
          ranken gut, weil große Händler diese Nischen ignorieren.
        </li>
      </ul>

      <h2>Produktfotos und Texte: Wo KMU scheitern</h2>
      <p>
        Die häufigste Ursache für schlechte Onlineshop-Performance sind nicht die Technik,
        sondern die Inhalte:
      </p>
      <ul>
        <li><strong>Schlechte Produktfotos:</strong> Unscharfe oder schlecht beleuchtete Bilder erhöhen die Absprungrate. Weißer Hintergrund + natürliches Licht reicht für den Anfang.</li>
        <li><strong>Hersteller-Texte:</strong> Wenn 50 andere Shops denselben Text haben, rankt keiner. Eigene Beschreibungen sind Pflicht.</li>
        <li><strong>Fehlende Größen-/Varianten-Info:</strong> Rückfragen und Retouren kosten Zeit — klare Produktinformationen reduzieren beides.</li>
      </ul>

      <h2>Typische Fehler beim Onlineshop-Launch</h2>
      <ul>
        <li>Shop live schalten ohne SSL-Zertifikat (Google markiert ihn als unsicher).</li>
        <li>Keine mobile Optimierung — über 60 % der Käufe kommen vom Smartphone.</li>
        <li>Keine Sitemap und kein Google Search Console Setup — Google findet den Shop nicht.</li>
        <li>Checkout mit zu vielen Pflichtfeldern — jedes zusätzliche Feld kostet Konversionen.</li>
        <li>Keine echten Produktbewertungen — Social Proof ist entscheidend für Erstkäufer.</li>
      </ul>

      <h2>Warum SysNova für Ihren Berliner Onlineshop?</h2>
      <p>
        Ein Onlineshop ist eine langfristige Investition — kein einmaliges Projekt.
        SysNova begleitet Sie von der Plattformwahl bis zum laufenden Betrieb:
      </p>
      <ul>
        <li><strong>DSGVO-Kompetenz von Anfang an:</strong> Cookie-Banner, Widerrufsprozess und Rechtstexte-Grundlage werden direkt eingebaut — keine teuren Nachbesserungen nach dem Launch.</li>
        <li><strong>Berliner Marktkenntnis:</strong> Wir wissen, welche Zahlungsarten Berliner Kunden erwarten und wie lokale SEO für Berliner Händler funktioniert.</li>
        <li><strong>Transparente Festpreise:</strong> Kein Stundensatz-Overrun. Jedes Shop-Projekt hat ein schriftliches Angebot mit klar definierten Leistungen.</li>
        <li><strong>Mehrsprachig:</strong> Shops auf Deutsch, Englisch und Arabisch — ideal für Berliner Händler mit internationaler Kundschaft.</li>
        <li><strong>Langfristige Betreuung:</strong> Produkte hinzufügen, Texte anpassen, Sicherheitsupdates — SysNova bleibt erreichbar, auch nach dem Launch.</li>
      </ul>
      <p>
        <Link href="/portfolio">Unsere abgeschlossenen Projekte ansehen</Link>{" "}
        oder direkt{" "}
        <Link href="/#contact">ein kostenloses Erstgespräch buchen</Link>.
      </p>

      <h2>Häufige Fragen</h2>
      <h3>Wie lange dauert ein Onlineshop-Projekt?</h3>
      <p>
        Ein Mini-Shop mit bis zu 50 Produkten: 2–3 Wochen. Ein mittlerer Shop mit
        Zahlungsanbietern, DSGVO-Setup und SEO: 3–5 Wochen. Custom-Entwicklung: 4–8 Wochen.
      </p>
      <h3>Kann ich den Shop später selbst pflegen?</h3>
      <p>
        Ja. Bei Shopify und WooCommerce gibt es ein Admin-Panel für Produkte, Preise
        und Bestellungen. SysNova schult Sie nach dem Launch in einer 1-stündigen Einführung.
      </p>
      <h3>Brauche ich ein Gewerbe für einen Onlineshop?</h3>
      <p>
        Ja. Sobald Sie regelmäßig Waren gewerblich verkaufen, ist eine Gewerbeanmeldung
        beim Berliner Finanzamt nötig. Ausnahme: gelegentliche Privatverkäufe.
      </p>
      <h3>Kann der Shop arabisch- und deutschsprachig sein?</h3>
      <p>
        Ja. SysNova baut mehrsprachige Shops (DE + EN + AR) — besonders wertvoll
        für Händler in Berliner Bezirken mit arabischsprachiger Kundschaft.
      </p>
      <h3>Kann ich Produkte von meinem alten Shop übernehmen?</h3>
      <p>
        Ja. Bei einem Plattformwechsel (z.B. von Jimdo zu Shopify oder von Wix zu WooCommerce)
        überträgt SysNova Produktdaten, Preise und Bilder. Je nach Datenmenge und Ausgangsformat
        ist die Migration Teil der Entwicklungsleistung und wird im Angebot ausgewiesen.
      </p>
      <h3>Was passiert bei technischen Problemen nach dem Launch?</h3>
      <p>
        Mit dem Wartungspaket reagiert SysNova innerhalb von 24 Stunden auf gemeldete Probleme —
        an Werktagen oft noch am selben Tag. Ohne Wartungsvertrag werden Fehler nach Aufwand
        abgerechnet. Kritische Sicherheitsprobleme werden immer mit höchster Priorität behandelt.
      </p>

      <div className="highlight-box">
        <strong>Jetzt Onlineshop anfragen:</strong>
        <p>
          SysNova baut Ihren DSGVO-konformen Onlineshop in Berlin — ab 1.500 €,
          fertig in 2–4 Wochen.
        </p>
        <p>
          <Link href="/#contact">Kostenlose Beratung anfragen</Link>{", "}
          <Link href="/portfolio">unsere Projekte ansehen</Link>{" "}
          oder mehr über{" "}
          <Link href="/leistungen/webentwicklung">unsere Webentwicklungs-Leistungen</Link>{" "}
          erfahren.
        </p>
      </div>
    </BlogPageTemplate>
  );
}
