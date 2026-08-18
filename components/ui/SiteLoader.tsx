"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getCopy, type Locale } from "@/data/i18n";

export function SiteLoader({ locale = "pt" }: { locale?: Locale }) {
  const [stage, setStage] = useState<"visible" | "leaving" | "hidden">("visible");
  const labels = getCopy(locale).loader;

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const leaveAfter = motionQuery.matches ? 180 : 3000;
    const hideAfter = motionQuery.matches ? 360 : 3760;
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
        <Image src="/brand/master-digital-perfil-laranja.png" alt="" width={1254} height={1254} priority />
        <span>Master Digital</span>
        <span>{labels.building}</span>
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
            <Image src="/brand/master-digital-perfil-laranja.png" alt="" width={1254} height={1254} priority />
          </div>
          <span className="site-loader__cursor" />
        </div>

        <div className="site-loader__identity">
          <Image
            src="/brand/master-digital-horizontal-branca.png"
            alt="Master Digital"
            width={2172}
            height={724}
            priority
          />
          <p>{labels.tagline}</p>
        </div>
      </div>

      <div className="site-loader__footer" aria-hidden="true">
        {labels.steps.map((step) => <span key={step}>{step}</span>)}
        <span className="site-loader__progress"><span /></span>
      </div>
      <span className="sr-only">{labels.status}</span>
    </div>
  );
}
