/* eslint-disable @next/next/no-img-element -- ImageResponse requires raw image sources. */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Master Digital — sites que provam o valor do seu trabalho";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const proofImages = Promise.all(
  ["camilas-cleaning.jpg", "vilela-turismo.jpg"].map(
    async (fileName) => `data:image/jpeg;base64,${(await readFile(path.join(process.cwd(), "public", "projects", fileName))).toString("base64")}`,
  ),
);

const dots = [
  [704, 84], [741, 116], [778, 73], [816, 146], [850, 101], [884, 56], [918, 122], [953, 85],
  [1012, 145], [1051, 97], [1096, 63], [1132, 122], [1162, 82], [734, 522], [775, 560], [822, 501],
  [866, 552], [912, 515], [958, 573], [1002, 529], [1046, 487], [1094, 544], [1140, 502],
];

function Mark() {
  return (
    <svg width="34" height="34" viewBox="0 0 512 512" fill="none">
      <g transform="matrix(1.18,0,0,1.18,26,28)" fill="currentColor">
        <path d="m 60,70 h 240 v 50 H 120 v 220 h 180 v 50 H 60 Z" />
        <path d="m 215,150 165,105 -70,11 20,90 -48,12 -20,-84 -62,44 z" />
        <path d="m 340,70 h 50 v 50 h -50 z" />
      </g>
    </svg>
  );
}

function BrowserProof({ src, domain, front = false }: { src: string; domain: string; front?: boolean }) {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        width: front ? 382 : 514,
        height: front ? 244 : 328,
        overflow: "hidden",
        borderRadius: 14,
        background: "#ffffff",
        boxShadow: front ? "0 26px 56px rgba(0,0,0,.42)" : "0 32px 68px rgba(0,0,0,.5)",
        transform: front ? "rotate(1.8deg)" : "rotate(-2.3deg)",
      }}
    >
      <div
        style={{
          height: 30,
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "0 12px",
          background: "#faf8f3",
          color: "#807a70",
          fontSize: 10,
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: 999, background: "#ff5f57" }} />
        <span style={{ width: 6, height: 6, borderRadius: 999, background: "#febc2e" }} />
        <span style={{ width: 6, height: 6, borderRadius: 999, background: "#28c840" }} />
        <span style={{ marginLeft: 5 }}>{domain}</span>
      </div>
      <img src={src} alt="" width="100%" height="100%" style={{ width: "100%", height: front ? 214 : 298, objectFit: "cover", objectPosition: "top" }} />
    </div>
  );
}

export default async function OpenGraphImage() {
  const [camila, vilela] = await proofImages;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#171714",
          color: "#f7f2e8",
        }}
      >
        <div style={{ position: "absolute", inset: 0, display: "flex", opacity: 0.34, backgroundImage: "radial-gradient(circle at 10% 15%, rgba(247,242,232,.18), transparent 35%), radial-gradient(circle at 80% 58%, rgba(255,90,0,.18), transparent 42%)" }} />
        {dots.map(([left, top], index) => (
          <span key={index} style={{ position: "absolute", left, top, width: index % 4 === 0 ? 6 : 3, height: index % 4 === 0 ? 6 : 3, borderRadius: 999, background: "#ff5a00", opacity: index % 4 === 0 ? 0.9 : 0.42 }} />
        ))}

        <div style={{ position: "relative", display: "flex", width: 590, flexDirection: "column", padding: "54px 0 58px 68px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#f7f2e8", fontSize: 22, fontWeight: 700, letterSpacing: -0.8 }}>
            <Mark />
            <span>Master Digital</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 94, fontFamily: "serif", fontSize: 61, lineHeight: 0.95, letterSpacing: -2.4 }}>
            <div style={{ display: "flex" }}><span style={{ color: "#ff5a00", fontStyle: "italic" }}>Seu trabalho</span><span>&nbsp;é bom.</span></div>
            <div style={{ display: "flex" }}><span style={{ color: "#ff5a00", fontStyle: "italic" }}>Seu site</span><span>&nbsp;precisa</span></div>
            <div style={{ display: "flex" }}><span style={{ color: "#ff5a00", fontStyle: "italic" }}>provar isso.</span></div>
          </div>

          <div style={{ display: "flex", marginTop: 26, color: "#b9b4aa", fontSize: 17, lineHeight: 1.45 }}>
            Sites sob medida para empresas que querem ser percebidas à altura do que entregam.
          </div>
        </div>

        <div style={{ position: "absolute", top: 126, right: -42, width: 640, height: 420, display: "flex" }}>
          <div style={{ position: "absolute", top: 0, right: 0, display: "flex" }}><BrowserProof src={camila} domain="camilascleaning.vercel.app" /></div>
          <div style={{ position: "absolute", bottom: 0, left: 18, display: "flex" }}><BrowserProof src={vilela} domain="vilelaturismo.com" front /></div>
        </div>
      </div>
    ),
    size,
  );
}
