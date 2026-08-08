import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  const published = projects.filter(
    (project): project is Project & { url: string } => Boolean(project.url),
  );

  return (
    <section id="projetos" className="section-y bg-light text-light-ink">
      <div className="shell">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="display text-[clamp(2.5rem,5vw,4.5rem)] md:col-span-7">
            Projetos publicados.
          </h2>
          <p className="max-w-lg text-base leading-7 text-ink-600 md:col-span-5 md:justify-self-end">
            Quatro entregas reais, em segmentos diferentes, com a mesma prioridade:
            deixar o negócio claro e facilitar o próximo contato.
          </p>
        </div>

        <div className="mt-12 grid gap-x-7 gap-y-12 md:mt-16 md:grid-cols-2">
          {published.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
