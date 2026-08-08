import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Brand } from "@/components/layout/Brand";
import { ArrowRight, WhatsAppIcon } from "@/components/ui/Icons";
import { whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col bg-night text-chalk">
      <div className="shell flex min-h-[4.75rem] items-center border-b border-line">
        <Brand tone="dark" />
      </div>

      <div className="shell flex flex-1 flex-col justify-center py-16">
        <p data-numeric className="text-sm font-bold text-accent">Erro 404</p>
        <h1 className="display mt-5 max-w-[13ch] text-[clamp(3rem,7vw,5.5rem)] text-balance">
          Esta página não foi encontrada.
        </h1>

        <p className="mt-7 max-w-lg text-lg leading-8 text-muted">
          O endereço pode ter mudado ou o link está incompleto. Volte aos projetos ou
          fale comigo direto.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/#projetos" size="lg" trailing={<ArrowRight className="size-4" />}>
            Ver os projetos
          </ButtonLink>
          <ButtonLink
            href={whatsappHref}
            external
            variant="outline"
            size="lg"
            leading={<WhatsAppIcon className="size-4" />}
          >
            Falar no WhatsApp
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
