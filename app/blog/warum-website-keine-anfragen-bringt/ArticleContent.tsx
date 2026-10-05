import Link from "next/link";
import BlogPageTemplate from "@/components/BlogPageTemplate";

export default function ArticleContent() {
  return (
    <BlogPageTemplate
      title="Warum Ihre Website keine Anfragen bringt: 12 Fehler kleiner Unternehmen"
      date="2026-05-05"
      readingTime={9}
      category="Webentwicklung"
      categoryAccent="violet"
    >
      <div className="highlight-box">
        <strong>Auf einen Blick — Die 12 häufigsten Website-Fehler:</strong>
        <ul>
          <li>Kosten Website-Analyse: <strong>ab 150 €</strong></li>
          <li>Komplette Optimierung: <strong>490–990 €</strong></li>
          <li>Neue professionelle Website: <strong>ab 990 €</strong></li>
          <li>Erstberatung: <strong>kostenlos</strong></li>
        </ul>
      </div>

      <p>
        Ihre Website bekommt Besucher — aber das Telefon bleibt still. Kein Kontaktformular
        ausgefüllt, keine Anfrage per E-Mail. Das ist eines der frustrierendsten Probleme für
        kleine Unternehmen: <strong>eine Website, die nicht verkauft</strong>. Der Grund liegt
        fast immer an denselben <strong>12 behebbare Fehlern</strong>, die SysNova täglich
        bei Berliner KMU sieht.
      </p>

      <h2>Für wen ist dieser Artikel relevant?</h2>
      <p>
        Dieser Artikel richtet sich an Inhaber kleiner Unternehmen in Berlin, die eine Website
        haben, aber wenige oder keine Anfragen darüber bekommen:
      </p>
      <ul>
        <li>Handwerker, Dienstleister und Freelancer mit bestehender Website</li>
        <li>Restaurants, Shops und Praxen, die online unsichtbar sind</li>
        <li>Unternehmen, die bezahlte Werbung erwägen, weil die Website nicht funktioniert</li>
        <li>Selbständige, die nicht wissen, warum Besucher die Seite sofort verlassen</li>
      </ul>

      <h2>Das Problem: Besucher da, Anfragen nicht</h2>
      <p>
        Google Analytics zeigt 200 Besucher im Monat — aber im Postfach ist nichts. Das liegt
        selten am Traffic. Es liegt fast immer an dem, was Besucher erleben, wenn sie auf Ihrer
        Seite landen. Innerhalb von <strong>3–5 Sekunden</strong> entscheidet ein Besucher, ob
        er bleibt oder geht. Wenn er in dieser Zeit nicht versteht, was Sie anbieten, für wen,
        und wie er Sie kontaktieren kann — geht er.
      </p>

      <h2>Die 12 Fehler, die Anfragen verhindern</h2>

      <h3>Fehler 1: Kein klares Leistungsangebot auf den ersten Blick</h3>
      <p>
        Der Besucher landet auf Ihrer Startseite und sieht einen allgemeinen Willkommenstext.
        Was Sie konkret machen, für wen, und was es kostet — das findet er erst nach mehreren
        Klicks. Die Lösung: Ein klarer Satz in der Überschrift, der sofort sagt:{" "}
        <em>Wir machen X für Y in Berlin.</em>
      </p>

      <h3>Fehler 2: Kein sichtbarer Call-to-Action</h3>
      <p>
        Ein Call-to-Action (CTA) ist ein Button oder Link, der dem Besucher sagt, was er als
        nächstes tun soll: <em>Jetzt Anfrage senden</em>, <em>Kostenloses Erstgespräch</em>,{" "}
        <em>Rückruf anfordern</em>. Fehlt er oder ist er erst nach langem Scrollen sichtbar,
        passiert nichts. <strong>Regel:</strong> Ein CTA muss auf jeder Seite ohne Scrollen
        sichtbar sein.
      </p>

      <h3>Fehler 3: Schlechte Ladezeit (über 3 Sekunden)</h3>
      <p>
        53 % aller mobilen Nutzer verlassen eine Seite, wenn sie länger als 3 Sekunden lädt.
        Google wertet langsame Seiten im Ranking ab. Häufige Ursachen: zu große Bilder,
        kein Caching, günstiges Hosting. Tool zur Diagnose:{" "}
        <strong>Google PageSpeed Insights</strong> — kostenlos, gibt klare Handlungsempfehlungen.
      </p>

      <h3>Fehler 4: Nicht mobil-optimiert</h3>
      <p>
        Über <strong>65 % der lokalen Suchanfragen</strong> kommen von Mobilgeräten. Wenn Ihre
        Website auf dem Smartphone unlesbar, zu klein oder horizontal scrollbar ist, verlieren
        Sie mehr als die Hälfte Ihrer potenziellen Kunden, bevor sie überhaupt gelesen haben,
        was Sie anbieten.
      </p>

      <h3>Fehler 5: Kein HTTPS (kein SSL-Zertifikat)</h3>
      <p>
        Browser zeigen <em>Nicht sicher</em> bei Seiten ohne SSL. Das schreckt Besucher ab — besonders
        wenn sie ein Kontaktformular ausfüllen sollen. Google bestraft HTTP-Seiten im Ranking.
        SSL-Zertifikate sind bei den meisten Hostern heute kostenlos (Let&apos;s Encrypt).
      </p>

      <h3>Fehler 6: Fehlende lokale SEO</h3>
      <p>
        Wenn auf Ihrer Website weder Berlin noch Ihr Stadtteil vorkommt, rankt Google Sie
        nicht für lokale Suchanfragen. Ein Elektriker in Neukölln, der das Wort Neukölln
        nirgendwo auf seiner Seite hat, erscheint nicht, wenn jemand nach{" "}
        <em>Elektriker Neukölln</em> sucht. <strong>Lösung:</strong> Stadtname und
        Bezirk in Überschrift, Fließtext und Metadaten einbauen.
      </p>

      <h3>Fehler 7: Kein oder falsch ausgefülltes Google Unternehmensprofil</h3>
      <p>
        Google Maps und die lokale Suchergebnisbox (das sogenannte Local Pack) sind oft der
        wichtigste Traffic-Kanal für lokale Unternehmen — aber nur, wenn das Google
        Unternehmensprofil vollständig ausgefüllt ist: Öffnungszeiten, Adresse, Fotos,
        Leistungen, und regelmäßige Beiträge. Ein leeres oder veraltetes Profil kostet täglich
        Anfragen.
      </p>

      <h3>Fehler 8: Keine Bewertungen oder Referenzen</h3>
      <p>
        Vertrauen entsteht durch soziale Beweise. Besucher, die keine Bewertungen oder
        Referenzen sehen, zweifeln — und gehen zur Konkurrenz. <strong>Mindestens 5 echte
        Google-Bewertungen</strong> sind Pflicht. Auf der Website: 2–3 kurze Kundenzitate
        oder Projektfotos reichen, um Vertrauen aufzubauen.
      </p>

      <h3>Fehler 9: Zu viel Text, zu wenig Struktur</h3>
      <p>
        Textblöcke ohne Überschriften, Bulletpoints oder Tabellen werden nicht gelesen &mdash;
        sie werden überflogen und dann verlassen. Struktur ist kein Design-Luxus, sie ist
        notwendig, damit Besucher schnell finden, was sie suchen. Drei Überschriften und
        eine Aufzählung ersetzen fünf lange Absätze.
      </p>

      <h3>Fehler 10: Keine klare Zielgruppenansprache</h3>
      <p>
        <em>Wir bieten professionelle Lösungen für alle Unternehmen</em> — das sagt nichts. Ein
        Restaurantbesitzer in Kreuzberg will lesen, dass Sie für Gastronomie in Berlin
        arbeiten. Ein Handwerker in Spandau will sehen, dass Sie Handwerker-Websites bauen.
        Je spezifischer die Ansprache, desto höher die Anfragerate.
      </p>

      <h3>Fehler 11: Website nicht bei Google Search Console angemeldet</h3>
      <p>
        Ohne Google Search Console wissen Sie nicht, für welche Keywords Ihre Seite erscheint,
        wie viele Klicks Sie bekommen, oder ob Google technische Fehler auf Ihrer Seite
        gefunden hat. Es ist kostenlos und dauert 10 Minuten — und es ist die wichtigste
        Grundlage für jede SEO-Entscheidung.
      </p>

      <h3>Fehler 12: Kein Kontaktformular oder Telefonnummer gut sichtbar</h3>
      <p>
        Wenn ein Besucher eine Anfrage stellen will, muss er das in unter 30 Sekunden tun
        können — ohne suchen zu müssen. Telefonnummer und Kontaktformular gehören in die
        Navigation, in die Fußzeile, und auf jede Dienstleistungsseite. Jede zusätzliche
        Hürde kostet Anfragen.
      </p>

      <h2>Was kostet die Behebung dieser Fehler?</h2>
      <table>
        <thead>
          <tr><th scope="col">Leistung</th><th scope="col">Kosten</th></tr>
        </thead>
        <tbody>
          <tr><td>Website-Analyse (alle 12 Fehler geprüft)</td><td>ab 150 €</td></tr>
          <tr><td>Einzelne Korrekturen (CTA, Texte, Struktur)</td><td>30–50 €/h</td></tr>
          <tr><td>Ladezeit-Optimierung + Mobile-Fix</td><td>ab 200 €</td></tr>
          <tr><td>Google Search Console + Profil einrichten</td><td>ab 80 €</td></tr>
          <tr><td>Komplette Conversion-Optimierung</td><td>490–990 €</td></tr>
          <tr><td>Neue professionelle Website (falls nötig)</td><td>ab 990 €</td></tr>
          <tr><td>Erstberatung</td><td>kostenlos</td></tr>
        </tbody>
      </table>

      <h2>Schritt-für-Schritt: So gehen Sie vor</h2>
      <ol>
        <li>
          <strong>Selbst-Check:</strong> Öffnen Sie Ihre Website auf dem Smartphone. Würden
          Sie sofort verstehen, was angeboten wird, und wüssten, wie Sie Kontakt aufnehmen?
        </li>
        <li>
          <strong>PageSpeed testen:</strong> Google PageSpeed Insights — kostenlos, 2 Minuten.
          Unter 50 Punkte auf Mobilgeräten ist kritisch.
        </li>
        <li>
          <strong>Google Search Console einrichten:</strong> Falls noch nicht vorhanden &mdash;
          sofort machen. Kostenlos und unverzichtbar.
        </li>
        <li>
          <strong>Google Unternehmensprofil prüfen:</strong> Vollständig ausgefüllt?
          Aktuelle Öffnungszeiten? Mindestens 3 Fotos? Kontaktdaten korrekt?
        </li>
        <li>
          <strong>Professionelle Analyse buchen:</strong> SysNova prüft alle 12 Punkte,
          priorisiert nach Wirkung und setzt die wichtigsten direkt um.
        </li>
      </ol>

      <h2>Wann brauchen Sie eine neue Website?</h2>
      <p>
        Eine Optimierung der bestehenden Website reicht meistens. Eine neue Website ist
        sinnvoll, wenn:
      </p>
      <ul>
        <li>Die aktuelle Website älter als 4 Jahre ist und auf altem CMS läuft</li>
        <li>Ladezeit über 5 Sekunden liegt und technische Schulden eine Optimierung unwirtschaftlich machen</li>
        <li>Die Seite auf Mobilgeräten grundlegend nicht funktioniert</li>
        <li>Die Marke sich stark verändert hat und die Website das nicht mehr widerspiegelt</li>
      </ul>
      <p>
        Mehr dazu im Artikel:{" "}
        <Link href="/blog/was-kostet-eine-website-berlin-2026" className="text-sn-secondary hover:underline">
          Was kostet eine Website in Berlin 2026?
        </Link>
      </p>

      <h2>Warum SysNova?</h2>
      <div className="highlight-box">
        <ul>
          <li><strong>Berliner IT- und Web-Team</strong> — kein Outsourcing, direkte Kommunikation</li>
          <li><strong>Technisch + strategisch</strong> — wir beheben nicht nur Fehler, wir optimieren für Anfragen</li>
          <li><strong>Sprachen: Deutsch, Englisch, Arabisch</strong> — für alle Berliner Unternehmer</li>
          <li><strong>Transparente Preise</strong> — kein Abo-Modell, keine versteckten Kosten</li>
          <li><strong>Erstberatung kostenlos</strong> — wir analysieren Ihre Website, bevor Sie entscheiden</li>
        </ul>
      </div>
      <p>
        Unsere Leistungen:{" "}
        <Link href="/leistungen/webentwicklung" className="text-sn-secondary hover:underline">
          Webentwicklung Berlin
        </Link>
        {" · "}
        <Link href="/portfolio" className="text-sn-secondary hover:underline">
          Portfolio
        </Link>
        {" · "}
        <Link href="/leistungen/ki-automatisierung" className="text-sn-secondary hover:underline">
          KI &amp; Automatisierung
        </Link>
      </p>

      <h2>Häufige Fragen zur Website-Optimierung</h2>

      <h3>Warum bekomme ich keine Anfragen über meine Website?</h3>
      <p>
        Die häufigsten Ursachen: kein sichtbarer Call-to-Action, schlechte Ladezeit, keine
        lokale SEO, fehlende Vertrauenssignale wie Bewertungen, und eine unklare
        Zielgruppenansprache. Oft reicht es, 2–3 dieser Punkte zu beheben, um spürbar mehr
        Anfragen zu erhalten.
      </p>

      <h3>Was ist der häufigste Fehler bei kleinen Unternehmens-Websites?</h3>
      <p>
        Der häufigste Fehler ist <strong>kein klarer Call-to-Action</strong>. Besucher wissen
        nicht, was sie als nächstes tun sollen. Schaltflächen wie <em>Jetzt Anfrage senden</em> oder{" "}
        <em>Kostenloses Erstgespräch</em> müssen auf jeder Seite sichtbar sein — ohne Scrollen.
      </p>

      <h3>Kann ich diese Fehler selbst beheben?</h3>
      <p>
        Einige Fehler wie fehlende Kontaktdaten, Google Unternehmensprofil oder unklare Texte
        können selbst behoben werden. Technische Probleme wie Ladezeit, Mobile-Optimierung
        oder strukturierte Daten (Schema.org) erfordern meist Fachkenntnis.{" "}
        <Link href="/leistungen/webentwicklung" className="text-sn-secondary hover:underline">
          SysNova bietet eine kostenlose Erstberatung an.
        </Link>
      </p>

      <h3>Was kostet eine Website-Optimierung in Berlin?</h3>
      <p>
        Eine professionelle Website-Analyse kostet bei SysNova <strong>ab 150 €</strong>.
        Einzelne Korrekturen werden mit <strong>30–50 €/h</strong> abgerechnet. Eine komplette
        Conversion-Optimierung liegt bei <strong>490–990 €</strong>. Eine neue professionelle
        Website, wenn nötig, startet ab <strong>990 €</strong>.
      </p>

      <h3>Wann lohnt sich eine komplett neue Website statt einer Optimierung?</h3>
      <p>
        Eine neue Website ist nötig, wenn die aktuelle älter als 4 Jahre ist, auf einem
        veralteten CMS läuft, auf Mobilgeräten nicht funktioniert, oder wenn die Ladezeit
        über 5 Sekunden liegt und technische Schulden eine Optimierung teurer machen als
        ein Neubau.
      </p>

      <h3>Wie lange dauert es, bis sich eine Optimierung bemerkbar macht?</h3>
      <p>
        Technische Verbesserungen wie Ladezeit und Mobile-Optimierung wirken innerhalb von
        1–4 Wochen in Google. SEO-Verbesserungen zeigen Ergebnisse nach 4–12 Wochen.
        CTA-Optimierungen können bereits nach wenigen Tagen die Anfragerate erhöhen.
      </p>

      <h3>Was macht SysNova konkret, um mehr Anfragen zu generieren?</h3>
      <p>
        SysNova analysiert die Website auf alle 12 häufigen Fehler, priorisiert die
        wirkungsvollsten Korrekturen, baut klare CTAs ein, optimiert die Ladezeit, richtet
        Google Search Console und Google Unternehmensprofil ein, und verbessert lokale SEO
        für Berlin und den jeweiligen Stadtteil.
      </p>

        <p className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-sm">
          SysNova analysiert Ihre Website kostenlos.{" "}
          <Link href="/#contact" className="text-amber-400 font-semibold hover:underline">
            Jetzt kostenlose Website-Analyse anfragen →
          </Link>
        </p>
    </BlogPageTemplate>
  );
}
