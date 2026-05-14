import { ImageResponse } from "next/og";

export const alt =
  "Visit Batanes — The northernmost paradise of the Philippines";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #062e3f 0%, #0a4d68 55%, #1a7a99 100%)",
          color: "#fbfaf6",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Sun */}
        <div
          style={{
            position: "absolute",
            top: 80,
            right: 120,
            width: 220,
            height: 220,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #f6d2a1 0%, #c39348 70%, transparent 100%)",
            opacity: 0.95,
            display: "flex",
          }}
        />

        {/* Hills layer 1 */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 280,
            background:
              "linear-gradient(180deg, transparent 0%, #5fb487 30%, #2d6a47 100%)",
            clipPath:
              "polygon(0 60%, 12% 45%, 28% 50%, 42% 38%, 58% 50%, 74% 35%, 90% 45%, 100% 40%, 100% 100%, 0 100%)",
            display: "flex",
          }}
        />

        {/* Hills layer 2 */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 180,
            background:
              "linear-gradient(180deg, transparent 0%, #0a4d68 60%, #062e3f 100%)",
            clipPath:
              "polygon(0 60%, 18% 50%, 35% 60%, 55% 45%, 72% 60%, 88% 50%, 100% 55%, 100% 100%, 0 100%)",
            opacity: 0.85,
            display: "flex",
          }}
        />

        {/* Top eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 8,
            fontWeight: 500,
            opacity: 0.85,
          }}
        >
          <div
            style={{
              width: 48,
              height: 1,
              background: "#c39348",
              display: "flex",
            }}
          />
          VISIT BATANES
        </div>

        {/* Main heading */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 40,
            fontSize: 100,
            lineHeight: 1.05,
            letterSpacing: -2,
            fontWeight: 600,
            fontStyle: "italic",
            maxWidth: 1000,
          }}
        >
          <div style={{ display: "flex" }}>The northernmost</div>
          <div style={{ display: "flex" }}>paradise of the</div>
          <div style={{ display: "flex" }}>Philippines.</div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 80,
            right: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#e8d8b0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#c39348",
                display: "flex",
              }}
            />
            visitbatanes.vercel.app
          </div>
          <div style={{ display: "flex", gap: 32, opacity: 0.85 }}>
            <div style={{ display: "flex" }}>Destinations</div>
            <div style={{ display: "flex" }}>Tours</div>
            <div style={{ display: "flex" }}>Travel Guides</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
