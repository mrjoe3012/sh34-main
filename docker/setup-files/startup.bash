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

# setup mongodb
systemctl start mongod
export SH34_DB='mongodb://127.0.0.1:27017'

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

# start up a tmux session with the software running
tmux new-session -d -s "SH34 Session"
tmux rename-window -t 0 "Backend"
tmux send-keys "sh34-backend" Enter
tmux split-window -h
tmux send-keys -t 1 "cd frontend/sh34; node database_creation/initialise_database.js; npm run dev" Enter
tmux attach-session -t "SH34 Session"
