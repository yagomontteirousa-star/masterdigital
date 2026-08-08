import Image from "next/image";
import { nav, site, whatsappHref } from "@/data/site";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="bg-ink pb-10 text-paper/60">
      <div className="shell">
        <div className="hairline bg-paper/10" />

        <div className="grid gap-8 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Brand tone="dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              {site.role}. {site.location}.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé" className="flex flex-col gap-3 text-sm">
            <h2 className="eyebrow mb-1 text-paper/60">Navegar</h2>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-fit py-0.5 transition-colors duration-300 hover:text-paper"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm">
            <h2 className="eyebrow mb-1 text-paper/60">Contato</h2>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit py-0.5 transition-colors duration-300 hover:text-paper"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${site.email}`}
              className="w-fit py-0.5 break-all transition-colors duration-300 hover:text-paper"
            >
              {site.email}
            </a>
          </div>
        </div>

        {/* Assinatura em display gigante, cortada na base: âncora visual do fim
            da página. Puramente decorativa — o nome já está no topo do rodapé. */}
        <div aria-hidden="true" className="mt-12 -mb-4 overflow-hidden sm:-mb-6">
          <span className="display block translate-y-[0.12em] text-[clamp(3.5rem,15vw,13rem)] leading-[0.78] whitespace-nowrap text-paper/[0.07] select-none">
            {site.name}
          </span>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-paper/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-xs">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <Image
            src="/brand/master-digital-white.svg"
            alt={site.studio}
            width={1800}
            height={520}
            className="h-4 w-auto opacity-40"
          />
        </div>
      </div>
    </footer>
  );
}
