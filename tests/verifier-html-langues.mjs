/*
  Ce que reçoit vraiment un visiteur (ou un moteur), page par page.

    HUB_URL=http://localhost:3110 node --experimental-strip-types --no-warnings \
      tests/verifier-html-langues.mjs

  Pour chaque langue et chaque article (et l'index du blog, et l'accueil) :
  <html lang>, <title>, <h1>, canonique, hreflang et `inLanguage` du JSON-LD.
  Échoue si une page non française rend un titre ou un h1 français, si la
  canonique ne pointe pas sur elle-même, ou si l'accueil non français envoie
  « par besoin » vers une page française. Complète tests/langues-articles
  (les données) par le rendu.
*/
import "./charger-ts.mjs";
import { ressembleAuFrancais } from "./outils-langue.mjs";

const BASE = process.env.HUB_URL ?? "http://localhost:3110";
const PROD = "https://aevia.services";
const { BLOG_POSTS, LANGUES_BLOG, localesForPost } = await import("../lib/blog-posts.ts");

const etiquette = (l) => (l === "pt" ? "pt-BR" : l);
const decoder = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/<[^>]+>/g, "");

let erreurs = 0;
let pages = 0;
const echec = (url, msg) => {
  erreurs++;
  console.log(`✗ ${url} — ${msg}`);
};

async function lire(chemin) {
  const r = await fetch(BASE + chemin, { redirect: "manual" });
  return { statut: r.status, html: await r.text() };
}

async function verifier(chemin, langue, { article, langues = LANGUES_BLOG } = {}) {
  pages++;
  const { statut, html } = await lire(chemin);
  if (statut !== 200) return echec(chemin, `HTTP ${statut}`);
  const lang = html.match(/<html[^>]*\slang="([^"]+)"/)?.[1];
  if (lang !== etiquette(langue)) echec(chemin, `<html lang="${lang}">, attendu ${etiquette(langue)}`);
  const titre = decoder(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "");
  const h1 = decoder(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "");
  if (!titre) echec(chemin, "pas de <title>");
  if (langue !== "fr") {
    if (ressembleAuFrancais(titre, { court: true })) echec(chemin, `titre français : « ${titre} »`);
    if (h1 && ressembleAuFrancais(h1, { court: true })) echec(chemin, `h1 français : « ${h1} »`);
  }
  const canonique = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonique !== PROD + chemin) echec(chemin, `canonique ${canonique}`);
  if (article) {
    const hreflang = [...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1]);
    // Un article réservé au français n'annonce que le français.
    for (const l of langues) if (!hreflang.includes(l)) echec(chemin, `hreflang ${l} absent`);
    const ld = html.match(/"inLanguage":"([^"]+)"/)?.[1];
    if (ld !== etiquette(langue)) echec(chemin, `JSON-LD inLanguage ${ld}`);
  }
  return html;
}

for (const langue of LANGUES_BLOG) {
  const accueil = await verifier(`/${langue}`, langue);
  if (accueil && langue !== "fr") {
    const fr = [...accueil.matchAll(/href="(https:\/\/[a-z]+\.aevia\.services[^"]*)"/g)]
      .map((m) => m[1])
      .filter((u) => /\/fr\/|launch\.aevia\.services\/prix|security\.aevia\.services\/guides/.test(u));
    if (fr.length) echec(`/${langue}`, `liens vers du français : ${fr.join(", ")}`);
  }
  await verifier(`/${langue}/blog`, langue);
  for (const p of BLOG_POSTS) {
    if (!localesForPost(p).includes(langue)) continue;
    await verifier(`/${langue}/blog/${p.slug}`, langue, { article: true, langues: localesForPost(p) });
  }
}

console.log(`\n${pages} pages lues, ${erreurs} écart(s).`);
process.exit(erreurs ? 1 : 0);
