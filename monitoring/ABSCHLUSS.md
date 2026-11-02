# Projekt 4 – Monitoring und zentrale Logs

## Umsetzung

- Prometheus sammelt Metriken im Abstand von 15 Sekunden.
- Node Exporter liefert Host-Metriken.
- cAdvisor liefert Container-Metriken.
- Blackbox Exporter prüft http://proxy:80/ auf HTTP 200.
- Grafana zeigt Host-, Container-, HTTP- und Logs-Dashboards.
- Alloy liest die Docker-Logs des Compose-Projekts und sendet sie an Loki.
- Das Logs-Dashboard erlaubt die Auswahl nach Dienst.
- Dashboards, Datenquellen und HTTP-Alarmregel werden aus Dateien provisioniert.
- Prometheus und Loki sind auf sieben Tage Aufbewahrung eingestellt.

## Zugriff und Netzwerk

Grafana ist am Server an 127.0.0.1:3001 gebunden,
Prometheus an 127.0.0.1:9090. Der Browserzugriff erfolgt über
einen SSH-Tunnel.

Das Monitoring-Netz verwendet 172.30.40.0/24 und die Bridge
br-sysnova-mon. Prometheus hat die feste Adresse 172.30.40.10.
Eine UFW-Regel erlaubt dieser Adresse den Zugriff auf
Node Exporter unter 172.17.0.1:9100.

## HTTP-Alarm

Datei: grafana/provisioning/alerting/sysnova-http.yml

- Prüfung durch Grafana alle 30 Sekunden.
- Alarm bei probe_success < 1 für eine Minute.
- Fehlende Daten und Abfragefehler werden als Alerting behandelt.
- Benachrichtigung über den Kontaktpunkt "SysNova Telegram".

Der Telegram-Kontaktpunkt wurde in Grafana eingerichtet und
bleibt im Volume grafana_data gespeichert. Bei einer Neuinstallation
mit leerem Grafana-Volume muss er vor dem Laden der Alarmregel
erneut eingerichtet werden. Bot-Token gehören nicht ins Repository.

## Durchgeführter Ausfalltest am 02.11.2026

1. Nginx-Proxy mit docker compose stop proxy gestoppt.
2. Grafana wechselte von Normal über Pending zu Alerting.
3. Die echte Alarmnachricht kam in Telegram an.
4. Proxy mit docker compose start proxy wieder gestartet.
5. Die Webseite antwortete danach wieder mit HTTP 200.
6. Grafana wurde neu gestartet und lud die Alarmregel erfolgreich.

## Betrieb und Grenzen

Status: sudo docker compose ps
Logs: sudo docker compose logs --since=5m --tail=80 SERVICE
Compose prüfen: sudo docker compose config --quiet

Die HTTP-Prüfung überwacht den internen Weg über Nginx zur Anwendung.
Sie prüft nicht den externen Zugang über Router, VPN oder Internet.
Bei einem vollständigen Ausfall des Homelab-Servers kann das dort
laufende Grafana keine Benachrichtigung senden.

Die Daten liegen in Docker-Volumes. Volumes nicht mit
docker compose down -v löschen. Volumes ersetzen kein Backup.

## Spätere Verbesserungen

- Docker-Logrotation
- Weitere Alarmregeln für RAM, Speicherplatz und Exporter
- Externe Verfügbarkeitsprüfung und Backup-Konzept
