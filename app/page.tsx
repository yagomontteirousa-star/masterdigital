import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { FinalCta } from "@/components/sections/FinalCta";
import { ServiceStrip } from "@/components/ui/ServiceStrip";
import { SiteLoader } from "@/components/ui/SiteLoader";

export default function HomePage() {
  return (
    <>
      <SiteLoader />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Ir para o conteúdo
      </a>

      <Header />

      <div data-page-content>
        <main id="main-content">
          <Hero />
          <ServiceStrip />
          <Projects />
          <Process />
          <FinalCta />
        </main>

        <Footer />
      </div>
    </>
  );
}
