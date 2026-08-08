import { capabilities } from "@/data/site";

export function Process() {
  return (
    <section id="processo" className="section-y bg-night text-chalk">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="display max-w-[11ch] text-[clamp(2.6rem,5vw,4.5rem)]">
            Uma pessoa conduz tudo.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
            Da primeira conversa ao site publicado, você fala comigo. Isso mantém
            estratégia, texto, visual e código seguindo a mesma direção.
          </p>
          <p className="mt-6 text-sm font-semibold text-chalk">
            Yago Monteiro · Master Digital
          </p>
        </div>

        <ul className="grid border-t border-line sm:grid-cols-2 lg:col-span-7">
          {capabilities.map((capability, index) => (
            <li
              key={capability.title}
              className={`border-b border-line py-6 sm:min-h-44 ${
                index % 2 === 0 ? "sm:border-r sm:pr-7" : "sm:pl-7"
              }`}
            >
              <h3 className="text-base font-bold text-chalk">{capability.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{capability.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
