import { processSteps } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionRule } from "@/components/ui/SectionRule";

export function Process() {
  return (
    <section id="processo" className="section-y relative overflow-hidden bg-ink">
      {/* Brilho quente no canto, mesma linguagem do bloco de orçamento. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-72 -left-40 size-[40rem] animate-drift rounded-full bg-accent/10 blur-[130px]" />
      </div>

      <div className="shell relative">
        <Reveal className="max-w-2xl">
          <SectionRule />
          <h2 className="display mt-7 text-[clamp(2.25rem,5.2vw,3.75rem)] text-paper text-balance">
            Três etapas. <em className="text-paper/50">Nenhuma surpresa.</em>
          </h2>
        </Reveal>

        {/* Três colunas iguais lado a lado é o layout mais genérico que existe.
            O degrau vertical crescente quebra a simetria sem custar altura. */}
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 0.1}
              className={["", "md:mt-10", "md:mt-20"][index]}
            >
              <div className="relative flex flex-col overflow-hidden pt-7">
                {/* Régua superior: trecho laranja seguido da linha neutra. */}
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-paper/15" />
                <span aria-hidden="true" className="absolute top-0 left-0 h-px w-14 bg-accent" />

                {/* Numeral fantasma — dá profundidade sem virar decoração vazia. */}
                <span
                  aria-hidden="true"
                  className="display pointer-events-none absolute -top-4 right-0 text-[6.5rem] leading-none text-paper/[0.045] select-none"
                >
                  {step.number}
                </span>

                <span className="display relative block text-3xl text-accent">
                  {step.number}
                </span>
                <h3 className="display relative mt-5 text-[clamp(1.75rem,3vw,2.25rem)] text-paper">
                  {step.title}
                </h3>
                <p className="relative mt-4 leading-relaxed text-paper/65">{step.text}</p>
                <p className="eyebrow relative mt-6 text-paper/60">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
