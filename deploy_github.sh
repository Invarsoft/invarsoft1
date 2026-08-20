#!/bin/bash

echo "========================================================"
echo "       INVARSOFT - GITHUB & VERCEL DEPLOYMENT"
echo "========================================================"
echo ""

read -p "Enter your GitHub Repository URL (e.g. https://github.com/username/Invarsoft.git): " REPO_URL

if [ -z "$REPO_URL" ]; then
  echo "[ERROR] Repository URL cannot be empty!"
  exit 1
fi

echo ""
echo "[1/4] Staging files..."
git add .

echo "[2/4] Creating commit..."
git commit -m "Deploy InvarSoft Production Next.js App" || true

echo "[3/4] Setting main branch & remote URL..."
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"

echo "[4/4] Pushing to GitHub..."
git push -u origin main --force

echo ""
echo "========================================================"
echo "  [SUCCESS] Pushed to GitHub!"
echo "  Deploy on Vercel: https://vercel.com/new"
echo "========================================================"
