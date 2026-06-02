#!/bin/bash
set -euo pipefail

# Usage: ./deploy-github.sh [owner/repo]
# Default pushes to https://github.com/snegovikk/vc
REPO_SLUG="${1:-snegovikk/vc}"
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) is required. Install: brew install gh"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Log in to GitHub first:"
  echo "  gh auth login -h github.com -p https -w"
  exit 1
fi

REMOTE="https://github.com/${REPO_SLUG}.git"

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REMOTE"
else
  git remote add origin "$REMOTE"
fi

if ! gh repo view "$REPO_SLUG" >/dev/null 2>&1; then
  echo "Repository ${REPO_SLUG} not found or not accessible."
  exit 1
fi

git fetch origin main 2>/dev/null || true
if git rev-parse origin/main >/dev/null 2>&1 && ! git merge-base --is-ancestor origin/main HEAD 2>/dev/null; then
  git pull origin main --allow-unrelated-histories --no-rebase --no-edit || true
fi

git push -u origin main

if gh api "repos/${REPO_SLUG}/pages" >/dev/null 2>&1; then
  echo "GitHub Pages already configured."
else
  gh api "repos/${REPO_SLUG}/pages" -X POST \
    -f build_type=legacy \
    -f 'source[branch]=main' \
    -f 'source[path]=/'
fi

OWNER="${REPO_SLUG%%/*}"
REPO_NAME="${REPO_SLUG##*/}"

echo
echo "Repository: https://github.com/${REPO_SLUG}"
echo "Live site:    https://${OWNER}.github.io/${REPO_NAME}/"
