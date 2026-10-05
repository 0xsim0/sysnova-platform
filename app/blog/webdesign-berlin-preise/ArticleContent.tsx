import Link from "next/link";
import BlogPageTemplate from "@/components/BlogPageTemplate";

export default function ArticleContent() {
  return (
    <BlogPageTemplate
      title="Webdesign Berlin Preise 2026: Freelancer, Agentur oder kleines IT-Team — was kostet was?"
      date="2026-05-19"
      readingTime={8}
      category="Webentwicklung"
      categoryAccent="violet"
    >
      <div className="highlight-box">
        <strong>Preise auf einen Blick:</strong>
        <ul>
          <li><strong>Landing Page:</strong> 500–1.500 € (einmalig) + ab 30 €/Monat Wartung</li>
          <li><strong>Unternehmenswebsite (5–10 Seiten):</strong> 1.000–3.500 € + ab 49 €/Monat</li>
          <li><strong>Onlineshop:</strong> 1.500–8.000 € je nach Produktanzahl und Funktionen</li>
          <li><strong>Stundensatz Berlin:</strong> Freelancer 30–60 €/h, Agentur 80–150 €/h</li>
          <li>SysNova liegt bei 30–50 €/h — Agentur-Qualität zum Freelancer-Preis.</li>
        </ul>
      </div>

      <p>
        Wer eine <strong>Website in Berlin erstellen lassen</strong> möchte, bekommt
        sehr unterschiedliche Angebote. Ein Freelancer auf Fiverr verlangt 200 €,
        eine Berliner Digitalagentur 8.000 € — für scheinbar dasselbe Ergebnis.
        Was steckt hinter diesen Unterschieden, und welches Angebot passt zu einem
        kleinen Unternehmen?
      </p>

      <h2>Die drei Anbieter-Typen und ihre Preise</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Anbieter</th>
            <th scope="col">Stundensatz</th>
            <th scope="col">Typisches Projekt</th>
            <th scope="col">Stärken</th>
            <th scope="col">Risiken</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Freelancer-Marktplatz (Fiverr, Upwork)</td>
            <td>5–20 €/h</td>
            <td>200–800 €</td>
            <td>Günstig, schnell</td>
            <td>Qualität schwankt, kein Support nach Launch, oft Templates</td>
          </tr>
          <tr>
            <td>Lokaler Freelancer Berlin</td>
            <td>30–60 €/h</td>
            <td>600–2.500 €</td>
            <td>Persönlicher Kontakt, gute Qualität</td>
            <td>Auslastung variiert, kein Team für komplexe Projekte</td>
          </tr>
          <tr>
            <td>Kleines IT-Team (wie SysNova)</td>
            <td>30–50 €/h</td>
            <td>500–4.000 €</td>
            <td>Team-Expertise, persönlich, faire Preise, langfristige Betreuung</td>
            <td>Weniger Kapazität als große Agenturen</td>
          </tr>
          <tr>
            <td>Berliner Digitalagentur</td>
            <td>80–150 €/h</td>
            <td>3.000–15.000 €</td>
            <td>Strategische Beratung, großes Team, Branding</td>
            <td>Teuer, langwierig, oft Overkill für KMU</td>
          </tr>
        </tbody>
      </table>

      <h2>Was beeinflusst den Preis wirklich?</h2>
      <p>
        Der Preis einer Website hängt nicht nur vom Anbieter ab, sondern vor allem vom Umfang:
      </p>
      <ul>
        <li><strong>Anzahl der Seiten:</strong> Eine Landing Page (1 Seite) kostet ¼ einer 10-seitigen Website.</li>
        <li><strong>Individuelles Design vs. Template:</strong> Ein maßgeschneidertes Design kostet 30–50 % mehr als ein angepasstes Template.</li>
        <li><strong>Funktionen:</strong> Kontaktformular (+0 €), Onlineshop (+1.000–3.000 €), Mehrsprachigkeit (+20–40 %), Buchungssystem (+300–800 €).</li>
        <li><strong>Texte und Fotos:</strong> Wenn der Anbieter Texte schreibt und Fotos bearbeitet, steigt der Preis um 200–500 €.</li>
        <li><strong>SEO-Setup:</strong> Technisches SEO (Sitemap, Meta-Daten, Google Search Console) sollte immer inklusive sein — bei günstigen Anbietern oft nicht.</li>
      </ul>

      <h2>Preistabelle: Alle Website-Typen für Berlin</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Website-Typ</th>
            <th scope="col">Seitenanzahl</th>
            <th scope="col">Preis (SysNova)</th>
            <th scope="col">Typische Nutzung</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Landing Page</td>
            <td>1</td>
            <td>ab 500 €</td>
            <td>Einzelleistung, Bewerbungsseite, Event</td>
          </tr>
          <tr>
            <td>Unternehmenswebsite</td>
            <td>5–8</td>
            <td>ab 1.000 €</td>
            <td>Handwerk, Dienstleister, Praxis, Kanzlei</td>
          </tr>
          <tr>
            <td>Branchenwebsite mit SEO</td>
            <td>8–15</td>
            <td>ab 1.800 €</td>
            <td>Restaurant, Salon, Einzelhandel, Gastronomie</td>
          </tr>
          <tr>
            <td>Onlineshop (bis 50 Produkte)</td>
            <td>10–20</td>
            <td>ab 1.500 €</td>
            <td>Boutique, Ateliers, Feinkost</td>
          </tr>
          <tr>
            <td>Mehrsprachige Website (DE+EN+AR)</td>
            <td>5–10</td>
            <td>ab 1.800 €</td>
            <td>International tätige KMU, arabischsprachige Zielgruppe</td>
          </tr>
          <tr>
            <td>Wartung + Hosting</td>
            <td>—</td>
            <td>ab 49 €/Monat</td>
            <td>Alle Website-Typen</td>
          </tr>
        </tbody>
      </table>

      <h2>Was ist im Preis enthalten — und was nicht?</h2>
      <p>
        Bei seriösen Anbietern sollte ein Website-Projekt immer enthalten:
      </p>
      <ul>
        <li>✅ Domain-Setup und Verknüpfung</li>
        <li>✅ SSL-Zertifikat (HTTPS)</li>
        <li>✅ Responsive Design (mobil, Tablet, Desktop)</li>
        <li>✅ Kontaktformular</li>
        <li>✅ Google Search Console und Sitemap</li>
        <li>✅ Basis-SEO (Meta-Titel, Meta-Beschreibung, Alt-Texte)</li>
        <li>✅ DSGVO-Grundsetup (Impressum, Datenschutz, Cookie-Banner)</li>
      </ul>
      <p>Typisch nicht enthalten (kostenpflichtig extra):</p>
      <ul>
        <li>❌ Professionelle Texte (Copywriting)</li>
        <li>❌ Produktfotografie</li>
        <li>❌ Logo-Design oder Branding</li>
        <li>❌ Google Ads oder SEO-Kampagnen</li>
        <li>❌ Onlineshop-Funktionen (Zahlungsabwicklung, Lagerverwaltung)</li>
      </ul>

      <h2>Warnsignale: Diese Angebote sollten Sie ablehnen</h2>
      <ul>
        <li><strong>Pauschalpreise unter 300 € für eine &quot;vollständige Website&quot;:</strong> Realistisch nicht möglich — entweder Template ohne Anpassung oder versteckte Folgekosten.</li>
        <li><strong>Kein schriftliches Angebot:</strong> Seriöse Anbieter liefern immer eine Leistungsbeschreibung.</li>
        <li><strong>Keine Übergabe der Zugangsdaten:</strong> Sie müssen immer Zugriff auf Hosting, Domain und CMS haben — die Website gehört Ihnen.</li>
        <li><strong>Website nur auf der Anbieter-Domain:</strong> Einige billige Anbieter hosten auf ihrer eigenen Domain. Bei Kündigung ist die Website weg.</li>
        <li><strong>Keine DSGVO-Erwähnung:</strong> Wer Impressum und Datenschutz ignoriert, liefert rechtlich riskante Ergebnisse.</li>
      </ul>

      <h2>Lohnt sich eine günstige Website?</h2>
      <p>
        Eine 300-€-Website von einem Marktplatz ist besser als gar keine — aber
        oft schlechter als nichts, weil sie:
      </p>
      <ul>
        <li>Kein SEO hat und deshalb bei Google nicht gefunden wird,</li>
        <li>nicht mobil-optimiert ist und Besucher sofort abspringen,</li>
        <li>keinen vertrauenswürdigen Eindruck macht und Kunden abschreckt.</li>
      </ul>
      <p>
        Eine Website ist kein Kostenfaktor — sie ist ein Vertriebskanal. Eine 1.000-€-Website,
        die pro Monat 5 Anfragen generiert, hat sich nach 2 Monaten amortisiert.
        Eine 200-€-Website, die keine Anfragen bringt, ist Geldverschwendung.
      </p>

      <h2>Warum SysNova das beste Preis-Leistungs-Verhältnis in Berlin bietet</h2>
      <p>
        Die Zahlen in diesem Artikel zeigen es deutlich: SysNova liegt preislich bei lokalen
        Freelancern, liefert aber Agentur-Qualität. Wie ist das möglich?
      </p>
      <ul>
        <li><strong>Kein Berliner Büro-Overhead:</strong> Kein teures Mitte-Büro, kein Account Manager, keine Projekt-Management-Ebene — der Preis fließt direkt in die Entwicklungsarbeit.</li>
        <li><strong>Direktkommunikation:</strong> Sie sprechen immer mit demjenigen, der Ihre Website baut — keine Missverständnisse durch Zwischenschichten.</li>
        <li><strong>Moderne Technologie:</strong> SysNova entwickelt mit Next.js — keine WordPress-Templates, kein Page Builder. Schnellere Ladezeiten, besseres SEO, kein Vendor Lock-in.</li>
        <li><strong>Transparente Festpreise:</strong> Jedes Angebot ist schriftlich, mit definierten Leistungen. Kein Stundensatz-Overrun, keine Überraschungsrechnungen.</li>
        <li><strong>Kein Lock-in:</strong> Domain, Hosting und Code gehören immer Ihnen. Sie können jederzeit wechseln — aber die meisten Kunden bleiben, weil es sich lohnt.</li>
      </ul>
      <p>
        <Link href="/portfolio">Unsere Arbeit in der Übersicht</Link>{" "}
        oder direkt{" "}
        <Link href="/#contact">ein kostenloses Angebot anfragen</Link>.
      </p>

      <h2>Häufige Fragen</h2>
      <h3>Warum ist SysNova günstiger als eine Berliner Agentur?</h3>
      <p>
        SysNova ist ein kleines IT-Team ohne Berliner Büro-Overhead, Account Manager
        und Projekt-Management-Ebenen. Kunden arbeiten direkt mit dem Entwickler —
        das spart 30–50 % gegenüber vergleichbarer Agentur-Leistung.
      </p>
      <h3>Gibt es versteckte Kosten bei SysNova?</h3>
      <p>
        Nein. Jedes Projekt bekommt ein schriftliches Angebot mit klar definierten
        Leistungen und einem Festpreis oder einem Stundenkontingent. Zusatzleistungen
        werden vorher besprochen.
      </p>
      <h3>Was passiert, wenn ich nach dem Launch Änderungen brauche?</h3>
      <p>
        Mit dem Wartungspaket ab 49 €/Monat sind kleine Änderungen (Texte, Bilder, Preise)
        inklusive. Größere Änderungen werden stündlich nach Aufwand abgerechnet.
      </p>
      <h3>Kann ich die Domain behalten, wenn ich den Anbieter wechsle?</h3>
      <p>
        Ja — immer. SysNova registriert Domains immer auf Ihren Namen. Sie können
        jederzeit zu einem anderen Anbieter wechseln. Kein Lock-in.
      </p>
      <h3>Wie lange dauert ein typisches Website-Projekt bei SysNova?</h3>
      <p>
        Landing Page: 5–7 Werktage. Unternehmenswebsite (5–8 Seiten): 10–14 Werktage.
        Onlineshop: 2–4 Wochen. Voraussetzung ist, dass Fotos, Texte und Markenfarben
        rechtzeitig geliefert werden. SysNova erstellt vor Projektstart einen verbindlichen Zeitplan.
      </p>
      <h3>Kann SysNova meine bestehende Website verbessern, statt eine neue zu bauen?</h3>
      <p>
        Ja — das ist oft die günstigere Wahl. SysNova analysiert die bestehende Seite auf
        Ladezeit, SEO-Schwächen und Conversion-Punkte und gibt eine klare Empfehlung:
        Optimierung oder Neuaufbau. Eine Überarbeitung kostet typisch 50–70 % weniger
        als ein Neuaufbau und ist in 5–10 Tagen abgeschlossen.
      </p>

      <div className="highlight-box">
        <strong>Kostenloses Angebot einholen:</strong>
        <p>
          Sie wissen jetzt, was Webdesign in Berlin kostet. Der nächste Schritt ist
          ein konkretes Angebot für Ihr Projekt — kostenlos, unverbindlich und innerhalb von 24 Stunden.
        </p>
        <p>
          <Link href="/#contact">Jetzt Angebot anfragen</Link>{", "}
          <Link href="/portfolio">unsere Projekte ansehen</Link>{" "}
          oder mehr über{" "}
          <Link href="/leistungen/webentwicklung">unsere Leistungen</Link>{" "}
          erfahren.{" "}
          <Link href="/blog/was-kostet-eine-website-berlin-2026">
            Mehr Details zu Website-Kosten in Berlin 2026.
          </Link>
        </p>
      </div>
    </BlogPageTemplate>
  );
}
