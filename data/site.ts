/**
 * Dados globais do site: marca, contato, navegacao e textos institucionais.
 * Tudo que muda com frequencia mora aqui — nao espalhe pelos componentes.
 */

const canonicalUrl = "https://masterdigital.dev";

export const site = {
  /* ---- SUBSTITUIR: nome exibido no header e no footer ---- */
  name: "Yago Monteiro",
  /* ---- SUBSTITUIR: estudio/marca exibida ao lado do nome ---- */
  studio: "Master Digital",
  role: "Sites sob medida para empresas no mundo todo",

  url: canonicalUrl,

  /* Número real com DDI + DDD, apenas dígitos. */
  whatsappNumber: "17742498958",
  whatsappMessage:
    "Olá, Yago! Vi seu portfólio e quero um orçamento para o site da minha empresa.",

  /* ---- SUBSTITUIR se quiser outro e-mail comercial ---- */
  email: "yagomontteirousa@gmail.com",

  /* ---- SUBSTITUIR: cidade / regiao de atendimento ---- */
  location: "Atendimento remoto · mundo todo",
} as const;

/** Link de WhatsApp ja montado com a mensagem inicial. */
export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export function getWhatsAppHref(locale: "pt" | "en") {
  const message = locale === "en"
    ? "Hi, Yago! I saw your portfolio and I’d like to get a quote for a website for my business."
    : site.whatsappMessage;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Início", href: "#top" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;

/** Etapas da secao "Como eu trabalho". Maximo de 3 para manter a leitura curta. */
export const processSteps = [
  {
    number: "01",
    title: "Estratégia",
    text: "Entendo o que a empresa vende, para quem, e qual ação precisa acontecer no site.",
    detail: "Escopo, arquitetura e mensagem",
  },
  {
    number: "02",
    title: "Criação",
    text: "Desenho e desenvolvo sob medida. Nada de tema pronto: cada bloco tem função comercial.",
    detail: "Design, desenvolvimento e conteúdo",
  },
  {
    number: "03",
    title: "Publicação",
    text: "Publico com domínio, SEO básico e testes em desktop e celular. Entrego funcionando.",
    detail: "Publicação, busca e testes finais",
  },
] as const;

/** Frentes de trabalho listadas na secao Sobre. */
export const capabilities = [
  {
    title: "Estratégia e mensagem",
    text: "A página nasce do que a empresa vende, de quem precisa entender e da ação que deve acontecer.",
  },
  {
    title: "Direção visual",
    text: "Uma linguagem própria para o negócio, aplicada sem tema pronto ou componentes genéricos.",
  },
  {
    title: "Desenvolvimento",
    text: "Código responsivo, acessível e preparado para carregar rápido em celular e desktop.",
  },
  {
    title: "Publicação e busca",
    text: "Metadados, compartilhamento, estrutura semântica e os detalhes técnicos para colocar o site no ar.",
  },
] as const;
