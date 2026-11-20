/*
  Vérificateur de traductions d'articles, pour le traducteur (humain ou agent).

    node --experimental-strip-types --no-warnings --import ./tests/charger-ts.mjs \
      tests/verifier-traductions.mjs <langue> [slug ...]

  Pour chaque article, compare la traduction à l'original français :
  présence, titre encore en français, charpente Markdown (titres, listes,
  tableaux, filets), nombres (prix, durées, pourcentages, années), liens, FAQ,
  et les tics de registre (portugais d'Europe, tutoiement allemand, vosotros).
  Sort avec le code 1 s'il reste un écart.
*/
import {
  ressembleAuFrancais,
  ecartsDeNombres,
  ecartsParBloc,
  charpente,
  liens,
  lienAttendu,
  motsPortugaisEuropeen,
  tutoiementAllemand,
  vosotros,
} from "./outils-langue.mjs";

const [langue, ...slugs] = process.argv.slice(2);
if (!langue) {
  console.error("usage : verifier-traductions.mjs <en|es|de|pt> [slug ...]");
  process.exit(2);
}

const { BLOG_POSTS } = await import("../lib/blog-posts.ts");
const cibles = BLOG_POSTS.filter((p) => !p.seulementEnFrancais && (slugs.length === 0 || slugs.includes(p.slug)));

let ecarts = 0;
for (const p of cibles) {
  const t = p.i18n?.[langue];
  const problemes = [];
  if (!t) {
    problemes.push("traduction absente");
  } else {
    if (t.title === p.title) problemes.push("titre identique au français");
    for (const [champ, texte, court] of [
      ["title", t.title, true],
      ["excerpt", t.excerpt, true],
      ["content", t.content, false],
    ]) {
      if (ressembleAuFrancais(texte, { court })) problemes.push(`${champ} ressemble au français`);
    }
    const a = charpente(p.content);
    const b = charpente(t.content);
    for (const k of Object.keys(a)) if (a[k] !== b[k]) problemes.push(`charpente ${k} : fr ${a[k]} ≠ ${b[k]}`);
    const n = ecartsDeNombres(p.content, t.content);
    if (n.manquants.length) problemes.push(`nombres du français absents : ${n.manquants.join(", ")}`);
    if (n.ajoutes.length) problemes.push(`nombres absents du français : ${n.ajoutes.join(", ")}`);
    for (const e of ecartsParBloc(p.content, t.content)) {
      problemes.push(e.raison ? `blocs : ${e.raison}` : `bloc ${e.bloc} (${e.type}) : fr ${e.original.join(" ")} ≠ ${e.traduction.join(" ")} — « ${e.extrait} »`);
    }
    const ne = ecartsDeNombres(p.excerpt, t.excerpt);
    if (ne.manquants.length || ne.ajoutes.length) problemes.push(`nombres du chapeau : ${JSON.stringify(ne)}`);
    const attendus = liens(p.content).map((u) => lienAttendu(u, langue));
    const obtenus = liens(t.content);
    if (JSON.stringify(attendus) !== JSON.stringify(obtenus)) {
      problemes.push(`liens : attendu ${JSON.stringify(attendus)}, obtenu ${JSON.stringify(obtenus)}`);
    }
    if ((p.faq?.length ?? 0) !== (t.faq?.length ?? 0)) {
      problemes.push(`FAQ : fr ${p.faq?.length ?? 0} questions ≠ ${t.faq?.length ?? 0}`);
    }
    (p.faq ?? []).forEach((f, i) => {
      const g = t.faq?.[i];
      if (!g) return;
      if (ressembleAuFrancais(g.q, { court: true })) problemes.push(`FAQ ${i + 1} : question en français`);
      const e = ecartsDeNombres(f.a, g.a);
      if (e.manquants.length || e.ajoutes.length) problemes.push(`FAQ ${i + 1} nombres : ${JSON.stringify(e)}`);
    });
    const tout = [t.title, t.excerpt, t.content, ...(t.faq ?? []).flatMap((f) => [f.q, f.a])].join("\n");
    if (langue === "pt") {
      const m = motsPortugaisEuropeen(tout);
      if (m.length) problemes.push(`portugais d'Europe : ${m.join(", ")}`);
    }
    if (langue === "de") {
      const m = tutoiementAllemand(tout);
      if (m.length) problemes.push(`tutoiement : ${m.join(", ")}`);
    }
    if (langue === "es") {
      const m = vosotros(tout);
      if (m.length) problemes.push(`vosotros : ${m.join(", ")}`);
    }
  }
  if (problemes.length) {
    ecarts += problemes.length;
    console.log(`✗ ${p.slug}\n  - ${problemes.join("\n  - ")}`);
  } else {
    console.log(`✓ ${p.slug}`);
  }
}
console.log(ecarts === 0 ? `\n${langue} : aucun écart.` : `\n${langue} : ${ecarts} écart(s).`);
process.exit(ecarts === 0 ? 0 : 1);
