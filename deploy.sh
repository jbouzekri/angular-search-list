#!/bin/bash

git clone git@github.com:jbouzekri/angular-search-list.git /tmp/angular-search-list
COMMIT_HASH=`git rev-parse HEAD`
echo $COMMIT_HASH
cd /tmp/angular-search-list
git checkout gh-pages
cd -
ng build
sed -i 's/<base href="\/">/<base href="\/angular-search-list\/">/' dist/index.html
cp -rf dist/* /tmp/angular-search-list/
cd /tmp/angular-search-list
git add .
git commit -m "release : $COMMIT_HASH"
git push
cd -
