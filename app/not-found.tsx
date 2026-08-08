import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Brand } from "@/components/layout/Brand";
import { SectionRule } from "@/components/ui/SectionRule";
import { ArrowRight, WhatsAppIcon } from "@/components/ui/Icons";
import { whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-56 -right-40 size-[44rem] rounded-full bg-accent-soft opacity-80 blur-[120px]" />
      </div>

      <div className="shell pt-8 md:pt-10">
        <Brand />
      </div>

      <div className="shell flex flex-1 flex-col justify-center py-16">
        <SectionRule />
        <h1 className="display mt-7 max-w-3xl text-[clamp(2.5rem,7vw,4.5rem)] text-balance">
          <span className="text-ink-400">Esta página não existe.</span>{" "}
          <em className="text-ink">O resto do site, sim.</em>
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-600">
          O endereço pode ter mudado ou o link estar incompleto. Volte para os projetos
          ou me chame direto.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/#projetos" size="lg" trailing={<ArrowRight className="size-3.5" />}>
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
