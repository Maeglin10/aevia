# Audit documentation & conformité légale — Aevia Hub

> **Date :** 2026-08-10 · **Dépôt :** `~/aevia` (Maeglin10/aevia) · **Branche :** `chantier-2026-08`
> **Périmètre :** le **Hub** Aevia — vitrine marketing Next.js i18n (fr/en/es/de/pt) qui **présente** la suite (Launch, Inbox, Security). Le Hub **ne vend pas** ; il ne fait qu'exposer l'offre. Les produits vivent dans d'autres dépôts et ne sont pas audités ici — mais le Hub **affirme** leurs prix et leur modèle, et ce sont ces affirmations qui sont vérifiées.
> **Méthode :** lecture croisée code ↔ doc ↔ grille tarifaire canonique. Verdicts justifiés par la date du dernier commit git + comparaison au code qui tourne. **Audit en lecture seule** — aucun fichier produit modifié ; ce rapport est le seul ajout.

---

## Résumé exécutif

**Documentation.** Le Hub compte **11 fichiers `.md`**. Mesuré : **6/11 (~55 %)** sont obsolètes, périmés ou mal rangés (candidats archive/réécriture) ; les 5 restants sont de la **configuration d'agent** (CLAUDE/AGENTS) toujours valide, pas de la doc humaine. Si l'on ne compte que la **doc destinée à un dev ou un client** (README + `docs/*.md` substantiels = 6 fichiers), **6/6 (100 %)** sont soit du boilerplate `create-next-app`, soit des rapports/plans datés : **il n'existe aujourd'hui aucun README, ARCHITECTURE ou glossaire à jour**. L'intuition « ~90 % obsolète » du fondateur est donc juste **au sens qui compte** : la doc utile *maintenant* est quasi inexistante.

**Légal — le point qui fait mal.** La correction des prix n'a touché que le **JSON-LD** (`app/layout.tsx`) et **`llms.txt` / `llms-full.txt`** — tous deux corrects et alignés sur les grilles canoniques. Mais **les deux textes juridiques les plus engageants n'ont pas été corrigés** et **contredisent** la vitrine :

- **CGV/CGU** (`legal/terms/page.tsx`) et **Politique de confidentialité** (`legal/privacy/page.tsx`) affichent **Aevia Security en « Abonnement mensuel » (0 / 29 € / 89 €/mois)** — un modèle SaaS **abandonné** (Security = correctifs à la carte à prix fixe depuis le 2026-07-25). Ils affichent aussi une grille **Inbox** périmée (59/159/499 € ou 99/199/399/999 $, au lieu des 5 paliers 49/99/199/399/999 € + 100 € de setup) et une **maintenance Launch à 59 €/mois** au lieu de **20 €/mois**.
- Un **prix faux dans les CGV** (contrat de vente) est plus grave qu'un prix faux dans le schema : c'est un risque de **prix trompeur** et une incohérence directement opposable.

**Trois écarts RGPD/CNIL à corriger (risque d'amende) :**

1. **Retrait du consentement impossible** — la bannière cookies ne réapparaît jamais après un premier choix, et **aucun lien « Gérer les cookies »** ne permet de revenir dessus. Le RGPD (art. 7-3) et la CNIL exigent que **retirer le consentement soit aussi simple que le donner**.
2. **Politique de confidentialité, CGV et politique cookies uniquement en français** alors que le site sert activement **5 langues**. Seules les **mentions légales** sont traduites. Un visiteur en/es/de/pt reçoit des textes RGPD qu'il ne comprend pas → manquement au **principe de transparence** (art. 12).
3. **Liens légaux présents sur la seule page d'accueil** — le pied de page (avec privacy/CGV/cookies/mentions) vit dans `page.tsx`, pas dans le layout ; **blog, /vs, /docs et les pages légales elles-mêmes n'ont pas de footer**. La **LCEN** exige un accès **permanent** aux mentions légales depuis toutes les pages.

---

## PARTIE 1 — Inventaire documentaire

**Légende des verdicts :** **CURRENT** (utile et à jour, garder) · **REFERENCE** (journal/outil valide, garder tel quel) · **OBSOLETE** (contenu faux/mort → réécrire) · **SUPERSEDED** (daté/exécuté/remplacé → archiver).

| Fichier | Dernier commit | Verdict | Raison (vérifiée) |
|---|---|---|---|
| `README.md` | 2026-04-23 | **OBSOLETE** | Boilerplate `create-next-app` intact (« bootstrapped with create-next-app », Geist, deploy Vercel générique). Ne mentionne **ni Aevia, ni la stack, ni l'i18n, ni le déploiement réel**. Dépôt public → première impression GitHub = template vide. À réécrire entièrement. |
| `CLAUDE.md` | 2026-04-23 | **CURRENT** | 1 ligne : `@AGENTS.md`. Pointeur valide, rien à faire. |
| `AGENTS.md` | 2026-04-23 | **CURRENT** | Garde-fou générique « This is NOT the Next.js you know » (lire les docs Next 16 avant de coder). Toujours pertinent (le repo est en Next 16.3). Garder. |
| `AUDIT_POLISH_PROMPT.md` | 2026-08-07 | **SUPERSEDED** (mal rangé) | Prompt d'audit « Fable 5 » de 133 lignes, à la **racine**. Écrit pour des *gates SaaS multi-tenant* (DR, facturation Stripe, isolation tenant, k6…) que **le prompt lui-même déclare hors-sujet pour une vitrine** (§ en-tête). Outil one-shot, encombre la racine. Déplacer dans `docs/audit/` ou supprimer. |
| `.claude/CLAUDE.md` | 2026-07-16 | **CURRENT** (reference) | Doc opérationnelle du Hub : deploy manuel Vercel, 5 locales, fichiers clés, règles métier (Aevia WS, SIREN, pas d'URL « sky »), protocole de session. **Exact** vs code. Garder — c'est la seule doc d'archi réelle qui existe (à promouvoir, cf. Partie 2). |
| `.claude/HISTORY.md` | 2026-08-01 | **REFERENCE** | Journal de session (Fait/Comment/Pourquoi/Erreurs). Par nature il consigne l'état *passé* (l'entrée 2026-07-31 décrit `aevia.io` et Plausible, **depuis corrigés**) — c'est le rôle d'un journal, pas une obsolescence. Garder en append-only. |
| `docs/AUDIT_PRODUIT_2026-07-31.md` | 2026-07-31 | **SUPERSEDED** | Audit produit profond daté. La **majorité de ses P0/P1 est corrigée** : `aevia.io`→`aevia.services` (0 occurrence restante), texte légal Plausible→GA4, CTA blog 404, ville→Bourg-en-Bresse, JSON-LD prix. Reste-à-faire résiduel repris dans le présent rapport. Archiver comme instantané historique. |
| `docs/AUDIT_REPORT_HUB.md` | 2026-08-07 | **SUPERSEDED** | Audit léger + mesure navigateur (LCP 1,96 s, CLS 0, a11y propre, i18n 99 clés, score ~8/10). Utile mais **daté** ; remplacé par ce rapport pour le volet doc/légal. Archiver. |
| `docs/PROMPT_AUDIT_PRODUIT.md` | 2026-07-31 | **REFERENCE** (outil) | Gabarit du prompt d'audit produit (copie de référence `~/skylaunch`). Doublon d'intention avec `AUDIT_POLISH_PROMPT.md`. Garder **un seul** gabarit, dans `docs/audit/`. |
| `docs/plans/2026-04-15-avia-ecosystem-unification.md` | 2026-06-10 | **SUPERSEDED** | Plan d'avril : ancienne marque « **Avia** », portfolio-comme-hub, Next.js **15**, modules **marketplace/skylive** (archivés). Exécuté/abandonné. Archiver. |
| `docs/plans/2026-04-16-product-platform.md` | 2026-06-10 | **SUPERSEDED** | Plan « portfolio = plateforme produit » (screenshots, carousels, Next 15). Périmètre `~/portfolio`, exécuté. Archiver. |

**Décompte :** CURRENT 3 · REFERENCE 2 · OBSOLETE 1 · SUPERSEDED 5. → **6 fichiers (55 %) à réécrire ou archiver.** Aucun n'est un README/ARCHITECTURE/glossaire à jour → **le fond documentaire humain est à créer, pas seulement à nettoyer.**

---

## PARTIE 2 — Structure documentaire cible (propre, « grande maison »)

### Principe
Un dépôt top-tier a **une racine nette**, **un seul endroit par sujet**, et une doc qui décrit **le produit d'aujourd'hui**. On distingue clairement : *doc vivante* (README, ARCHITECTURE, glossaire), *config d'agent* (`.claude/`, `AGENTS.md`), et *archives datées* (`docs/audit/`, `docs/archive/`).

### Arborescence proposée

```
~/aevia/
├── README.md                 ← RÉÉCRIRE (voir squelette ci-dessous)
├── CLAUDE.md                 ← garder (pointeur @AGENTS.md)
├── AGENTS.md                 ← garder (garde-fou Next 16)
├── docs/
│   ├── README.md             ← NOUVEAU : index de la doc (1 ligne par fichier)
│   ├── ARCHITECTURE.md       ← NOUVEAU : promu depuis .claude/CLAUDE.md (stack, routing [locale],
│   │                            i18n next-intl, CSP/headers, deploy manuel Vercel, fichiers clés)
│   ├── GLOSSARY.md           ← NOUVEAU : glossaire (voir liste ci-dessous)
│   ├── audit/                ← rapports & gabarits d'audit
│   │   ├── PROMPT_AUDIT.md          (← fusion PROMPT_AUDIT_PRODUIT + AUDIT_POLISH_PROMPT, 1 seul)
│   │   ├── AUDIT_PRODUIT_2026-07-31.md   (archive datée)
│   │   ├── AUDIT_REPORT_HUB_2026-08-07.md (archive datée, renommé avec date)
│   │   └── DOC_LEGAL_AUDIT_2026-08.md    (ce rapport)
│   └── archive/
│       └── plans/            ← les 2 plans d'avril 2026 (historique)
└── .claude/                  ← inchangé (CLAUDE.md opérationnel + HISTORY.md journal)
```

### Actions concrètes (à faire dans une passe ultérieure, hors de ce commit)

| Action | Fichier(s) | Détail |
|---|---|---|
| **RÉÉCRIRE** | `README.md` | Remplacer le boilerplate par un vrai README (squelette ci-dessous). |
| **CRÉER** | `docs/README.md`, `docs/ARCHITECTURE.md`, `docs/GLOSSARY.md` | ARCHITECTURE = promotion du contenu de `.claude/CLAUDE.md` en doc publique neutre. |
| **DÉPLACER** | `AUDIT_POLISH_PROMPT.md`, `docs/PROMPT_AUDIT_PRODUIT.md` → `docs/audit/PROMPT_AUDIT.md` | Fusionner en un seul gabarit ; vider la racine. |
| **ARCHIVER** | `docs/AUDIT_PRODUIT_2026-07-31.md`, `docs/AUDIT_REPORT_HUB.md` → `docs/audit/` | Instantanés datés, garder pour la traçabilité. |
| **ARCHIVER** | `docs/plans/*.md` → `docs/archive/plans/` | Plans exécutés/abandonnés. |
| **GARDER** | `CLAUDE.md`, `AGENTS.md`, `.claude/*` | Config d'agent valide. |

> **Règle d'or :** aucune suppression silencieuse. `git mv` pour les archives (l'historique reste). La seule *suppression* défendable serait `AUDIT_POLISH_PROMPT.md` **après** fusion — à confirmer par le fondateur.

### Squelette du README à réécrire

```md
# Aevia — Hub (site vitrine)
Vitrine i18n de la suite Aevia (Launch · Inbox · Security). Next.js 16 + next-intl, 5 langues.
NB : le Hub ne vend pas — il présente. Les paiements vivent dans les produits.

## Stack
Next.js 16.3 (App Router, React Compiler) · next-intl · Tailwind v4 · Framer Motion · Resend (contact).

## Structure
app/[locale]/*  pages i18n · app/page.tsx  mode portfolio (legacy, même repo)
messages/*.json  5 dictionnaires · components/  Nav, CookieBanner, analytics
lib/  contenu (vs, blog) · app/api/contact  formulaire

## Dev
npm ci && npm run dev   → http://localhost:3000

## i18n
5 locales fr/en/es/de/pt. Toujours modifier les 5 messages/*.json en parallèle.

## Déploiement (MANUEL)
./deploy.sh  (ou vercel --prod). Pousser sur GitHub ne met RIEN en ligne.
Live : https://aevia.services/fr

## Légal & marque
Éditeur : Aevia WS (Valentin Milliand), SIREN 852 546 225, RCS Bourg-en-Bresse.
Aucune URL « sky » dans le copy front. Adresse perso jamais affichée.
```

### Glossaire minimal (`docs/GLOSSARY.md`)
- **Aevia WS** — nom commercial de l'auto-entreprise Valentin Milliand · SIREN 852 546 225 · RCS Bourg-en-Bresse.
- **Hub** — ce dépôt, la vitrine `aevia.services`. Ne facture rien.
- **Launch / Inbox / Security** — les 3 produits vendus (dépôts séparés `skylaunch` / `skybot-inbox` / `skysecurity`).
- **Grilles canoniques** (source de vérité, à répliquer partout) :
  - **Inbox** — 5 paliers mensuels **49 / 99 / 199 / 399 / 999 €** (Starter→Scale) **+ 100 € setup** unique.
  - **Launch** — paiement unique **399 / 599 / 899 / 1499 €** + **maintenance 20 €/mois**.
  - **Security** — **à la carte, prix fixe, sans abonnement** : scan gratuit, SSL 149 €, en-têtes 199 €, DNS SPF/DKIM/DMARC 349 €, CSP 499 €, Core Web Vitals 790 €, durcissement 1490–2490 €.
- **Mode portfolio** — `app/page.tsx` + `/about`, legacy, même repo/projet Vercel, switché par host.
- **« Aevia » (Eiffage)** — homonyme (filiale énergie du groupe Eiffage). Désambiguïsation via SIREN + `sameAs` registres (déjà en place dans le JSON-LD).

---

## PARTIE 3 — État légal & conformité

### 3.0 Vue d'ensemble

| Document | Existe ? | À jour ? | Multilingue ? | Verdict |
|---|---|---|---|---|
| Mentions légales (`legal/mentions`) | ✅ | ✅ SIREN, éditeur, hébergeur Vercel | ✅ **traduites** (next-intl) | **BON** |
| Politique de confidentialité (`legal/privacy`) | ✅ | ⚠️ **prix périmés** + GA4 non fonctionnel | ❌ **FR uniquement (codée en dur)** | **À CORRIGER** |
| CGU / CGV (`legal/terms`) | ✅ | ❌ **Security = abonnement (aboli)** + Inbox/Launch périmés | ❌ **FR uniquement** | **À CORRIGER** |
| Politique cookies (`legal/cookies`) | ✅ | ✅ décrit bien GA4 | ❌ **FR uniquement** | **À CORRIGER (i18n)** |
| Bannière de consentement | ✅ opt-in, granulaire, refus = 1 clic | ⚠️ **pas de retrait**, toggle marketing mort, GA4 bloqué par CSP | n/a (traduite dans le composant) | **À CORRIGER** |

### 3.1 🔴 Prix périmés dans les textes juridiques (risque « prix trompeur »)

La passe de correction a aligné **JSON-LD** (`app/layout.tsx:213-244`) et **`llms.txt`** (`app/llms.txt/route.ts:32-34`) sur les grilles canoniques — **corrects**. Mais **les pages légales n'ont pas suivi** :

- **CGV — `app/[locale]/legal/terms/page.tsx`**
  - `:157-182` **« Aevia Inbox — Abonnement mensuel »** : Starter **59 €** / Pro **159 €** / Business **499 €** → devrait être **5 paliers 49/99/199/399/999 € + 100 € setup**.
  - `:189-219` **Launch** : maintenance **59 €/mois** → devrait être **20 €/mois** ; palier « Landing 399 » absent.
  - `:226-251` **« AeviaSecurity — Abonnement mensuel »** : Gratuit 0 / Starter **29 €/mois** / Pro **89 €/mois** → **modèle SaaS aboli**. Security se vend **à la carte, sans abonnement**.
  - `:267` répète « Abonnements (Inbox, **Security**, maintenance Launch) : facturation mensuelle » — faux pour Security.
- **Privacy — `app/[locale]/legal/privacy/page.tsx`**
  - `:59` Inbox « mensuel (**99 $, 199 $, 399 $ ou 999 $/mois**) » — devise USD, 4 paliers, Starter 49 manquant.
  - `:66-67` Launch « 599 €, 899 € ou 1 499 € + maintenance **59 €/mois** » — 399 manquant, maintenance fausse.
  - `:74-75` Security « Offre gratuite + **abonnements 29 € ou 89 €/mois** » — modèle aboli.

**Ce que ça casse :** un prospect qui compare le rich-result Google (correct), la page `llms.txt` (correcte) et **les CGV/la privacy** (fausses) voit deux modèles Security contradictoires (abonnement vs à la carte) et 3 grilles Inbox. Le contrat de vente affiche un prix qui n'est pas celui du checkout → **incohérence opposable**. **Correctif :** répliquer les grilles canoniques dans `terms` et `privacy` (retirer « Abonnement mensuel » pour Security, le remplacer par le tableau à la carte). Effort ~1-2 h.

### 3.2 🔴 Retrait du consentement cookies impossible (CNIL / RGPD art. 7-3)

`components/CookieBanner.tsx:87-91` — la bannière ne s'affiche **que si** `localStorage['aevia-consent']` est absent. Une fois un choix enregistré, **elle ne revient jamais**, et **aucun lien « Gérer les cookies / Cookie preferences »** n'existe (vérifié : footer `app/[locale]/page.tsx:429-432` ne liste que les 4 pages légales ; aucun déclencheur de ré-ouverture dans tout le code). La politique cookies explique de purger via le navigateur, mais **le RGPD exige un retrait aussi simple que le consentement** — un contrôle *dans le site*.
**Correctif :** ajouter un lien persistant « Gérer les cookies » (footer global) qui efface `aevia-consent` et ré-ouvre la bannière. Effort ~1 h.

### 3.3 🟠 Textes RGPD/CGV uniquement en français sur un site 5 langues (transparence, art. 12)

`privacy`, `terms`, `cookies` sont **codés en dur en français** (`useTranslations`/`t()` = **0** occurrence ; seul `mentions` est traduit — `mentions/page.tsx:1-4`). Servies sous `/[locale]/legal/*`, elles rendent du français à un visiteur en/es/de/pt. L'i18n mesurée « 99 clés, 5 langues, 100 % » ne couvre que **le chrome UI**, **pas les textes légaux**. Le RGPD demande une information « concise, transparente, compréhensible » — donc dans une langue accessible au public visé.
**Correctif :** au minimum traduire privacy/cookies (les plus exposées) ; idéalement les 3 via `messages/*.json` ou fichiers MDX par locale. Effort ~1-2 j (volume de texte élevé) — décision fondateur sur l'ampleur.

### 3.4 🟠 Mentions légales non accessibles depuis toutes les pages (LCEN)

Le footer (liens privacy/CGV/cookies/mentions) est dans `app/[locale]/page.tsx:405-436`, **pas dans `app/[locale]/layout.tsx`**. Résultat : **blog, /vs, /docs et les pages légales elles-mêmes n'ont pas de footer** (layout vérifié `[locale]/layout.tsx:71-85` — pas de footer). La LCEN impose un accès **direct et permanent** aux mentions légales.
**Correctif :** déplacer le footer dans le layout `[locale]` (global). Effort ~30 min. *(Bonus : c'est aussi le bon endroit pour le lien « Gérer les cookies » du 3.2.)*

### 3.5 🟡 GA4 décrit comme actif mais bloqué par la CSP (contradiction mineure, faible risque)

La bannière (`CookieBanner.tsx:11,15`) et la politique cookies décrivent la mesure d'audience **Google Analytics 4**, et `components/ConsentAwareAnalytics.tsx:32` charge bien `googletagmanager.com` **après consentement**. Mais la **CSP** (`next.config.ts:22,26`) n'autorise en `script-src` que `'self' 'unsafe-inline' https://inbox.aevia.services` et en `connect-src` que Railway — **ni `googletagmanager.com` ni `google-analytics.com`**. Donc **même après acceptation, GA4 est bloqué** (0 donnée collectée).
**Conséquence :** paradoxalement **conforme** (aucun traçage ni transfert US réel), mais **les textes décrivent un traitement qui n'a pas lieu**. Décision à trancher : (a) débloquer GA4 dans la CSP — alors le disclosure « transfert US » (`privacy:423`) devient réellement engageant — ou (b) retirer GA4 (composant + mentions) et rester cookieless. Effort ~1 h.

### 3.6 🟡 Toggle « Marketing » sans effet & URL Railway exposée (dette, non bloquant)

- `CookieBanner.tsx:146` propose un toggle **Marketing** (remarketing/pubs) qui **ne pilote aucun script** (aucun tag marketing dans le code). Promettre un choix inopérant est trompeur → retirer le toggle **ou** l'implémenter. Effort ~30 min.
- `[locale]/layout.tsx:81` + `next.config.ts:26` exposent `skybot-inbox-production.up.railway.app` au front (widget webchat + CSP `connect-src`) — enfreint la règle projet « aucune URL sky au front ». Proxifier derrière `aevia.services`. Effort ~1 h.

### 3.7 🟢 Ce qui est déjà conforme (à préserver)
- **Mentions légales** complètes et **traduites** : éditeur Aevia WS, directeur, **SIREN 852 546 225 — RCS Bourg-en-Bresse**, TVA (art. 293 B CGI), contact, **hébergeur Vercel Inc.** avec adresse (exigence LCEN). Adresse personnelle jamais affichée.
- **SIREN 852 546 225** cohérent partout (mentions, privacy, terms, cookies, JSON-LD).
- **`aevia.io` → `aevia.services`** : **0 occurrence** résiduelle (canal RGPD `privacy@` désormais sur le bon domaine).
- **Bannière** : consentement **préalable** (GA off par défaut), **refus en 1 clic** au même niveau qu'accepter, choix **granulaire** — modèle CNIL-conforme sur ce point.
- **Sous-traitants** listés dans la privacy (Render, Vercel, Google/GA4, Stripe…) avec transferts hors-UE mentionnés (CCT).

---

## Annexe — vérifications exécutées

```
git log -1 --format=%ci <chaque .md>          # dates de dernier commit (verdicts)
grep -rn "aevia\.io" app lib components messages    # 0 occurrence (corrigé)
grep -rn "Plausible" app lib components             # 0 (texte légal migré vers GA4)
grep -c "useTranslations\|t(" legal/*/page.tsx      # privacy/terms/cookies = 0 ; mentions = 15
grep -n prix  legal/terms/page.tsx legal/privacy/page.tsx   # grilles périmées (§3.1)
grep -n GA4/CSP  next.config.ts ConsentAwareAnalytics.tsx   # GA4 bloqué (§3.5)
python3  messages/*.json  → 99 clés × 5 locales     # i18n UI complet (hors légal)
lecture  layout.tsx (JSON-LD) + llms.txt/route.ts   # prix canoniques OK
```

> Rapport en **lecture seule**. Aucun correctif appliqué ici : les corrections des §3.1–3.6, si validées, viendront en commits séparés (un par sujet, avec mesure avant/après).
