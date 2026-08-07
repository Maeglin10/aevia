# AUDIT_REPORT — Aevia Hub (vitrine, PAS un produit vendu)

> Date : 2026-08-07. Audit **léger** conforme au rôle : le hub est une **présentation** de la suite, pas un produit facturé. La barre n'est donc pas « prod SaaS » mais « site marketing impeccable » : **exactitude du contenu, SEO/GEO, i18n, perf/a11y**.
> Deploy : **aucun** sans « déploie ».

## Verdict

Site **Next.js i18n** (locale routing, `messages/`, middleware) avec `robots.ts` + `sitemap.ts` générés — bonne base SEO. Pour une vitrine, le risque n°1 n'est pas la sécurité mais le **contenu périmé** (prix, promesses produit) et la **cohérence des liens** vers les vrais produits (Inbox surtout).

## Scorecard (/10, barre = vitrine)

| Dimension | Note | Base |
|---|---|---|
| Exactitude contenu / prix | ?/10 | **À vérifier manuellement** — les prix `llms.txt` avaient déjà été trouvés périmés lors de l'offensive SEO. Re-vérifier prix + promesses vs offre réelle Inbox. |
| SEO / GEO | 7/10 | `robots.ts` + `sitemap.ts` + i18n hreflang présents. |
| i18n | 7/10 | Routing par locale + `messages/`. Vérifier qu'aucune clé ne manque par langue. |
| Perf / a11y | ?/10 | À mesurer (Lighthouse) — non fait ici. |
| **Global** | **~6,5/10** | Bonne base ; à finir côté exactitude + mesure perf/a11y. |

## Findings

- **P0 (contenu)** — Re-vérifier **tous les prix et promesses** affichés vs l'offre réelle (surtout Inbox). Une vitrine qui affiche un prix faux est pire qu'un bug technique.
- **P1** — Vérifier que **tous les CTA/liens** pointent vers les bons produits en prod (Inbox = destination principale).
- **P1** — Complétude i18n : aucune clé de traduction manquante/anglais résiduel par locale.
- **P2** — Mesure Lighthouse (perf, a11y, SEO) sur les pages clés + correction des écarts.
- **P2** — Nettoyage doc racine (`AGENTS.md`, `docs/`) « présent vs passé ».

## Déjà bon
- SEO technique en place (robots, sitemap, hreflang), i18n structuré.

## Prochaines actions
1. Passe d'exactitude contenu/prix (manuel) — priorité vitrine.
2. Vérif liens/CTA vers produits en prod.
3. Lighthouse + complétude i18n.
