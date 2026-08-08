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
          background: "#f4efe5",
          color: "#1c1b18",
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
            width: 820,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 23 }}>
            <span style={{ width: 12, height: 12, borderRadius: 2, background: "#FF5A00" }} />
            <span style={{ fontWeight: 700 }}>Yago Monteiro · Master Digital</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 61,
                lineHeight: 0.98,
                fontWeight: 600,
                letterSpacing: -2.5,
              }}
            >
              <span>Uma boa primeira impressão</span>
              <span style={{ color: "#FF5A00" }}>transforma atenção em conversa.</span>
            </div>
            <div style={{ fontSize: 22, color: "#5f5b53" }}>
              Sites sob medida · estratégia · design · desenvolvimento
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "62px 62px 62px 0",
            padding: "38px",
            flex: 1,
            borderRadius: 18,
            background: "#1c1b18",
            color: "#f7f2e8",
          }}
        >
          <div style={{ display: "flex", fontSize: 28, lineHeight: 1.2, fontWeight: 700 }}>
            Quatro projetos<br />publicados.<br />Uma direção única.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 13, fontSize: 18 }}>
            {["Mensagem clara", "Design sob medida", "Contato sem atrito"].map((item) => (
              <div
                key={item}
                style={{ display: "flex", paddingTop: 13, borderTop: "1px solid #3d3b34" }}
              >
                {item}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", width: 72, height: 8, background: "#FF5A00" }} />
        </div>
      </div>
    ),
    size,
  );
}
