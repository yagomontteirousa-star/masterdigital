"use client";

import { useEffect, useRef, useState } from "react";
import { BrowserFrame } from "./BrowserFrame";

export type HeroProjectPreview = {
  slug: string;
  name: string;
  cover: string;
  coverAlt: string;
  url: string;
};

type FramePhase = "visible" | "exiting" | "entering";

export function HeroProjectShowcase({ projects }: { projects: HeroProjectPreview[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [primaryIndex, setPrimaryIndex] = useState(0);
  const [secondaryIndex, setSecondaryIndex] = useState(1);
  const [primaryPhase, setPrimaryPhase] = useState<FramePhase>("visible");
  const [secondaryPhase, setSecondaryPhase] = useState<FramePhase>("visible");
  const [running, setRunning] = useState(true);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let inView = true;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setRunning(inView && !document.hidden && !motionQuery.matches);
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.08 },
    );

    observer.observe(root);
    document.addEventListener("visibilitychange", sync);
    motionQuery.addEventListener("change", sync);
    sync();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      motionQuery.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!running || projects.length < 3) {
      setPrimaryPhase("visible");
      setSecondaryPhase("visible");
      return;
    }

    let nextSlot: "primary" | "secondary" = "primary";
    const timers: number[] = [];

    const swap = (
      setPhase: (phase: FramePhase) => void,
      setIndex: (update: (current: number) => number) => void,
    ) => {
      setPhase("exiting");
      timers.push(window.setTimeout(() => {
        setIndex((current) => (current + 2) % projects.length);
        setPhase("entering");
        timers.push(window.setTimeout(() => setPhase("visible"), 80));
      }, 420));
    };

    const interval = window.setInterval(() => {
      if (nextSlot === "primary") {
        swap(setPrimaryPhase, setPrimaryIndex);
        nextSlot = "secondary";
      } else {
        swap(setSecondaryPhase, setSecondaryIndex);
        nextSlot = "primary";
      }
    }, 4200);

    return () => {
      window.clearInterval(interval);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [projects.length, running]);

  if (projects.length === 0) return null;

  const primary = projects[primaryIndex % projects.length];
  const secondary = projects[secondaryIndex % projects.length];

  return (
    <div ref={rootRef} className="hero-proof relative z-10 mx-auto w-full max-w-[46rem]">
      <BrowserFrame
        key={`primary-${primary.slug}`}
        src={primary.cover}
        alt={`Página inicial publicada de ${primary.name}`}
        label={primary.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
        priority
        sizes="(max-width: 1024px) 94vw, 58vw"
        className={`hero-proof__primary hero-proof__frame hero-proof__frame--primary ml-auto w-[94%] is-${primaryPhase}`}
        imageClassName="project-tile__image"
      />
      <BrowserFrame
        key={`secondary-${secondary.slug}`}
        src={secondary.cover}
        alt={`Página inicial publicada de ${secondary.name}`}
        label={secondary.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
        priority
        sizes="(max-width: 640px) 72vw, 32vw"
        className={`hero-proof__secondary hero-proof__frame hero-proof__frame--secondary absolute bottom-0 left-0 w-[61%] is-${secondaryPhase}`}
        imageClassName="project-tile__image"
      />
    </div>
  );
}
