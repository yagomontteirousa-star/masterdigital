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

export type ProjectCategory = "Serviços" | "Catálogo" | "Portfólio";

export interface Project {
  /** Identificador unico. Tambem e o nome do arquivo de preview. */
  slug: string;
  /** Nome do cliente / projeto. */
  name: string;
  /** Segmento de atuação exibido acima do nome. */
  segment: string;
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
    segment: "Agência de viagens · Caldas Novas",
    description: "Landing page onde a cotação do pacote começa e termina no WhatsApp.",
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
    segment: "Serviços de limpeza · Greater Boston",
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
    url: "https://www.camilascleaningservice.com/",
    category: "Serviços",
    featured: true,
  },
  {
    slug: "al-the-painter",
    name: "Al The Painter LLC",
    segment: "Pintura e acabamento · Estados Unidos",
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
    slug: "gustavo-san",
    name: "Gustavo San",
    segment: "Locução e voice-over",
    description: "Portfólio de voz para enviar direto a agências e produtoras.",
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
    url: "https://portfoliogustavosan.vercel.app/",
    category: "Portfólio",
    featured: false,
  },
  {
    slug: "master-sonorizacao",
    name: "Master Sonorização",
    segment: "Instrumentos e áudio · Governador Valadares",
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
    // ---- SUBSTITUIR: colocar a URL ao vivo quando o site for publicado ----
    url: null,
    category: "Catálogo",
    featured: false,
  },
  {
    slug: "beltrame-acessorios",
    name: "Beltrame Acessórios",
    segment: "Materiais para marcenaria · Teixeira de Freitas",
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
    // ---- SUBSTITUIR: colocar a URL ao vivo quando o site for publicado ----
    url: null,
    category: "Catálogo",
    featured: false,
  },
];

/** Recortes usados na composição editorial do hero. */
export const heroPrimarySet = projects.filter((project) => project.featured);
export const heroSecondarySet = projects.filter((project) => !project.featured);
