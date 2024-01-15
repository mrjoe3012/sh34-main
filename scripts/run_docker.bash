#!/bin/bash
PROJECT_ROOT="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )/.."
IMG_TAG='stgit.dcs.gla.ac.uk:5050/team-project-h/2023/sh34/sh34-main:latest'
cd "${PROJECT_ROOT}" || exit 1
docker pull "${IMG_TAG}"
docker run  -it --net=host -v .:/sh34 "${IMG_TAG}" /root/startup.bash
