"use client";

import { useEffect, useRef, useState } from "react";

export function HeroMotion() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const viewport = root.closest<HTMLElement>(".hero-viewport");
    let inView = true;
    const sync = () => {
      const shouldRun = inView && !document.hidden;
      setRunning(shouldRun);
      if (viewport) viewport.dataset.heroActive = String(shouldRun);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.05 },
    );

    observer.observe(root);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      if (viewport) delete viewport.dataset.heroActive;
    };
  }, []);

  return (
    <div ref={rootRef} className="hero-signal" data-running={running} aria-hidden="true">
      <svg viewBox="0 0 900 620" fill="none" preserveAspectRatio="xMidYMid meet">
        <circle className="hero-signal__node hero-signal__node--one" cx="314" cy="168" r="9" />
        <circle className="hero-signal__node hero-signal__node--two" cx="608" cy="367" r="9" />
        <circle className="hero-signal__node hero-signal__node--three" cx="884" cy="110" r="9" />
        <circle className="hero-signal__orbit" cx="608" cy="367" r="94" />
        <circle className="hero-signal__orbit hero-signal__orbit--wide" cx="314" cy="168" r="142" />
      </svg>
      <span className="hero-signal__spark hero-signal__spark--one" />
      <span className="hero-signal__spark hero-signal__spark--two" />
      <span className="hero-signal__spark hero-signal__spark--three" />
      <span className="hero-signal__scan" />
    </div>
  );
}
