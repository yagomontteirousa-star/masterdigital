import { site, whatsappHref } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowUpRight, WhatsAppIcon } from "@/components/ui/Icons";

export function FinalCta() {
  return (
    <section id="contato" className="border-t border-line bg-night-soft py-16 text-chalk md:py-20">
      <div className="shell grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <h2 className="display max-w-[13ch] text-[clamp(2.6rem,5vw,4.6rem)] text-balance">
            Seu próximo site começa com uma conversa.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            Envie o nome da empresa e o que você vende. Eu retorno com as perguntas
            necessárias para definir escopo e prazo.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
          <ButtonLink
            href={whatsappHref}
            external
            size="lg"
            className="w-full sm:w-fit"
            leading={<WhatsAppIcon className="size-4" />}
            trailing={<ArrowUpRight className="size-4" />}
          >
            Falar no WhatsApp
          </ButtonLink>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-11 items-center text-sm text-muted underline decoration-line-light/30 underline-offset-4 hover:text-chalk"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
