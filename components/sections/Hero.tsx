import Image from "next/image";
import { getWhatsAppHref } from "@/data/site";
import { getProjects, type Project } from "@/data/projects";
import { getCopy, type Locale } from "@/data/i18n";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, WhatsAppIcon } from "@/components/ui/Icons";
import { HeroMotion } from "@/components/ui/HeroMotion";
import { HeroProjectShowcase } from "@/components/ui/HeroProjectShowcase";

export function Hero({ locale = "pt" }: { locale?: Locale }) {
  const labels = getCopy(locale);
  const whatsappHref = getWhatsAppHref(locale);
  const projects = getProjects(locale);
  const published = projects.filter(
    (project): project is Project & { url: string } => Boolean(project.url),
  );
  const heroOrder = [
    "camilas-cleaning",
    "vilela-turismo",
    "al-the-painter",
    "elite-painting",
    "preto-no-branco",
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
              <span><em className="text-accent">{labels.hero.line1Accent}</em> {labels.hero.line1Rest}</span>
              <span><em className="text-accent">{labels.hero.line2Accent}</em> {labels.hero.line2Rest}</span>
              <span><em className="text-accent">{labels.hero.line3Accent}</em></span>
            </h1>

            <p className="hero-description max-w-xl text-ink-600">
              {labels.hero.description}
            </p>

            <div className="hero-actions flex gap-3">
              <ButtonLink
                href={whatsappHref}
                external
                leading={<WhatsAppIcon className="size-4" />}
              >
                {labels.whatsapp}
              </ButtonLink>
              <ButtonLink
                href="#projetos"
                variant="outline"
                className="hero-secondary-action"
                trailing={<ArrowRight className="size-4" />}
              >
                {labels.hero.projects}
              </ButtonLink>
            </div>

            <p className="hero-capabilities border-t border-line-light text-ink-600">
              {labels.hero.capabilities}
            </p>
          </div>

          <div className="hero-grid__divider" aria-hidden="true">
            <span className="hero-grid__divider-mark">
              <Image
                src="/brand/master-digital-perfil-laranja.png"
                alt=""
                width={1254}
                height={1254}
              />
            </span>
          </div>

          <HeroProjectShowcase projects={heroProjects} locale={locale} />
        </div>
      </div>
    </section>
  );
}
