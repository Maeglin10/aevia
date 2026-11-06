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
DEPLOY_UID=$(curl -s "https://api.vercel.com/v6/deployments?projectId=$PROJET&limit=1" \
  -H "Authorization: Bearer $VERCEL_API_TOKEN" \
  | python3 -c "import sys,json; print(json.load(sys.stdin)['deployments'][0]['uid'])")

curl -s -X POST "https://api.vercel.com/v2/deployments/$DEPLOY_UID/aliases" \
  -H "Authorization: Bearer $VERCEL_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"alias":"aevia.vercel.app"}' \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print('Alias :', d.get('alias','?'))"

echo -n "Vérification de l'URL servie : "
curl -s -o /dev/null -w "%{http_code}\n" -L https://aevia.services/
