# Prompt d'audit — suite Aevia

> Gabarit **unique** d'audit produit/qualité pour les dépôts Aevia.
> Fusion de deux anciens prompts (`AUDIT_POLISH_PROMPT.md` façon « Fable 5 » + `docs/PROMPT_AUDIT_PRODUIT.md`).
> Un dépôt à la fois. Copier le bloc voulu dans une session Claude Code, à la racine du dépôt à auditer.

Repos concernés : `~/aevia` (Hub, ce dépôt) · `~/skylaunch` (Launch) · `~/skysecurity` (Security) · `~/skybot-inbox` (Inbox) · `~/perso-portfolio`.

**Adapter le périmètre au dépôt :**
- **Hub (`~/aevia`)** = **vitrine**, PAS un produit vendu. Auditer comme un site marketing : contenu exact, perf, SEO/GEO, i18n, a11y, exactitude légale. **Le multi-tenant, la facturation Stripe, la DR ne s'appliquent PAS** (aucun paiement ne vit ici). Ces gates sont conservés plus bas pour les **dépôts produits**.
- **Produits (`skylaunch` / `skysecurity` / `skybot-inbox`)** = apps vendues → tous les gates de production s'appliquent (isolation tenant, facturation, DR, observabilité…).

---

## Règle de méthode — avant tout le reste

**Mesure, ne juge pas à l'œil.** L'instrument ment plus souvent que le code : cache, rate-limit, build en cours, URL signée expirée, page plantée prise pour une page vide. Une capture ne montre pas ce qui est rogné par un overflow ; une image peut répondre 200 et montrer un tout autre sujet ; un lien peut être bleu, souligné, et ne mener nulle part.

Pour chaque constat, donne : **le fichier et la ligne**, ce qui se produit **concrètement pour l'utilisateur**, et **comment tu l'as vérifié**. Si tu n'as pas vérifié, écris-le — un « probablement » honnête vaut mieux qu'un faux « fait ».

**Honnêteté brutale, zéro flatterie.** Dis la vérité crue sur l'état réel. Si c'est moyen, dis « moyen ». Si un test échoue, montre la preuve. Aucun « c'est fait » sans preuve exécutée.

**Ne jamais casser ce qui marche.** Petits changements revus un par un ; chaque correctif a un test de régression. Pas de gros refactor sans filet.

**Ne balaye jamais en masse avec `npm run dev`** : le serveur de dev meurt sous la charge et produit de faux défauts (500 sur des chunks, page non hydratée). Toujours `npm run build && npx next start`, un seul balayage à la fois.

**Actions irréversibles / vers l'extérieur** (deploy prod, suppression de docs, rotation de clé, force-push, `git push`) → **proposer d'abord, agir après validation**. Committer sur une branche est OK ; pousser/déployer non, sans go.

**Supply-chain & secrets.** Jamais de `npm/pnpm/yarn install` à l'aveugle → reinstall figé (`npm ci`). Vérifier les advisories du jour, scanner les hooks `preinstall`. Jamais de secret dans un commit, un log, un artefact, ni dans le rapport (masquer les valeurs).

---

## 1 · Est-ce que ça marche

- Le build passe-t-il ? `npm run build`.
- Combien d'erreurs `tsc` ? Note le chiffre : il devient la ligne de base.
- Chaque route répond-elle 200 ? Y compris pages secondaires, variantes de langue, pages légales.
- **Toutes les images se chargent-elles ?** Deux vérifications distinctes : chaque URL renvoie 200 (`curl`), *et* chaque `<img>` a un `naturalWidth > 0` une fois la page rendue et défilée.
- **Chaque image montre-t-elle le bon sujet ?** Télécharge-les et ouvre-les — c'est le seul moyen.
- Chaque lien mène-t-il quelque part ? Les ancres `#` pointent-elles vers un élément qui existe ? Clique-les, ne les lis pas.
- Erreurs JavaScript en console, sur chaque page ?

## 2 · Est-ce que ça tient sur un téléphone

À 390×844 et à 1440×900, sur chaque page :
- Quelque chose déborde-t-il horizontalement ?
- Un texte est-il coupé en plein mot ? (mesure chaque mot d'un `h1`/`h2` contre sa boîte de ligne ; une césure sur trait d'union est correcte)
- Des éléments se chevauchent-ils ? Un CTA est-il visible sans défiler ?
- Les cibles tactiles font-elles 44 px minimum ?
- Le contraste texte/fond passe-t-il 4,5:1 ? Mesure les pixels composités, pas la couleur déclarée.

## 3 · Est-ce qu'un client comprend ce qu'il achète

Parcours le produit comme un prospect qui découvre, pas comme celui qui l'a écrit :
- La page d'accueil dit-elle en une phrase ce que c'est, pour qui, à quel prix ?
- Le prix est-il visible sans avoir à demander ? **Est-il cohérent partout** (page, JSON-LD, `llms.txt`, CGV, politique de confidentialité) ? Un prix périmé sur la vitrine tue la crédibilité ; un prix faux dans les CGV est un risque de **prix trompeur** opposable.
- Où sont mentions légales, CGV, politique de confidentialité, politique cookies ? Sont-elles à jour et cohérentes (SIREN 852 546 225, éditeur, TVA, hébergeur) ? Sont-elles servies dans la langue du visiteur (site 5 langues) ?
- Y a-t-il une adresse de contact qui fonctionne ?
- Le produit promet-il quelque chose qu'il ne fait pas ? Cite-t-il des marques/références/chiffres qui n'existent pas ?

## 4 · Est-ce qu'on peut le vendre demain *(dépôts produits — pas le Hub)*

- Le paiement fonctionne-t-il de bout en bout (webhook compris) ? Que reçoit le client après avoir payé (e-mail, accès, facture) ?
- Que se passe-t-il si le paiement échoue, si le client se trompe d'adresse, s'il demande un remboursement ? Facture conforme (numérotation, mentions, TVA) ?
- RGPD : consentement cookies (**retrait aussi simple que le consentement, art. 7-3**), droit à l'effacement, sous-traitants listés.
- Combien de temps entre « le client paie » et « le client a son produit » ? Ce délai est-il tenu **automatiquement** ou dépend-il de quelqu'un ?

## 5 · Est-ce que ça tient en production

- Que se passe-t-il si une API tierce tombe ? Dégradation propre ou page blanche ?
- Les secrets sont-ils hors du dépôt ? Cherche les clés en dur.
- Journaux exploitables quand un client signale un problème ?
- **Données cloisonnées par client** *(produits)* : cherche une requête sans filtre de tenant. Toute fuite cross-tenant = **Sev-1** qui arrête tout le reste.
- Sauvegarde déjà **restaurée pour de vrai** ? Plan de rollback de migration ?
- Le déploiement est-il reproductible ? Sur ces projets il est **manuel** (`vercel --prod`) ; pousser sur GitHub ne met rien en ligne.

## 6 · Gates de production (go / no-go high-ticket — dépôts produits)

Pour chacun, verdict honnête **✅ prêt / ⚠️ partiel / ❌ absent**, avec preuve, correctif, effort :
1. **Données & DR** — backups + restauration testée, PITR, rollback de migration.
2. **Intégrité du revenu** — Stripe idempotent, dunning, proration, application des quotas de plan, TVA.
3. **Conformité & vie privée** — RGPD (export/suppression réels, rétention, PII chiffrées, sous-traitants, DPA, consentement cookies, ToS/Confidentialité justes).
4. **Déploiement sûr** — staging proche prod, canary/rollback, feature flags, health/readiness.
5. **Observabilité** — SLO, monitoring d'uptime externe qui te prévient **avant** le client, dashboards, status page, Sentry back+front.
6. **Délivrabilité e-mail** — SPF/DKIM/DMARC, transactionnels qui arrivent, gestion des bounces.
7. **Coûts & abus par tenant** — rate-limits + quotas, anti-spam sur surfaces publiques, dégradation si fournisseur down.
8. **Secrets & rotation** — store géré, runbook de rotation, zéro secret versionné.
9. **Charge & capacité** — test de charge (k6), point de rupture, plan de capacité.
10. **Cohérence de marque / design system** — identité et composants cohérents à l'échelle de la suite.

## 7 · Ce qui manque — trois listes, ordonnées par ce que ça rapporte

1. **Bloquant pour vendre** — à corriger avant le prochain client (coût en heures).
2. **Visible par le client** — ce qu'un acheteur remarque et qui abîme la confiance sans empêcher la vente.
3. **Dette** — coûteux plus tard, invisible aujourd'hui.

Pour chaque ligne : le fichier, ce que ça casse concrètement, l'effort.

## 8 · Nettoyage doc & propreté du dépôt

- **Inventaire complet** : toute la doc (`*.md`, `docs/`, `AGENTS.md`) + tous les fichiers racine. Classe chacun : **garder** (utile, à jour) · **mettre à jour** (utile mais périmé) · **archiver** (daté/exécuté/remplacé) · **déplacer** (mal rangé). Distingue *doc vivante* (README, ARCHITECTURE, glossaire), *config d'agent* (`.claude/`, `AGENTS.md`) et *archives datées* (`docs/audit/`, `docs/archive/`).
- **Racine nette** : que l'essentiel (README, LICENSE, configs, dossiers sources). Rapports/notes en vrac → `docs/`.
- **README GitHub pro** : ce que c'est, pour qui, quickstart, architecture, config/env, déploiement, liens. Reflète le produit **d'aujourd'hui**.
- **Règle d'or** : aucune suppression silencieuse. `git mv` pour les archives (l'historique reste) ; confirmer toute suppression avec le propriétaire.

---

## Livrable

Un fichier `docs/audit/AUDIT_<sujet>_<AAAA-MM-JJ>.md` (ou `docs/AUDIT_PRODUIT_<AAAA-MM-JJ>.md`) commité, avec les constats et les listes. **Pas de correctif dans le même commit** : lire d'abord, corriger ensuite — un commit par sujet, avec la mesure avant/après.

## Notes

- Copie de référence du volet « produit » : `~/skylaunch/docs/PROMPT_AUDIT_PRODUIT.md`. Modifier là-bas d'abord, puis répercuter.
- Un projet à la fois. Deux dépôts en parallèle saturent la mémoire et produisent des faux positifs (timeouts pris pour des défauts).
- Corriger en découvrant produit des correctifs non vérifiés — le prompt demande volontairement de **ne pas corriger** dans le même passage de découverte.
