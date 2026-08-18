/**
 * FONTE UNICA DOS PROJETOS DO PORTFOLIO.
 *
 * Para adicionar um projeto novo:
 *  1. gere o preview em /public/projects/<slug>.jpg
 *     (rode `node scripts/capture-previews.mjs` depois de incluir o site em TARGETS);
 *  2. copie um bloco abaixo e preencha os campos;
 *  3. marque `featured: true` apenas nos melhores — eles alimentam o hero.
 *
 * A ordem do array e a ordem exibida na home.
 */

export type ProjectCategory = "Serviços" | "Catálogo" | "Portfólio" | "Experiência interativa";

export interface Project {
  /** Identificador unico. Tambem e o nome do arquivo de preview. */
  slug: string;
  /** Nome do cliente / projeto. */
  name: string;
  /** Segmento de atuação exibido acima do nome. */
  segment: string;
  /** Estado/área e país exibidos no card. */
  location: {
    state?: string;
    country: string;
    flag: string;
  };
  /** Descrição curta do projeto. */
  description: string;
  /** Desafio ou objetivo comercial exibido no projeto. */
  objective: string;
  /** Principais entregas. O card mostra apenas as 3 primeiras. */
  deliverables: string[];
  /** Imagem de capa em /public. Proporcao usada no layout: 16:10. */
  cover: string;
  /** Texto alternativo da capa (acessibilidade). */
  coverAlt: string;
  /** URL ao vivo. Use `null` enquanto o site nao estiver publicado. */
  url: string | null;
  category: ProjectCategory;
  /** Destaque: pode aparecer na composição do hero. */
  featured: boolean;
  /** Ano de entrega. Opcional. */
  year?: string;
}

export const projects: Project[] = [
  {
    slug: "vilela-turismo",
    name: "Vilela Turismo",
    segment: "Agência de viagens",
    location: { state: "Goiás", country: "Brasil", flag: "br" },
    description: "Landing page em que a cotação do pacote começa e termina no WhatsApp.",
    objective:
      "Mostrar que existe uma agência real, com endereço físico e gente por trás, e encurtar o caminho entre a dúvida sobre o pacote e a conversa com o time.",
    deliverables: [
      "Landing page de conversão",
      "Prova social com avaliações",
      "Cotação direta no WhatsApp",
      "SEO e Open Graph",
    ],
    cover: "/projects/vilela-turismo.jpg",
    coverAlt: "Página inicial do site da Vilela Turismo",
    url: "https://vilelaturismo.com/",
    category: "Serviços",
    featured: true,
  },
  {
    slug: "camilas-cleaning",
    name: "Camila's Cleaning Service",
    segment: "Serviços de limpeza",
    location: { state: "Massachusetts", country: "Estados Unidos", flag: "us" },
    description: "Site institucional em inglês para limpeza residencial e comercial.",
    objective:
      "Traduzir uma reputação construída no boca a boca em uma presença digital à altura, e organizar os pedidos de orçamento em um único caminho.",
    deliverables: [
      "Site institucional em inglês",
      "Galeria de trabalhos reais",
      "Contato por SMS, telefone e e-mail",
      "Dados estruturados LocalBusiness",
    ],
    cover: "/projects/camilas-cleaning.jpg",
    coverAlt: "Página inicial do site da Camila's Cleaning Service",
    url: "https://camilascleaning.vercel.app/",
    category: "Serviços",
    featured: true,
  },
  {
    slug: "al-the-painter",
    name: "Al The Painter LLC",
    segment: "Pintura e acabamento",
    location: { state: "Massachusetts", country: "Estados Unidos", flag: "us" },
    description: "Site em inglês para um serviço de pintura e acabamento especializado.",
    objective:
      "Posicionar o acabamento especializado como diferencial visível já na primeira dobra, em um mercado onde quase todo concorrente comunica desconto.",
    deliverables: [
      "Identidade aplicada ao site",
      "Estrutura de serviços e avaliações",
      "Galeria de trabalhos",
      "SEO técnico e Open Graph",
    ],
    cover: "/projects/al-the-painter.jpg",
    coverAlt: "Página inicial do site da Al The Painter LLC",
    url: "https://althepainterllc.vercel.app/",
    category: "Serviços",
    featured: true,
  },
  {
    slug: "elite-painting",
    name: "Elite Carpentry & Painting",
    segment: "Pintura e carpintaria",
    location: { state: "Massachusetts", country: "Estados Unidos", flag: "us" },
    description: "Site em inglês para serviços premium de pintura, acabamento e carpintaria.",
    objective:
      "Apresentar a experiência da equipe, o cuidado com a preparação e a qualidade do acabamento em um caminho direto até o pedido de orçamento.",
    deliverables: [
      "Site institucional em inglês",
      "Portfólio de projetos reais",
      "Serviços e avaliações",
      "SEO técnico e contato direto",
    ],
    cover: "/projects/elite-painting.jpg",
    coverAlt: "Página inicial do site da Elite Carpentry & Painting",
    url: "https://elitepainting-gilt.vercel.app/",
    category: "Serviços",
    featured: true,
  },
  {
    slug: "preto-no-branco",
    name: "Preto no Branco",
    segment: "Experiência interativa / jogo de futebol",
    location: { state: "Minas Gerais", country: "Brasil", flag: "br" },
    description: "Jogo interativo em que o torcedor monta elencos históricos do Galo e atravessa diferentes eras.",
    objective:
      "Transformar a memória afetiva do futebol em uma experiência de estratégia: montar o elenco, definir a tática e conduzir uma campanha até o título.",
    deliverables: [
      "Experiência interativa de futebol",
      "Sistema de formação e tática",
      "Elencos históricos por era",
      "Fluxo de campanha em cinco etapas",
    ],
    cover: "/projects/preto-no-branco.jpg",
    coverAlt: "Tela inicial do jogo Preto no Branco",
    url: "https://pretonobranco.app/",
    category: "Experiência interativa",
    featured: true,
  },
  {
    slug: "gustavo-san",
    name: "Gustavo San",
    segment: "Locução e voice-over",
    location: { state: "São Paulo", country: "Brasil", flag: "br" },
    description: "Portfólio de voz criado para ser enviado diretamente a agências e produtoras.",
    objective:
      "Reunir trajetória, demos e marcas atendidas em uma página única que funcione como cartão de visita em uma negociação.",
    deliverables: [
      "Portfólio de voz com player",
      "Vitrine de marcas atendidas",
      "Direção visual escura premium",
      "Contato direto por WhatsApp",
    ],
    cover: "/projects/gustavo-san.jpg",
    coverAlt: "Página inicial do portfólio de Gustavo San",
    url: "https://gustavosan.com/",
    category: "Portfólio",
    featured: false,
  },
  {
    slug: "master-sonorizacao",
    name: "Master Sonorização",
    segment: "Instrumentos e áudio",
    location: { state: "Minas Gerais", country: "Brasil", flag: "br" },
    description: "Catálogo digital de uma loja física de instrumentos e sonorização.",
    objective:
      "Levar o estoque da loja para o digital sem virar e-commerce: o cliente encontra o produto e consulta preço e disponibilidade no WhatsApp.",
    deliverables: [
      "Catálogo por categorias",
      "Página dedicada de produtos",
      "Consulta por WhatsApp",
      "Identidade da loja aplicada",
    ],
    cover: "/projects/master-sonorizacao.jpg",
    coverAlt: "Página inicial do site da Master Sonorização",
    url: "https://sitemastersom.vercel.app/",
    category: "Catálogo",
    featured: false,
  },
  {
    slug: "beltrame-acessorios",
    name: "Beltrame Acessórios",
    segment: "Materiais para marcenaria",
    location: { state: "Bahia", country: "Brasil", flag: "br" },
    description: "Vitrine de MDFs, ferragens, perfis e tintas para marcenarias.",
    objective:
      "Organizar um catálogo amplo em uma navegação simples o bastante para o marceneiro achar o item e mandar o pedido pelo WhatsApp.",
    deliverables: [
      "Vitrine por categorias",
      "Página dedicada de produtos",
      "Atendimento por vendedor",
      "Open Graph e favicon",
    ],
    cover: "/projects/beltrame-acessorios.jpg",
    coverAlt: "Página inicial do site da Beltrame Acessórios",
    url: "https://beltrameacess.vercel.app/",
    category: "Catálogo",
    featured: false,
  },
];

/** Recortes usados na composição editorial do hero. */
export const heroPrimarySet = projects.filter((project) => project.featured);
export const heroSecondarySet = projects.filter((project) => !project.featured);

const englishProjectCopy: Record<string, Pick<Project, "segment" | "location" | "description" | "objective" | "deliverables" | "coverAlt" | "category">> = {
  "vilela-turismo": {
    segment: "Travel agency",
    location: { state: "Goiás", country: "Brazil", flag: "br" },
    description: "A WhatsApp-first travel website that turns package interest into real conversations.",
    objective: "Build confidence in the agency, its storefront, and the people behind it—then help travelers move from questions to WhatsApp faster.",
    deliverables: ["Conversion-focused landing page", "Customer reviews", "WhatsApp quote requests", "SEO and social sharing"],
    coverAlt: "Vilela Turismo website homepage",
    category: "Serviços",
  },
  "camilas-cleaning": {
    segment: "Cleaning services",
    location: { state: "Massachusetts", country: "United States", flag: "us" },
    description: "A polished website for residential and commercial cleaning services.",
    objective: "Bring a strong word-of-mouth reputation online and give every estimate request one clear path forward.",
    deliverables: ["English-language business website", "Gallery of completed work", "Text, phone, and email contact", "Local business structured data"],
    coverAlt: "Camila's Cleaning Service website homepage",
    category: "Serviços",
  },
  "al-the-painter": {
    segment: "Painting & finishing",
    location: { state: "Massachusetts", country: "United States", flag: "us" },
    description: "A premium website for specialized painting and finishing services.",
    objective: "Lead with craftsmanship and specialized finishes in a market where most competitors lead with price.",
    deliverables: ["Brand direction for the website", "Services and reviews", "Project gallery", "Technical SEO and social sharing"],
    coverAlt: "Al The Painter LLC website homepage",
    category: "Serviços",
  },
  "elite-painting": {
    segment: "Painting & carpentry",
    location: { state: "Massachusetts", country: "United States", flag: "us" },
    description: "A premium website for painting, finish work, and carpentry services.",
    objective: "Show the team’s experience, preparation standards, and finish quality—then give homeowners a direct path to request an estimate.",
    deliverables: ["English-language business website", "Real project portfolio", "Services and customer reviews", "Technical SEO and direct contact"],
    coverAlt: "Elite Carpentry & Painting website homepage",
    category: "Serviços",
  },
  "preto-no-branco": {
    segment: "Interactive football game",
    location: { state: "Minas Gerais", country: "Brazil", flag: "br" },
    description: "An interactive football game where fans build historic Atlético squads and move across different eras.",
    objective: "Turn football memory into a strategy experience: build a squad, set the tactics, and take a campaign all the way to the title.",
    deliverables: ["Interactive football experience", "Formation and tactics system", "Historic squads by era", "Five-step campaign flow"],
    coverAlt: "Preto no Branco game home screen",
    category: "Experiência interativa",
  },
  "gustavo-san": {
    segment: "Voice-over artist",
    location: { state: "São Paulo", country: "Brazil", flag: "br" },
    description: "A voice-over portfolio built for agencies, producers, and casting teams.",
    objective: "Bring career highlights, demos, and client work into one focused page that can carry a professional introduction on its own.",
    deliverables: ["Voice-over portfolio with audio player", "Client brand showcase", "Premium dark art direction", "Direct WhatsApp contact"],
    coverAlt: "Gustavo San voice portfolio homepage",
    category: "Portfólio",
  },
  "master-sonorizacao": {
    segment: "Musical instruments and audio",
    location: { state: "Minas Gerais", country: "Brazil", flag: "br" },
    description: "A searchable catalog for a brick-and-mortar musical instrument and pro audio store.",
    objective: "Bring the store inventory online without forcing an e-commerce model, so customers can browse first and ask about price and availability on WhatsApp.",
    deliverables: ["Category-based catalog", "Individual product pages", "WhatsApp product inquiries", "Store branding throughout"],
    coverAlt: "Master Sonorização website homepage",
    category: "Catálogo",
  },
  "beltrame-acessorios": {
    segment: "Woodworking supplies",
    location: { state: "Bahia", country: "Brazil", flag: "br" },
    description: "A streamlined catalog for woodworkers shopping MDF, hardware, profiles, and finishes.",
    objective: "Turn a broad product range into simple navigation, so customers can find what they need and send an order request on WhatsApp.",
    deliverables: ["Product categories", "Individual product pages", "Direct sales rep contact", "Social sharing and favicon"],
    coverAlt: "Beltrame Acessórios website homepage",
    category: "Catálogo",
  },
};

export function getProjects(locale: "pt" | "en"): Project[] {
  if (locale === "pt") return projects;
  return projects.map((project) => ({ ...project, ...englishProjectCopy[project.slug] }));
}
