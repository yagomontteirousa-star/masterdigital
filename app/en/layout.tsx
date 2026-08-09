import type { Metadata } from "next";
import { site } from "@/data/site";

const title = "Master Digital — Custom Websites That Build Trust";
const description = "Custom websites for businesses that want to look credible, communicate clearly, and turn visitors into real inquiries.";

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
