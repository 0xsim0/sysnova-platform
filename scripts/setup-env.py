#!/usr/bin/env python3
"""Erzeugt die lokale Homelab-Konfiguration ohne vorhandene zu überschreiben."""

import os
import secrets
from pathlib import Path

project_dir = Path(__file__).resolve().parent.parent
target = project_dir / ".env.homelab"

try:
    fd = os.open(
        target,
        os.O_WRONLY | os.O_CREAT | os.O_EXCL,
        0o600,
    )
except FileExistsError:
    print(".env.homelab existiert bereits und bleibt unverändert.")
else:
    with os.fdopen(fd, "w") as file:
        file.write("OTP_SECRET=" + secrets.token_hex(32) + "\n")
    print(".env.homelab mit eigenem OTP-Geheimnis erstellt.")
