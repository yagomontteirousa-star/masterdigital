import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { FinalCta } from "@/components/sections/FinalCta";
import { ServiceStrip } from "@/components/ui/ServiceStrip";
import { SiteLoader } from "@/components/ui/SiteLoader";
import { getCopy, type Locale } from "@/data/i18n";

export function PortfolioPage({ locale }: { locale: Locale }) {
  const labels = getCopy(locale);

  return (
    <>
      <SiteLoader locale={locale} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink"
      >
        {labels.skip}
      </a>

      <Header locale={locale} />

      <div data-page-content lang={locale === "en" ? "en" : "pt-BR"}>
        <main id="main-content">
          <Hero locale={locale} />
          <ServiceStrip locale={locale} />
          <Projects locale={locale} />
          <Process locale={locale} />
          <FinalCta locale={locale} />
        </main>

        <Footer locale={locale} />
      </div>
    </>
  );
}
