# Glossaire — Aevia Hub

Vocabulaire du dépôt, pour lever les ambiguïtés récurrentes.

## Entités & marque

- **Aevia WS** — nom commercial de l'auto-entreprise de **Valentin Milliand**. Éditeur du site. **SIREN 852 546 225**, RCS Bourg-en-Bresse. Contact : `valentinmilliand@aevia.services`. L'adresse personnelle n'est **jamais** affichée (« communiquée sur demande »).
- **Hub** — **ce dépôt** (`~/aevia`), la vitrine servie sur **`aevia.services`**. Il **ne facture rien** : il présente l'offre et renvoie vers les produits.
- **`aevia.services`** — le domaine officiel. L'ancien **`aevia.io`** a été entièrement retiré (0 occurrence résiduelle).

## Les produits (vendus ailleurs, présentés par le Hub)

| Produit | Ce que c'est | Dépôt | Sous-domaine |
|---|---|---|---|
| **Inbox** | CRM / boîte de réception multicanal unifiée | `skybot-inbox` | `inbox.aevia.services` |
| **Launch** | Site web professionnel livré en ~2 h | `skylaunch` | `launch.aevia.services` |
| **Security** | Audit de sécurité + correctifs à la carte, prix fixe | `skysecurity` | `security.aevia.services` |

Les comptes et les paiements vivent dans ces dépôts, pas dans le Hub.

## Grilles tarifaires canoniques (source de vérité — à répliquer partout)

À garder identiques sur toutes les surfaces qui les affichent (page, JSON-LD du layout, `llms.txt` / `llms-full.txt`, docs, textes légaux) :

- **Inbox** — 5 paliers mensuels **49 / 99 / 199 / 399 / 999 €** (Starter → Scale) **+ 100 € de setup** unique.
- **Launch** — paiement **unique** **399 / 599 / 899 / 1499 €** + **maintenance 20 €/mois**.
- **Security** — **à la carte, prix fixe, sans abonnement** : scan gratuit · SSL 149 € · en-têtes 199 € · DNS SPF/DKIM/DMARC 349 € · CSP 499 € · Core Web Vitals 790 € · durcissement 1490–2490 €.
  - ⚠️ **Security n'est pas un abonnement.** Tout texte le décrivant en « abonnement mensuel » (ex. 0/29/89 €/mois) reflète un **modèle SaaS abandonné** (depuis le 2026-07-25) et est à corriger.

## Concepts du dépôt

- **Mode portfolio** — les pages historiques `app/page.tsx` + `app/about/`, hors segment de locale, dans le **même repo et le même projet Vercel** que le Hub, servies selon le host. Legacy, conservées ; à ne pas confondre avec les pages `app/[locale]/*` du Hub.
- **`package.json > name = "portfolio"`** — héritage de ce mode portfolio. **Ne pas renommer.**
- **Consentement (`aevia-consent`)** — clé `localStorage` où la bannière cookies stocke le choix. Événements associés : `aevia-consent-updated` (choix enregistré → analytics se (dé)charge) et `aevia-consent-reopen` (lien « Gérer les cookies » → la bannière se rouvre pour permettre le retrait).

## Désambiguïsation « Aevia »

- **« Aevia » (Eiffage)** — homonyme sans rapport : **Aevia** est une filiale « génie électrique / énergie » du groupe **Eiffage** (à ne pas confondre avec **Eiffe**/autres). Notre entité est **Aevia WS**. La désambiguïsation se fait par le **SIREN 852 546 225** et les liens `sameAs` vers les registres, déjà présents dans le JSON-LD du layout.
