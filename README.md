# Aevia — Hub (site vitrine)

Vitrine internationale de la **suite Aevia** : trois produits présentés en un seul portail.
Le Hub **ne vend pas** — il présente. Les paiements et les comptes vivent dans les produits eux-mêmes (dépôts séparés).

**En ligne :** <https://aevia.services/fr>

## Les trois produits présentés

| Produit | En une phrase | Dépôt | Sous-domaine |
|---|---|---|---|
| **Inbox** | CRM / boîte de réception multicanal (WhatsApp, Instagram, e-mail…) unifiée | `skybot-inbox` | `inbox.aevia.services` |
| **Launch** | Un site web professionnel livré en ~2 h | `skylaunch` | `launch.aevia.services` |
| **Security** | Audit de sécurité + correctifs à la carte, à prix fixe | `skysecurity` | `security.aevia.services` |

Le Hub expose leurs offres et leurs prix ; il renvoie vers chaque produit pour l'inscription et le paiement.

## Stack

- **Next.js 16.3** — App Router, React Compiler activé
- **next-intl 4** — internationalisation, 5 langues, locale dans l'URL
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **Framer Motion** — animations · **lucide-react** — icônes
- **Resend** — envoi du formulaire de contact
- **Hébergement : Vercel** (déploiement **manuel**, voir plus bas)

## Démarrage rapide

```bash
npm install        # ou `npm ci` pour une install reproductible (lockfile figé)
npm run dev        # http://localhost:3000  → redirige vers /fr
npm run build      # build de production
npm run start      # sert le build (après `npm run build`)
npm run lint       # ESLint
```

Il n'existe pas de variable d'environnement obligatoire pour lancer le site en local.
Le formulaire de contact requiert une clé **Resend** (`RESEND_API_KEY`) pour envoyer réellement les e-mails ; sans elle, le reste du site fonctionne.

## Structure

```
app/
  [locale]/            pages i18n (fr/en/es/de/pt)
    page.tsx           landing du hub
    vs/[competitor]/   pages comparatives
    docs/              docs produits (inbox / launch / security)
    blog/              blog + articles [slug]
    legal/             mentions · privacy · terms · cookies
    layout.tsx         layout racine i18n (provider next-intl, bannière cookies, analytics)
  page.tsx, about/     mode portfolio (legacy — même repo, switché par host)
  api/contact/         formulaire de contact (Resend, anti-spam, rate-limit)
  llms.txt, llms-full.txt   route handlers SEO/GEO pour les LLM
components/            Nav, CookieBanner, ConsentAwareAnalytics, logo, icônes
messages/              5 dictionnaires de traduction (fr/en/es/de/pt).json
i18n/                  routing.ts (locales) + request.ts (chargement messages)
lib/                   contenu éditorial (blog, comparatifs /vs)
middleware.ts          redirection de locale next-intl
```

## Internationalisation

5 locales : **fr** (défaut) · **en** · **es** · **de** · **pt**. La locale vit dans l'URL (`/fr`, `/en`, …).
La liste canonique est dans [`i18n/routing.ts`](i18n/routing.ts).

> **Règle :** toute chaîne d'interface se modifie dans **les 5 fichiers `messages/*.json` en parallèle**.

## Déploiement (MANUEL)

Pousser sur GitHub **ne met rien en ligne**. Le déploiement est manuel :

```bash
npx vercel --prod
```

Puis vérifier que c'est réellement live :

```bash
curl -sI https://aevia.services/fr | head -2
```

`~/aevia` et `valentin-milliand.vercel.app` partagent le **même projet Vercel** — déployer ici met à jour les deux.

## Légal & marque

- Éditeur : **Aevia WS** (Valentin Milliand, auto-entrepreneur) — **SIREN 852 546 225**, RCS Bourg-en-Bresse.
- L'adresse personnelle **n'est jamais affichée** (« communiquée sur demande »).
- **Aucune URL contenant « sky »** dans le copy visible côté front.
- `package.json > name` vaut `"portfolio"` (héritage historique — ne pas renommer).

## Documentation

Voir [`docs/`](docs/) — index dans [`docs/README.md`](docs/README.md).
Points d'entrée : [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) · [`docs/GLOSSARY.md`](docs/GLOSSARY.md).
La configuration destinée aux agents de code vit dans [`.claude/`](.claude/) et [`AGENTS.md`](AGENTS.md).
