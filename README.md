# Portfólio — Yago Monteiro · Master Digital

Portfólio comercial em Next.js 15 (App Router), TypeScript, React 19 e Tailwind CSS 4.
O site é estático e não depende de backend, banco de dados ou painel.

## Comandos

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # ESLint + regras oficiais do Next.js
npm run typecheck  # verificação de tipos
npm run build      # build de produção
```

## Onde editar

| Conteúdo | Arquivo |
| --- | --- |
| Projetos, imagens e URLs | `data/projects.ts` |
| Nome, WhatsApp, e-mail, processo e serviços | `data/site.ts` |
| Títulos, descrição e dados estruturados | `app/layout.tsx` |
| Cores, tipografia e sistema visual | `app/globals.css` |
| Princípios do design | `DESIGN.md` |

## Antes de publicar

1. Defina `NEXT_PUBLIC_SITE_URL` no ambiente da hospedagem com o domínio final, sem
   barra no fim. O projeto mantém canonical, sitemap e indexação desativados enquanto
   esse valor não existir; veja `.env.example`.
2. Quando Master Sonorização e Beltrame Acessórios forem publicados, preencha os
   respectivos campos `url` em `data/projects.ts`.
3. Caso uma seção de retrato seja adicionada no futuro, use uma foto real do Yago como
   base para a montagem de estúdio. Não publique imagem sintética como retrato real.

O WhatsApp de produção já está configurado: `+1 774 249 8958`.

## Previews dos projetos

As capas em `public/projects/` são capturas reais. Para atualizá-las:

```bash
node scripts/capture-previews.mjs
```

O script usa `puppeteer-core`, captura a URL publicada quando ela existe e usa o arquivo
local nos projetos ainda em desenvolvimento.

## Estrutura

```text
app/            layout, página, robots, sitemap, Open Graph
components/
  layout/       Header, Footer, Brand
  sections/     Hero, Projects, Process, FinalCta
  ui/           Button, ProjectCard, Icons
data/           projetos e conteúdo global
lib/            utilitários
scripts/        geração dos previews
```
