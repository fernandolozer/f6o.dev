#!/usr/bin/env bash
# Copy public/ to the VPS web root and install the Caddy site file.
# Usage: ./deploy/deploy.sh user@vps-host
# Override the Caddy sites dir with CADDY_SITES=/path ./deploy/deploy.sh ...
set -euo pipefail

HOST="${1:?usage: $0 user@host}"
DEST=/srv/apps/f6o.dev
SITES="${CADDY_SITES:-/etc/caddy/sites}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

ssh "$HOST" "sudo mkdir -p $DEST && sudo chown \$(id -un):\$(id -gn) $DEST"
rsync -avz --delete "$ROOT/public/" "$HOST:$DEST/"

scp "$ROOT/deploy/f6o.dev.caddy" "$HOST:/tmp/f6o.dev.caddy"
ssh "$HOST" "sudo install -m 644 /tmp/f6o.dev.caddy $SITES/f6o.dev.caddy && rm /tmp/f6o.dev.caddy \
  && sudo caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile \
  && sudo systemctl reload caddy"

echo "Deployed to https://f6o.dev"
