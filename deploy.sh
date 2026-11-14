#!/bin/bash
# Déploiement du hub Aevia en production.
# Usage : ./deploy.sh
set -euo pipefail

# ─────────────────────────────────────────────────────────────────────────────
# Le jeton passe par l'ENVIRONNEMENT, jamais par `--token`.
#
# Le CLI Vercel RÉIMPRIME la valeur de `--token` dans sa propre sortie. Ce
# script capturait cette sortie dans `DEPLOY_OUTPUT` puis en affichait la fin :
# le jeton pouvait donc atterrir dans un terminal, un journal ou un
# copier-coller. `VERCEL_API_TOKEN` a déjà été brûlé deux fois pour cette
# raison exacte. La variable d'environnement, elle, n'est jamais réécrite.
# ─────────────────────────────────────────────────────────────────────────────
VERCEL_API_TOKEN=$(grep -m1 '^VERCEL_API_TOKEN=' /Users/milliandvalentin/skybot-inbox/.env | cut -d= -f2-)
export VERCEL_API_TOKEN
if [ -z "${VERCEL_API_TOKEN:-}" ]; then
  echo "VERCEL_API_TOKEN introuvable dans skybot-inbox/.env" >&2
  exit 1
fi

RACINE="$(cd "$(dirname "$0")" && pwd)"
PROJET="prj_l0Nuokxgag6b4asiwkhmZZY4VLNI"

echo "Déploiement du hub Aevia…"
# La sortie n'est plus capturée : elle va directement à l'écran. Rien à
# réafficher, donc rien à recopier par mégarde.
vercel deploy --prod --yes --cwd "$RACINE"

# Le déploiement ne suffit pas : on vérifie que l'URL SERVIE répond, parce que
# le CLI sort en 0 même quand la construction a échoué.
#
# 2026-11-15 : sans `teamId`, les deux appels API visaient le compte personnel
# et l'alias échouait EN SILENCE (« Alias : ? ») : aevia.vercel.app restait sur
# l'ancien déploiement et servait un doublon du hub à Google. Équipe explicite,
# et un alias manquant fait désormais échouer le script.
EQUIPE="team_IAhDhsMNFPHNmYUhBJCeXPf9"
DEPLOY_UID=$(curl -s "https://api.vercel.com/v6/deployments?projectId=$PROJET&teamId=$EQUIPE&limit=1&target=production" \
  -H "Authorization: Bearer $VERCEL_API_TOKEN" \
  | python3 -c "import sys,json; print(json.load(sys.stdin)['deployments'][0]['uid'])")

ALIAS=$(curl -s -X POST "https://api.vercel.com/v2/deployments/$DEPLOY_UID/aliases?teamId=$EQUIPE" \
  -H "Authorization: Bearer $VERCEL_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"alias":"aevia.vercel.app"}' \
  | python3 -c "import sys,json; print(json.load(sys.stdin).get('alias',''))")
if [ "$ALIAS" != "aevia.vercel.app" ]; then
  echo "ÉCHEC : alias aevia.vercel.app non posé — il servirait l'ancien hub (doublon)." >&2
  exit 1
fi
echo "Alias : $ALIAS"

echo -n "Vérification de l'URL servie : "
curl -s -o /dev/null -w "%{http_code}\n" -L https://aevia.services/
echo -n "aevia.vercel.app doit rediriger (308) : "
curl -s -o /dev/null -w "%{http_code}\n" https://aevia.vercel.app/fr
