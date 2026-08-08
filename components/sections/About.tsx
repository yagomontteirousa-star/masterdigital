import Image from "next/image";
import { capabilities, site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionRule } from "@/components/ui/SectionRule";

export function About() {
  return (
    <section id="sobre" className="section-y bg-paper-deep">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* ---------- Retrato ---------- */}
        <Reveal className="lg:col-span-5">
          <figure className="relative">
            {/*
              PLACEHOLDER — substituir por uma foto sua.
              Salve em /public/about/retrato.jpg (proporção 4:5, mínimo 900x1125)
              e troque este bloco por:
              <Image src="/about/retrato.jpg" alt="Yago Monteiro" width={900} height={1125}
                     className="rounded-xl object-cover" sizes="(max-width: 1024px) 92vw, 38vw" />
            */}
            <div className="flex aspect-4/5 flex-col items-center justify-center rounded-xl border border-dashed border-line-strong bg-paper-deep/60 p-8 text-center">
              <Image
                src="/brand/master-digital-symbol-orange.svg"
                alt=""
                width={512}
                height={512}
                className="size-14 opacity-15"
              />
              <p className="eyebrow mt-8 text-ink-400">Placeholder de imagem</p>
              <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-ink-400">
                Substituir por foto em{" "}
                <code className="text-ink-600">/public/about/retrato.jpg</code> — proporção
                4:5.
              </p>
            </div>
          </figure>
        </Reveal>

        {/* ---------- Texto ---------- */}
        <div className="lg:col-span-7 lg:pt-2">
          <Reveal>
            <SectionRule />
            <h2 className="display mt-7 text-[clamp(2.25rem,5vw,3.5rem)] text-balance">
              Sou {site.name}. Faço sites que{" "}
              <em className="text-accent-deep">parecem caros porque são bem feitos.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-ink-600">
              <p>
                Trabalho com criação de sites premium para empresas que já têm um bom
                serviço, mas ainda não têm uma presença digital à altura dele. Cuido de
                tudo: direção visual, texto, desenvolvimento e publicação.
              </p>
              <p>
                Meu foco é o que acontece depois do site no ar — a pessoa entender o que
                você faz, confiar e chamar no WhatsApp. Por isso trato conversão, SEO
                básico e acabamento responsivo como parte da entrega, não como extra.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <ul className="mt-10 grid gap-x-10 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <li key={capability.title} className="border-t border-line py-5">
                  <h3 className="text-[0.9375rem] font-medium text-ink">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {capability.text}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
