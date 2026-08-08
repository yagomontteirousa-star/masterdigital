import Image from "next/image";
import { cn } from "@/lib/cn";

type BrowserFrameProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes: string;
};

export function BrowserFrame({
  src,
  alt,
  label,
  className,
  imageClassName,
  priority = false,
  sizes,
}: BrowserFrameProps) {
  return (
    <div className={cn("browser-frame", className)}>
      <div className="browser-frame__bar" aria-hidden="true">
        <span className="browser-frame__dot" />
        <span className="browser-frame__dot" />
        <span className="browser-frame__dot" />
        <span className="browser-frame__label">{label}</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-screen">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          fetchPriority={priority ? "high" : undefined}
          draggable={false}
          sizes={sizes}
          className={cn("object-cover object-top", imageClassName)}
        />
      </div>
    </div>
  );
}
