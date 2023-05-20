#!/bin/bash

echo "www.esna.cloud" > build/CNAME
git add .
git commit -a
git push origin v11-react-step-3
git subtree push --prefix build origin gh-pages
