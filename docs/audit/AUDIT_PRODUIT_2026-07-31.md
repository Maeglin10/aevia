# Audit produit — Aevia Hub (`~/aevia`)

**Date :** 2026-07-31
**Dépôt :** `maeglin10/aevia` — branche `claude/audit-prompt-74c8595-ab99vt`
**Prompt appliqué :** `docs/PROMPT_AUDIT_PRODUIT.md` (commit `74c8595`)
**Périmètre :** le hub `aevia.services` (Next 16.2.10 + next-intl, 5 locales). Les produits
satellites (Launch, Security, Inbox) vivent dans d'autres dépôts et ne sont pas audités ici,
mais le hub **fait des affirmations sur eux** (prix, canaux) — ce sont ces affirmations qui
sont vérifiées.

## Méthode & limites de vérification

- **Build / typecheck / lint** exécutés réellement dans cet environnement après `npm install`.
- **Analyse statique** du code pour les incohérences de contenu, i18n, CSP, RGPD.
- **Limite honnête :** le proxy réseau de cet environnement **bloque `images.pexels.com`**
  (réponse `403 CONNECT`, vérifié via `curl` + `$HTTPS_PROXY/__agentproxy/status`). Je n'ai
  donc **pas pu vérifier le sujet réel ni le statut HTTP des 4 photos du hero** — c'est signalé
  comme risque non vérifié, pas comme fait.
- Aucune vérification navigateur/pixel (pas de `next start` piloté) : les constats mobile/contraste
  seraient à confirmer visuellement. Je ne les affirme donc pas ; je m'en tiens à ce que le code
  prouve.

---

## 1 · Est-ce que ça marche

| Contrôle | Résultat | Comment vérifié |
|---|---|---|
| `npm run build` | ✅ **Passe** (exit 0, Next 16.2.10 / Turbopack) | exécuté |
| `tsc --noEmit` | ✅ **0 erreur** | exécuté |
| `eslint .` | ⚠️ **229 erreurs, 2 warnings** | exécuté |
| Routes générées | 13 routes `[locale]` + `/contact` + `/api/contact` + sitemap/robots/icon | sortie de build |

**Détail ESLint** (`npx eslint .`) : 210 × `react/no-unescaped-entities` (apostrophes non
échappées, purement cosmétique), 18 × `@next/next/no-html-link-for-pages` (balises `<a>` internes
au lieu de `<Link>`, concentrées dans les pages légales), 1 × `react-hooks/set-state-in-effect`
(`CookieBanner.tsx:89`), 1 warning `no-img-element` (`page.tsx:60`, le hero). Le build ne bloque
pas dessus, mais `npm run lint` échoue — toute future CI qui lint casse. **95 %** des erreurs sont
dans les 3 fichiers légaux (`terms` 109, `privacy` 59, `cookies` 57).

**Avertissement de build à noter :** `⚠ The "middleware" file convention is deprecated. Please
use "proxy" instead.` — `middleware.ts` utilise une convention dépréciée par Next 16 (voir
`AGENTS.md` : « Heed deprecation notices »).

**Toutes les routes `[locale]` sont `ƒ` (dynamiques, rendues à la demande)** — aucune n'est
statique (`○`). `generateStaticParams` n'est défini nulle part alors que le contenu (blog, vs,
légal) est 100 % statique. Rien ne casse, mais chaque page est re-rendue serveur à chaque hit :
perte de perf/SEO gratuite.

### 🔴 Lien cassé : le CTA principal du blog mène à un 404

`app/[locale]/blog/[slug]/page.tsx:224` et `app/[locale]/blog/page.tsx:175` pointent vers
`` `/${locale}/contact` `` (ex. `/fr/contact`, `/en/contact`). **Aucune route `app/[locale]/contact`
n'existe** — la page contact est à `app/contact` (hors `[locale]`). `vercel.json` ne contient
aucune réécriture, et `middleware.ts` ne dé-préfixe `/contact` que pour le chemin exact `/contact`,
pas `/fr/contact`.

- **Ce que vit l'utilisateur :** sur **tout article de blog** et sur **l'index blog**, le bouton
  « Prendre contact » / le CTA de bas de page renvoie une page 404. Le blog est un canal
  d'acquisition SEO (22 articles, dont des pages locales Bourg-en-Bresse/Lyon/Marseille) — le
  visiteur qui a lu l'article et veut convertir tombe dans le vide.
- **Vérifié :** absence de route dans la table de build + absence de rewrite (`vercel.json`) +
  lecture de `middleware.ts`. Le hero et les pages `vs` utilisent `/contact` (correct) — seul le
  blog est touché.

---

## 2 · Est-ce que ça tient sur un téléphone

Non vérifié au navigateur (voir limites). Les points structurels lisibles dans le code :

- Le hero desktop est en `lg:min-h-screen` avec image de fond en `object-cover` — logique de crop
  documentée dans le code (`page.tsx:39-68`), rien d'anormal à la lecture.
- `<img>` brut pour le hero (`page.tsx:60`) au lieu de `next/image` : pas d'optimisation, LCP plus
  lourd sur mobile (image Pexels servie en `w=2400`). Warning ESLint confirmé.
- Cibles tactiles : les boutons CTA sont en `py-3`/`py-2.5` (~40-44 px) — à confirmer visuellement,
  probablement OK.

**À faire dans une passe navigateur dédiée** (390×844 et 1440×900) : overflow horizontal, césures,
contraste `text-zinc-500/600` sur fond `#09090b` (les gris les plus clairs sur fond quasi-noir sont
le risque de contraste le plus probable). Je ne l'affirme pas sans mesure.

---

## 3 · Est-ce qu'un client comprend ce qu'il achète

C'est ici que se concentrent les défauts les plus abîmants pour la confiance. **Le hub affiche des
prix, des canaux et un statut produit qui se contredisent d'un fichier à l'autre.**

### 🔴 3.1 — Les prix d'Aevia Inbox existent en **quatre versions différentes**

| Source | Prix Inbox affichés |
|---|---|
| `app/layout.tsx:156-162` (JSON-LD `SoftwareApplication`, indexé par Google) | **USD** 49 / 99 / 199 / 399 / 999 (Starter/Growth/Pro/Business/Scale) |
| `lib/vs-content.ts` (pages `/vs/*`, 4 occurrences) | **USD** 99 / 199 / 399 / 999 (Growth/Studio/Business/Enterprise) |
| `app/[locale]/legal/privacy/page.tsx:58` | **EUR** 59 / 159 / 499 /mois |
| Site live `inbox.aevia.services` — **cité dans le code lui-même** | **EUR** 20 / 79 / 249, 3 paliers |

La 4ᵉ ligne n'est pas une supposition : `lib/vs-content.ts:9-12` **documente explicitement** que le
widget de prix live montre « €20/€79/€249 » et le qualifie de « stale marketing copy ». Autrement
dit, l'équipe **sait** que les prix divergent et a figé une 5ᵉ version dans le fichier vs.

- **Ce que vit le client :** un prospect qui compare la page `/vs/intercom` (99 $), le rich-result
  Google (49 $), la politique de confidentialité (59 €) et la vraie page de vente (20 €) voit
  quatre tarifs et deux devises pour le même produit. C'est le signal de méfiance maximal, et pour
  un prix affiché c'est aussi un risque de contentieux (prix non cohérent).
- **Vérifié :** lecture croisée des 4 fichiers.

Même problème, moins aigu, pour **Launch** (schema €399/599/899/1499 avec un palier « Landing 399 »
que la privacy ignore : 599/899/1499) et **Security** (schema €0/9/29/79 vs privacy « gratuit + 29 €
ou 89 € »).

### 🔴 3.2 — Combien de canaux Inbox ? La page d'accueil se contredit elle-même

Sur **la même landing** :
- Le bloc **Stats** annonce « **3** — Webchat · Email · Voix » (`messages/fr.json` → `stats.channels_*`).
- La **carte produit** Inbox liste « Téléphone, **WhatsApp**, email, site web » (`inbox_f1`) et la
  description parle d'« un message **Instagram** à minuit » (`inbox_desc`).

Or `lib/vs-content.ts:14-19` établit noir sur blanc que **WhatsApp et Instagram ne sont pas encore
ouverts aux clients** (« bientôt », feature-flag off). Les pages `/vs/*` le disent honnêtement
(« WhatsApp et Instagram DM en cours de déploiement »), la carte d'accueil et la nav promettent
l'inverse.

- **Ce que vit le client :** il achète en croyant que WhatsApp/Instagram marchent, et découvre après
  paiement que non. Promesse produit non tenue — exactement le cas « le produit promet quelque chose
  qu'il ne fait pas » du prompt.
- **Aussi :** `components/Nav.tsx:20` (`descInbox: "CRM multi-canal — WhatsApp, Instagram, Email"`) —
  répète la fausse capacité dans le menu, sur toutes les pages.
- **Vérifié :** lecture croisée `messages/*.json`, `Nav.tsx`, `vs-content.ts`.

### 🟠 3.3 — Inbox est « live » ou en liste d'attente ?

`app/[locale]/page.tsx:114-119` marque Inbox `status: "live"` et l'ouvre vers
`inbox.aevia.services`. Mais le libellé du bouton est `inbox_cta` = « **Rejoindre la liste
d'attente** » et le fallback `notify` = « Me prévenir au lancement ». La nav le dit « Live », la
carte dit « liste d'attente ». Le client ne sait pas s'il peut acheter aujourd'hui.

### 🔴 3.4 — Incohérence de ville : Paris / Lyon / Bourg-en-Bresse

- `app/contact/page.tsx:232` : « **Paris**, France »
- `app/layout.tsx:88-90` (JSON-LD Organization, indexé) : « **Lyon** »
- Mentions légales + privacy : « RCS **Bourg-en-Bresse** »
- Articles blog SEO : pages dédiées « Bourg-en-Bresse » et « Lyon »

Trois villes pour une même entreprise. L'adresse précise est correctement protégée (« communiquée
sur demande », conforme à la règle projet), mais la **ville** affichée doit être unique et cohérente
avec le RCS, sinon signal de sérieux dégradé et SEO local dispersé.

### 🟠 3.5 — Page `/contact` : langue mélangée, jamais traduite

`app/contact/page.tsx` vit **hors** de `[locale]` et mélange français et anglais en dur : titre
« Prendre contact » (FR), labels « Name / Email / Subject / Message » (EN), placeholders EN, écran de
succès « Message sent! Thanks for reaching out — I'll get back to you within 24h. » (EN). Un visiteur
espagnol/allemand/portugais du hub multilingue arrive sur un formulaire franco-anglais. La page n'est
pas internationalisée du tout (aucune clé `messages`).

### Points positifs (axe 3)

- Les pages `/vs/*` sont **honnêtes et sourcées** (divulgation des manques dans `gapBody`, dates de
  vérification) — bon travail éditorial, à préserver.
- Un vrai contact e-mail cohérent existe (`valentinmilliand@aevia.services`) sur mentions/privacy/contact.
- Prix Launch/Security visibles via le schema et cohérents *entre eux* à ~1 palier près.

---

## 4 · Est-ce qu'on peut le vendre demain

Le hub n'encaisse pas lui-même (le paiement est chez les produits satellites) ; le seul flux
transactionnel ici est le **formulaire de contact**. Constats :

### 🔴 4.1 — Le RGPD documenté ne correspond pas à la réalité technique

Défaut le plus sérieux de l'audit, en trois volets qui se renforcent :

1. **L'outil analytics documenté n'est pas celui déployé.** La politique de confidentialité
   (`privacy/page.tsx:148, 421-439, 569`) et la politique cookies (`cookies/page.tsx:160-196,
   465-472`) affirment de façon répétée qu'Aevia mesure l'audience avec **Plausible Analytics**
   (« sans cookies », « sans consentement », « données hébergées en UE », « DNT respecté »). Or le
   code ne charge **jamais** Plausible : `components/ConsentAwareAnalytics.tsx` charge **Google
   Analytics 4** (`G-9XTKCZLYVF`, via `googletagmanager.com`). GA4 dépose des cookies et transfère
   aux USA.
2. **GA4 n'est pas dans la liste des sous-traitants** de la privacy (Google n'y figure que pour le
   Sign-In), et n'est pas couvert par la section « transferts hors UE ». La politique décrit donc un
   dispositif cookieless européen qui n'est pas celui qui tourne → **non-conformité RGPD** et
   contradiction factuelle visible par quiconque compare la bannière (« Google Analytics 4 »,
   `CookieBanner.tsx:15`) au texte légal (« Plausible »).
3. **En pratique, aucun analytics ne fonctionne** : la CSP (`next.config.ts:19-30`) autorise en
   `script-src` uniquement `'self' 'unsafe-inline' https://inbox.aevia.services` — **pas**
   `googletagmanager.com` — et en `connect-src` uniquement Railway — **pas** `google-analytics.com`.
   Donc même après consentement, le script GA est **bloqué par la CSP** (erreurs console, zéro
   donnée collectée). Résultat : Plausible n'existe pas dans le code, et GA est mort-né.

   - **Ce que ça coûte :** (a) risque RGPD réel (politique mensongère sur l'outil, le consentement et
     les transferts), (b) le toggle « Analytics » de la bannière ne pilote rien d'exploitable,
     (c) aucune mesure d'audience réelle malgré l'usine à gaz de consentement.
   - **Vérifié :** lecture de `ConsentAwareAnalytics.tsx` + CSP `next.config.ts` + grep « Plausible »
     (présent uniquement dans le texte légal, jamais comme script) + `CookieBanner.tsx`.

### 🔴 4.2 — Les documents légaux pointent vers le mauvais domaine (`aevia.io`)

Terms, privacy et cookies référencent partout **`aevia.io`** alors que le produit vit sur
**`aevia.services`** : `app.aevia.io`, `launch.aevia.io`, `security.aevia.io`, et surtout l'e-mail
DPO **`privacy@aevia.io`** (≈ 15 occurrences, ex. `privacy/page.tsx:37,117,459,511,554,625` ;
`cookies/page.tsx:512,531,576` ; `terms/page.tsx:41,581,687`).

- **Ce que ça casse :** `privacy@aevia.io` est **l'unique canal** indiqué pour exercer les droits
  RGPD (accès, effacement, portabilité) et demander un DPA. Si `aevia.io` n'est pas le domaine
  opéré (le produit est sur `aevia.services`), ces e-mails **ne sont pas reçus** → droit à
  l'effacement de fait injoignable, ce qui est une non-conformité en soi. Et un prospect qui clique
  `app.aevia.io`/`launch.aevia.io` tombe sur un domaine tiers ou une erreur.
- **Vérifié :** `grep aevia\.io` (voir liste complète en annexe). À confirmer : est-ce qu'`aevia.io`
  vous appartient et redirige ? Si non, c'est bloquant.

### 🟠 4.3 — Le formulaire de contact : délivrabilité et réponses fragiles

`app/api/contact/route.ts` :
- Expéditeur `from: "Aevia Contact <onboarding@resend.dev>"` (`:85`) — domaine de test Resend, pas
  un domaine `aevia.services` vérifié. Fort risque de spam/rejet, et image non professionnelle.
- Destinataire `to: "v.milliand@gmail.com"` (`:86`) — Gmail perso, alors que tout le site affiche
  `valentinmilliand@aevia.services`.
- **Pas de `reply_to`** vers l'e-mail du prospect : pour répondre, il faut copier/coller l'adresse
  depuis le corps du mail. Friction sur chaque lead.
- Rate-limit **en mémoire** (`Map`, `:6`) : sur Vercel serverless chaque invocation peut être une
  instance différente → la limite « 3/10 min » est en pratique inopérante. Anti-spam illusoire.
- **Bien :** échappement HTML des entrées (`escapeHtml`), garde-fous de longueur, regex e-mail
  bornée. Le fond sécurité de la route est correct.

### 🟢 4.4 — Ce qui va

- Secrets : **aucun secret en dur** (grep clés/tokens : seulement `process.env.RESEND_API_KEY` et de
  la doc de noms de cookies). Propre.
- En-têtes sécurité solides (`next.config.ts`) : HSTS preload, X-Frame DENY, nosniff, Permissions-Policy,
  CSP présente (même si trop stricte pour GA, cf. 4.1).

---

## 5 · Est-ce que ça tient en production

- **Dégradation si tiers KO :** le widget webchat (`layout.tsx:77-83`) est chargé `async` — s'il
  tombe, la page reste. OK. Le hero dépend d'images **externes Pexels hotlinkées** : si Pexels bloque
  le hotlink ou retire une photo, le hero s'affiche sans fond (pas de fallback). Voir 5.1.
- **Cloisonnement multi-tenant / sauvegardes :** hors périmètre (le hub n'a pas de base ni de données
  client ; la privacy en parle pour les produits satellites — non vérifiable ici).
- **Déploiement :** manuel (`vercel --prod`, cf. `.claude/CLAUDE.md`). `deploy.sh` présent. Conforme à
  la règle « push GitHub ≠ live ».

### 🟠 5.1 — Hero sur images externes non maîtrisées (non vérifiables ici)

`app/[locale]/page.tsx:15-20` : 4 photos hotlinkées depuis `images.pexels.com` (`w=2400`).
- **Risque :** subject/statut non vérifiables depuis cet environnement (proxy bloque Pexels, 403).
  Le prompt d'audit insiste précisément sur ce cas (« une image peut répondre 200 et montrer un tout
  autre sujet »). **À vérifier manuellement** : ouvrir les 4 URLs et confirmer que ce sont bien des
  visuels « entreprise/pro » cohérents, et non des photos retirées/remplacées.
- **Dette :** dépendance à un CDN tiers pour l'identité visuelle de la home, sans copie locale ni
  `next/image`. Un `<img>` externe = pas d'optimisation, LCP dégradé.

### 🟠 5.2 — Deux `robots.txt` en conflit

`app/robots.ts` (route dynamique : disallow `/api/`, nomme 14 crawlers IA, `host`) **et**
`public/robots.txt` (statique : `Allow: /` nu + une ligne non-standard `X-Robots-LLM`). Deux sources
pour le même chemin `/robots.txt`, au contenu différent. Le build n'a pas tranché explicitement ;
lequel est réellement servi est ambigu. En garder **un seul** (le dynamique, plus riche).

### 🟢 / 🟡 5.3 — Assets morts

40 fichiers `public/screenshots/**` (dont plusieurs nommés `skylaunch-*.webp`, `market-*`, `live-*`,
`marketplace*.webp`) ne sont **référencés par aucun `.tsx`** (grep). Poids mort dans le dépôt ;
certains noms contiennent « sky » (cf. règle projet, même si non servis au front).

---

## 6 · Les trois listes (ordonnées par ce que ça rapporte)

### 1. 🔴 Bloquant pour vendre — à corriger avant le prochain client

| # | Constat | Fichier(s) | Ce que ça casse | Effort |
|---|---|---|---|---|
| B1 | Prix Inbox en 4 versions/2 devises (+ Launch/Security divergents) | `app/layout.tsx`, `lib/vs-content.ts`, `legal/privacy` | Prospect voit 4 tarifs → méfiance max + risque prix trompeur | **3–5 h** (fixer une grille tarifaire unique, source de vérité, et la propager) |
| B2 | RGPD : privacy/cookies disent « Plausible/cookieless » mais le code déploie GA4 (non listé, non couvert transferts) — et GA4 est bloqué par la CSP | `ConsentAwareAnalytics.tsx`, `next.config.ts`, `legal/privacy`, `legal/cookies` | Non-conformité RGPD + politique mensongère + 0 analytics réel | **3–4 h** (décider Plausible OU GA4, aligner code + CSP + texte légal + bannière) |
| B3 | Docs légaux pointent `aevia.io` ; `privacy@aevia.io` = canal RGPD potentiellement mort | `legal/privacy`, `legal/cookies`, `legal/terms` | Droit à l'effacement/DPA injoignable ; liens produits cassés | **1–2 h** (remplacer `aevia.io`→`aevia.services` partout ; vérifier que l'e-mail reçoit) |
| B4 | CTA « Prendre contact » du blog → 404 (`/${locale}/contact` sans route) | `blog/[slug]/page.tsx:224`, `blog/page.tsx:175` | Conversion du canal SEO perdue sur 22 articles | **30 min** (utiliser `/contact` ou créer la route localisée) |
| B5 | Fausse capacité : WhatsApp/Instagram annoncés actifs alors que « bientôt » | `messages/*.json` (`inbox_f1`,`inbox_desc`), `Nav.tsx:20` | Promesse non tenue après achat | **1 h** (aligner sur « Webchat · Email · Voix », WhatsApp/IG en « bientôt ») |

### 2. 🟠 Visible par le client — abîme la confiance sans bloquer la vente

| # | Constat | Fichier(s) | Effort |
|---|---|---|---|
| V1 | Ville incohérente : Paris (contact) vs Lyon (schema) vs Bourg-en-Bresse (RCS) | `app/contact/page.tsx:232`, `app/layout.tsx:88` | **30 min** |
| V2 | Page `/contact` mi-FR mi-EN, jamais traduite dans les 5 locales | `app/contact/page.tsx` | **2–4 h** (i18n + passer sous `[locale]` ou tout FR/EN cohérent) |
| V3 | Inbox : « Live » (nav) vs « Rejoindre la liste d'attente » (CTA carte) | `page.tsx:114-119`, `messages/*.json` | **30 min** |
| V4 | Contact form : `from: onboarding@resend.dev`, pas de `reply_to`, `to:` Gmail perso | `app/api/contact/route.ts:85-86` | **1 h** (domaine vérifié + reply_to) |
| V5 | Deux `robots.txt` contradictoires | `app/robots.ts`, `public/robots.txt` | **15 min** |
| V6 | Hero sur images Pexels externes (sujet **non vérifié** ici) | `app/[locale]/page.tsx:15-20` | **1 h** (vérifier + rapatrier en local/`next/image`) |
| V7 | Chrome du blog en dur en français sur locales non-FR (« Retour au blog », « Continuer à lire »…) | `blog/[slug]/page.tsx` | **1–2 h** |

### 3. 🟡 Dette — coûte cher plus tard, invisible aujourd'hui

| # | Constat | Fichier(s) | Effort |
|---|---|---|---|
| D1 | 229 erreurs ESLint (`npm run lint` échoue) — 95 % dans les 3 pages légales | légal + divers | **1–2 h** (`--fix` en partie ; migrer `<a>`→`<Link>`) |
| D2 | `middleware.ts` déprécié en Next 16 (→ `proxy`) | `middleware.ts` | **30 min** |
| D3 | Toutes les routes `[locale]` dynamiques (pas de `generateStaticParams`) alors que le contenu est statique | `app/[locale]/**` | **1–2 h** |
| D4 | `set-state-in-effect` (cascade de rendus) | `components/CookieBanner.tsx:89` | **15 min** |
| D5 | Toggle « Marketing » de la bannière ne pilote aucun script | `components/CookieBanner.tsx` | **30 min** (retirer ou implémenter) |
| D6 | 40 screenshots `public/**` non référencés (certains nommés `sky*`) | `public/screenshots/**` | **15 min** (supprimer) |
| D7 | URL Railway (`skybot-...up.railway.app`) exposée au front — enfreint la règle « aucune URL sky au front » | `app/[locale]/layout.tsx:81`, `next.config.ts:26` | **1 h** (proxifier derrière un domaine `aevia.services`) |
| D8 | `dangerouslySetInnerHTML` dans le rendu blog (contenu statique, risque faible) | `blog/[slug]/page.tsx:43,88` | note seulement |

---

## Annexe — commandes de vérification exécutées

```
npm install                          # OK
npx tsc --noEmit                     # 0 erreur
npx eslint .                         # 231 problèmes (229 err, 2 warn)
npm run build                        # exit 0, table de routes capturée
grep -rn "aevia\.io"  app lib messages components     # domaine erroné (légal)
grep -rn "skybot|railway" app lib components next.config.ts   # URL sky au front
grep -rn "Plausible|googletagmanager" app components  # contradiction analytics
curl images.pexels.com…              # 403 (proxy) → hero NON vérifiable ici
```

> Conformément au prompt, **aucun correctif n'est inclus dans ce commit**. Les corrections, si
> validées, viendront en commits séparés (un par sujet, avec mesure avant/après).
