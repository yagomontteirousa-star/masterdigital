import Image from "next/image";
import { site, whatsappHref } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-night py-8 text-muted">
      <div className="shell flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/brand/master-digital-symbol-orange.svg"
            alt=""
            width={512}
            height={512}
            className="size-7"
          />
          <p className="text-xs leading-5">
            © {new Date().getFullYear()} {site.name} · {site.studio}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:gap-6">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center font-semibold text-chalk hover:text-accent"
          >
            +1 774 249 8958
          </a>
          <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center hover:text-chalk">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
