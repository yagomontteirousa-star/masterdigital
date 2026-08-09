"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";
import { getCopy, type Locale } from "@/data/i18n";

type Theme = "light" | "dark";

const storageKey = "master-digital-theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle({ locale = "pt" }: { locale?: Locale }) {
  const [theme, setTheme] = useState<Theme>("light");
  const labels = getCopy(locale).theme;

  useEffect(() => {
    const syncTheme = () => setTheme(getInitialTheme());
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    const timer = window.setTimeout(syncTheme, 0);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = getInitialTheme() === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      className="theme-toggle grid size-11 place-items-center rounded-full border border-line-strong text-ink"
      onClick={toggleTheme}
      aria-pressed={theme === "dark"}
      aria-label={theme === "dark" ? labels.light : labels.dark}
      title={theme === "dark" ? labels.light : labels.dark}
      suppressHydrationWarning
    >
      <span className="sr-only">{labels.toggle}</span>
      <span className="theme-toggle__icon" aria-hidden="true">
        <MoonIcon className="theme-toggle__moon size-[1.05rem]" />
        <SunIcon className="theme-toggle__sun size-[1.05rem]" />
      </span>
    </button>
  );
}
