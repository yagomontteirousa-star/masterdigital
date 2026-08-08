"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ArrowRight } from "./Icons";
import { cn } from "@/lib/cn";

type ProjectCarouselProps = {
  projects: Project[];
  /** Muda junto com o filtro para reiniciar a posição da rolagem. */
  resetKey: string;
};

/**
 * Carrossel horizontal com scroll-snap.
 *
 * No toque a rolagem é a nativa do navegador. No mouse, o arrasto é traduzido
 * em `scrollLeft` — por isso não há `scroll-behavior: smooth` no CSS do
 * scroller (brigaria com o arrasto); os botões usam `scrollTo` programático.
 */
export function ProjectCarousel({ projects, resetKey }: ProjectCarouselProps) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const [active, setActive] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  const readPosition = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const { scrollLeft, scrollWidth, clientWidth } = scroller;
    setEdges({
      start: scrollLeft <= 2,
      end: scrollLeft >= scrollWidth - clientWidth - 2,
    });

    // Slide ativo = aquele cuja borda esquerda está mais perto da borda do scroller.
    const slides = Array.from(scroller.children) as HTMLElement[];
    let nearest = 0;
    let smallest = Number.POSITIVE_INFINITY;
    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - scroller.offsetLeft - scrollLeft);
      if (distance < smallest) {
        smallest = distance;
        nearest = index;
      }
    });
    setActive(nearest);
  }, []);

  useEffect(() => {
    scrollerRef.current?.scrollTo({ left: 0 });
    setActive(0);
    readPosition();
  }, [resetKey, readPosition]);

  const goTo = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const slides = Array.from(scroller.children) as HTMLElement[];
    const target = slides[Math.min(Math.max(active + direction, 0), slides.length - 1)];
    if (!target) return;
    scroller.scrollTo({
      left: target.offsetLeft - scroller.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    /* As margens negativas espelham o padding do `shell`: os slides sangram até
       a borda da tela e o padding-right devolve o espaço para o último slide
       conseguir encostar na esquerda. Sem rolagem horizontal na página. */
    <div className="relative -mr-6 md:-mr-10 xl:-mr-14">
      <ul
        ref={scrollerRef}
        onScroll={readPosition}
        tabIndex={0}
        role="region"
        aria-label="Carrossel de projetos — use as setas do teclado ou arraste"
        className={cn(
          "no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 lg:gap-8",
          "pr-6 md:pr-10 xl:pr-14",
          "cursor-grab select-none active:cursor-grabbing",
        )}
        /* Sem isto o navegador inicia o drag-and-drop nativo da imagem/link,
           dispara pointercancel e o arrasto do carrossel morre no meio. */
        onDragStart={(event) => event.preventDefault()}
        onPointerDown={(event) => {
          // Toque e caneta usam a rolagem nativa; só o mouse precisa de arrasto.
          if (event.pointerType !== "mouse") return;
          const scroller = scrollerRef.current;
          if (!scroller) return;
          drag.current = {
            active: true,
            startX: event.clientX,
            startScroll: scroller.scrollLeft,
            moved: false,
          };
          scroller.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!drag.current.active) return;
          const scroller = scrollerRef.current;
          if (!scroller) return;
          const delta = event.clientX - drag.current.startX;
          if (Math.abs(delta) > 4) drag.current.moved = true;
          scroller.scrollLeft = drag.current.startScroll - delta;
        }}
        onPointerUp={(event) => {
          drag.current.active = false;
          scrollerRef.current?.releasePointerCapture(event.pointerId);
        }}
        onPointerCancel={() => {
          drag.current.active = false;
        }}
        /* Impede que o fim de um arrasto conte como clique no link do card. */
        onClickCapture={(event) => {
          if (!drag.current.moved) return;
          event.preventDefault();
          event.stopPropagation();
          drag.current.moved = false;
        }}
      >
        {projects.map((project, index) => (
          <li
            key={project.slug}
            className={cn(
              "shrink-0 snap-start",
              /* Larguras calibradas para o slide seguinte aparecer sempre
                 cortado — é o que sinaliza que dá para arrastar. */
              project.featured
                ? "w-[86%] sm:w-[68%] lg:w-[58%]"
                : "w-[86%] sm:w-[60%] lg:w-[47%]",
            )}
          >
            <ProjectCard
              project={project}
              priority={index === 0}
              sizes="(max-width: 640px) 86vw, (max-width: 1024px) 64vw, 50vw"
            />
          </li>
        ))}
      </ul>

      {/* ---------- Controles (voltam para dentro da coluna de texto) ---------- */}
      <div className="mt-8 mr-6 flex items-center gap-5 md:mr-10 xl:mr-14">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => goTo(-1)}
            disabled={edges.start}
            aria-label="Projeto anterior"
            className="flex size-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors duration-300 hover:border-ink disabled:opacity-30 disabled:hover:border-line-strong"
          >
            <ArrowRight className="size-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => goTo(1)}
            disabled={edges.end}
            aria-label="Próximo projeto"
            className="flex size-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors duration-300 hover:border-ink disabled:opacity-30 disabled:hover:border-line-strong"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>

        {/* Barra de progresso: mostra quanto do carrossel já foi percorrido. */}
        <div className="relative h-px flex-1 bg-line" aria-hidden="true">
          <span
            className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ width: `${((active + 1) / projects.length) * 100}%` }}
          />
        </div>

        <p className="text-sm tabular-nums text-ink-400" aria-live="polite">
          <span className="text-ink">{String(active + 1).padStart(2, "0")}</span>
          {" / "}
          {String(projects.length).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
