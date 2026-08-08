import { site, whatsappHref } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import {
  ArrowUpRight,
  IdeaIcon,
  LocationIcon,
  MailIcon,
  ResultIcon,
  StructureIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

const journey = [
  { label: "Ideia", Icon: IdeaIcon },
  { label: "Estrutura", Icon: StructureIcon },
  { label: "Resultado", Icon: ResultIcon },
];

export function FinalCta() {
  return (
    <section id="contato" className="final-cta overflow-hidden bg-accent py-16 text-night md:py-20">
      <div className="shell final-cta__layout">
        <div className="final-cta__intro">
          <p className="eyebrow text-night/85">Seu próximo site começa aqui</p>
          <h2 className="display max-w-[18ch] text-[clamp(2.9rem,5.1vw,5.5rem)] text-balance">
            Me conte o que sua empresa faz e eu digo o que o site precisa ter
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-night/85">
            Envie o nome da empresa e o que você vende. Atendo clientes no Brasil e no mundo,
            com as perguntas certas para definir escopo e prazo.
          </p>
        </div>

        <div className="final-cta__journey" aria-label="Do primeiro insight ao resultado">
          <svg className="final-cta__route" viewBox="0 0 720 360" fill="none" aria-hidden="true">
            <path
              className="final-cta__route-path"
              pathLength="1"
              d="M76 251C159 251 165 105 308 105C438 105 440 246 572 246C628 246 648 196 676 158"
            />
            <circle className="final-cta__route-node final-cta__route-node--one" cx="76" cy="251" r="8" />
            <circle className="final-cta__route-node final-cta__route-node--two" cx="308" cy="105" r="8" />
            <circle className="final-cta__route-node final-cta__route-node--three" cx="572" cy="246" r="8" />
            <circle className="final-cta__route-node final-cta__route-node--end" cx="676" cy="158" r="5" />
          </svg>

          <ol className="final-cta__journey-steps">
            {journey.map(({ label, Icon }, index) => (
              <li key={label} className={`final-cta__journey-step final-cta__journey-step--${index + 1}`}>
                <span className="final-cta__journey-icon"><Icon className="size-5" /></span>
                <span>{label}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="final-cta__actions">
          <ButtonLink
            href={whatsappHref}
            external
            size="lg"
            className="final-cta__primary-action min-h-16 w-full max-w-[22rem] bg-night px-8 text-base text-chalk hover:bg-chalk hover:text-night focus-visible:outline-night"
            leading={<WhatsAppIcon className="size-4" />}
            trailing={<ArrowUpRight className="size-4" />}
          >
            Falar no WhatsApp
          </ButtonLink>
          <div className="final-cta__contact-bubbles">
            <a href={`mailto:${site.email}`} className="final-cta__contact-bubble">
              <MailIcon className="size-4" />
              <span>{site.email}</span>
              <ArrowUpRight className="size-3.5" />
            </a>
            <span className="final-cta__contact-bubble final-cta__contact-bubble--static">
              <LocationIcon className="size-4" />
              {site.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
