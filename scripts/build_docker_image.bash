#!/bin/bash
PROJECT_ROOT="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )/.."
pushd "${PROJECT_ROOT}" || exit 1
if [[ -e docker/setup-files/sh34 ]]; then
    read -rp "Deleting 'docker/setup-files/' and re-cloning, this is recommended. Continue? (y/n): "
    if [[ "${REPLY}" != "y" ]]; then
        exit 1
    fi
fi
rm -rf docker/setup-files/sh34
git clone --recursive git@stgit.dcs.gla.ac.uk:team-project-h/2023/sh34-main.git docker/setup-files/sh34 || exit 1
docker build --no-cache --progress=plain -f docker/Dockerfile -t joe3012/sh34:latest || exit 1
popd || exit 1
exit 0
