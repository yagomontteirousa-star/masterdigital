import { marqueeItems } from "@/data/site";

/**
 * Faixa escura em movimento contínuo entre o hero e os projetos.
 *
 * Animação em CSS puro (sem JS): a lista é duplicada e o trilho anda -50%,
 * o que emenda o loop sem salto. Para no hover e para de vez com
 * `prefers-reduced-motion` — a regra global de motion reduzido zera a duração.
 */
export function Marquee() {
  const track = [...marqueeItems, ...marqueeItems];

  return (
    <section
      aria-label="Serviços"
      className="group relative overflow-hidden border-y border-paper/10 bg-ink py-5"
    >
      <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-8 px-8 whitespace-nowrap"
            /* A segunda metade é decorativa: evita leitura duplicada. */
            aria-hidden={index >= marqueeItems.length ? true : undefined}
          >
            <span className="display text-2xl text-paper/85 md:text-3xl">{item}</span>
            <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          </span>
        ))}
      </div>

      {/* Esfumaçado nas bordas para o texto entrar e sair sem corte seco. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-ink to-transparent md:w-28"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-ink to-transparent md:w-28"
      />
    </section>
  );
}
