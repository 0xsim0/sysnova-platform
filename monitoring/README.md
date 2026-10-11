# SysNova Host-Monitoring

## Aufbau

- Prometheus sammelt alle 15 Sekunden Messwerte.
- Die Aufbewahrungszeit beträgt 7 Tage.
- Messwerte liegen im Docker-Volume prometheus_data.
- Node Exporter liefert Messwerte des Ubuntu-Hosts.

## Netzwerk

- Monitoring-Netz: 172.30.40.0/24
- Linux-Brücke: br-sysnova-mon
- Prometheus-IP: 172.30.40.10
- Node Exporter: 172.17.0.1:9100 im Host-Netzwerk
- Prometheus-Oberfläche: 127.0.0.1:9090 auf dem Server

Der Node Exporter setzt voraus, dass docker0 auf dem Host
die Adresse 172.17.0.1 besitzt.

## Erforderliche Host-Firewall-Regel

Diese Regel wird außerhalb von Docker Compose eingerichtet:

```bash
sudo ufw allow in on br-sysnova-mon proto tcp from 172.30.40.10 to 172.17.0.1 port 9100 comment 'Prometheus monitoring to Node Exporter'
```

## Behobenes Problem

Prometheus konnte den Node Exporter zunächst nicht erreichen.
Die direkte Abfrage auf Ubuntu funktionierte, die Abfrage aus
dem Container endete jedoch mit einem Timeout.

Die Kernel-Logs zeigten UFW BLOCK für TCP-Port 9100.
Eine gezielte Freigabe löste das Problem.

Anschließend wurden eine feste Prometheus-IP und ein fester
Brückenname eingerichtet und die alte Firewall-Regel entfernt.

## Bisher geprüft

- Beide Prometheus-Ziele melden up = 1.
- Der erkannte Host-Arbeitsspeicher beträgt ungefähr 30,27 GiB.
- Netzwerkmetriken der Host-Schnittstelle enp5s0 sind vorhanden.
