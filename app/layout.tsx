import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

// Geist no lugar de Inter: Inter é o "default" que denuncia interface genérica.
// A serifada continua no display — é a combinação recomendada para editorial.
const sans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const title = `${site.name} — Criação de sites premium para empresas`;
const description =
  "Criação de sites sob medida para empresas que precisam transmitir credibilidade, aparecer no Google e receber contato direto no WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "criação de sites",
    "site para empresas",
    "desenvolvimento web",
    "landing page",
    "site profissional",
    "portfólio de sites",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: `${site.name} · ${site.studio}`,
    title,
    description,
    images: [
      {
        // ---- SUBSTITUIR: /public/og.jpg (1200x630) ----
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — criação de sites premium`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5f2",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${site.name} · ${site.studio}`,
  description,
  url: site.url,
  email: site.email,
  areaServed: "BR",
  serviceType: "Criação de sites",
  founder: { "@type": "Person", name: site.name },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
