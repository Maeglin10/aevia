# HISTORY — Aevia Hub

> Format par entrée :
> - **Fait** : ce qui a changé + commit(s)
> - **Comment** : approche technique choisie + alternatives rejetées
> - **Pourquoi** : motivation (bug, demande utilisateur, dette technique)
> - **Erreurs commises** : ce que j'ai raté + correction (pour ne pas répéter)
>
> Appendre UNE entrée par session. Plan → Mock (si UI) → Valider → Exécuter.

---

## 2026-07-31 — Audit produit + correctifs blocants

**Fait :**
- Audit produit complet du hub (6 axes du prompt `74c8595`) → `docs/AUDIT_PRODUIT_2026-07-31.md` · `82733cd`
- Blog : CTA « Prendre contact » qui menait à un 404 (`/${locale}/contact` → `/contact`) · `8f7c69e`
- Légal : domaine `aevia.io` → `aevia.services` partout (privacy/terms/cookies, dont `privacy@`) · `bb70305`
- Contenu : discours Inbox honnête — WhatsApp/Instagram passés en « bientôt », CTA waitlist→« Découvrir Inbox » (5 langues + Nav) · `b25d570`
- Contact : ville « Paris » → « Lyon » (cohérence avec le JSON-LD) · `8392e56`
- Contact API : ajout `replyTo` = e-mail du prospect · `7d88698`
- SEO : suppression de `public/robots.txt` redondant (garde la route dynamique) · `f4d1b14`
- Prix : grille Inbox unifiée sur `/vs` (USD 99/199/399/999) dans schema + privacy · `c63da2b`

**Comment :**
- **Vérification d'abord, correction ensuite** (règle du prompt) : audit livré et commité SEUL, aucun fix dans le même commit. Puis un commit par sujet, chacun avec la mesure avant/après.
- Vérifs réelles : `npm install`, `tsc --noEmit` (0 err), `eslint` (229 err surtout cosmétiques), `npm run build` (exit 0) avant ET après les fixes.
- `aevia.io` : `perl -0pi` avec ordre de substitution contrôlé (`app.`→`inbox.aevia.services`, puis sous-domaines, puis bare, puis `privacy@`) pour éviter les doubles remplacements.
- Messages i18n : script Node modifiant les 5 fichiers via `JSON.parse`/`stringify(...,2)` — diff vérifié = seulement les 3 clés voulues, indentation préservée.
- `replyTo` : nom de champ confirmé dans `node_modules/resend/dist` (le SDK v6 mappe `replyTo`→`reply_to`) avant de coder, conformément à AGENTS.md.
- Décisions déléguées à l'utilisateur (données/politique que je ne pouvais pas trancher) via question ciblée : grille de prix (→ /vs) et analytics (→ reporté).

**Pourquoi :**
- Le hub était « vendable » mais criblé d'incohérences visibles par le client (4 prix Inbox, 3 villes, canaux fantômes) et d'un blocant conversion (CTA blog 404) + risques RGPD (domaine `aevia.io`, analytics).

**Reste à faire (consigné, non traité) :**
- **Analytics/RGPD** (décision reportée par l'utilisateur — « je regarde plus tard ») : la privacy/cookies décrivent **Plausible** (cookieless, UE) mais le code déploie **GA4** (`G-9XTKCZLYVF`), lui-même **bloqué par la CSP** (`next.config.ts` n'autorise pas googletagmanager). → choisir Plausible / GA4 / rien, puis aligner code + CSP + bannière + textes légaux. Décrit en 4.1 de l'audit.
- URL Railway (`skybot-...up.railway.app`) exposée au front (`layout.tsx`, CSP) — enfreint « aucune URL sky au front », nécessite un proxy sous `aevia.services`.
- Divergence mineure des grilles **Launch** et **Security** (schema vs privacy).
- Contact `from: onboarding@resend.dev` : à basculer sur un domaine `aevia.services` vérifié dans Resend.
- Page `/contact` mi-FR/mi-EN non i18n ; chrome du blog en dur en FR sur locales non-FR ; 40 screenshots morts dans `public/`.
- Vérifier que **`privacy@aevia.services`** reçoit bien (canal RGPD).

**Erreurs commises & vigilance :**
- **Non déployé** : ces commits sont poussés sur la branche `claude/audit-prompt-74c8595-ab99vt` mais **PAS déployés** (push ≠ live). Deploy manuel `vercel --prod` requis + curl de vérif avant de dire « en ligne ».
- **Hero non vérifiable** : le proxy de l'environnement bloque `images.pexels.com` (403) — sujet réel des 4 photos du hero NON vérifié, à ouvrir manuellement.
- Fixes validés au build/tsc uniquement ; **aucune vérif navigateur** (mobile/contraste/rendu) effectuée.

---

## 2026-06-06

**Fait :**
- Hub rebrandé sky→aevia (liens produits : AeviaLaunch/Security/Inbox) · `660b9e7`
- Pages /projects + /templates (v0.1 obsolètes) supprimées · `cec137b`
- Mentions légales Aevia WS injectées (5 langues, page `/legal/mentions`) · `b947d64`
- Blog posts : build débloqué (backticks non échappés dans template literals) · `f5d8478`
- Nav : type `status` widened (`as "live" | "soon"`) → stop TS2367 · `f5d8478`
- Webchat widget repoointé onrender(mort)→inbox.aevia.services · `0ffd23c`
- "Sites web" retiré du nav dropdown (n'existe plus comme produit) · `9d208a1`
- Produits dropdown hover/click corrigé · `9d208a1`
- Forms 16px (`.ui-form-16`) + validation champs requis · `f7cbb29`
- .claude/CLAUDE.md créé (doc opérationnelle + skills workflow) · cette session

**Erreurs commises & corrections :**
- **Hub URL faux dans mémoire** : j'avais mémorisé `valentin-milliand.vercel.app` comme le hub — c'est le mode PORTFOLIO du même repo. Hub = `aevia.services`. Correction : MEMORY.md mis à jour.
- **Build cassé blog-posts.ts** : backticks non échappés dans des template literals (lignes 453/467/477) → `next build` échouait. Fix : caractères échappés.
- **~/portfolio délinké** : ce dossier partageait le Vercel project du hub — déployer depuis ~/portfolio aurait écrasé le hub. Correction : `.vercel/project.json` supprimé de ~/portfolio.
- **`de` locale** : déclarée dans le layout mais pas de dictionnaire `de.json` — doit être ajouté ou retiré de `generateStaticParams`.
