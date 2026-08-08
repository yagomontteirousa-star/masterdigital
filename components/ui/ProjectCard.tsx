import Image from "next/image";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "./Icons";

type ProjectCardProps = {
  project: Project & { url: string };
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="project-tile group">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden rounded-lg bg-white shadow-[0_24px_60px_-40px_rgba(14,15,17,0.65)]"
        aria-label={`Abrir o site ${project.name}`}
      >
        <Image
          src={project.cover}
          alt={project.coverAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 92vw, 46vw"
          className="project-tile__image object-cover object-top"
        />
      </a>

      <div className="mt-5 flex items-start justify-between gap-5 border-t border-line-light pt-4">
        <div>
          <h3 className="display text-[clamp(1.7rem,3vw,2.35rem)]">{project.name}</h3>
          <p className="mt-2 text-sm text-ink-600">{project.segment}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-ink-600">{project.description}</p>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="grid size-11 shrink-0 place-items-center rounded-full border border-line-strong transition-colors duration-200 hover:border-light-ink hover:bg-light-ink hover:text-light"
          aria-label={`Visitar ${project.name}`}
        >
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </article>
  );
}
