"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "light";
type Size = "md" | "lg";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Ícone final. Nunca fica solto ao lado do texto: ganha um círculo próprio. */
  trailing?: ReactNode;
  /** Ícone inicial, alinhado ao texto (ex.: marca do WhatsApp). */
  leading?: ReactNode;
  external?: boolean;
  className?: string;
  "aria-label"?: string;
};

const base =
  "group/btn relative overflow-hidden inline-flex items-center justify-center gap-2.5 rounded-full font-medium " +
  "transition-[background-color,border-color,color,box-shadow] duration-500 " +
  "ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] " +
  // Brilho diagonal que atravessa o botão no hover. Fica por cima do texto de
  // propósito: é assim que a luz se comporta.
  "after:pointer-events-none after:absolute after:inset-y-0 after:-left-full after:w-full " +
  "after:bg-linear-to-r after:from-transparent after:via-white/25 after:to-transparent " +
  "after:transition-transform after:duration-700 after:ease-out after:content-[''] " +
  "hover:after:translate-x-[200%]";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper hover:bg-accent-deep shadow-soft",
  outline: "border border-line-strong text-ink hover:border-ink hover:bg-surface",
  light: "bg-paper text-ink hover:bg-accent-deep hover:text-white shadow-soft",
};

const sizes: Record<Size, string> = {
  md: "h-11 pl-5 pr-5 text-[0.9375rem]",
  lg: "h-[3.25rem] pl-7 pr-7 text-base",
};

/** Círculo do ícone final muda de tom conforme o fundo do botão. */
const trailingWell: Record<Variant, string> = {
  solid: "bg-paper/15",
  outline: "bg-ink/[0.06]",
  light: "bg-ink/[0.08] group-hover/btn:bg-white/20",
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  size = "md",
  trailing,
  leading,
  external = false,
  className,
  ...rest
}: ButtonLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();

  // MotionValue em vez de useState: o movimento magnético acontece fora do
  // ciclo de render do React, senão cada pixel de mouse dispara um re-render.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.5 });

  return (
    <motion.a
      ref={ref}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      onPointerMove={(event) => {
        if (reduceMotion || event.pointerType !== "mouse" || !ref.current) return;
        const box = ref.current.getBoundingClientRect();
        // Puxa até ~18% da distância do centro: sente o ímã sem descolar do lugar.
        x.set((event.clientX - (box.left + box.width / 2)) * 0.18);
        y.set((event.clientY - (box.top + box.height / 2)) * 0.18);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={cn(
        base,
        variants[variant],
        sizes[size],
        /* Ternário, não `&&`: um ReactNode pode ser `0`, que não é classe válida. */
        trailing ? (size === "lg" ? "pr-2" : "pr-1.5") : undefined,
        className,
      )}
      {...rest}
    >
      {leading}
      {children}
      {trailing ? (
        <span
          aria-hidden="true"
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-full",
            "transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
            "group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-px group-hover/btn:scale-105",
            trailingWell[variant],
          )}
        >
          {trailing}
        </span>
      ) : null}
    </motion.a>
  );
}
