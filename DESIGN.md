---
name: "Master Digital — Editorial Studio"
description: "Um portfólio editorial quente que combina argumento comercial e prova real no primeiro olhar."
colors:
  night: "#171714"
  night-soft: "#20201c"
  screen: "#ece7dd"
  chalk: "#f7f2e8"
  muted: "#b9b4aa"
  line: "#3d3b34"
  line-light: "#d9d1c3"
  light: "#f4efe5"
  light-ink: "#1c1b18"
  accent: "#ff5a00"
  accent-dark: "#c64600"
  canvas: "#f4efe5"
  surface: "#ffffff"
  ink: "#1c1b18"
  ink-600: "#5f5b53"
  ink-400: "#807a70"
  line-strong: "#bdb4a5"
  paper-panel: "#fbf8f1"
  browser-bar: "#faf8f3"
typography:
  display:
    fontFamily: "Instrument Serif, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.35rem, 5.65vw, 5.75rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Instrument Serif, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 5.5vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Instrument Serif, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.12em"
rounded:
  frame: "0.875rem"
  navigation-shell: "1.15rem"
  full: "9999px"
spacing:
  shell-mobile: "1.25rem"
  shell-tablet: "2.5rem"
  shell-wide: "3.5rem"
  section-mobile: "5rem"
  section-desktop: "7rem"
  control-md-x: "1.25rem"
  control-lg-x: "1.5rem"
components:
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.chalk}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 {spacing.control-md-x}"
    height: "2.75rem"
  button-solid-hover:
    backgroundColor: "{colors.accent-dark}"
    textColor: "{colors.chalk}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 {spacing.control-md-x}"
    height: "2.75rem"
  button-light:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.night}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 {spacing.control-md-x}"
    height: "2.75rem"
  button-large:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.full}"
    padding: "0 {spacing.control-lg-x}"
    height: "3.25rem"
  browser-frame:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-400}"
    rounded: "{rounded.frame}"
  navigation-shell:
    backgroundColor: "{colors.paper-panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.navigation-shell}"
    padding: "0 1rem"
    height: "4.25rem"
---

# Design System: Master Digital — Editorial Studio

## Overview

**Creative North Star: “Editorial Studio”**

O portfólio de Yago Monteiro / Master Digital se comporta como um estúdio editorial luminoso: papel marfim, tinta quente, regras finas, tipografia serifada expressiva e provas de trabalho tratadas como páginas publicadas. A composição é confiante, artesanal e comercial sem parecer uma página de agência genérica. O argumento e a evidência dividem o primeiro olhar; a interface não pede que o visitante aceite promessas antes de ver trabalho real.

A densidade é baixa e deliberada. Instrument Serif sustenta as grandes massas tipográficas, enquanto Manrope mantém navegação, explicações e ações compactas. O laranja Master `#FF5A00` aparece como gesto de ênfase, foco, seleção e fechamento — não como decoração espalhada.

A referência aprovada é `.impeccable/mocks/reference-rebuild-a.png`; ela define a composição, mas nunca é enviada como imagem da interface. A implementação usa HTML semântico, CSS e capturas reais do repositório. O contrato de direção tem o seed `7c2a91e4-editorial-studio-reference-a` e permanece como o primeiro filho de `<body>` em `app/layout.tsx`, dentro do script JSON `#design-contract`.

**Key Characteristics:**

- Papel marfim com linhas-guia e luz difusa quase imperceptíveis.
- Instrument Serif nos títulos e Manrope na leitura funcional.
- Laranja `#FF5A00` para ênfase tipográfica, foco e ação.
- Argumento comercial curto à esquerda e duas provas reais maiores, separadas e rotativas à direita no hero.
- Regras finas e campos de cor no lugar de uma coleção de cartões.
- Profundidade reservada ao cabeçalho flutuante e às capturas publicadas.
- Página curta, com um único caminho comercial prioritário: WhatsApp.

## Colors

A paleta combina papel e tinta de temperatura quente com um laranja de marca concentrado. Os valores normativos estão no frontmatter; aliases como `light` / `canvas` e `light-ink` / `ink` existem no tema para expressar função sem introduzir novas cores.

### Primary

- **Laranja Master (`accent`):** ênfase dos títulos, foco global, seleção de texto e campo inteiro do CTA final. É o único acento saturado.
- **Laranja queimado (`accent-dark`):** hover do botão escuro e pequenos rótulos sobre fundos claros, onde precisa haver mais densidade e contraste.

### Neutral

- **Tinta quente (`night`, `ink`, `light-ink`):** títulos, ações sólidas e os campos escuros de processo e rodapé. `night-soft` é a variação escura disponível para separações tonais discretas.
- **Papel marfim (`light`, `canvas`):** canvas principal e menu móvel de tela cheia. Nunca substituir por branco clínico como fundo dominante.
- **Papel de prova (`paper-panel`):** cabeçalho translúcido e seção de projetos; separa conteúdo sem parecer um card.
- **Giz quente (`chalk`):** texto principal sobre campos escuros e variante clara de botão.
- **Tinta secundária (`ink-600`, `ink-400`):** parágrafos, navegação silenciosa, chrome de navegador e metadados sobre papel.
- **Muted quente (`muted`):** texto de apoio no processo e no rodapé escuros.
- **Tela (`screen`) e superfície (`surface`):** base das capturas 16:10 e corpo branco dos frames.
- **Regras (`line`, `line-light`, `line-strong`):** divisores escuros, divisores sobre papel e bordas interativas, sempre com espessura visual de 1px.
- **Chrome de navegador (`browser-bar`):** barra superior levemente mais clara que o papel para enquadrar a captura sem competir com ela.

**The Orange Editorial Gesture Rule.** O laranja pode assumir uma área grande apenas no fechamento comercial; no restante da página ele pontua palavras, rótulos, foco e estados.

**The Warm Paper Rule.** Neutros claros devem permanecer marfim, areia ou branco quente. Cinza azulado e branco puro não devem dominar uma seção.

**The Ink Before Shadow Rule.** Primeiro separar conteúdo por contraste de tinta, papel e regra; recorrer a sombra apenas nas duas famílias de elementos elevadas documentadas abaixo.

## Typography

**Display Font:** Instrument Serif 400, normal e itálico, via `next/font`.

**Body Font:** Manrope variável, via `next/font`.

**Character:** Instrument Serif traz a voz editorial e Manrope mantém leitura, navegação e ação precisas. A hierarquia nasce da troca de família, escala, medida e cor.

### Hierarchy

- **Display** (400, até 5rem no hero, 0.90): headline concisa em três linhas deliberadas, com tracking de `-0.025em`; somente “Seu trabalho”, “Seu site” e “provar isso” recebem laranja itálico.
- **Headline** (600, `clamp(3rem, 5.5vw, 5.5rem)`, 0.94): títulos de Projetos e Sobre. O CTA final amplia para `clamp(3.1rem, 6vw, 6rem)`.
- **Title** (600, `clamp(2rem, 3vw, 2.75rem)`, 0.94): nomes dos projetos e títulos do processo.
- **Body** (400, 1rem, 1.75): explicação principal; o parágrafo do hero cresce para 1.125rem / 2rem a partir de 48rem. Textos auxiliares usam 0.875rem / 1.5rem e medidas de até 36rem ou cerca de 68 caracteres.
- **Label** (700, 0.75rem, 0.12–0.14em): segmento e detalhe de etapa em caixa alta. Navegação e botões usam Manrope entre 0.875rem e 0.9375rem, peso 600–700.
- **Brand lockup:** nome em 0.875rem, peso 800 e tracking `-0.03em`; “Master Digital” em 0.6875rem, peso 500.

**The Serif Carries the Idea Rule.** Instrument Serif pertence a argumentos e títulos; ações, descrições e navegação permanecem em Manrope.

**The Orange Emphasis Rule.** O laranja enfatiza a consequência comercial da frase, nunca uma palavra aleatória e nunca um parágrafo inteiro.

**The Measured Headline Rule.** Limite headlines a aproximadamente 11.5–13 caracteres de largura para preservar quebras deliberadas; não reduza o efeito editorial esticando-as pela viewport.

## Layout

O shell central mede no máximo 92rem. O padding horizontal é 1.25rem no mobile, 2.5rem a partir de 48rem e 3.5rem a partir de 80rem. Seções regulares recebem 5rem de respiro vertical no mobile e 7rem a partir de 48rem. A largura mínima suportada é 320px; o documento corta overflow horizontal no eixo x.

O sistema usa uma coluna no mobile e grids de doze colunas para relações editoriais a partir dos breakpoints observados. `sm` (40rem) organiza provas curtas e rodapé; `md` (48rem) ativa grids editoriais, o catálogo 2×2 e o processo em três colunas; `lg` (64rem) divide o hero em 5/12 + 7/12 e troca o menu modal pela navegação completa. A leitura sempre precede a imagem no DOM e na apresentação.

### Exact Page Topology

1. **Contrato e metadados no `<body>`:** `#design-contract` é o primeiro filho, seguido do JSON-LD. Ambos são scripts não visuais.
2. **Skip link:** “Ir para o conteúdo” aparece apenas ao foco e aponta para `#main-content`.
3. **Cabeçalho flutuante fixo:** cápsula de 4.25rem de altura mínima, com posicionamento que respeita a safe area; marca à esquerda, Projetos / Sobre / Contato e WhatsApp à direita.
4. **Hero persuasivo (`#top`):** ocupa exatamente a primeira dobra com `100svh`, safe areas e ajustes específicos para telas baixas e celulares em paisagem. Argumento, CTAs e duas provas reais permanecem visíveis sem scroll. Um divisor ancorado pelo símbolo Master Digital conecta as colunas; órbitas, varredura e pontos animados dão atividade ao fundo sem uma rota horizontal atravessando a composição.
5. **Faixa de serviços + projetos publicados (`#projetos`):** uma faixa estreita, contínua e escura separa a hero do catálogo com Estratégia, Direção visual, Desenvolvimento, SEO técnico, Domínio próprio, Social media, Google Business completo e Site publicado. Depois, título e contexto precedem uma única linha horizontal contínua. Os seis projetos reais são duplicados apenas visualmente para formar um loop contínuo, sem lacunas ou salto perceptível.
6. **Sobre e processo (`#sobre`):** campo `night`; a autoria de Yago Monteiro é a mensagem principal e recebe mais escala. O retrato ocupa uma moldura quadrada ampla e as três etapas aparecem abaixo como síntese compacta e objetiva.
7. **CTA final (`#contato`):** campo laranja com o título exato “Me conte o que sua empresa faz”, trajetória gráfica central de Ideia → Estrutura → Resultado e WhatsApp dominante.
8. **Rodapé compacto:** campo `night`, símbolo laranja, identificação, telefone real e e-mail; empilha no mobile e vira linha a partir de 40rem.

No mobile, as duas capturas do hero continuam sobrepostas e são reduzidas de forma proporcional para caber na primeira dobra. Elementos secundários simplificam-se em telas baixas, mas mensagem, CTA e exemplos principais nunca somem. O botão de WhatsApp do header pode desaparecer abaixo de 40rem, permanecendo imediatamente disponível no hero e no menu.

**The Persuasion Before Catalog Rule.** A oferta, o benefício, as duas ações e a prova sobreposta devem completar o primeiro argumento antes da grade de projetos.

**The Continuous Proof Rule.** A linha de projetos deve manter movimento contínuo, arraste manual e acesso completo por teclado. O autoplay pausa com foco, interação, documento oculto ou seção fora da viewport e retoma suavemente depois; em `prefers-reduced-motion`, inicia desligado e o controle de pausa é substituído por uma mensagem honesta.

## Elevation & Depth

O sistema é plano por padrão e cria profundidade principalmente com alternância de papel / tinta, sobreposição real e linhas de 1px. Existem duas sombras estruturais: **projeção** (`0 34px 75px -32px rgb(46 35 24 / 0.42)`) para frames de navegador e **flutuação** (`0 16px 42px -24px rgb(46 35 24 / 0.35)`) para o cabeçalho. O botão principal do CTA final admite uma sombra curta de ação como única exceção comercial; textos, listas e seções permanecem planos.

### Shadow Vocabulary

- **Projection:** sombra longa, quente e difusa para capturas de sites; reforça que elas são objetos de prova sobre o papel.
- **Float:** sombra curta e leve exclusiva da cápsula de navegação fixa; preserva legibilidade durante a rolagem.

**The Controlled Elevation Rule.** Cabeçalho e capturas usam as duas elevações estruturais. Somente o botão principal do CTA final pode usar a exceção de ação documentada.

**The Real Overlap Rule.** Profundidade do hero vem da sobreposição das duas capturas reais, não de gradientes 3D, mockups de dispositivos ou objetos decorativos gerados.

## Shapes

A forma base é editorial e aberta: seções sem caixas, divisores lineares e blocos alinhados ao grid. Frames de navegador e seu link de projeto usam cantos suaves de 0.875rem. A cápsula flutuante do header usa 1.15rem. Botões, controles de menu e ação circular de projeto usam raio total (`9999px`) e alvos de 44px ou mais.

O frame mantém proporção 16:10, barra superior mínima de 2.25rem e três pontos de 0.38rem; a imagem é cortada pelo topo. Linhas finas organizam capacidades, etapas, cabeçalhos de seção e metadados. Não encapsular cada trecho em um card nem transformar metadados em uma coleção de pills.

**The Open Editorial Field Rule.** O conteúdo respira no campo e é separado por alinhamento e regras; contêineres arredondados ficam reservados à navegação, ações e capturas.

## Components

### Navigation

- **Desktop:** header fixo, cápsula de papel quente, borda clara a 80% e sombra Float. Três links Manrope de 0.875rem / peso 600 escurecem no hover; a ação sólida de WhatsApp fica à direita.
- **Responsive:** abaixo de 64rem, o botão circular de 44px abre um diálogo de tela cheia. Entre 40rem e 64rem, CTA e gatilho coexistem; abaixo de 40rem, apenas marca e gatilho permanecem na cápsula.
- **Mobile dialog:** links em Instrument Serif (`clamp(2.4rem, 12vw, 4.25rem)`) separados por regras. O diálogo recebe o primeiro foco, contém Tab / Shift+Tab, fecha com Escape, bloqueia o conteúdo externo com `inert`, trava a rolagem e devolve foco ao gatilho.

### Buttons

- **Shape:** cápsula completa, Manrope em peso 700, gap de 0.75rem e altura mínima de 2.75rem; a versão grande mede 3.25rem.
- **Solid:** tinta quente sobre giz; no hover muda para laranja queimado. É a ação padrão do header e do hero.
- **Outline:** fundo transparente, texto tinta e regra forte; no hover vira tinta sobre giz.
- **Light:** giz sobre `night`, com hover branco; disponível para superfícies escuras.
- **Final CTA:** inversão específica de `night` sobre o campo laranja; no hover, giz sobre `night`.
- **Motion:** cores, borda e transform usam 200ms; o estado ativo desloca 1px para baixo. Ícone de seta avança 0.125rem no hover.

### Browser Frames and Hero Proof

- **Frame:** superfície branca, raio de 0.875rem, sombra Projection e barra `browser-bar` com uma regra inferior clara.
- **Image:** `next/image`, aspecto 16:10, `object-cover` e alinhamento pelo topo. O label deriva do domínio real e o chrome é `aria-hidden`.
- **Hero composition:** dois frames ocupam 94% e 58–61% da largura disponível, com sombras preta e laranja distintas. Um único frame muda por vez: saída curta, breve respiro e entrada de aproximadamente 720ms; os slots se alternam a cada 4.2s. O fade preserva suavidade, mas ganha recorte progressivo, leve mudança de profundidade, blur limitado e uma passagem de luz que comunica a troca de projeto. O chrome usa os três controles macOS vermelho, amarelo e verde.
- **Motion:** hover do conjunto ou do card escala a captura para 1.012 e aplica saturação 1.035; transform usa 520ms com `cubic-bezier(0.22, 1, 0.36, 1)` e filtro usa 240ms ease-out.

### Project Cards

- A captura vem primeiro; segmento, nome e descrição permanecem abaixo e fora do frame, separados por uma regra clara.
- O nome usa Instrument Serif; o segmento usa Manrope 700 em caixa alta, laranja queimado e tracking 0.12em; a descrição usa tinta secundária.
- O frame inteiro e o botão circular de 44px abrem o site publicado diretamente em uma nova aba, sempre com `noopener noreferrer`; não existe iframe ou visualização modal intermediária.
- Não há fundo, padding ou sombra em torno do card completo; a captura é o único objeto elevado.
- No carrossel, cada card preserva largura responsiva e um recorte do próximo trabalho fica visível como convite ao arraste. O segundo conjunto é `aria-hidden` e não recebe foco.
- O foco por teclado reposiciona o trilho para manter o projeto ativo inteiramente visível. Arraste e foco interrompem o autoplay; a retomada acontece após um intervalo curto.
- Em desktop, a instrução “Clique para visitar” aparece sobre o frame no hover ou foco. Em telas de toque, a mesma instrução permanece visível como uma pequena etiqueta escura antes da abertura.
- A abertura ocorre no gesto real de clique ou toque para evitar bloqueadores de popup. O aviso “Clique para visitar” permanece visível no hover/foco do desktop e como etiqueta persistente em telas de toque antes da navegação.

### Loading and Service Strip

- A entrada concentra a atenção em três frames de navegador construídos em sequência, no cursor que percorre a composição, na barra de progresso e no wordmark que resolve o quadro final. Não há tipografia de exibição competindo com as janelas no centro. A presença dura 3s e a saída termina em 3.4s, sempre abaixo do limite de quatro segundos; com movimento reduzido, o estado resolve em menos de 400ms.
- A faixa de serviços é uma transição editorial compacta, não uma nova seção de conteúdo. Os dois grupos duplicados formam um ticker contínuo sem lacuna; seu movimento respeita `prefers-reduced-motion` e o texto permanece disponível semanticamente sem depender da animação.

### About and Process

- A autoria abre o campo escuro com uma frase editorial ampla e um texto factual: Yago Monteiro conduz estratégia, texto, visual e código em cada projeto.
- O processo é uma lista ordenada compacta de três passos. Números, títulos curtos e descrições objetivas aparecem entre regras, sem criar cards ou disputar peso com a apresentação pessoal.

### Final CTA

- O título “Me conte o que sua empresa faz” não deve ser alterado.
- O botão principal de WhatsApp usa `night` sobre laranja e pode receber a única sombra de ação do sistema, uma exceção documentada para reforçar o convite final.
- A trajetória é uma linha desenhada em loop discreto, com nós e três pílulas escuras: Ideia (lâmpada), Estrutura e Resultado. Em movimento reduzido, o traço permanece completo e estático. Nenhuma informação depende da animação.

### Brand and Assets

- O header usa o wordmark completo `/brand/master-digital-black.svg`; divisor do hero, retrato e footer usam o símbolo laranja. Não há marcas d'água soltas em Projetos ou no CTA. Instâncias decorativas recebem `alt=""`.
- O retrato real otimizado fica em `/people/yago-monteiro.webp`, em uma moldura quadrada de raio amplo, recorte CSS responsivo, assinatura de marca sobreposta e sem alteração generativa da identidade.
- O hero usa `/projects/camilas-cleaning.jpg` e `/projects/vilela-turismo.jpg` como provas prioritárias.
- O carrossel usa as seis capturas ligadas a URLs públicas: Vilela Turismo, Camila's Cleaning Service, Al The Painter LLC, Gustavo San, Master Sonorização e Beltrame Acessórios.
- Os wordmarks completos existentes em `public/brand/` não são usados nesta composição. A imagem de referência aprovada orienta o layout; não é um asset de produção.

### Interaction & Accessibility

- O documento declara `lang="pt-BR"`; a ordem semântica e visual coincide.
- O foco global usa contorno laranja de 2px com offset de 4px; contextos laranja podem trocar o contorno por `night`. O link do frame aumenta o offset para 8px.
- Links e controles preservam alvo mínimo de 44px, teclado, toque e rótulo textual ou `aria-label`.
- O skip link torna-se visível ao foco. Seções com ID têm `scroll-margin-top: 5rem`.
- Capturas recebem texto alternativo descritivo; marca duplicada e chrome de navegador são decorativos.
- `prefers-reduced-motion: reduce` desliga rolagem suave e reduz animações e transições a 0.001ms. Nenhuma informação depende de hover, animação ou cor isoladamente.

## Do's and Don'ts

### Do:

- **Do** manter o primeiro viewport dividido entre argumento em 5/12 e prova real em 7/12 quando houver largura para isso.
- **Do** usar Instrument Serif para a voz editorial e Manrope para leitura funcional.
- **Do** preservar a paleta quente, as regras de 1px, as duas sombras estruturais e a única exceção de ação do CTA final.
- **Do** usar `Falar no WhatsApp` como ação principal consistente para o número real `+1 774 249 8958`; e-mail é a alternativa no fechamento.
- **Do** mostrar os seis projetos com URL pública e usar suas capturas reais do repositório.
- **Do** manter a sequência curta: hero, carrossel contínuo de projetos, autoria + processo compacto, CTA final e footer.
- **Do** manter toda a hero dentro de `100svh`, considerando header, safe areas e telas de baixa altura.
- **Do** pausar loops quando a seção estiver fora da viewport, o documento estiver oculto, houver interação ou movimento reduzido.
- **Do** preservar 44px de alvo mínimo, foco visível, skip link, navegação por teclado e comportamento reduzido de movimento.

### Don't:

- **Don't** inventar depoimentos, métricas, resultados, prêmios, certificações ou outros sinais de prova inexistentes.
- **Don't** regenerar, trocar ou deformar o rosto do retrato fornecido. Recorte, máscara, sombra e tratamento de cor podem integrar a fotografia sem alterar a identidade.
- **Don't** inventar domínio final, canonical, sitemap ou origem pública; os metadados condicionais só entram quando `NEXT_PUBLIC_SITE_URL` existir.
- **Don't** apresentar Master Sonorização ou Beltrame Acessórios como publicados antes de suas URLs existirem.
- **Don't** substituir capturas reais por imagem gerada, mockup de dispositivo ou raster da composição aprovada.
- **Don't** adicionar bento grid, pills decorativas, seções longas ou movimento sem controle. O carrossel de trabalhos é a única faixa contínua autorizada.
- **Don't** mover projetos acima do argumento comercial nem esconder a ação de WhatsApp atrás de interação obrigatória.
