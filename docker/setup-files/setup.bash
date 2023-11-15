#!/bin/bash
#########################################################################################
# This script runs all of the necessary steps to set up the sh-34 docker image. This    #
# involves installing prerequisite packages.                                            #
#########################################################################################

REPO="/setup-files/sh34"

# pre-requisite packages
apt update
apt install -y \
    python3.10 python3.10-venv python3-pip git \
    shellcheck nano || exit 1

# install nodejs 20.9.0
apt-get install -y ca-certificates curl gnupg || exit 1
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key |  gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
NODE_MAJOR=20
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" |  tee /etc/apt/sources.list.d/nodesource.list
apt-get update && apt-get install -y nodejs
# update npm
npm install -g npm@10.2.3

# create virtual environment
mkdir /root/.venv
python3 -m venv /root/.venv/sh34
echo "source /root/.venv/sh34/bin/activate" >> "${HOME}/.bashrc"
source /root/.venv/sh34/bin/activate

# install requirements
sed -i '/sh34/d' "${REPO}/src/requirements.txt" # remove sh34 package from requirements list, as pip will not be able to find it
python3 -m pip install -r "${REPO}/src/requirements.txt"
python3 -m pip install -e "${REPO}/src"

# move startup script to home
mv /setup-files/startup.bash "${HOME}"

# delete setup files
rm -rf /setup-files
