import { site, whatsappHref } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionRule } from "@/components/ui/SectionRule";
import { ArrowUpRight, WhatsAppIcon } from "@/components/ui/Icons";

export function FinalCta() {
  return (
    <section id="contato" className="section-y relative overflow-hidden bg-ink">
      {/* Brilho quente, discreto, atrás do bloco de texto. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-64 left-1/2 size-[46rem] -translate-x-1/2 animate-drift rounded-full bg-accent/12 blur-[130px]" />
      </div>

      <div className="shell relative">
        <Reveal className="max-w-3xl">
          <SectionRule />
          <h2 className="display mt-7 text-[clamp(2.5rem,6vw,4.5rem)] text-paper text-balance">
            Me conte o que sua empresa faz.{" "}
            <em className="text-paper/50">Eu digo o que o site precisa ter.</em>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/65">
            Mande o nome da empresa e o que você vende. Respondo com escopo, prazo e
            valor.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink
              href={whatsappHref}
              external
              variant="light"
              size="lg"
              leading={<WhatsAppIcon className="size-4" />}
              trailing={<ArrowUpRight className="size-3.5" />}
            >
              Pedir orçamento no WhatsApp
            </ButtonLink>

            <a
              href={`mailto:${site.email}`}
              className="group/mail inline-flex items-center gap-2 px-2 text-[0.9375rem] text-paper/70 transition-colors duration-300 hover:text-paper sm:px-5"
            >
              {site.email}
              <ArrowUpRight className="size-4 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/mail:translate-x-0.5 group-hover/mail:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
