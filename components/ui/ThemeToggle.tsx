"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

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

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

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
      aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo noturno"}
      title={theme === "dark" ? "Ativar modo claro" : "Ativar modo noturno"}
      suppressHydrationWarning
    >
      <span className="sr-only">Alternar tema</span>
      <span className="theme-toggle__icon" aria-hidden="true">
        <MoonIcon className="theme-toggle__moon size-[1.05rem]" />
        <SunIcon className="theme-toggle__sun size-[1.05rem]" />
      </span>
    </button>
  );
}
