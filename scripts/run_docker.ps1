$PROJECT_ROOT = "$PSScriptRoot/.."
cd $PROJECT_ROOT
docker pull joe3012/sh34:latest
docker run -it -p 3000:3000 -p 7575:7575 -v .:/sh34 joe3012/sh34:latest /root/startup.bash
