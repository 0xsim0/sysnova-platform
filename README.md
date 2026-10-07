# SysNova Website

Next.js 16 (App Router) + React 19 + Tailwind CSS 3 + TypeScript 5.

## Getting Started

```bash
npm install
cp .env.example .env.local
# Fill in .env.local with real values (see .env.example for required vars)
npm run dev
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on localhost:3000 |
| `npm run build` | Production build + TypeScript check |
| `npm run lint` | ESLint check |
| `npm run check-config` | Verify no hardcoded domain strings outside lib/config.ts |

## Required Environment Variables

See `.env.example` for the full list. Required: `RESEND_API_KEY`, `OTP_SECRET`. Optional for local dev (KV falls back to in-memory): `KV_REST_API_URL`, `KV_REST_API_TOKEN`.

## Stack

- **Framework**: Next.js 16, App Router, React Server Components
- **Styling**: Tailwind CSS 3, Space Grotesk / Inter / JetBrains Mono
- **Email**: Resend API with HMAC-signed OTP verification
- **Rate limiting**: Vercel KV (in-memory fallback for local dev)
- **Analytics**: GA4 (consent-gated) + Vercel Analytics (cookieless)
- **Security**: Per-request CSP nonce via middleware, HSTS, X-Frame-Options: DENY
# SysNova Container Platform

Containerisierte Testumgebung meiner bestehenden SysNova-Website.
Das Projekt dient zum praktischen Lernen von Docker, Netzwerken,
Konfiguration und Git. Es wird getrennt von der produktiven Website betrieben.

## Aufbau

- Nginx nimmt HTTP-Anfragen entgegen und leitet sie an die Website weiter.
- Next.js enthält die Seiten und die Kontakt-API in einem Container.
- Mailpit fängt Test-E-Mails ab und zeigt sie in einer Weboberfläche.
- Docker Compose verbindet und startet die drei Dienste.

Die Website verwendet Next.js 16, React 19, TypeScript und Tailwind CSS 4.
Der Docker-Build nutzt npm ci, Webpack und Next.js Standalone Output.
Der Website-Prozess läuft als Benutzer node.

## Voraussetzungen

- Linux mit Docker Engine und Docker Compose Plugin
- Python 3 und Git
- Internetzugang für Images, npm-Pakete und Google-Schriften beim Build
- Freie lokale Ports 3000 und 8025

## Erster Start

Nach dem Klonen im Projektordner ausführen:

```bash
python3 scripts/setup-env.py
sudo docker compose up -d --build
sudo docker compose ps
```

Das Setup-Skript erzeugt .env.homelab mit einem zufälligen OTP_SECRET.
Eine vorhandene Datei bleibt unverändert.
Die Datei wird nicht in Git aufgenommen und nicht in das Image kopiert.

## Zugriff

Wenn Docker auf demselben Rechner wie der Browser läuft:

- Website: http://127.0.0.1:3000
- Mailpit: http://127.0.0.1:8025

Wenn Docker auf einem entfernten Server läuft, auf dem eigenen
Rechner einen SSH-Tunnel öffnen. BENUTZER und SERVER ersetzen:

```bash
ssh -N \
  -L 127.0.0.1:3001:127.0.0.1:3000 \
  -L 127.0.0.1:8025:127.0.0.1:8025 \
  BENUTZER@SERVER
```

Das Terminal geöffnet lassen. Anschließend:

- Website: http://127.0.0.1:3001
- Mailpit: http://127.0.0.1:8025

Die veröffentlichten Ports sind nur an die Loopback-Adresse gebunden.
Der Website-Container besitzt keine eigene veröffentlichte Portbindung.

## Konfiguration

| Variable | Zweck |
|---|---|
| OTP_SECRET | Eigenes Geheimnis in .env.homelab für die OTP-Prüfung |
| EMAIL_PROVIDER | mailpit aktiviert den lokalen SMTP-Testversand |
| ALLOWED_ORIGINS | Kommagetrennte erlaubte Browser-Origins |
| ANALYTICS_ENABLED | false deaktiviert die Analytics-Komponenten |
| KV_REST_API_URL / KV_REST_API_TOKEN | Leer: Arbeitsspeicher-Fallback |

Die Testumgebung benötigt keinen Resend-Schlüssel.
Mailpit leitet in dieser Konfiguration keine E-Mails an echte Postfächer weiter.

## Kontaktformular testen

1. Formular mit Testdaten und wasiem@example.test ausfüllen.
2. Bestätigungscode anfordern.
3. Code aus der neuesten Mailpit-Nachricht übernehmen.
4. Kontaktanfrage absenden.
5. Zweite Nachricht in Mailpit kontrollieren.

## Betrieb

```bash
# Zustand und Logs
sudo docker compose ps
sudo docker compose logs --tail 50 web proxy mailpit

# Vorhandene Container starten oder stoppen
sudo docker compose start
sudo docker compose stop

# Codeänderungen bauen und Website aktualisieren
sudo docker compose build web
sudo docker compose up -d --no-build web
sudo docker compose restart proxy

# Container und Compose-Netzwerk entfernen
sudo docker compose down
```

Nginx wird nach dem Ersetzen des Website-Containers neu gestartet,
damit es dessen möglicherweise geänderte interne IP neu auflöst.

## Bisher geprüft

- Startseite: HTTP 200
- Unbekannte Seite: HTTP 404
- OG-Bilderzeugung: HTTP 200 und image/png
- Navigation, Bilder und Sprachwechsel
- Website-Healthcheck
- Erlaubte und nicht erlaubte Origins
- Bestätigungscode und Kontaktanfrage über Mailpit, auch hinter Nginx
- Keine beobachteten Analytics-Anfragen im Homelab-Browsertest

## Grenzen der Testumgebung

- OTP-Codes und Rate-Limits liegen im Arbeitsspeicher.
  Sie gehen beim Neustart verloren und werden nicht zwischen
  mehreren Serverprozessen geteilt.
- Für Mailpit ist kein dauerhaftes Daten-Volume eingerichtet.
  Testnachrichten sind nicht als dauerhafte Daten gesichert.
- Über SSH-Tunnel sieht Nginx nicht die ursprüngliche Client-IP.
  IP-basierte Limits können deshalb mehrere Nutzer zusammenfassen.
- Der Healthcheck prüft die Startseite, nicht den E-Mail-Ablauf.
- Einige Image-Tags sind noch beweglich.
- Ein vollständiger Test aus einer frischen Projektkopie steht noch aus.
