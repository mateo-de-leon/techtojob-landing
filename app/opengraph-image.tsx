import { ImageResponse } from "next/og";
import messages from "@/messages/es.json";

export const alt = messages.openGraph.alt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2f3436",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 28, fontWeight: 700 }}>
          <div style={{ border: "2px solid #84c0bf", borderRadius: "12px", color: "#84c0bf", display: "flex", height: 48, alignItems: "center", justifyContent: "center", width: 48 }}>↗</div>
          TechToJob
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "850px" }}>
          <div style={{ color: "#84c0bf", fontSize: 22, letterSpacing: "0.12em", textTransform: "uppercase" }}>{messages.openGraph.label}</div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>{messages.openGraph.title}</div>
          <div style={{ color: "#c9d0ce", fontSize: 25 }}>{messages.openGraph.tagline}</div>
        </div>
        <div style={{ color: "#84c0bf", display: "flex", fontSize: 20 }}>{messages.openGraph.footer}</div>
      </div>
    ),
    { ...size },
  );
}
