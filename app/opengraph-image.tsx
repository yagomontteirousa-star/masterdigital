/* eslint-disable @next/next/no-img-element -- ImageResponse requires a raw data URI. */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Master Digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoImage = readFile(
  path.join(process.cwd(), "public", "brand", "master-digital-white.svg"),
).then((file) => `data:image/svg+xml;base64,${file.toString("base64")}`);

const dots = Array.from({ length: 86 }, (_, index) => ({
  left: 18 + ((index * 157 + 43) % 1164),
  top: 16 + ((index * 97 + 31) % 598),
  size: index % 13 === 0 ? 7 : index % 5 === 0 ? 4 : 2,
  opacity: index % 13 === 0 ? 0.9 : index % 5 === 0 ? 0.48 : 0.22,
}));

export default async function OpenGraphImage() {
  const logo = await logoImage;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#171714",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "radial-gradient(ellipse 62% 76% at 50% 50%, rgba(255,90,0,.075) 0%, rgba(255,90,0,.025) 46%, transparent 78%)",
          }}
        />

        {dots.map((dot, index) => (
          <span
            key={index}
            style={{
              position: "absolute",
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
              borderRadius: 999,
              background: "#ff5a00",
              opacity: dot.opacity,
            }}
          />
        ))}

        <div
          style={{
            position: "relative",
            display: "flex",
            width: 760,
            padding: "44px 56px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={logo}
            alt=""
            width="648"
            height="187"
            style={{ width: 648, height: 187, objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
