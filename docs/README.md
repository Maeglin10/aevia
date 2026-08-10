# Documentation — Aevia Hub

Index de la doc du dépôt. Le Hub est la **vitrine** de la suite Aevia (voir le [README racine](../README.md)).

## Doc vivante (à jour, à lire en premier)

| Fichier | Contenu |
|---|---|
| [`ARCHITECTURE.md`](ARCHITECTURE.md) | Comment le Hub tient debout : rôle du dépôt, routage i18n, grilles tarifaires canoniques, mode portfolio, consentement cookies, déploiement, garde-fous. |
| [`GLOSSARY.md`](GLOSSARY.md) | Vocabulaire : Hub vs produits, les 3 grilles canoniques, SIREN, mode portfolio, désambiguïsation « Aevia » (Eiffage), domaine. |

## Config d'agent (hors doc humaine — laissée telle quelle)

- [`../.claude/CLAUDE.md`](../.claude/CLAUDE.md) — doc opérationnelle pour agents (deploy, i18n, règles métier, protocole de session).
- [`../.claude/HISTORY.md`](../.claude/HISTORY.md) — journal de session append-only.
- [`../AGENTS.md`](../AGENTS.md) — garde-fou Next 16 (« ce n'est pas le Next.js que tu connais »).

## Audits & gabarits — [`audit/`](audit/)

| Fichier | Nature |
|---|---|
| [`audit/PROMPT_AUDIT.md`](audit/PROMPT_AUDIT.md) | Gabarit **unique** d'audit produit/qualité (fusion des 2 anciens prompts). |
| [`audit/DOC_LEGAL_AUDIT_2026-08.md`](audit/DOC_LEGAL_AUDIT_2026-08.md) | Audit doc + conformité légale (2026-08). |
| [`audit/AUDIT_REPORT_HUB_2026-08-07.md`](audit/AUDIT_REPORT_HUB_2026-08-07.md) | Audit léger + mesure navigateur (archive datée). |
| [`audit/AUDIT_PRODUIT_2026-07-31.md`](audit/AUDIT_PRODUIT_2026-07-31.md) | Audit produit profond (archive datée). |

## Archives — [`archive/`](archive/)

- [`archive/plans/`](archive/plans/) — plans d'avril 2026 exécutés / abandonnés (historique).
