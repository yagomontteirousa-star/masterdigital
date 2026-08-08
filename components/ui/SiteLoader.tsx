"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function SiteLoader() {
  const [stage, setStage] = useState<"visible" | "leaving" | "hidden">("visible");

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const leaveAfter = motionQuery.matches ? 180 : 3000;
    const hideAfter = motionQuery.matches ? 360 : 3400;
    const leave = window.setTimeout(() => setStage("leaving"), leaveAfter);
    const hide = window.setTimeout(() => setStage("hidden"), hideAfter);
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(hide);
    };
  }, []);

  if (stage === "hidden") return null;

  return (
    <div className={`site-loader site-loader--${stage}`} role="status" aria-live="polite">
      <div className="site-loader__topline" aria-hidden="true">
        <Image src="/brand/master-digital-symbol-orange.svg" alt="" width={512} height={512} priority />
        <span>Master Digital</span>
        <span>Construindo sua experiência</span>
      </div>

      <div className="site-loader__scene" aria-hidden="true">
        <div className="site-loader__composition">
          <span className="site-loader__screen site-loader__screen--back" />
          <span className="site-loader__screen site-loader__screen--middle" />
          <span className="site-loader__screen site-loader__screen--front">
            <span className="site-loader__screen-line site-loader__screen-line--wide" />
            <span className="site-loader__screen-line" />
            <span className="site-loader__screen-block" />
          </span>
          <span className="site-loader__orbit" />
          <div className="site-loader__mark">
            <Image src="/brand/master-digital-symbol-orange.svg" alt="" width={512} height={512} priority />
          </div>
          <span className="site-loader__cursor" />
        </div>

        <div className="site-loader__identity">
          <Image
            src="/brand/master-digital-white.svg"
            alt="Master Digital"
            width={1120}
            height={300}
            priority
          />
          <p>Seu site começa com direção.</p>
        </div>
      </div>

      <div className="site-loader__footer" aria-hidden="true">
        <span>Estratégia</span>
        <span>Direção</span>
        <span>Site no ar</span>
        <span className="site-loader__progress"><span /></span>
      </div>
      <span className="sr-only">Carregando o site</span>
    </div>
  );
}
