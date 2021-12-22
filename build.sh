#!/bin/bash

action=${1:-"build"}
version=${2:-"latest"}

build(){
  yarn config set registry https://registry.npm.taobao.org
  yarn install
  yarn build:prod
}

deploy(){
  docker build -t leiax00/universe-view:"$1" .
  dockerId=$(docker ps -a |grep universe-view |awk '{print $1}')
  if [ "$dockerId" != "" ]; then
    printf "Find running container, need delete:\n%s" "$(docker ps -a |grep universe-view)"
    docker rm "$dockerId" -f
  fi
  docker run -p 11080:80 -d leiax00/universe-view
}

echo "current step: $action"
echo "current version: $version"
case "$action" in
"build")
  echo '='*50 + 'start to build' + '='*50
  build
  echo '='*50 + 'success to build' + '='*50
  ;;
"deploy")
  echo '='*50 + 'start to deploy' + '='*50
  deploy "$version"
  echo '='*50 + 'success to deploy' + '='*50
  ;;
esac

