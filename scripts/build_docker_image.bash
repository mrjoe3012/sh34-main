#!/bin/bash
PROJECT_ROOT="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )/.."
IMG_TAG='stgit.dcs.gla.ac.uk:5050/team-project-h/2023/sh34/sh34-main'
REPO_URL='git@stgit.dcs.gla.ac.uk:team-project-h/2023/sh34/sh34-main.git'
pushd "${PROJECT_ROOT}" || exit 1

# gather commandline arguments
while getopts ":r:" opt; do
  case $opt in
    r)
      REPO_URL="${OPTARG}"
      ;;
    \?)
      echo "Invalid option: -$OPTARG"
      exit 1
      ;;
  esac
done

if [[ -e docker/setup-files/sh34 ]]; then
    read -rp "Deleting 'docker/setup-files/' and re-cloning, this is recommended. Continue? (y/n): "
    if [[ "${REPLY}" != "y" ]]; then
        exit 1
    fi
fi
rm -rf docker/setup-files/sh34
if [[ -f docker-build.log ]]; then
    rm docker-build.log
fi
git clone --recursive "${REPO_URL}" docker/setup-files/sh34 || exit 1
docker build --progress=plain -f docker/Dockerfile -t "${IMG_TAG}" . | tee docker-build.log
read -rp "Would you like to push the new image? (y/n): "
if [[ "${REPLY}" == "y" ]]; then
    docker push "${IMG_TAG}"
fi
popd || exit 1
exit 0
