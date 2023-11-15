#!/bin/bash
#################################################
# This script runs on docker container startup. #
# It updates all project dependencies.          #
#################################################

# ensure the project code is in the right place
if [[ ! -d /sh34 ]]; then
    echo "ERROR: The /sh34 directory was not located."
    exit 1
fi

cd /sh34 || exit 1

# source virtual environment
source /root/.venv/sh34/bin/activate

echo "Installing project dependencies..."

# python requirements
python3 -m pip install -e /sh34/src/
python3 -m pip install -r /sh34/src/requirements.txt

# node dependencies
pushd frontend/sh34 || exit 1
npm install 
popd || exit 1

echo "Finished installing dependencies."

bash
