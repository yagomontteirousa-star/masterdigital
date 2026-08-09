import { getCopy, type Locale } from "@/data/i18n";

export function ServiceStrip({ locale = "pt" }: { locale?: Locale }) {
  const services = getCopy(locale).services;
  return (
    <section className="service-strip" aria-label={locale === "en" ? "Master Digital services" : "Serviços da Master Digital"}>
      <p className="sr-only">{services.join(", ")}</p>
      <div className="service-strip__track" aria-hidden="true">
        {[0, 1].map((group) => (
          <div key={group} className="service-strip__group">
            {services.map((service) => (
              <span key={`${group}-${service}`}>{service}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
