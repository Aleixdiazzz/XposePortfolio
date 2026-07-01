#!/usr/bin/env bash
# Deploy the static site. Run from repo root: git pull && bash deploy/deploy.sh
set -euo pipefail

cd "$(dirname "$0")/.."

# xpose-network must exist (shared with other containers). Create if missing.
docker network inspect xpose-network >/dev/null 2>&1 || docker network create xpose-network

docker compose -f docker-compose.static.yml up -d --build

docker image prune -f
