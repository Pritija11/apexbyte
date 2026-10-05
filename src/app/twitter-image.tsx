export const dynamic = "force-static";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "ApexByte — High-Performance Cloud Infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px",
          background: "#0f1a24",
          color: "#f7fafd",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              background: "#16202b",
              color: "#0ea5e9",
              fontSize: 26,
            }}
          >
            {">_"}
          </div>

          <span style={{ fontSize: 34, fontWeight: 700 }}>ApexByte</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#0ea5e9",
            }}
          >
            Technology Startup · Cloud Infrastructure
          </span>

          <span
            style={{
              marginTop: 20,
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            Infrastructure built for peak performance.
          </span>

          <span
            style={{
              marginTop: 24,
              fontSize: 24,
              color: "rgba(247,250,253,0.65)",
            }}
          >
            High-performance cloud infrastructure for developers and
            technical teams
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
