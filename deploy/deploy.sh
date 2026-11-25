#!/usr/bin/env bash
# Copy public/ to the VPS web root.
# Usage: ./deploy/deploy.sh user@vps-host
set -euo pipefail

HOST="${1:?usage: $0 user@host}"
DEST=/srv/f6o.dev
SRC="$(cd "$(dirname "$0")/.." && pwd)/public/"

ssh "$HOST" "sudo mkdir -p $DEST && sudo chown \$(id -un):\$(id -gn) $DEST"
rsync -avz --delete "$SRC" "$HOST:$DEST/"
echo "Deployed to https://f6o.dev"
