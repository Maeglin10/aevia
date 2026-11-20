/*
  Un chiffre publié a une source citée, dans TOUTES les langues — français compris.

  Revue du 2026-11-20 : la resynchronisation des traductions avait remis en
  cinq langues des chiffres sans source, présentés comme des mesures :
  « Les chiffres réels observés chez des PME : temps de réponse de 4h30 à
  moins de 2 minutes, CSAT +18 points, 40 à 60 % du temps support
  automatisé », et « la CNIL a prononcé 100M€ d'amendes en 2024 pour des
  infractions simples ». Aevia n'a pas encore de client à citer, et le bilan
  officiel de la CNIL pour 2024 dit 87 sanctions et 55 212 400 € d'amendes
  cumulées (https://www.cnil.fr/fr/sanctions-et-mesures-correctrices-bilan-2024-de-laction-de-la-cnil).
  Le test « mêmes chiffres que le français » interdisait à une traduction
  d'être plus prudente que l'original : c'est donc l'original qui a été
  corrigé, et ce fichier l'empêche de rechuter.

  Ce test échoue si :
  - une des affirmations retirées revient, dans n'importe quelle langue ;
  - le montant des amendes de la CNIL est cité sans le chiffre officiel et
    sans lien vers cnil.fr ;
  - un article de ARTICLES_VERIFIES porte un pourcentage ou une moyenne sans
    lien vers sa source dans le même bloc ;
  - la comparaison bloc par bloc des traductions ne voit plus un prix déplacé.

    npm test
*/
import "./charger-ts.mjs";
import { test } from "node:test";
import assert from "node:assert/strict";
import { blocs, ecartsParBloc, listeNombres } from "./outils-langue.mjs";

const { BLOG_POSTS, LANGUES_BLOG, localizePost, localesForPost } = await import("../lib/blog-posts.ts");

/** Chaque version publiée de chaque article : [langue, slug, texte complet]. */
const VERSIONS = BLOG_POSTS.flatMap((p) =>
  LANGUES_BLOG.filter((l) => localesForPost(p).includes(l)).map((l) => {
    const a = localizePost(p, l);
    return { langue: l, slug: p.slug, article: a, texte: [a.title, a.excerpt, a.content, ...(a.faq ?? []).flatMap((f) => [f.q, f.a])].join("\n") };
  }),
);

/** Affirmations retirées le 2026-11-20 : sans source, ou fausses. */
const RETIREES = [
  [/CSAT/i, "CSAT +18 points"],
  [/\b18 (points|Punkte|puntos|pontos)\b/i, "« +18 points » de satisfaction"],
  [/\b4\s?h\s?30|4 hours 30|4 Std\. 30/i, "« de 4 h 30 à 2 minutes »"],
  [/chiffres réels observés|real figures observed|cifras reales observadas|tatsächlich beobachteten Zahlen|números reais observados/i, "« chiffres réels observés chez des PME »"],
  [/100\s?M€|€\s?100\s?M\b|100 Mio\. €|100 milhões de euros|100 millions d.euros/i, "100 M€ d'amendes CNIL"],
  [/infractions simples|simple infringements|infracciones simples|einfache Verstöße|infrações simples/i, "« pour des infractions simples »"],
];

test("les chiffres sans source retirés ne reviennent dans aucune langue", () => {
  for (const v of VERSIONS) {
    for (const [motif, nom] of RETIREES) {
      assert.doesNotMatch(v.texte, motif, `${v.langue}/${v.slug} : ${nom}`);
    }
  }
});

const MONTANT_CNIL = "55212400";
const LIEN_CNIL = /\]\(https:\/\/www\.cnil\.fr\/(fr|en)\//;

test("le montant des amendes de la CNIL est le chiffre officiel, avec son lien", () => {
  let vus = 0;
  for (const v of VERSIONS) {
    for (const b of blocs(v.article.content)) {
      const parleAmendes = /CNIL/.test(b.texte) && /amende|fine|multa|Bußgeld/i.test(b.texte);
      const montant = listeNombres(b.texte).some((n) => Number(n) >= 1000) || /M€|Mio|million|millones|milhões/i.test(b.texte);
      if (!parleAmendes || !montant) continue;
      vus++;
      assert.ok(listeNombres(b.texte).includes(MONTANT_CNIL), `${v.langue}/${v.slug} : montant CNIL ≠ 55 212 400 € — « ${b.texte.slice(0, 120)} »`);
      assert.match(b.texte, LIEN_CNIL, `${v.langue}/${v.slug} : montant CNIL sans lien vers cnil.fr`);
    }
  }
  // L'article RGPD le cite dans ses cinq langues : un test qui ne voit rien ne prouve rien.
  assert.ok(vus >= 5, `seulement ${vus} mention(s) du montant trouvée(s)`);
});

/**
 * Articles relus chiffre par chiffre le 2026-11-20 : plus aucun pourcentage ni
 * aucune moyenne sans lien vers sa source dans le même bloc. À étendre article
 * par article — les autres en portent encore (voir le compte rendu de la revue).
 */
const ARTICLES_VERIFIES = ["ia-support-client-pme", "rgpd-site-web-obligations-2026"];
const STATISTIQUE = /\d\s?%|en moyenne|on average|de media|im Durchschnitt|em média|chiffres réels|real figures/i;

test("articles vérifiés : pas de pourcentage ni de moyenne sans source, dans aucune langue", () => {
  for (const v of VERSIONS.filter((x) => ARTICLES_VERIFIES.includes(x.slug))) {
    const textes = [v.article.excerpt, ...blocs(v.article.content).map((b) => b.texte), ...(v.article.faq ?? []).map((f) => f.a)];
    for (const t of textes) {
      if (STATISTIQUE.test(t)) assert.match(t, /\]\(https?:\/\//, `${v.langue}/${v.slug} : chiffre sans source — « ${t.slice(0, 140)} »`);
    }
  }
});

test("ARTICLES_VERIFIES ne nomme que des articles qui existent", () => {
  for (const slug of ARTICLES_VERIFIES) assert.ok(BLOG_POSTS.some((p) => p.slug === slug), slug);
});

// ─── La comparaison bloc par bloc (revue du 2026-11-20, mineur H5) ─────────

const ORIGINAL = `## Prix

| Offre | Prix | Utilisateurs |
|---|---|---|
| Starter | 79 € | 1 |
| Growth | 99 € | 3 |

Le forfait Business coûte 199 € par mois.`;

test("bloc par bloc : une traduction fidèle passe", () => {
  const fidele = ORIGINAL.replace("## Prix", "## Pricing").replace("Le forfait Business coûte 199 € par mois.", "The Business plan costs €199 a month.");
  assert.deepEqual(ecartsParBloc(ORIGINAL, fidele), []);
});

test("bloc par bloc : deux prix échangés entre deux lignes de tableau sont vus (l'ensemble ne les voyait pas)", () => {
  const echange = ORIGINAL.replace("| Starter | 79 € | 1 |", "| Starter | 99 € | 1 |").replace("| Growth | 99 € | 3 |", "| Growth | 79 € | 3 |");
  assert.equal(ecartsParBloc(ORIGINAL, echange).length, 2);
});

test("bloc par bloc : « 1 utilisateur » devenu « 3 » dans un tableau est vu", () => {
  const faux = ORIGINAL.replace("| Starter | 79 € | 1 |", "| Starter | 79 € | 3 |");
  assert.deepEqual(ecartsParBloc(ORIGINAL, faux).map((e) => e.bloc), [3]);
});

test("bloc par bloc : un prix passé d'un paragraphe à un autre est vu ; « 24h/24 » contre « 24/7 » ne l'est pas", () => {
  const deplace = `Starter : 79 €.\n\nGrowth : 99 €.`;
  assert.equal(ecartsParBloc(deplace, `Starter: €99.\n\nGrowth: €79.`).length, 2);
  assert.deepEqual(ecartsParBloc("- Disponible 24h/24, 7j/7", "- Available 24/7"), []);
  assert.deepEqual(ecartsParBloc("Un.\n\nDeux.", "One. Two."), [{ bloc: 0, raison: "2 blocs dans l'original, 1 dans la traduction" }]);
});
