# Architecture — Aevia Hub

Comment le Hub tient debout : le rôle du dépôt, le routage i18n, les grilles tarifaires qu'il affiche, le mode portfolio, les liens vers les produits, et ce qu'il ne faut **pas** casser.

> Cette page est la version publique et neutre de la doc opérationnelle `.claude/CLAUDE.md`
> (laissée telle quelle, à destination des agents de code). En cas de doute, le **code qui tourne** fait foi.

---

## 1. Rôle du dépôt

Le Hub est la **vitrine** de la suite Aevia : un site marketing internationalisé qui **présente** trois produits et renvoie vers eux. Il **ne facture rien** et ne gère aucun compte client — pas de multi-tenant, pas de Stripe, pas de base de données ici. Toute la logique de vente vit dans les dépôts produits.

C'est aussi la **première impression** commerciale : la barre de qualité (perf, SEO, i18n, exactitude du contenu et des prix) doit être irréprochable, car c'est ce qui vend avant même la démo.

## 2. Stack

- **Next.js 16.3**, App Router, `reactCompiler: true` (voir `next.config.ts`).
- **next-intl 4** pour l'i18n (plugin branché sur `i18n/request.ts`).
- **Tailwind CSS v4** via `@tailwindcss/postcss`.
- **Framer Motion** (animations), **lucide-react** (icônes).
- **Resend** pour l'e-mail du formulaire de contact.
- Déploiement **Vercel**, **manuel** (voir §8).

## 3. Routage & structure des pages

Deux espaces de routes coexistent dans le même projet :

1. **Le Hub i18n — `app/[locale]/*`.** Toutes les pages vitrine sous un segment de locale :
   - `page.tsx` — landing du hub (hero, produits, tarifs, CTA, footer).
   - `vs/[competitor]/` — pages comparatives (contenu dans `lib/vs-content.ts`).
   - `docs/` — docs produits (`inbox`, `launch`, `security`).
   - `blog/` + `blog/[slug]/` — blog (contenu dans `lib/blog-posts*.ts`).
   - `legal/` — `mentions`, `privacy`, `terms`, `cookies`.
   - `layout.tsx` — layout racine i18n : `NextIntlClientProvider`, `<ConsentAwareAnalytics>`, `<CookieBanner>`, widget webchat Inbox, JSON-LD + métadonnées SEO/hreflang.

2. **Le mode portfolio (legacy) — `app/page.tsx` + `app/about/`.** Pages historiques hors locale, dans le **même repo et le même projet Vercel**, servies selon le host. À conserver ; elles coexistent avec `app/[locale]`.

**Routes hors `[locale]`** (déclarées dans `middleware.ts`, non redirigées par la locale) : `/contact`, et les routes d'images de métadonnées `/icon`, `/apple-icon`, `/opengraph-image`.

**Route handlers SEO/GEO :** `app/llms.txt/route.ts` et `app/llms-full.txt/route.ts` — servent une description structurée de l'offre (et des prix) aux LLM. À garder alignés sur les grilles canoniques (§5).

## 4. Internationalisation (i18n)

- **5 locales : `fr` (défaut), `en`, `es`, `de`, `pt`.** Source de vérité : `i18n/routing.ts` (`defineRouting`).
- La locale vit dans l'URL. `middleware.ts` applique le middleware next-intl sauf pour les chemins hors-locale ci-dessus.
- Le chargement des messages passe par `i18n/request.ts` (plugin next-intl dans `next.config.ts`) et, dans le layout, `import(../../messages/${locale}.json)`.
- Les dictionnaires vivent dans `messages/{fr,en,es,de,pt}.json`.

> **Règle d'or i18n :** toute chaîne d'interface se modifie dans **les 5 fichiers `messages/*.json` en même temps**. Une clé ajoutée dans un seul fichier casse le rendu des autres langues (clé brute affichée ou fallback).

## 5. Les trois grilles tarifaires canoniques (que le Hub affiche)

Le Hub **affirme** les prix des produits ; ces affirmations doivent être identiques partout où elles apparaissent (page, JSON-LD du layout, `llms.txt` / `llms-full.txt`, docs produits). Un prix incohérent entre deux surfaces détruit la crédibilité ; un prix faux dans un texte engageant (CGV) est un risque de **prix trompeur**.

- **Inbox** — 5 paliers mensuels **49 / 99 / 199 / 399 / 999 €** (Starter → Scale) **+ 100 € de setup** unique.
- **Launch** — paiement **unique** **399 / 599 / 899 / 1499 €** + **maintenance 20 €/mois**.
- **Security** — **à la carte, prix fixe, sans abonnement** : scan gratuit, SSL 149 €, en-têtes 199 €, DNS SPF/DKIM/DMARC 349 €, CSP 499 €, Core Web Vitals 790 €, durcissement 1490–2490 €.

> Ces grilles sont la **source de vérité** à répliquer. Voir aussi [`GLOSSARY.md`](GLOSSARY.md).

## 6. Consentement cookies & analytics

- `components/CookieBanner.tsx` — bannière opt-in, granulaire (essentiels / analytics / marketing), refus en un clic. Le choix est stocké dans `localStorage['aevia-consent']`. À l'enregistrement, elle émet l'événement `aevia-consent-updated` ; elle écoute aussi `aevia-consent-reopen` pour être **rouverte** depuis un lien « Gérer les cookies » (retrait du consentement, RGPD art. 7-3).
- `components/ConsentAwareAnalytics.tsx` — ne charge Google Analytics 4 (`gtag`) **qu'après** consentement `analytics === true` ; écoute `aevia-consent-updated` et l'événement `storage`.
- **CSP :** `next.config.ts` définit une Content-Security-Policy stricte (headers globaux). Toute nouvelle origine de script/connexion doit y être ajoutée explicitement, sinon elle est bloquée.

## 7. Sécurité & en-têtes

`next.config.ts` pose des en-têtes de sécurité globaux : `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, HSTS, et une **CSP** stricte (`default-src 'self'`, sources d'images et de scripts en liste blanche). Le formulaire `app/api/contact/route.ts` est durci : rate-limit par IP, échappement HTML, garde-fous de longueur, envoi via Resend.

## 8. Déploiement (MANUEL)

Pousser sur GitHub **ne déploie rien**. Mise en ligne :

```bash
npx vercel --prod
curl -sI https://aevia.services/fr | head -2   # vérifier que c'est réellement live
```

`~/aevia` et `valentin-milliand.vercel.app` partagent le **même projet Vercel** : un déploiement met à jour les deux surfaces.

## 9. Marque & garde-fous (à ne pas casser)

- Éditeur **Aevia WS** (Valentin Milliand) — **SIREN 852 546 225**, RCS Bourg-en-Bresse.
- **Adresse personnelle jamais affichée** (« communiquée sur demande à valentinmilliand@aevia.services »).
- **Aucune URL contenant « sky »** dans le copy visible côté front.
- `package.json > name = "portfolio"` — héritage historique, **ne pas renommer**.
- Le domaine officiel est **`aevia.services`** (l'ancien `aevia.io` a été entièrement retiré).
- Produits exposés : **Launch, Inbox, Security** uniquement (les autres modules sont archivés).

## 10. Ce qu'il ne faut PAS faire

- Ne pas ajouter une clé de traduction dans un seul `messages/*.json` (casse les 4 autres langues).
- Ne pas charger un script/une origine tiers sans l'ajouter à la CSP de `next.config.ts`.
- Ne pas supposer qu'un `git push` déploie — le déploiement est manuel.
- Ne pas afficher de prix qui contredit une autre surface — voir les grilles canoniques (§5).
- Ne pas introduire d'URL « sky » ni d'adresse personnelle dans le front.
