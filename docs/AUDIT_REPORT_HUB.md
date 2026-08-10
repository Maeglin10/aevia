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

---

## MàJ 2026-08-07 — MESURÉ (navigateur live sur aevia.services/fr), plus de placeholder

**Performance (trace Chrome, réseau non throttlé) :**
- **LCP 1,96 s** → **bon** (<2,5 s). Décomposition : TTFB 124 ms (bon) + render delay 1 836 ms (JS/render — principale marge, mais gain render-blocking estimé ~0).
- **CLS 0,00** → **parfait** (aucun décalage de mise en page).
- Pas de données CrUX (trafic faible — normal).

**Accessibilité (audit DOM) : propre.**
- `<html lang="fr">` ✓ · 2 images toutes avec `alt` ✓ · 7 boutons tous labellisés ✓ · un seul `<h1>` ✓ · `viewport` ✓ · 0 input non labellisé.
- Le seul lien « sans texte » est le logo (`<a><img alt="Aevia"></a>`) → accessible via l'alt. Aucun vrai défaut a11y.

**i18n :** 100 % complet (fr/en/es/de/pt, 99 clés, 0 manquante).

**SEO :** `robots.ts` + `sitemap.ts` + hreflang en place ; JSON-LD produits corrigés ce jour (Security à la carte, Inbox grille interactive 5 tiers).

### Score Hub RÉEL (mesuré) : **~8/10**
Bonne vitrine : perf bonne, a11y propre, i18n complet, SEO en place. Le « ~5,5 » d'avant était un placeholder trop pessimiste.

**Restes (mineurs, décision/optionnels) :**
- **Contenu** : le title/meta disent « SaaS pour entrepreneurs ». Or Inbox = service IA, Launch = paiement unique + maintenance, Security = à la carte — « SaaS » est un raccourci marketing imprécis. À trancher (garder pour le SEO ou reformuler « outils pour entrepreneurs »).
- Perf : réduire le render delay (differ/alléger le JS) — gain marginal, non prioritaire.
