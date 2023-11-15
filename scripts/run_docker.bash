#!/bin/bash
PROJECT_ROOT="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )/.."
cd "${PROJECT_ROOT}" || exit 1
docker pull stgit.dcs.gla.ac.uk:5050/team-project-h/2023/sh34/sh34-main:latest
docker run  -it --net=host -v .:/sh34 stgit.dcs.gla.ac.uk:5050/team-project-h/2023/sh34/sh34-main:latest /root/startup.bash
