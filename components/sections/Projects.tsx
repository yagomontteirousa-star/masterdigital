"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projectCategories, projects, type ProjectFilter } from "@/data/projects";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionRule } from "@/components/ui/SectionRule";
import { cn } from "@/lib/cn";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("Todos");

  const visible = useMemo(
    () =>
      filter === "Todos"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <section id="projetos" className="section-y border-t border-line">
      <div className="shell">
        {/* ---------- Cabeçalho da seção ---------- */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <SectionRule />
            <h2 className="display mt-7 text-[clamp(2.25rem,5.2vw,3.75rem)] text-balance">
              Sites no ar, feitos para{" "}
              <em className="text-accent-deep">empresas de verdade.</em>
            </h2>
            <p className="mt-4 text-ink-600">
              Capturas reais dos sites. Arraste para o lado.
            </p>
          </Reveal>

          {/* ---------- Filtros ---------- */}
          <Reveal delay={0.1}>
            <div
              role="group"
              aria-label="Filtrar projetos por categoria"
              className="flex flex-wrap gap-2"
            >
              {projectCategories.map((category) => {
                const active = filter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setFilter(category)}
                    aria-pressed={active}
                    className={cn(
                      "relative h-9 rounded-full border px-4 text-sm transition-colors duration-300",
                      active
                        ? "border-ink text-paper"
                        : "border-line-strong text-ink-600 hover:border-ink hover:text-ink",
                    )}
                  >
                    {/* `layoutId` faz a pílula escura deslizar entre os filtros
                        em vez de piscar de um para o outro. */}
                    {active ? (
                      <motion.span
                        layoutId="filtro-ativo"
                        className="absolute inset-0 rounded-full bg-ink"
                        transition={{ type: "spring", stiffness: 420, damping: 38 }}
                      />
                    ) : null}
                    <span className="relative">{category}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-12">
          {visible.length > 0 ? (
            <ProjectCarousel projects={visible} resetKey={filter} />
          ) : (
            <p className="py-16 text-center text-ink-400">
              Nenhum projeto nesta categoria ainda.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
