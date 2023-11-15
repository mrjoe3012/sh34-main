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

echo "Installing project dependencies..."

# python requirements
python3 -m pip install -r /sh34/src/requirements.txt

# node dependencies
npm install /sh34/frontend/sh34

echo "Finished installing dependencies."
