import Image from "next/image";
import { site } from "@/data/site";
import { LocationIcon, MailIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { getCopy, type Locale } from "@/data/i18n";
import { getWhatsAppHref } from "@/data/site";

export function Footer({ locale = "pt" }: { locale?: Locale }) {
  const labels = getCopy(locale).footer;
  const whatsappHref = getWhatsAppHref(locale);
  return (
    <footer className="site-footer border-t border-line bg-night py-10 text-muted">
      <div className="shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/brand/master-digital-perfil-laranja.png"
              alt=""
              width={1254}
              height={1254}
              className="size-8"
            />
            <div>
              <p className="font-bold text-chalk">{site.name}</p>
              <p className="mt-1 text-xs">{site.studio} · {labels.studioLine}</p>
            </div>
          </div>
          <p className="mt-6 text-xs leading-5">
            © {new Date().getFullYear()} {site.name}. {labels.rights}
          </p>
        </div>

        <div className="footer-contacts">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact"
          >
            <span className="footer-contact__icon"><WhatsAppIcon className="size-4" /></span>
            <span><small>WhatsApp</small>+1 774 249 8958</span>
          </a>
          <a href={`mailto:${site.email}`} className="footer-contact">
            <span className="footer-contact__icon"><MailIcon className="size-4" /></span>
            <span><small>E-mail</small>{site.email}</span>
          </a>
          <div className="footer-contact footer-contact--static">
            <span className="footer-contact__icon"><LocationIcon className="size-4" /></span>
            <span><small>{labels.service}</small>{locale === "en" ? "Remote · worldwide" : site.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
