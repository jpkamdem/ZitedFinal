#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add .
git commit -m 'Déploiement'
git push -f git@github.com:jpkamdem/webdoc-zited.git master:gh-pages

cd -