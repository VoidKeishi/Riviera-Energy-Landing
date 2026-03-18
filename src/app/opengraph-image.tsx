import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Riviera Energy - Where Partnership Meets Performance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#080145",
          backgroundImage:
            "linear-gradient(135deg, #080145 0%, #11008E 50%, #0958B3 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Riviera Energy
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              backgroundImage: "linear-gradient(90deg, #0958B3, #59DAE3)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "0.04em",
              textTransform: "uppercase" as const,
            }}
          >
            Where Partnership Meets Performance
          </div>
          <div
            style={{
              marginTop: "16px",
              fontSize: 18,
              color: "rgba(255, 255, 255, 0.6)",
              textAlign: "center",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            Engineering &amp; asset integrity consultancy delivering
            high-confidence project outcomes across the global energy sector
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
