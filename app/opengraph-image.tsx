import { ImageResponse } from "next/og";

export const alt = "SysNova — Moderne IT-Dienstleistungen für wachsende Unternehmen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111211",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "14px",
              background: "#A26720",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#111211", fontSize: "32px", fontWeight: 800 }}>S</span>
          </div>
          <span style={{ color: "#F9D977", fontSize: "44px", fontWeight: 800 }}>SysNova</span>
        </div>

        {/* Headline — two separate spans instead of <br /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "24px",
            gap: "8px",
          }}
        >
          <span style={{ color: "#ffffff", fontSize: "52px", fontWeight: 700 }}>
            Moderne IT-Dienstleistungen
          </span>
          <span style={{ color: "#ffffff", fontSize: "52px", fontWeight: 700 }}>
            für wachsende Unternehmen
          </span>
        </div>

        {/* Services */}
        <div
          style={{
            display: "flex",
            color: "#9CA3AF",
            fontSize: "22px",
            marginBottom: "48px",
          }}
        >
          Cloud · IT-Support · Webentwicklung · KI-Automatisierung
        </div>

        {/* Location */}
        <div
          style={{
            display: "flex",
            background: "#1E1A10",
            borderRadius: "32px",
            padding: "12px 32px",
            color: "#F9D977",
            fontSize: "18px",
          }}
        >
          Berlin, Germany · sysnova-it.de
        </div>
      </div>
    ),
    { ...size }
  );
}
