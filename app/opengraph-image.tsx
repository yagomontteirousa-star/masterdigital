import { ImageResponse } from "next/og";

export const alt = "Master Digital — sites sob medida para empresas";
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
          alignItems: "center",
          justifyContent: "center",
          background: "#FF5A00",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 30, color: "#0A0A0A" }}>
          <svg width="146" height="146" viewBox="0 0 512 512" fill="none">
            <g transform="matrix(1.18,0,0,1.18,26,28)" fill="currentColor">
              <path d="m 60,70 h 240 v 50 H 120 v 220 h 180 v 50 H 60 Z" />
              <path d="m 215,150 165,105 -70,11 20,90 -48,12 -20,-84 -62,44 z" />
              <path d="m 340,70 h 50 v 50 h -50 z" />
            </g>
          </svg>
          <span style={{ fontSize: 84, fontWeight: 700, letterSpacing: -4 }}>Master Digital</span>
        </div>
      </div>
    ),
    size,
  );
}
