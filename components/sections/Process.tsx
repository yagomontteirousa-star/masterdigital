import Image from "next/image";
import { getCopy, type Locale } from "@/data/i18n";

export function Process({ locale = "pt" }: { locale?: Locale }) {
  const labels = getCopy(locale).about;
  return (
    <section id="sobre" className="about-process overflow-hidden bg-night py-16 text-chalk md:py-20">
      <div className="shell">
        <div className="about-grid grid gap-10 border-b border-line pb-14 md:grid-cols-12 md:gap-12 md:pb-16">
          <h2 className="display max-w-[20ch] text-[clamp(2.8rem,4.8vw,5rem)] md:col-span-6">
            <span className="text-accent">{labels.titleStart}</span>{" "}{labels.titleMiddle}{" "}
            <span className="text-accent">{labels.titleEnd}</span>
            <span className="mt-7 block max-w-none font-sans text-lg leading-8 tracking-normal text-chalk md:mt-8">
              {labels.description}
            </span>
          </h2>

          <div className="about-profile md:col-span-6 md:justify-self-end">
            <div className="portrait-slot">
              <Image
                src="/people/yago-monteiro-final.webp"
                alt={labels.portraitAlt}
                fill
                quality={95}
                sizes="(max-width: 767px) 92vw, 38vw"
                className="portrait-slot__photo"
              />
              <span className="portrait-slot__shade" aria-hidden="true" />
              <span className="portrait-slot__signature">
                <Image
                  src="/brand/master-digital-symbol-orange.svg"
                  alt=""
                  width={512}
                  height={512}
                />
                Yago Monteiro
              </span>
            </div>
          </div>
        </div>

        <div className="process-compact grid gap-8 pt-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-3">
            <h3 className="display max-w-[16ch] text-[clamp(2.2rem,3.35vw,3.45rem)]">
              {labels.processStart} <span className="text-accent">{labels.processEnd}</span>
            </h3>
          </div>

          <ol className="grid border-t border-line md:col-span-9 md:grid-cols-3">
            {labels.steps.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[2rem_1fr] gap-3 border-b border-line py-5 md:block md:border-r md:border-b-0 md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <span className="text-xs font-bold text-accent" aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <h4 className="text-base font-bold text-chalk">{step.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
