$PROJECT_ROOT = "$PSScriptRoot/.."
cd $PROJECT_ROOT
docker pull stgit.dcs.gla.ac.uk:5050/team-project-h/2023/sh34/sh34-main:latest
docker run -it -p 3000:3000 -p 7575:7575 -v .:/sh34 stgit.dcs.gla.ac.uk:5050/team-project-h/2023/sh34/sh34-main:latest /root/startup.bash
