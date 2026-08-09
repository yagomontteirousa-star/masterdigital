import type { Project } from "@/data/projects";
import { ArrowUpRight } from "./Icons";
import { BrowserFrame } from "./BrowserFrame";
import { getCopy, type Locale } from "@/data/i18n";

type PublishedProject = Project & { url: string };

type ProjectCardProps = {
  project: PublishedProject;
  priority?: boolean;
  duplicate?: boolean;
  onVisit: (project: PublishedProject, input: "pointer" | "keyboard") => void;
  locale?: Locale;
};

export function ProjectCard({ project, priority = false, duplicate = false, onVisit, locale = "pt" }: ProjectCardProps) {
  const visit = (input: "pointer" | "keyboard") => onVisit(project, input);
  const labels = getCopy(locale).projects;

  return (
    <article
      className="project-tile group"
      aria-hidden={duplicate || undefined}
      data-project-slug={project.slug}
    >
      <button
        type="button"
        className="project-tile__visit-action"
        aria-label={`${labels.visitAria} ${project.name}`}
        tabIndex={duplicate ? -1 : undefined}
        onPointerUp={() => visit("pointer")}
        onClick={() => visit("pointer")}
      />
      <div
        className="project-tile__visit-trigger block w-full rounded-[0.875rem] text-left"
      >
        <BrowserFrame
          src={project.cover}
          alt={duplicate ? "" : project.coverAlt}
          label={project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
          priority={priority}
          sizes="(max-width: 640px) 82vw, (max-width: 1200px) 40vw, 34rem"
          imageClassName="project-tile__image"
        />
        <span className="project-tile__visit-prompt" aria-hidden="true">
          <span>{labels.visitPrompt}</span>
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-5 border-t border-line-light pt-5">
        <div>
          <div className="project-tile__meta">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent-dark">{project.segment}</p>
          </div>
          <h3 className="display mt-2 text-[clamp(2rem,3vw,2.75rem)]">{project.name}</h3>
          <p className="project-tile__location mt-3">
            <span
              role="img"
              aria-label={`${labels.flagAria} ${project.location.country}`}
              className={`country-flag country-flag--${project.location.flag}`}
            />
            <span>{project.location.state ? `${project.location.state} · ` : ""}{project.location.country}</span>
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-ink-600">{project.description}</p>
        </div>
        <span
          className="grid size-11 shrink-0 place-items-center rounded-full border border-line-strong transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-chalk"
          aria-hidden="true"
        >
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </article>
  );
}
