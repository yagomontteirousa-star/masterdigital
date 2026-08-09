import type { Metadata } from "next";
import { site } from "@/data/site";

const title = "Master Digital — Websites that prove the value of your work";
const description = "Custom websites that present your work clearly, build trust, and turn visits into conversations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en",
    languages: { "pt-BR": "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${site.url}/en`,
    siteName: site.studio,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang="en";' }} />
      <div lang="en">{children}</div>
    </>
  );
}
