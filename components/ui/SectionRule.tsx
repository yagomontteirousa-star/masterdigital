"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Régua laranja que se desenha ao entrar na viewport.
 * É o gesto de abertura repetido em todas as seções — substitui o antigo
 * ponto estático e dá uma assinatura consistente ao site.
 */
export function SectionRule({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className={cn("block h-px w-14 origin-left bg-accent", className)}
      initial={reduceMotion ? undefined : { scaleX: 0 }}
      whileInView={reduceMotion ? undefined : { scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
