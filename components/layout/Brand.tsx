import Image from "next/image";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

type BrandProps = {
  /** `dark` usa o simbolo branco, para fundos escuros. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Assinatura do header/footer: simbolo Master Digital + nome.
 * O nome vem de data/site.ts — troque la, nao aqui.
 */
export function Brand({ tone = "light", className }: BrandProps) {
  return (
    <a
      href="#top"
      className={cn("group -my-2 inline-flex items-center gap-2.5 py-2", className)}
      aria-label={`${site.name} — início`}
    >
      <Image
        // ---- SUBSTITUIR: /public/brand/master-digital-symbol-*.svg ----
        src={
          tone === "dark"
            ? "/brand/master-digital-symbol-white.svg"
            : "/brand/master-digital-symbol-orange.svg"
        }
        alt=""
        width={512}
        height={512}
        className="size-[1.375rem] shrink-0 transition-transform duration-500 group-hover:rotate-[-6deg]"
      />
      <span className="flex items-baseline gap-2">
        <span
          className={cn(
            "text-[0.9375rem] font-medium tracking-[-0.01em] whitespace-nowrap",
            tone === "dark" ? "text-paper" : "text-ink",
          )}
        >
          {site.name}
        </span>
        <span
          className={cn(
            "hidden text-[0.6875rem] tracking-[0.14em] uppercase sm:inline",
            tone === "dark" ? "text-paper/60" : "text-ink-400",
          )}
        >
          {site.studio}
        </span>
      </span>
    </a>
  );
}
