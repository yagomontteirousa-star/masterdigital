import type { Metadata, Viewport } from "next";
import { Archivo, Manrope } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-display",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-sans",
});

const title = `${site.name} — Sites sob medida para empresas`;
const description =
  "Estratégia, texto, direção visual e desenvolvimento de sites para empresas que precisam transmitir credibilidade e gerar novas conversas.";
const hasCanonicalUrl = Boolean(site.url);

export const metadata: Metadata = {
  metadataBase: new URL(site.url ?? "http://localhost:3000"),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  authors: [{ name: site.name }],
  creator: site.name,
  ...(hasCanonicalUrl ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    ...(site.url ? { url: site.url } : {}),
    siteName: `${site.name} · ${site.studio}`,
    title,
    description,
    ...(hasCanonicalUrl
      ? {
          images: [
            {
              url: "/opengraph-image",
              width: 1200,
              height: 630,
              alt: `${site.name} — sites sob medida para empresas`,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    ...(hasCanonicalUrl ? { images: ["/opengraph-image"] } : {}),
  },
  robots: {
    index: hasCanonicalUrl,
    follow: hasCanonicalUrl,
    googleBot: {
      index: hasCanonicalUrl,
      follow: hasCanonicalUrl,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0f11",
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${site.name} · ${site.studio}`,
  description,
  email: site.email,
  telephone: "+17742498958",
  areaServed: "BR",
  serviceType: "Criação de sites",
  founder: { "@type": "Person", name: site.name },
  ...(site.url ? { url: site.url } : {}),
};

const designContract = {
  seed: "2e7b0dc6-sala-privada-edit-suite",
  thesis:
    "Fazer o trabalho real ocupar a tela e recusar títulos gigantes, listas intermináveis e decoração de agência.",
  world:
    "Sala privada de exibição: carvão, branco quente, superfícies de projeção e laranja Master usado apenas para ação e seleção.",
  story:
    "O visitante entende a oferta, vê quatro trabalhos publicados, compreende o processo e inicia uma conversa pelo WhatsApp.",
  firstViewport:
    "Argumento comercial em sete colunas, escopo integrado em painel claro à direita, CTA visível e três provas sintéticas fechando a dobra; projetos começam na seção seguinte.",
  form: "Sala Privada com hierarquia ajustada por pedido direto do usuário: convencimento primeiro, projetos depois; comp de base .impeccable/mocks/sala-privada-c.webp.",
  finish:
    "unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md",
};

function safeJson(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          id="design-contract"
          type="application/json"
          dangerouslySetInnerHTML={{ __html: safeJson(designContract) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
