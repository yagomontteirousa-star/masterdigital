import Image from "next/image";
import { capabilities, processSteps, whatsappHref } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, WhatsAppIcon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section id="top" className="bg-night py-12 text-chalk md:py-16 lg:py-20">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-7">
            <h1 className="display max-w-[12ch] text-[clamp(3rem,6vw,5.4rem)] text-balance">
              Seu site precisa gerar confiança antes da primeira conversa.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              Eu reúno estratégia, texto, direção visual e desenvolvimento para
              apresentar seu negócio com clareza, transmitir credibilidade e levar o
              visitante ao contato.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={whatsappHref}
                external
                size="lg"
                leading={<WhatsAppIcon className="size-4" />}
              >
                Falar no WhatsApp
              </ButtonLink>
              <ButtonLink
                href="#projetos"
                variant="outline"
                size="lg"
                trailing={<ArrowRight className="size-4" />}
              >
                Ver projetos
              </ButtonLink>
            </div>

            <ul className="mt-10 grid max-w-2xl gap-3 border-t border-line pt-5 text-sm text-muted sm:grid-cols-3">
              <li>Mensagem clara</li>
              <li>Design sob medida</li>
              <li>Contato sem atrito</li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-light p-7 text-light-ink sm:p-9 lg:col-span-5">
            <div className="flex items-start justify-between gap-6 border-b border-line-light pb-7">
              <h2 className="display max-w-[11ch] text-[clamp(2rem,3.6vw,3rem)]">
                Uma direção única, do posicionamento ao site no ar.
              </h2>
              <Image
                src="/brand/master-digital-symbol-orange.svg"
                alt=""
                width={512}
                height={512}
                className="size-9 shrink-0"
              />
            </div>

            <ul>
              {capabilities.map((capability) => (
                <li
                  key={capability.title}
                  className="grid gap-2 border-b border-line-light py-4 sm:grid-cols-[9rem_1fr]"
                >
                  <h3 className="text-sm font-bold">{capability.title}</h3>
                  <p className="text-sm leading-6 text-ink-600">{capability.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ol className="mt-12 grid border-y border-line md:grid-cols-3 lg:mt-16">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              className="flex items-center gap-4 border-b border-line py-4 last:border-b-0 md:border-r md:border-b-0 md:px-6 md:first:pl-0 md:last:border-r-0"
            >
              <span className="text-xs font-semibold text-accent" aria-hidden="true">
                {step.number}
              </span>
              <div>
                <h2 className="text-sm font-bold text-chalk">{step.title}</h2>
                <p className="mt-1 text-xs leading-5 text-muted">
                  {index === 0
                    ? "Mensagem e estrutura"
                    : index === 1
                      ? "Design e desenvolvimento"
                      : "Testes e publicação"}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
