/**
 * Dados globais do site: marca, contato, navegacao e textos institucionais.
 * Tudo que muda com frequencia mora aqui — nao espalhe pelos componentes.
 */

export const site = {
  /* ---- SUBSTITUIR: nome exibido no header e no footer ---- */
  name: "Yago Monteiro",
  /* ---- SUBSTITUIR: estudio/marca exibida ao lado do nome ---- */
  studio: "Master Digital",
  role: "Criação de sites para empresas",

  /* ---- SUBSTITUIR: dominio final do portfolio (usado em metadata e Open Graph) ---- */
  url: "https://masterdigital.dev",

  /* ---- SUBSTITUIR: seu numero de WhatsApp com DDI + DDD, apenas digitos ---- */
  whatsappNumber: "5500000000000",
  whatsappMessage:
    "Olá, Yago! Vi seu portfólio e quero um orçamento para o site da minha empresa.",

  /* ---- SUBSTITUIR se quiser outro e-mail comercial ---- */
  email: "yagomontteirousa@gmail.com",

  /* ---- SUBSTITUIR: cidade / regiao de atendimento ---- */
  location: "Brasil · atendimento remoto",
} as const;

/** Link de WhatsApp ja montado com a mensagem inicial. */
export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const nav = [
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;

/** Setores exibidos abaixo do hero. Lista curta — no maximo 5 itens. */
export const segmentsServed = [
  "Turismo",
  "Serviços",
  "Varejo",
  "Locução",
  "Construção",
] as const;

/** Itens da faixa em movimento entre o hero e os projetos. Textos curtos. */
export const marqueeItems = [
  "Criação de sites",
  "Landing pages",
  "Conversão no WhatsApp",
  "SEO básico",
  "Design responsivo",
  "Identidade aplicada",
] as const;

/** Etapas da secao "Como eu trabalho". Maximo de 3 para manter a leitura curta. */
export const processSteps = [
  {
    number: "01",
    title: "Estratégia",
    text: "Entendo o que a empresa vende, para quem, e qual ação precisa acontecer no site.",
    detail: "Escopo · arquitetura · mensagem",
  },
  {
    number: "02",
    title: "Criação",
    text: "Desenho e desenvolvo sob medida. Nada de tema pronto: cada bloco tem função comercial.",
    detail: "Design · desenvolvimento · conteúdo",
  },
  {
    number: "03",
    title: "Publicação",
    text: "Publico com domínio, SEO básico e testes em desktop e celular. Entrego funcionando.",
    detail: "Deploy · SEO · testes finais",
  },
] as const;

/** Frentes de trabalho listadas na secao Sobre. */
export const capabilities = [
  { title: "Sites sob medida", text: "Estrutura e design criados para o negócio, não adaptados de template." },
  { title: "Conversão e WhatsApp", text: "Caminho claro do primeiro scroll até a conversa começar." },
  { title: "SEO básico", text: "Metadados, títulos, Open Graph, favicon e HTML semântico desde o primeiro dia." },
  { title: "Acabamento responsivo", text: "Ajuste fino em desktop, tablet e celular — não apenas redução de largura." },
] as const;
