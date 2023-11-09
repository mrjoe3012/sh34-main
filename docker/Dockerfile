FROM ubuntu:22.04
COPY docker/setup-files /setup-files
COPY src/requirements.txt /setup-files/requirements.txt
RUN /bin/bash /setup-files/setup.bash
