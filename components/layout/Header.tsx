"use client";

import { useEffect, useRef, useState } from "react";
import { nav, whatsappHref } from "@/data/site";
import { Brand } from "./Brand";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowUpRight, WhatsAppIcon } from "@/components/ui/Icons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current;
    const pageContent = document.querySelector<HTMLElement>("[data-page-content]");
    const previousOverflow = document.documentElement.style.overflow;
    pageContent?.setAttribute("inert", "");
    document.documentElement.style.overflow = "hidden";

    const focusable = Array.from(
      panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) ?? [],
    );
    focusable[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      pageContent?.removeAttribute("inert");
      document.documentElement.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-90">
      <div className="shell">
        <div className="header-bar flex items-center justify-between gap-3 rounded-[1.15rem] border border-line-light/80 bg-surface/96 px-4 shadow-float md:gap-5 md:px-5">
          <Brand tone="light" variant="studio" className="header-brand" />

          <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="header-nav-link inline-flex min-h-11 items-center py-2 text-sm font-semibold text-ink-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <ButtonLink
              href={whatsappHref}
              external
              className="max-sm:hidden"
              leading={<WhatsAppIcon className="size-4" />}
            >
              Falar no WhatsApp
            </ButtonLink>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label="Abrir menu"
              className="grid size-11 place-items-center rounded-full border border-line-strong text-ink lg:hidden"
            >
              <span aria-hidden="true" className="grid w-5 gap-1.5">
                <span className="h-px bg-current" />
                <span className="h-px bg-current" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          ref={panelRef}
          id="menu-mobile"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
          className="mobile-menu-panel fixed inset-0 z-100 flex min-h-dvh flex-col bg-light text-ink lg:hidden"
        >
          <div className="shell flex min-h-[5rem] items-center justify-between border-b border-line-light">
            <Brand tone="light" variant="studio" className="mobile-menu-brand" onClick={() => setOpen(false)} />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="relative size-11 rounded-full border border-line-strong"
              >
                <span aria-hidden="true" className="absolute inset-1/2 h-px w-5 -translate-x-1/2 rotate-45 bg-ink" />
                <span aria-hidden="true" className="absolute inset-1/2 h-px w-5 -translate-x-1/2 -rotate-45 bg-ink" />
              </button>
            </div>
          </div>

          <nav className="shell flex flex-1 flex-col justify-center py-10" aria-label="Navegação mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display flex min-h-16 items-center justify-between border-b border-line-light py-4 text-[clamp(2.4rem,12vw,4.25rem)] transition-colors hover:text-accent"
              >
                {item.label}
                <ArrowUpRight className="size-5" />
              </a>
            ))}
            <ButtonLink
              href={whatsappHref}
              external
              size="lg"
              className="mt-9 w-full"
              leading={<WhatsAppIcon className="size-4" />}
            >
              Falar no WhatsApp
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
