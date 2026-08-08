# Portfólio — Yago Monteiro · Master Digital

Portfólio de criação de sites. Next.js 15 (App Router) + TypeScript + React 19,
Tailwind v4 e Framer Motion. Site estático, sem backend, banco de dados ou painel.

## Comandos

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm run typecheck  # verificação de tipos
```

## Onde editar cada coisa

| O quê | Arquivo |
| --- | --- |
| Projetos do portfólio | `data/projects.ts` |
| Nome, WhatsApp, e-mail, menu, processo, sobre | `data/site.ts` |
| Metadados, título, Open Graph | `app/layout.tsx` |
| Cores, tipografia, espaçamentos | `app/globals.css` (bloco `@theme`) |

Nenhum texto, link ou dado de projeto fica dentro dos componentes.

## Substituir antes de publicar

1. **WhatsApp** — `data/site.ts` → `whatsappNumber` está com um placeholder
   (`5500000000000`). Coloque o número real com DDI + DDD, só dígitos.
2. **Domínio** — `data/site.ts` → `url`. Usado em metadata, canonical, sitemap e robots.
3. **Foto do Sobre** — salve em `public/about/retrato.jpg` (proporção 4:5) e troque o
   bloco de placeholder em `components/sections/About.tsx` (as instruções estão no
   comentário, ali mesmo).
4. **URLs ao vivo** de Master Sonorização e Beltrame Acessórios — `data/projects.ts`,
   campo `url` (hoje `null`, o card mostra "Sem link público no momento").

## Previews dos projetos

As capas em `public/projects/` são screenshots reais dos sites, geradas por:

```bash
node scripts/capture-previews.mjs
```

O script usa o Chrome já instalado (via `puppeteer-core`, dependência de
desenvolvimento — não vai para o bundle). Ele captura o site publicado quando há URL e
cai para o arquivo local quando não há. Também regera `public/og.jpg`.

Para adicionar um projeto: inclua a entrada em `TARGETS` no script, rode o comando e
depois adicione o objeto em `data/projects.ts`.

## Estrutura

```
app/            layout, página, robots, sitemap, favicon
components/
  layout/       Header, Footer, Brand
  sections/     Hero, Projects, Process, About, FinalCta
  ui/           Button, SitePreview, ProjectCard, Reveal, Icons
data/           projects.ts, site.ts   <- conteúdo
lib/            utilitários
scripts/        geração dos previews
```
