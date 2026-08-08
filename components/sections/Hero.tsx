import Image from "next/image";
import { whatsappHref } from "@/data/site";
import { projects, type Project } from "@/data/projects";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, WhatsAppIcon } from "@/components/ui/Icons";
import { HeroMotion } from "@/components/ui/HeroMotion";
import { HeroProjectShowcase } from "@/components/ui/HeroProjectShowcase";

export function Hero() {
  const published = projects.filter(
    (project): project is Project & { url: string } => Boolean(project.url),
  );
  const heroOrder = [
    "camilas-cleaning",
    "vilela-turismo",
    "al-the-painter",
    "gustavo-san",
    "master-sonorizacao",
    "beltrame-acessorios",
  ];
  const heroProjects = heroOrder
    .map((slug) => published.find((project) => project.slug === slug))
    .filter((project): project is Project & { url: string } => Boolean(project));

  return (
    <section id="top" className="hero-viewport editorial-paper relative overflow-hidden bg-light text-ink">
      <HeroMotion />
      <div className="shell hero-viewport__inner relative">
        <div className="hero-grid">
          <div className="hero-copy relative z-10">
            <h1 className="display hero-title">
              <span><em className="text-accent">Seu trabalho</em> é bom.</span>
              <span><em className="text-accent">Seu site</em> precisa</span>
              <span><em className="text-accent">provar isso.</em></span>
            </h1>

            <p className="hero-description max-w-xl text-ink-600">
              Sites sob medida para empresas que precisam apresentar seu trabalho com
              clareza, transmitir confiança e transformar visitas em novas conversas.
            </p>

            <div className="hero-actions flex gap-3">
              <ButtonLink
                href={whatsappHref}
                external
                leading={<WhatsAppIcon className="size-4" />}
              >
                Falar no WhatsApp
              </ButtonLink>
              <ButtonLink
                href="#projetos"
                variant="outline"
                className="hero-secondary-action"
                trailing={<ArrowRight className="size-4" />}
              >
                Ver projetos
              </ButtonLink>
            </div>

            <p className="hero-capabilities border-t border-line-light text-ink-600">
              Estratégia · texto · direção visual · desenvolvimento
            </p>
          </div>

          <div className="hero-grid__divider" aria-hidden="true">
            <span className="hero-grid__divider-mark">
              <Image
                src="/brand/master-digital-symbol-orange.svg"
                alt=""
                width={512}
                height={512}
              />
            </span>
          </div>

          <HeroProjectShowcase projects={heroProjects} />
        </div>
      </div>
    </section>
  );
}
