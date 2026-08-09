import { getCopy, type Locale } from "@/data/i18n";

export function LanguageToggle({ locale }: { locale: Locale }) {
  const language = getCopy(locale).language;

  return (
    <a
      href={language.href}
      className="language-toggle grid size-11 place-items-center rounded-full border border-line-strong text-xs font-extrabold tracking-[0.08em] text-ink"
      aria-label={language.label}
      title={language.label}
      hrefLang={locale === "pt" ? "en" : "pt-BR"}
    >
      {language.short}
    </a>
  );
}
