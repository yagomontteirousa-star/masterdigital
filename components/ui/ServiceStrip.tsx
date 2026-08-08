const services = [
  "Estratégia",
  "Direção visual",
  "Desenvolvimento",
  "SEO técnico",
  "Domínio próprio",
  "Social media",
  "Google Business completo",
  "Site publicado",
];

export function ServiceStrip() {
  return (
    <section className="service-strip" aria-label="Serviços da Master Digital">
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
