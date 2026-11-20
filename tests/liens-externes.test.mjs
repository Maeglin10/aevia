/*
  Les liens « par besoin » de l'accueil et les liens produit du pied de page
  répondent 200, dans chaque langue — À LA DEMANDE, pas dans la CI par défaut.

  Revue du 2026-11-20 (bloquant H1) : l'accueil en/es/de/pt pointait vers
  launch.aevia.services/<langue>/prix-site-internet, une 404 tant que la
  branche Launch qui crée ces pages n'est pas déployée ; même chose pour
  security.aevia.services/<langue>/guides. Le test de forme
  (tests/langues-articles.test.mjs) ne voyait que l'allure de l'URL. Aucun
  changement de code : c'est l'ORDRE de déploiement qui règle le problème
  (Security et Launch d'abord, le Hub ensuite). Ce test est le contrôle à
  lancer juste avant de pousser le Hub :

    VERIFIER_LIENS_EXTERNES=1 npm test

  Sans la variable, il est sauté : il dépend du réseau et de l'état de trois
  autres sites, il n'a rien à faire dans un `npm test` ordinaire.
  Une redirection n'est pas suivie : une 3xx est signalée telle quelle, parce
  qu'une page traduite qui redirige vers le français est précisément le défaut
  à voir.
*/
import "./charger-ts.mjs";
import { test } from "node:test";
import assert from "node:assert/strict";

const { BESOINS, liensProduitsPied } = await import("../lib/besoins.ts");
const { LANGUES_BLOG } = await import("../lib/blog-posts.ts");

const ACTIF = process.env.VERIFIER_LIENS_EXTERNES === "1";
const DELAI_MS = 15_000;

/** Toutes les cibles externes, chacune avec les endroits qui la citent. */
function cibles() {
  const origines = new Map();
  const ajouter = (url, origine) => origines.set(url, [...(origines.get(url) ?? []), origine]);
  for (const langue of LANGUES_BLOG) {
    BESOINS.forEach((regle, i) => ajouter(regle(langue).href, `accueil ${langue}, besoin ${i + 1}`));
    for (const { href } of liensProduitsPied(langue)) ajouter(href, `pied de page ${langue}`);
  }
  return origines;
}

test("les cibles à contrôler couvrent chaque langue et chaque produit", () => {
  const urls = [...cibles().keys()];
  for (const hote of ["inbox.aevia.services", "launch.aevia.services", "security.aevia.services"]) {
    assert.ok(urls.some((u) => u.includes(hote)), hote);
  }
  assert.ok(urls.includes("https://launch.aevia.services/es/prix-site-internet"));
  assert.ok(urls.includes("https://security.aevia.services/pt/guides/dmarc"));
});

test(
  "liens externes de l'accueil et du pied de page : HTTP 200 dans chaque langue",
  { skip: ACTIF ? false : "réseau : lancer avec VERIFIER_LIENS_EXTERNES=1 avant de pousser le Hub", timeout: 120_000 },
  async () => {
    const echecs = [];
    await Promise.all(
      [...cibles()].map(async ([url, origine]) => {
        let statut;
        try {
          const r = await fetch(url, {
            redirect: "manual",
            signal: AbortSignal.timeout(DELAI_MS),
            headers: { "User-Agent": "aevia-hub-link-check" },
          });
          statut = r.status === 200 ? null : `${r.status}${r.headers.get("location") ? ` → ${r.headers.get("location")}` : ""}`;
        } catch (e) {
          statut = e?.name === "TimeoutError" ? `délai de ${DELAI_MS} ms dépassé` : `injoignable (${e?.cause?.code ?? e?.name ?? "erreur"})`;
        }
        if (statut) echecs.push(`${statut}  ${url}  ← ${origine.slice(0, 3).join(" ; ")}${origine.length > 3 ? ` (+${origine.length - 3})` : ""}`);
      }),
    );
    assert.deepEqual(echecs.sort(), [], `liens cassés :\n${echecs.join("\n")}`);
  },
);
