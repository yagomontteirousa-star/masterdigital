import { heroPrimarySet, heroSecondarySet } from "@/data/projects";
import { segmentsServed, whatsappHref } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { HeroComposition } from "./HeroComposition";
import { Reveal } from "@/components/ui/Reveal";
import { SectionRule } from "@/components/ui/SectionRule";
import { ArrowRight, WhatsAppIcon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-16 md:pt-28 lg:pt-32 lg:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* Lavagem quente no canto superior direito. */}
        <div className="absolute -top-56 -right-40 size-[44rem] rounded-full bg-accent-soft opacity-80 blur-[120px]" />

        {/* Colunas-guia: recurso de direção de arte editorial. Somem para baixo
            com uma máscara, para não virar grade de wireframe. */}
        <div className="absolute inset-0">
          <div className="shell h-full">
            <div
              className="grid h-full grid-cols-2 border-r border-line/70 md:grid-cols-4 lg:grid-cols-6"
              style={{
                maskImage: "linear-gradient(to bottom, #000 35%, transparent 92%)",
                WebkitMaskImage: "linear-gradient(to bottom, #000 35%, transparent 92%)",
              }}
            >
              {/* Número de filhos precisa bater com o de colunas em cada
                  breakpoint, senão a grade cria linhas extras. */}
              {["", "", "hidden md:block", "hidden md:block", "hidden lg:block", "hidden lg:block"].map(
                (visibility, index) => (
                  <div key={index} className={`border-l border-line/70 ${visibility}`} />
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="shell grid items-center gap-y-12 lg:grid-cols-12 lg:gap-x-14">
        {/* ---------- Copy ---------- */}
        <div className="lg:col-span-6">
          <Reveal y={12}>
            <SectionRule />
          </Reveal>

          <Reveal delay={0.06} variant="mask">
            <h1 className="display mt-7 text-[clamp(2.75rem,7.4vw,4.75rem)] text-balance">
              <span className="text-ink-400">Seu site é a primeira impressão.</span>{" "}
              <em className="text-ink">Faça ela fechar negócio.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-600">
              Sites sob medida para empresas que precisam passar credibilidade e receber
              contato direto no WhatsApp.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink
                href={whatsappHref}
                external
                size="lg"
                leading={<WhatsAppIcon className="size-4" />}
              >
                Pedir orçamento
              </ButtonLink>
              <ButtonLink
                href="#projetos"
                variant="outline"
                size="lg"
                trailing={<ArrowRight className="size-3.5" />}
              >
                Ver projetos
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 max-w-xl">
              <div className="hairline" />
              <p className="sr-only">Setores atendidos</p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-ink-400">
                {segmentsServed.map((segment) => (
                  <li
                    key={segment}
                    /* Separador depois do item: se a linha quebrar, nunca sobra
                       um "·" órfão no início da linha seguinte. */
                    className="after:ml-3 after:text-line-strong after:content-['·'] last:after:content-none"
                  >
                    {segment}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* ---------- Composição de previews que se alternam ---------- */}
        <div className="lg:col-span-6">
          <HeroComposition primary={heroPrimarySet} secondary={heroSecondarySet} />

          <Reveal delay={0.36}>
            {/* Sem o preview secundário no mobile, o respiro extra vira buraco. */}
            <p className="mt-6 text-right text-xs tracking-wide text-ink-400 sm:mt-24">
              Capturas reais dos sites publicados
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
