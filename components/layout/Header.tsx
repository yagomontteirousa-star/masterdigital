"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import { nav, whatsappHref } from "@/data/site";
import { Brand } from "./Brand";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowUpRight, WhatsAppIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava a rolagem do fundo e permite fechar com Esc enquanto o menu esta aberto.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Ilha flutuante: descolada do topo, não grudada na borda da tela. */}
      <header className="fixed inset-x-0 top-0 z-40 pt-3 md:pt-5">
        <div className="shell">
          <div
            className={cn(
              "relative flex h-14 items-center justify-between gap-6 overflow-hidden rounded-full pr-1.5 pl-5 md:h-16 md:pl-6",
              "transition-[background-color,box-shadow,backdrop-filter] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
              // Vidro de verdade: além do blur, uma borda interna clara que
              // simula a refração na aresta do material.
              scrolled || open
                ? "bg-paper/70 shadow-soft ring-1 ring-ink/[0.06] backdrop-blur-xl [box-shadow:inset_0_1px_0_rgb(255_255_255/0.7),var(--shadow-soft)]"
                : "bg-transparent",
            )}
          >
            <Brand />

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-8 lg:flex"
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative py-1 text-sm text-ink-600 transition-colors duration-300 hover:text-ink"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-x-100"
                  />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {/* Wrapper controla a visibilidade: `hidden` no próprio botão
                  colidiria com o `inline-flex` do componente. */}
              <div className="hidden sm:block">
                <ButtonLink
                  href={whatsappHref}
                  external
                  className="whitespace-nowrap"
                  leading={<WhatsAppIcon className="size-4" />}
                >
                  Falar no WhatsApp
                </ButtonLink>
              </div>

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls="menu-mobile"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                className="flex size-11 items-center justify-center rounded-full text-ink transition-colors duration-300 hover:bg-ink/[0.06] lg:hidden"
              >
                <span className="relative block h-2.5 w-4" aria-hidden="true">
                  <span
                    className={cn(
                      "absolute inset-x-0 top-0 h-px bg-current transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                      open && "translate-y-[5px] rotate-45",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                      open && "-translate-y-[5px] -rotate-45",
                    )}
                  />
                </span>
              </button>
            </div>

            {/* Progresso de leitura, recortado pela borda arredondada da ilha. */}
            <motion.span
              aria-hidden="true"
              style={{ scaleX: scrollYProgress }}
              className={cn(
                "absolute inset-x-0 bottom-0 h-px origin-left bg-accent transition-opacity duration-500",
                scrolled ? "opacity-100" : "opacity-0",
              )}
            />
          </div>
        </div>
      </header>

      {/* Overlay de tela cheia: os links não aparecem juntos, sobem em cascata. */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="menu-mobile"
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-30 bg-paper/85 backdrop-blur-3xl lg:hidden"
          >
            <nav
              aria-label="Navegação mobile"
              className="shell flex h-full flex-col justify-center pt-20 pb-10"
            >
              {nav.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={reduceMotion ? undefined : { opacity: 0, y: 40 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 + index * 0.06, ease: EASE }}
                  className="display flex items-baseline justify-between border-b border-line py-5 text-[clamp(2.25rem,11vw,3.5rem)] text-ink"
                >
                  {item.label}
                  <ArrowUpRight className="size-5 text-ink-400" />
                </motion.a>
              ))}

              <motion.div
                initial={reduceMotion ? undefined : { opacity: 0, y: 40 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 + nav.length * 0.06, ease: EASE }}
                className="mt-10"
              >
                <ButtonLink
                  href={whatsappHref}
                  external
                  size="lg"
                  className="w-full"
                  leading={<WhatsAppIcon className="size-4" />}
                >
                  Falar no WhatsApp
                </ButtonLink>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
