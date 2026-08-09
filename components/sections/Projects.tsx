import { getProjects, type Project } from "@/data/projects";
import { getCopy, type Locale } from "@/data/i18n";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";

export function Projects({ locale = "pt" }: { locale?: Locale }) {
  const labels = getCopy(locale).projects;
  const projects = getProjects(locale);
  const published = projects.filter(
    (project): project is Project & { url: string } => Boolean(project.url),
  );

  return (
    <section id="projetos" className="projects-section bg-surface py-16 text-ink md:py-20">
      <div className="shell">
        <div className="grid gap-6 border-b border-line-light pb-8 md:grid-cols-12 md:items-end">
          <h2 className="display max-w-[20ch] text-[clamp(2.55rem,4.1vw,4.3rem)] md:col-span-8">
            {labels.titleBefore} <em className="text-accent">{labels.titleAccent}</em>
          </h2>
          <p className="max-w-md text-base leading-7 text-ink-600 md:col-span-4 md:justify-self-end">
            {labels.description}
          </p>
        </div>
      </div>
      <ProjectCarousel projects={published} locale={locale} />
    </section>
  );
}
