import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "light";
type Size = "md" | "lg";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  trailing?: ReactNode;
  leading?: ReactNode;
  external?: boolean;
  className?: string;
  "aria-label"?: string;
};

const variants: Record<Variant, string> = {
  solid: "bg-accent text-night hover:bg-chalk focus-visible:outline-chalk",
  outline: "border border-chalk/30 bg-transparent text-chalk hover:border-chalk/65 hover:bg-chalk/5",
  light: "bg-chalk text-night hover:bg-white",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-[3.25rem] px-6 text-[0.9375rem]",
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  size = "md",
  trailing,
  leading,
  external = false,
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-3 rounded-lg font-bold transition-[background-color,color,border-color,transform] duration-200 active:translate-y-px",
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {leading}
      <span>{children}</span>
      {trailing ? (
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
          {trailing}
        </span>
      ) : null}
    </a>
  );
}
