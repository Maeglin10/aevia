/*
  Chaque article et chaque page « qui répond » existe dans chaque langue du
  hub, et s'y affiche dans cette langue.

  Relevé le 20/11 : sur /es, la section « Por necesidad : las páginas que
  responden » menait à des pages françaises ; sur /de et /pt, « Ce que nous
  écrivons » et tout le blog affichaient des titres français ; l'étiquette
  « Cybersécurité » apparaissait sur une carte espagnole ; les traductions
  anglaises et espagnoles de douze articles avaient perdu des sections et des
  prix ajoutés depuis au français.

  Ce test échoue si :
  - un article manque dans une langue (sauf les articles de référencement
    local, réservés au français par choix et annoncés comme tels) ;
  - un titre, un chapeau, un corps ou une question de FAQ se lit comme du
    français dans une page qui n'est pas française ;
  - un chiffre du français (prix, durée, pourcentage, année) manque ou change ;
  - la charpente (titres, listes, tableaux) ou les liens divergent ;
  - l'habillage du blog, une rubrique, ou un lien « par besoin » de l'accueil
    retombe sur le français.

    npm test
*/
import "./charger-ts.mjs";
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  ressembleAuFrancais,
  ecartsDeNombres,
  charpente,
  liens,
  lienAttendu,
  motsPortugaisEuropeen,
  tutoiementAllemand,
  vosotros,
} from "./outils-langue.mjs";

const { BLOG_POSTS, LANGUES_BLOG, localizePost, localesForPost } = await import("../lib/blog-posts.ts");
const { HABILLAGE } = await import("../lib/blog-habillage.ts");
const { BESOINS } = await import("../lib/besoins.ts");

const AUTRES = LANGUES_BLOG.filter((l) => l !== "fr");

for (const langue of AUTRES) {
  for (const p of BLOG_POSTS) {
    test(`article ${p.slug} en ${langue}`, () => {
      if (p.seulementEnFrancais) {
        // Réservé au français : pas de version, et donc pas d'URL indexable.
        assert.equal(localesForPost(p).includes(langue), false);
        return;
      }
      const t = p.i18n?.[langue];
      assert.ok(t, `${p.slug} n'existe pas en ${langue}`);
      const affiche = localizePost(p, langue);

      assert.notEqual(affiche.title, p.title, "titre identique au français");
      for (const [champ, texte, court] of [
        ["titre", affiche.title, true],
        ["chapeau", affiche.excerpt, true],
        ["corps", affiche.content, false],
        ["rubrique", affiche.category, true],
      ]) {
        assert.equal(ressembleAuFrancais(texte, { court }), false, `${champ} en français : « ${texte.slice(0, 120)} »`);
      }
      // « Web & Marketing » et « CRM & Support » s'écrivent pareil en anglais ;
      // les deux autres rubriques ne doivent jamais rester en français.
      if (["Cybersécurité", "IA Vocale & Téléphonie"].includes(p.category)) {
        assert.notEqual(affiche.category, p.category, `rubrique « ${p.category} » restée en français`);
      }

      assert.deepEqual(charpente(t.content), charpente(p.content), "charpente Markdown");
      assert.deepEqual(ecartsDeNombres(p.content, t.content), { manquants: [], ajoutes: [] }, "chiffres du corps");
      assert.deepEqual(ecartsDeNombres(p.excerpt, t.excerpt), { manquants: [], ajoutes: [] }, "chiffres du chapeau");
      assert.deepEqual(liens(t.content), liens(p.content).map((u) => lienAttendu(u, langue)), "liens");

      assert.equal(t.faq?.length ?? 0, p.faq?.length ?? 0, "nombre de questions");
      (p.faq ?? []).forEach((f, i) => {
        assert.equal(ressembleAuFrancais(t.faq[i].q, { court: true }), false, `question ${i + 1} en français`);
        assert.deepEqual(ecartsDeNombres(f.a, t.faq[i].a), { manquants: [], ajoutes: [] }, `chiffres, réponse ${i + 1}`);
      });

      const tout = [t.title, t.excerpt, t.content, ...(t.faq ?? []).flatMap((f) => [f.q, f.a])].join("\n");
      if (langue === "pt") assert.deepEqual(motsPortugaisEuropeen(tout), [], "portugais d'Europe dans du brésilien");
      if (langue === "de") assert.deepEqual(tutoiementAllemand(tout), [], "tutoiement allemand");
      if (langue === "es") assert.deepEqual(vosotros(tout), [], "vosotros");
    });
  }
}

test("les articles réservés au français sont exactement les trois de référencement local", () => {
  assert.deepEqual(
    BLOG_POSTS.filter((p) => p.seulementEnFrancais).map((p) => p.slug).sort(),
    [
      "audit-securite-site-web-marseille-ia",
      "creer-site-internet-bourg-en-bresse-ia",
      "service-client-ia-lyon-automatisation-pme",
    ],
  );
});

test("l'habillage du blog existe dans chaque langue, sans français hors du français", () => {
  for (const langue of LANGUES_BLOG) {
    const h = HABILLAGE[langue];
    assert.ok(h, `habillage ${langue}`);
    for (const [cle, valeur] of Object.entries(h)) {
      if (langue === "fr" && (cle === "seulementFr" || cle === "versionFr")) continue;
      assert.ok(valeur, `${langue}.${cle} vide`);
      if (langue !== "fr") {
        assert.equal(ressembleAuFrancais(valeur, { court: true }), false, `${langue}.${cle} en français : « ${valeur} »`);
      }
    }
  }
});

test("les liens « par besoin » de l'accueil mènent à la page dans la langue du lecteur", () => {
  for (const langue of AUTRES) {
    for (const regle of BESOINS) {
      const { href, langue: atteinte } = regle(langue);
      assert.doesNotMatch(href, /\.aevia\.services\/fr\//, `${langue} → ${href}`);
      // Launch et Security servent le français à la racine : sans préfixe de
      // langue, c'est la page française.
      if (/launch\.aevia\.services\/prix|security\.aevia\.services\/guides/.test(href)) {
        assert.fail(`${langue} → ${href} : version française`);
      }
      // Seule exception : l'Inbox n'a pas d'allemand, l'anglais le remplace
      // (et l'accueil l'annonce « auf Englisch »).
      const attendue = langue === "de" && href.includes("inbox.aevia.services") ? "en" : langue;
      assert.equal(atteinte, attendue, `${langue} → ${href}`);
    }
  }
});

test("les libellés « par besoin » sont dans la langue de la page", () => {
  for (const langue of AUTRES) {
    const m = JSON.parse(readFileSync(new URL(`../messages/${langue}.json`, import.meta.url), "utf8"));
    assert.equal(m.needs.items.length, BESOINS.length, `${langue} : autant de libellés que de liens`);
    for (const it of m.needs.items) {
      for (const texte of [it.product, it.label, it.desc]) {
        assert.equal(ressembleAuFrancais(texte, { court: true }), false, `${langue} : « ${texte} »`);
      }
    }
    if (langue === "pt") assert.deepEqual(motsPortugaisEuropeen(JSON.stringify(m)), [], "pt.json en portugais d'Europe");
  }
});
