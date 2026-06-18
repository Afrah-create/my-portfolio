import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — Software Engineer Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function getProfileDataUrl(): Promise<string | null> {
  try {
    const filePath = join(
      process.cwd(),
      "public",
      siteConfig.profileImagePath
    );
    const buffer = await readFile(filePath);
    const mime = siteConfig.profileImagePath.endsWith(".png")
      ? "image/png"
      : "image/jpeg";
    return `data:${mime};base64,${buffer.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const profileSrc = await getProfileDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "linear-gradient(135deg, #030712 0%, #0f172a 50%, #111827 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            maxWidth: 640,
            paddingRight: 48,
          }}
        >
          <div
            style={{
              width: 40,
              height: 3,
              borderRadius: 999,
              background: "#22d3ee",
              marginBottom: 28,
            }}
          />
          <div
            style={{
              fontSize: 22,
              fontWeight: 500,
              color: "#22d3ee",
              letterSpacing: "0.02em",
              marginBottom: 12,
            }}
          >
            {siteConfig.og.role}
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#cbd5e1",
              lineHeight: 1.45,
              marginBottom: 24,
            }}
          >
            {siteConfig.og.tagline}
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#64748b",
            }}
          >
            {siteConfig.og.affiliation}
          </div>
        </div>

        {profileSrc ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                padding: 4,
                borderRadius: 20,
                background: "#1e293b",
                border: "1px solid #334155",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.45)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profileSrc}
                alt=""
                width={280}
                height={350}
                style={{
                  borderRadius: 16,
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
          </div>
        ) : null}
      </div>
    ),
    { ...size }
  );
}
