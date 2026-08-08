import { ImageResponse } from "next/og";

export const alt = "Yago Monteiro — sites sob medida para empresas";
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
          background: "#0e0f11",
          color: "#f2f0eb",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "62px 68px",
            width: 760,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 23 }}>
            <span style={{ width: 12, height: 12, borderRadius: 2, background: "#ff5a00" }} />
            <span>Yago Monteiro · Master Digital</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 65,
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: -2.5,
              }}
            >
              <span>Confiança antes da</span>
              <span>primeira conversa.</span>
            </div>
            <div style={{ fontSize: 23, color: "#a6a39c" }}>
              Estratégia · texto · design · desenvolvimento
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "62px 62px 62px 0",
            padding: "42px",
            flex: 1,
            borderRadius: 18,
            background: "#efeee9",
            color: "#191a1d",
          }}
        >
          <div style={{ display: "flex", fontSize: 28, lineHeight: 1.2, fontWeight: 700 }}>
            Uma direção única,<br />do posicionamento<br />ao site no ar.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 13, fontSize: 18 }}>
            {["Mensagem clara", "Design sob medida", "Contato sem atrito"].map((item) => (
              <div
                key={item}
                style={{ display: "flex", paddingTop: 13, borderTop: "1px solid #c9c7c0" }}
              >
                {item}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", width: 72, height: 8, background: "#ff5a00" }} />
        </div>
      </div>
    ),
    size,
  );
}
