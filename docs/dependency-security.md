# Prüfung der Abhängigkeiten

Stand: 07.10.2026

Die Entwicklungsabhängigkeiten wurden aktualisiert.
Nachdem npm 10 beim Update mit einem internen Fehler abbrach,
wurde das Update mit vorübergehend ausgeführtem npm 11 durchgeführt.

## Prüfungen

- 20 Unit-Tests bestanden.
- ESLint ohne Fehlermeldungen.
- Startseite über Nginx: HTTP 200.
- OG-Bild: HTTP 200, Content-Type image/png.
- Web-Container: healthy.

## Verbleibende Sicherheitsmeldung

npm audit meldet fünf betroffene Pakete in dieser Abhängigkeitskette:

eslint-config-next → @next/eslint-plugin-next → fast-glob
→ micromatch → braces

Die zugrunde liegende Schwachstelle betrifft einen möglichen
Prozessabsturz durch stark verschachtelte Suchmuster in braces.

Advisory: GHSA-vfj7-8cjw-p6xm

Die gemeldete Kette gehört zu unseren Entwicklungswerkzeugen.
Das bedeutet nicht, dass die Meldung grundsätzlich ungefährlich ist.

Das von npm vorgeschlagene audit fix --force wurde nicht ausgeführt:
Es würde eslint-config-next auf Version 14.2.35 zurücksetzen,
während die Anwendung Next.js 16 verwendet.

Die Meldung bleibt offen und wird bei kommenden
Abhängigkeitsupdates erneut geprüft.
