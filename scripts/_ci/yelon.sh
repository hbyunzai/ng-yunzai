#!/usr/bin/env bash

# bash ./scripts/_ci/yelon.sh

set -e

cd $(dirname $0)/../..

echo "Download latest @yelon version"
rm -rf yelon-builds
git clone --depth 1 https://github.com/hbyunzai/yelon-builds.git
rm -rf node_modules/@yelon
# rm -rf node_modules/ng-yunzai
rsync -am yelon-builds/ node_modules/
NG_YUNZAI_VERSION=$(node -p "require('./node_modules/ng-yunzai/package.json').version")
rm -rf yelon-builds
echo "Using ng-yunzai version: ${NG_YUNZAI_VERSION}"
