"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Project } from "@/data/projects";
import { CyclingPreview } from "@/components/ui/CyclingPreview";

type HeroCompositionProps = {
  primary: Project[];
  secondary: Project[];
};

/**
 * Os dois balões do hero, com parallax leve na rolagem.
 * O balão pequeno sobe mais rápido que o grande — é essa diferença que
 * cria a sensação de profundidade entre as duas camadas.
 */
export function HeroComposition({ primary, secondary }: HeroCompositionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bigY = useTransform(scrollYProgress, [0, 1], [0, -46]);
  const smallY = useTransform(scrollYProgress, [0, 1], [0, -104]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[34rem] lg:mr-0 lg:ml-auto lg:max-w-none">
      <motion.div style={reduceMotion ? undefined : { y: bigY }}>
        <CyclingPreview
          items={primary}
          sizes="(max-width: 1024px) 92vw, 44vw"
          priority
          interval={4800}
        />
      </motion.div>

      {secondary.length > 0 ? (
        /* Duas camadas de propósito: a de fora controla o parallax (`style`) e a
           de dentro a entrada (`animate`). Numa só, as duas brigariam pelo `y`. */
        <motion.div
          style={reduceMotion ? undefined : { y: smallY }}
          className="absolute -bottom-14 -left-6 hidden w-[52%] sm:block md:-bottom-16 md:-left-12"
        >
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <CyclingPreview
              items={secondary}
              sizes="(max-width: 1024px) 50vw, 26vw"
              interval={4800}
              /* Defasado para os dois balões nunca trocarem ao mesmo tempo. */
              offset={2400}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </div>
  );
}
