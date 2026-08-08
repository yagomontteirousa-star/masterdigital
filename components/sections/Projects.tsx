import { projects, type Project } from "@/data/projects";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";

export function Projects() {
  const published = projects.filter(
    (project): project is Project & { url: string } => Boolean(project.url),
  );

  return (
    <section id="projetos" className="projects-section bg-[#fbf8f1] py-16 text-ink md:py-20">
      <div className="shell">
        <div className="grid gap-6 border-b border-line-light pb-8 md:grid-cols-12 md:items-end">
          <h2 className="display max-w-[20ch] text-[clamp(2.55rem,4.1vw,4.3rem)] md:col-span-8">
            Sites diferentes para <em className="text-accent">negócios diferentes.</em>
          </h2>
          <p className="max-w-md text-base leading-7 text-ink-600 md:col-span-4 md:justify-self-end">
            Sites publicados em segmentos diferentes, todos desenhados para deixar a
            empresa clara e facilitar o próximo contato.
          </p>
        </div>
      </div>
      <ProjectCarousel projects={published} />
    </section>
  );
}
