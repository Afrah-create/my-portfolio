import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #030712 0%, #0f172a 55%, #111827 100%)",
          color: "#f1f5f9",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            width: 48,
            height: 4,
            borderRadius: 999,
            background: "#22d3ee",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#94a3b8",
            lineHeight: 1.4,
            maxWidth: 900,
          }}
        >
          Software Engineering Student · React · Next.js · TypeScript
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 22,
            color: "#22d3ee",
          }}
        >
          Makerere University
        </div>
      </div>
    ),
    { ...size }
  );
}
