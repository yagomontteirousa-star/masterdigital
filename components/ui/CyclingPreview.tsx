"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { PreviewFrame } from "./SitePreview";
import { getDomain } from "@/lib/cn";

type CyclingPreviewProps = {
  items: Project[];
  /** Tempo que cada tela fica visível, em ms. */
  interval?: number;
  /** Atraso do primeiro ciclo — usado para os dois balões não trocarem juntos. */
  offset?: number;
  sizes: string;
  /** Marca a primeira imagem como prioritária (só o balão principal do hero). */
  priority?: boolean;
  className?: string;
};

/**
 * Balão do hero que alterna entre telas de sites com crossfade.
 *
 * Todas as telas ficam montadas e empilhadas: a troca é só opacidade, então
 * não há pop-in de imagem ainda não carregada. A primeira já entra com
 * opacidade 1 (`initial={false}`), preservando o LCP.
 */
export function CyclingPreview({
  items,
  interval = 4600,
  offset = 0,
  sizes,
  priority = false,
  className,
}: CyclingPreviewProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || items.length < 2) return;

    let intervalId: ReturnType<typeof setInterval>;
    const advance = () => setIndex((current) => (current + 1) % items.length);
    const timeoutId = setTimeout(() => {
      advance();
      intervalId = setInterval(advance, interval);
    }, offset + interval);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [items.length, interval, offset, reduceMotion]);

  const current = items[index];

  return (
    <PreviewFrame
      className={className}
      domain={
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={current.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {getDomain(current.url) ?? current.name}
          </motion.span>
        </AnimatePresence>
      }
    >
      {items.map((project, position) => (
        <motion.div
          key={project.slug}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: position === index ? 1 : 0 }}
          transition={{ duration: 1.1, ease: [0.32, 0.72, 0, 1] }}
          aria-hidden={position === index ? undefined : true}
        >
          <Image
            src={project.cover}
            alt={position === 0 ? project.coverAlt : ""}
            fill
            sizes={sizes}
            priority={priority && position === 0}
            quality={82}
            className="object-cover object-top"
          />
        </motion.div>
      ))}
    </PreviewFrame>
  );
}
