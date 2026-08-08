import Image from "next/image";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

type BrandProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function Brand({ tone = "dark", className }: BrandProps) {
  const darkSurface = tone === "dark";

  return (
    <a
      href="#top"
      className={cn("group inline-flex min-h-11 items-center gap-3", className)}
      aria-label={`${site.name} — início`}
    >
      <Image
        src={
          darkSurface
            ? "/brand/master-digital-symbol-orange.svg"
            : "/brand/master-digital-symbol-black.svg"
        }
        alt=""
        width={512}
        height={512}
        className="size-7 transition-transform duration-200 group-hover:-rotate-3"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-sm font-bold tracking-[-0.025em]",
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
