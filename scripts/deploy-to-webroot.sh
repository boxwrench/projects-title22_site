#!/usr/bin/env bash
set -euo pipefail

SRC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST_DIR="/var/www/projects.title22.org/html"

DRY_RUN=0
NO_DELETE=0
ALLOW_DIRTY=0
RELOAD_NGINX=0

usage() {
  cat <<'EOF'
Usage: ./scripts/deploy-to-webroot.sh [options]

Options:
  --dry-run       Show what would change without writing files
  --no-delete     Do not delete files in webroot that are missing in source
  --allow-dirty   Allow deploying with uncommitted/untracked changes
  --reload-nginx  Reload nginx after deploy
  -h, --help      Show help

Default deploy target:
  /var/www/projects.title22.org/html
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run) DRY_RUN=1 ;;
    --no-delete) NO_DELETE=1 ;;
    --allow-dirty) ALLOW_DIRTY=1 ;;
    --reload-nginx) RELOAD_NGINX=1 ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1" >&2
      usage >&2
      exit 1
      ;;
  esac
  shift
done

if ! command -v rsync >/dev/null 2>&1; then
  echo "rsync is required but not installed." >&2
  exit 1
fi

if [[ ! -d "$DEST_DIR" ]]; then
  echo "Destination not found: $DEST_DIR" >&2
  exit 1
fi

if [[ $ALLOW_DIRTY -eq 0 ]]; then
  if [[ -n "$(git -C "$SRC_DIR" status --porcelain)" ]]; then
    echo "Source repo has uncommitted/untracked changes." >&2
    echo "Commit/stash first, or re-run with --allow-dirty." >&2
    exit 1
  fi
fi

RSYNC_FLAGS=(-av --human-readable --itemize-changes)
if [[ $DRY_RUN -eq 1 ]]; then
  RSYNC_FLAGS+=(--dry-run)
fi
if [[ $NO_DELETE -eq 0 ]]; then
  RSYNC_FLAGS+=(--delete)
fi

EXCLUDES=(
  --exclude ".git/"
  --exclude ".github/"
  --exclude ".DS_Store"
  --exclude "node_modules/"
  --exclude "__pycache__/"
)

echo "Deploying from: $SRC_DIR"
echo "Deploying to:   $DEST_DIR"
[[ $DRY_RUN -eq 1 ]] && echo "Mode:           DRY RUN"
[[ $NO_DELETE -eq 1 ]] && echo "Delete mode:    OFF (--no-delete)"

rsync "${RSYNC_FLAGS[@]}" "${EXCLUDES[@]}" "$SRC_DIR"/ "$DEST_DIR"/

if [[ $DRY_RUN -eq 0 ]]; then
  if [[ -d "$DEST_DIR/.git" ]]; then
    echo
    echo "Webroot git status:"
    git -C "$DEST_DIR" status -sb || true
  fi
fi

if [[ $RELOAD_NGINX -eq 1 ]]; then
  echo
  echo "Reloading nginx..."
  sudo systemctl reload nginx
fi

echo
echo "Deploy complete."
