import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Instrument_Serif, Manrope } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display-face",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-sans-face",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4efe5" },
    { media: "(prefers-color-scheme: dark)", color: "#12120f" },
  ],
  colorScheme: "light dark",
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${site.name} · ${site.studio}`,
  description,
  email: site.email,
  telephone: "+17742498958",
  areaServed: "Worldwide",
  serviceType: "Criação de sites",
  founder: { "@type": "Person", name: site.name },
  ...(site.url ? { url: site.url } : {}),
};

const designContract = {
  seed: "7c2a91e4-editorial-studio-reference-a",
  thesis:
    "Convencer e provar no mesmo primeiro olhar: argumento editorial à esquerda, trabalho publicado em sobreposição à direita.",
  world:
    "Estúdio editorial luminoso: papel marfim, tinta quente, regras tipográficas, laranja Master e capturas reais tratadas como provas impressas.",
  story:
    "O visitante entende a oferta, vê quatro trabalhos publicados, compreende o processo e inicia uma conversa pelo WhatsApp.",
  firstViewport:
    "Header flutuante; argumento comercial em cinco colunas; duas telas reais sobrepostas em sete colunas; CTA visível; toda a composição cabe em 100svh e recebe um sinal de projeto animado ao fundo.",
  form: "Editorial Studio expandido: hero persuasiva em uma dobra, projetos em fluxo horizontal contínuo, autoria ampliada, processo compacto e CTA laranja reativo.",
  finish:
    "unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md",
};

const themeBootstrap = `(() => {
  try {
    const saved = localStorage.getItem("master-digital-theme");
    const theme = saved === "dark" || saved === "light"
      ? saved
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {}
})();`;

function safeJson(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <body>
        <Script id="theme-bootstrap" strategy="beforeInteractive">{themeBootstrap}</Script>
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
