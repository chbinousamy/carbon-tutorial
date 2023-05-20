#!/bin/bash

yarn
yarn start
yarn build
echo "www.esna.cloud" > build/CNAME
