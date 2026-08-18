import Image from "next/image";
import type { MouseEventHandler } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { getCopy, type Locale } from "@/data/i18n";

type BrandProps = {
  tone?: "light" | "dark";
  variant?: "personal" | "studio";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  locale?: Locale;
};

export function Brand({ tone = "dark", variant = "personal", className, onClick, locale = "pt" }: BrandProps) {
  const darkSurface = tone === "dark";
  const startLabel = getCopy(locale).start;

  if (variant === "studio") {
    return (
      <a
        href="#top"
        onClick={onClick}
        className={cn("group inline-flex min-h-11 items-center", className)}
        aria-label={`${site.studio} — ${startLabel}`}
      >
        <Image
          src={darkSurface ? "/brand/master-digital-horizontal-branca.png" : "/brand/master-digital-horizontal-preta.png"}
          alt="Master Digital"
          width={2172}
          height={724}
          className="h-7 w-auto transition-transform duration-200 group-hover:-rotate-1"
        />
      </a>
    );
  }

  return (
    <a
      href="#top"
      onClick={onClick}
      className={cn("group inline-flex min-h-11 items-center gap-2.5", className)}
      aria-label={`${site.name} — ${startLabel}`}
    >
      <Image
        src={
          darkSurface
            ? "/brand/master-digital-perfil-branca.png"
            : "/brand/master-digital-perfil-preta.png"
        }
        alt=""
        width={1254}
        height={1254}
        className="size-6 transition-transform duration-200 group-hover:-rotate-3"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-sm font-extrabold tracking-[-0.03em]",
            darkSurface ? "text-chalk" : "text-light-ink",
          )}
        >
          {site.name}
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6875rem] font-medium",
            darkSurface ? "text-muted" : "text-ink-600",
          )}
        >
          {site.studio}
        </span>
      </span>
    </a>
  );
}
