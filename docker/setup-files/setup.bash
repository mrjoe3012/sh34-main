#!/bin/bash
#########################################################################################
# This script runs all of the necessary steps to set up the sh-34 docker image. This    #
# involves installing prerequisite packages.                                            #
#########################################################################################

# pre-requisite packages
apt update
apt install -y \
    python3.10 python3.10-venv python3-pip git \
    sudo shellcheck nano

# create virtual environment
mkdir /root/.venv
python3 -m venv /root/.venv/sh34
echo "source /root/.venv/sh34/bin/activate" >> "${HOME}/.bashrc"
source /root/.venv/sh34/bin/activate

# install requirements
sed -i '/sh34/d' /setup-files/requirements.txt # remove sh34 package from requirements list, as pip will not be able to find it
python3 -m pip install -r /setup-files/requirements.txt

# delete setup files
rm -rf /setup-files
