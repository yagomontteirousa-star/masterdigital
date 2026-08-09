/**
 * Gera os previews dos projetos em /public/projects.
 *
 * Uso:  node scripts/capture-previews.mjs
 *
 * Para adicionar um projeto novo, inclua uma entrada em TARGETS abaixo.
 * `url`  -> site publicado (preferencial)
 * `file` -> fallback local, caso o site ainda nao esteja no ar
 */
import puppeteer from "puppeteer-core";
import { existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "..", "public", "projects");
const SITES_DIR = resolve(__dirname, "..", "..");

const CHROME_CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
];

const TARGETS = [
  { slug: "vilela-turismo", url: "https://vilelaturismo.com/", file: "vilela-turismo-repo/index.html" },
  { slug: "al-the-painter", url: "https://althepainterllc.vercel.app/", file: "althepainterllc/index.html" },
  { slug: "camilas-cleaning", url: "https://camilascleaning.vercel.app/", file: "camilascleaning/index.html" },
  { slug: "gustavo-san", url: "https://gustavosan.com/", file: "gustavosan/index.html" },
  { slug: "master-sonorizacao", url: "https://sitemastersom.vercel.app/", file: "mastersonorizacao/index.html" },
  { slug: "beltrame-acessorios", url: "https://beltrameacess.vercel.app/", file: "beltrameacess/index.html" },
];

const VIEWPORT = { width: 1440, height: 900, deviceScaleFactor: 1.5 };

function findChrome() {
  const found = CHROME_CANDIDATES.find((p) => existsSync(p));
  if (!found) throw new Error("Chrome nao encontrado. Ajuste CHROME_CANDIDATES.");
  return found;
}

/** Remove loaders/overlays e congela animacoes para a captura sair limpa. */
async function settle(page) {
  await page.evaluate(() => {
    document.querySelectorAll(".site-loader, .loader, #preloader").forEach((el) => el.remove());
    // Imagens que nao carregaram viram icone de "quebrado" na captura.
    document.querySelectorAll("img").forEach((img) => {
      if (img.complete && img.naturalWidth === 0) img.style.visibility = "hidden";
    });
    document.querySelectorAll("[class*='cookie'], [id*='cookie']").forEach((el) => {
      if (el instanceof HTMLElement && el.offsetHeight < 400) el.style.display = "none";
    });
    const style = document.createElement("style");
    style.textContent = `*,*::before,*::after{animation-play-state:paused!important;transition:none!important}
      .reveal,[class*="reveal"]{opacity:1!important;transform:none!important}`;
    document.head.appendChild(style);
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 1800));
}

/** Gera /public/og.jpg (1200x630) com a identidade Master Digital. */
async function captureOg(browser) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  const mark = pathToFileURL(
    resolve(__dirname, "..", "public", "brand", "master-digital-black.svg"),
  ).href;

  await page.setContent(`<!doctype html><html><head><meta charset="utf-8">
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500&display=swap" rel="stylesheet">
  <style>
    *{margin:0;box-sizing:border-box}
    body{width:1200px;height:630px;background:#f7f5f2;color:#14120f;
      font-family:Inter,system-ui,sans-serif;padding:72px;display:flex;
      flex-direction:column;justify-content:space-between;position:relative;overflow:hidden}
    .glow{position:absolute;top:-260px;right:-180px;width:640px;height:640px;border-radius:50%;
      background:#fff0e7;filter:blur(110px)}
    .row{display:flex;align-items:center;gap:12px;position:relative}
    .dot{width:9px;height:9px;border-radius:50%;background:#ff5a00}
    .eyebrow{font-size:15px;letter-spacing:.16em;text-transform:uppercase;color:#857d74}
    h1{font-family:'Instrument Serif',Georgia,serif;font-weight:400;font-size:82px;
      line-height:.98;letter-spacing:-.02em;position:relative;max-width:940px}
    h1 .muted{color:#857d74}
    h1 em{font-style:italic}
    .foot{display:flex;align-items:flex-end;justify-content:space-between;position:relative}
    .foot p{font-size:19px;color:#565049;max-width:560px;line-height:1.5}
    img{height:26px;opacity:.75}
  </style></head><body>
    <div class="glow"></div>
    <div class="row"><span class="dot"></span><span class="eyebrow">Criação de sites para empresas</span></div>
    <h1><span class="muted">Seu site é a primeira impressão.</span> <em>Faça ela fechar negócio.</em></h1>
    <div class="foot">
      <p>Sites sob medida para empresas que precisam transmitir credibilidade e receber contato no WhatsApp.</p>
      <img src="${mark}" alt="">
    </div>
  </body></html>`);

  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 1200));
  await page.screenshot({
    path: resolve(__dirname, "..", "public", "og.jpg"),
    type: "jpeg",
    quality: 92,
  });
  console.log("ok   og.jpg");
  await page.close();
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const requestedSlugs = new Set(process.argv.slice(2));
  const targets = requestedSlugs.size
    ? TARGETS.filter((target) => requestedSlugs.has(target.slug))
    : TARGETS;

  if (requestedSlugs.size && targets.length !== requestedSlugs.size) {
    const known = new Set(TARGETS.map((target) => target.slug));
    const unknown = [...requestedSlugs].filter((slug) => !known.has(slug));
    throw new Error(`Slug desconhecido: ${unknown.join(", ")}`);
  }

  const browser = await puppeteer.launch({
    executablePath: findChrome(),
    headless: "new",
    args: ["--hide-scrollbars", "--force-color-profile=srgb", "--no-sandbox"],
  });

  for (const target of targets) {
    const page = await browser.newPage();
    await page.setViewport(VIEWPORT);
    const local = pathToFileURL(resolve(SITES_DIR, target.file)).href;
    const sources = [target.url, local].filter(Boolean);

    let ok = false;
    for (const src of sources) {
      try {
        await page.goto(src, { waitUntil: "networkidle2", timeout: 45000 });
        await settle(page);
        await page.screenshot({
          path: resolve(OUT_DIR, `${target.slug}.jpg`),
          type: "jpeg",
          quality: 86,
        });
        console.log(`ok   ${target.slug}  <- ${src}`);
        ok = true;
        break;
      } catch (err) {
        console.warn(`skip ${target.slug}  <- ${src}  (${err.message.split("\n")[0]})`);
      }
    }
    if (!ok) console.error(`FALHOU ${target.slug}`);
    await page.close();
  }

  if (!requestedSlugs.size) await captureOg(browser);
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
