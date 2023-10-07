#!/bin/bash

if [ -z "$1" ]; then
  echo "FAILED rename-project: No project name given as an argument"
  exit 1
fi

PROJECT_NAME=$1

npx react-native-rename@latest $PROJECT_NAME
watchman watch-del-all
rm -rf ios/build
cd ios
pod install
cd ..
cd android
./gradlew clean
cd ..
rm -rf node_modules
yarn install
