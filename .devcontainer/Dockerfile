FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-16

ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN mkdir -p /app/node_modules

RUN chown -R $USER_UID:$USER_GID /home/$USERNAME /app;

RUN apt-get update \
   && apt-get -y install --no-install-recommends git-lfs \
