---
name: "Master Digital — Sala Privada"
description: "Portfólio curto e convincente, inspirado em uma sala privada de exibição."
colors:
  night: "#0e0f11"
  night-soft: "#151619"
  screen: "#1b1c20"
  chalk: "#f2f0eb"
  muted: "#a6a39c"
  line: "#2d2e32"
  light: "#efeee9"
  light-ink: "#161719"
  ink-muted: "#56575b"
  line-light: "#d8d6d0"
  line-strong: "#b9b7b1"
  surface: "#ffffff"
  accent: "#ff5a00"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 5.4rem)"
    fontWeight: 520
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 520
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 3vw, 2.35rem)"
    fontWeight: 520
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.5
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.75rem"
  full: "9999px"
spacing:
  shell-mobile: "1.25rem"
  shell-tablet: "2.5rem"
  shell-wide: "3.5rem"
  section-mobile: "5rem"
  section-desktop: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.night}"
    rounded: "{rounded.md}"
    padding: "0 1.25rem"
    height: "2.75rem"
  button-primary-large:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.night}"
    rounded: "{rounded.md}"
    padding: "0 1.5rem"
    height: "3.25rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.md}"
    padding: "0 1.25rem"
    height: "2.75rem"
---

# Design System: Master Digital — Sala Privada

## Overview

**Creative North Star: “Sala Privada”**

O portfólio traduz uma sala contemporânea de exibição e edição em uma interface calma: campos de carvão, superfícies de projeção em branco quente e laranja Master reservado a ação e seleção. A referência é atmosférica, não cenográfica; não há assentos, rolos de filme, timecodes decorativos ou hardware literal.

O seed `2e7b0dc6-sala-privada-edit-suite` orienta uma página curta que convence antes de mostrar o catálogo. A primeira dobra apresenta o argumento comercial, o escopo integrado, duas ações claras e uma síntese do processo. Os projetos publicados começam somente na seção seguinte e funcionam como prova real.

**Princípios:**

- **Convencimento primeiro:** a oferta e o benefício devem estar claros antes do grid de trabalhos.
- **Prova sem invenção:** imagens, destinos e descrições vêm de projetos reais publicados.
- **Contraste com contenção:** carvão e branco quente estruturam a página; o laranja ocupa pouco espaço e indica ação.
- **Uma direção do início ao fim:** estratégia, texto, visual e desenvolvimento aparecem como um serviço integrado.
- **Site curto, próxima ação óbvia:** cada seção aproxima o visitante da conversa pelo WhatsApp.

## Colors

A paleta alterna ambientes escuros de exibição e superfícies claras de prova, com um único acento de alta energia.

### Primary

- **Laranja Master:** ação primária, foco, seleção de texto e pequenos marcadores. Não usar como fundo de grandes seções.

### Neutral

- **Carvão noturno:** canvas principal, cabeçalho, hero e processo.
- **Carvão suave:** fechamento da página e variação discreta de superfície escura.
- **Tela:** fundo de frames de imagem quando a captura ainda não ocupa a área.
- **Giz quente:** texto principal sobre carvão e base clara mais quente.
- **Luz quente:** fundo das seções de projetos e contraste com o ambiente escuro.
- **Tinta clara e tinta secundária:** texto principal e auxiliar sobre superfícies claras.
- **Muted:** parágrafos e navegação sobre carvão; nunca substituir o texto principal de títulos ou CTAs.
- **Linhas escuras e claras:** divisores de 1px que organizam conteúdo sem produzir uma grade de caixas.

**The Orange Means Action Rule.** O laranja Master fica restrito a CTAs, foco e estados selecionados; sua raridade sustenta a hierarquia.

**The Warm Projection Rule.** Fundos e textos claros usam brancos quentes, não cinzas azulados ou branco clínico como canvas dominante.

## Typography

**Display Font:** Archivo, carregada por `next/font` como variável.
**Body Font:** Manrope, carregada por `next/font` como variável.

Archivo dá autoridade compacta aos títulos sem recorrer a tipografia condensada ou monumental. Manrope preserva leitura limpa e contemporânea em navegação, parágrafos, botões e metadados.

### Hierarchy

- **Display:** Archivo variável, peso 520, entrelinha 1.02 e tracking negativo; reservado ao hero.
- **Headline:** a mesma voz de display em escala menor para títulos de seção e CTA final.
- **Title:** usado nos nomes dos projetos e nos títulos de navegação mobile.
- **Body:** Manrope regular, normalmente entre 1rem e 1.25rem, com entrelinha generosa; manter medidas de leitura próximas de 68 caracteres.
- **Label:** Manrope em 0.875rem, com peso médio ou forte, para navegação, botões, etapas e metadados.

**The Restrained Headline Rule.** Títulos são compactos, balanceados e limitados por medida; não ocupar a tela com palavras gigantes nem usar caixa alta como espetáculo.

## Layout

O container central mede no máximo 90rem. As margens internas são 1.25rem no mobile, 2.5rem a partir de 48rem e 3.5rem a partir de 80rem. Seções principais usam 5rem de respiro vertical no mobile e 7rem a partir de 48rem.

A página segue esta ordem obrigatória:

1. **Cabeçalho sticky:** marca, navegação curta e ação de WhatsApp.
2. **Hero de convencimento:** argumento em sete colunas; painel claro de escopo em cinco; CTAs, três provas sintéticas e sequência resumida do processo.
3. **Projetos publicados:** título, contexto curto e grade 2×2 com quatro trabalhos reais.
4. **Processo e autoria:** apresentação de Yago Monteiro e quatro capacidades em composição 5/7.
5. **CTA final:** convite direto ao WhatsApp, com e-mail como alternativa.
6. **Rodapé:** fechamento institucional sem criar uma nova narrativa.

No mobile, todas as composições empilham em uma coluna e o conteúdo persuasivo permanece antes das imagens. A grade de projetos passa a duas colunas a partir de 48rem; hero e processo assumem 12 colunas a partir de 64rem. O menu completo também troca para navegação modal abaixo de 64rem. Não há carrossel automático, rolagem horizontal ou conteúdo crítico fora do fluxo.

## Elevation & Depth

O sistema é plano por padrão. A profundidade vem principalmente da alternância entre carvão e superfícies claras, das linhas finas e do enquadramento das capturas. Imagens de projetos podem receber uma sombra baixa e difusa; o frame de projeção admite `0 28px 80px -34px rgb(0 0 0 / 0.9), 0 0 48px rgb(242 240 235 / 0.045)`. Cabeçalho usa translucidez e blur apenas para preservar separação durante a rolagem.

**The Projection-Only Rule.** Não adicionar sombras a botões, textos, painéis de conteúdo ou cada bloco da página; relevo pertence às imagens que demonstram o trabalho.

## Shapes

As formas são retangulares e discretamente suavizadas. Botões, cards de projeto e frames usam raio de 0.5rem; pequenos controles podem usar 0.375rem; o painel claro do hero usa 0.75rem. O círculo completo aparece somente no botão icônico de visita ao projeto. Divisores de 1px substituem caixas repetidas.

Evitar coleções de pills, raios excessivos e grades de cartões encapsulados. A marcação visual deve vir da composição, não de contêineres decorativos.

## Components

### Navigation

- O cabeçalho tem altura mínima de 4.75rem, posição sticky, fundo carvão quase opaco e linha inferior.
- No desktop, três links silenciosos usam Manrope pequeno e clareiam no hover; o CTA de WhatsApp permanece visível à direita.
- No mobile, um controle de 44×44px abre um diálogo de tela inteira. O diálogo recebe foco, contém a navegação por Tab, fecha com Escape, bloqueia o conteúdo externo com `inert` e devolve o foco ao gatilho.

### Buttons

- Botões são links de ação com peso forte, raio de 0.5rem e altura mínima de 44px; a versão grande mede no mínimo 3.25rem.
- O primário usa laranja sobre carvão. O secundário é transparente com borda clara de baixa opacidade. Hover ajusta cor e borda; active desloca 1px para baixo.
- Ícones têm função de apoio, não substituem o rótulo. Links externos abrem com `noopener noreferrer`.

### Project Cards

- Cada card começa com uma captura real em proporção 16:10, recorte pelo topo, raio de 0.5rem e sombra discreta.
- Nome, segmento e descrição ficam fora da imagem, separados por uma linha clara; o botão circular de 44px repete o destino com rótulo acessível.
- Hover pode ampliar a captura em até 1.8% e elevar levemente a saturação, sem ocultar informação nem criar movimento autônomo.

### Light Scope Panel

- O painel do hero é a principal superfície clara no primeiro viewport. Título, símbolo laranja e lista de capacidades usam linhas horizontais, não cartões internos.
- O símbolo é decorativo nesse contexto e recebe texto alternativo vazio.

### Interaction & Accessibility

- Todo foco visível usa contorno de 2px, afastado 4px; o botão laranja troca o contorno para giz por contraste.
- Links e controles respeitam alvo mínimo de 44px e funcionam por teclado e toque.
- O link “Ir para o conteúdo” aparece ao receber foco.
- `prefers-reduced-motion` remove rolagem suave e reduz animações e transições a praticamente zero.
- Nenhum significado depende exclusivamente de hover, cor ou animação.

## Do's and Don'ts

### Do:

- **Do** manter o hero focado em benefício, escopo integrado e ação antes de apresentar projetos.
- **Do** publicar somente os quatro projetos que têm URL pública verificável e capturas reais.
- **Do** usar `Falar no WhatsApp` como ação primária consistente, direcionada ao número real `+1 774 249 8958`.
- **Do** preservar o laranja Master, os brancos quentes, o contraste WCAG AA e a navegação completa por teclado.
- **Do** manter a página curta e a voz direta, específica e sem jargão de agência.

### Don't:

- **Don't** inventar depoimentos, métricas, resultados, prêmios, certificações ou logos de clientes.
- **Don't** criar retrato, silhueta ou placeholder pessoal enquanto não houver fotografia real aprovada.
- **Don't** exibir como publicados Master Sonorização ou Beltrame Acessórios enquanto não houver URL pública.
- **Don't** inventar domínio, canonical, sitemap ou destino externo definitivo.
- **Don't** transformar “Sala Privada” em decoração literal de cinema ou editor de vídeo.
- **Don't** adicionar autoplay, carrossel, seções longas, grids de pills ou efeitos que disputem atenção com a prova real.
