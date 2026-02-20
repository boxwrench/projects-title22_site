#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-8787}"

echo "Serving Title 22 locally on http://127.0.0.1:${PORT}"
echo "Admin URL: http://127.0.0.1:${PORT}/admin.html"
echo "Press Ctrl+C to stop."

exec python3 -m http.server "${PORT}" --bind 127.0.0.1
