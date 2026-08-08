import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PreviewFrameProps = {
  children: ReactNode;
  /** Dominio exibido na barra do navegador. Aceita nó para poder animar a troca. */
  domain?: ReactNode;
  className?: string;
  /** Ativa a sombra maior quando o elemento pai tem a classe `group`. */
  interactive?: boolean;
};

/**
 * Moldura de navegador. Mantem a proporcao 16:10 das capturas geradas
 * por scripts/capture-previews.mjs.
 */
export function PreviewFrame({
  children,
  domain,
  className,
  interactive = false,
}: PreviewFrameProps) {
  return (
    /* Moldura dupla: a bandeja externa segura a placa interna, como hardware
       usinado. Os raios são concêntricos — 1.5rem por fora, menos a espessura
       da bandeja por dentro — senão as curvas brigam. */
    <div
      className={cn(
        "relative rounded-[1.5rem] bg-ink/[0.028] p-2 ring-1 ring-ink/[0.055]",
        "shadow-soft transition-[box-shadow,transform] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
        interactive && "group-hover:-translate-y-1.5 group-hover:shadow-lift",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[calc(1.5rem-0.5rem)] bg-surface shadow-[inset_0_1px_1px_rgb(255_255_255/0.6)] ring-1 ring-ink/[0.07]">
        <div className="relative flex h-8 items-center border-b border-line bg-paper-deep/70 px-3.5 md:h-9">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2 rounded-full bg-line-strong" />
            <span className="size-2 rounded-full bg-line-strong" />
            <span className="size-2 rounded-full bg-line-strong" />
          </span>
          {domain ? (
            <span className="pointer-events-none absolute inset-x-0 mx-auto flex w-fit max-w-[60%] justify-center rounded-full bg-surface/80 px-3 py-0.5 text-[0.625rem] tracking-wide text-ink-400 md:text-[0.6875rem]">
              {domain}
            </span>
          ) : null}
        </div>

        <div className="relative aspect-16/10 overflow-hidden bg-paper-deep">{children}</div>
      </div>
    </div>
  );
}

type SitePreviewProps = {
  src: string;
  alt: string;
  domain?: string | null;
  priority?: boolean;
  sizes: string;
  className?: string;
  interactive?: boolean;
  /** Pílula que sobe no hover. Omitir quando o projeto não tem link. */
  hoverLabel?: ReactNode;
};

/** Preview de um único site — usado nos cards do carrossel. */
export function SitePreview({
  src,
  alt,
  domain,
  priority = false,
  sizes,
  className,
  interactive = false,
  hoverLabel,
}: SitePreviewProps) {
  return (
    <PreviewFrame domain={domain} className={className} interactive={interactive}>
      {hoverLabel ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 flex items-end justify-end p-4 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
        >
          {/* Véu escuro só na base, para a pílula ter contraste sobre qualquer captura. */}
          <span className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-ink/55 to-transparent" />
          <span className="relative flex translate-y-3 items-center gap-2 rounded-full bg-ink/90 px-4 py-2 text-sm font-medium text-paper backdrop-blur-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
            {hoverLabel}
          </span>
        </span>
      ) : null}

      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        quality={82}
        draggable={false}
        className={cn(
          "object-cover object-top",
          interactive &&
            "transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]",
        )}
      />
    </PreviewFrame>
  );
}
