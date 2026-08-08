"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Atraso em segundos, para escalonar itens de uma mesma linha. */
  delay?: number;
  /** Deslocamento vertical inicial (modo `fade`). */
  y?: number;
  /**
   * `fade`  — sobe e aparece. Padrão, para blocos de texto e listas.
   * `mask`  — cortina de cima para baixo. Para títulos grandes.
   */
  variant?: "fade" | "mask";
  className?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Entrada ao chegar na viewport.
 * Respeita `prefers-reduced-motion`: sem movimento, o conteudo aparece direto.
 */
export function Reveal({
  children,
  delay = 0,
  y = 20,
  variant = "fade",
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  if (variant === "mask") {
    return (
      <motion.div
        className={className}
        /* clip-path preserva qualquer marcação interna (spans, em, cores),
           coisa que dividir o texto em palavras quebraria. */
        initial={{ clipPath: "inset(0 0 100% 0)", y: 14 }}
        whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.05, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
