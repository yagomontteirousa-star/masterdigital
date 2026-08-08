import type { Project } from "@/data/projects";
import { SitePreview } from "./SitePreview";
import { ArrowUpRight } from "./Icons";
import { getDomain } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  /** Repassado ao next/image — muda conforme a largura do slide. */
  sizes: string;
  /** Carrega sem lazy: usar apenas nos primeiros slides visíveis. */
  priority?: boolean;
};

function Deliverables({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line px-3 py-1 text-xs text-ink-600"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function VisitLink({ url, name }: { url: string | null; name: string }) {
  if (!url) {
    return <p className="mt-5 text-sm text-ink-400">Sem link público no momento</p>;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      /* `w-fit` evita esticar dentro de containers flex; `py-2.5` da area de toque. */
      className="group/link mt-4 inline-flex w-fit items-center gap-2 py-2.5 text-sm font-medium text-ink"
      aria-label={`Ver projeto ${name} em nova aba`}
    >
      <span className="relative">
        Ver projeto
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent-deep transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:scale-x-100"
        />
      </span>
      <ArrowUpRight className="size-4 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
    </a>
  );
}

export function ProjectCard({ project, sizes, priority = false }: ProjectCardProps) {
  const preview = (
    <SitePreview
      src={project.cover}
      alt={project.coverAlt}
      domain={getDomain(project.url)}
      sizes={sizes}
      priority={priority}
      interactive
      hoverLabel={
        project.url ? (
          <>
            Ver site
            <ArrowUpRight className="size-4" />
          </>
        ) : undefined
      }
    />
  );

  return (
    <article className="group flex h-full flex-col">
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          /* Link redundante do preview: o leitor de tela usa o "Ver projeto". */
          tabIndex={-1}
          aria-hidden="true"
          className="block"
          draggable={false}
        >
          {preview}
        </a>
      ) : (
        preview
      )}

      {/* Sem numeração: projetos não são uma sequência, então 01/02/03 seria
          ornamento. A categoria também sai — os filtros acima já a comunicam. */}
      <div className="mt-6 flex items-center gap-4">
        <span className="hairline flex-1" />
        {project.featured ? (
          /* Ponto laranja + texto em tinta: o acento fica na cor do marcador,
             não no texto de 11px, que precisa de 4,5:1 de contraste. */
          <span className="eyebrow flex items-center gap-1.5 text-ink">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Destaque
          </span>
        ) : null}
      </div>

      <p className="eyebrow mt-5 text-ink-400">{project.segment}</p>
      <h3 className="display mt-2.5 text-[clamp(1.6rem,2.6vw,2.1rem)] text-ink">
        {project.name}
      </h3>

      <p className="mt-3 leading-relaxed text-ink-600">{project.description}</p>

      {/* `mt-auto` cola o rodapé do card na base, alinhando slides de alturas diferentes. */}
      <div className="mt-auto">
        <Deliverables items={project.deliverables.slice(0, 3)} />
        <VisitLink url={project.url} name={project.name} />
      </div>
    </article>
  );
}
