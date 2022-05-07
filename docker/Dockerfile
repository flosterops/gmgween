## $ docker login git2.services.gamigo.com:443 --username first.last
## $ docker build -f docker/Dockerfile .

## Location of containers
ARG DOCKER_REGISTRY=docker.io

## Versions
ARG NODE_TAG=14.18.1-bullseye-slim


## The single build stage
FROM ${DOCKER_REGISTRY}/node:${NODE_TAG} as image

## Environment
ENV YARN_CACHE_FOLDER=/tmp/yarn

## The main directory for application
WORKDIR /srv/app

## Files required for `yarn install`
COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./.yarnrc ./

## Optionally copy yarn offline mirror and node_modules prepared outside `docker build`.
## At least one file have to be existing so we copy extra file to satisfy COPY
COPY ./.yarnrc ./.apt*/ ./.apt/
COPY ./.yarnrc ./.yarn-offline-mirror*/ ./.yarn-offline-mirror/

## Collect the NPM packages and build the Docker cache for next stage
RUN yarn install --prefer-offline --pure-lockfile

## Install tini
RUN set -eux; \
  mkdir -p /srv/app/.apt/cache/archives/partial /srv/app/.apt/state/lists/partial; \
  apt-get -q -o Dir::Cache=/srv/app/.apt/cache -o Dir::State=/srv/app/.apt/state update; \
  apt-get -q -o Dir::Cache=/srv/app/.apt/cache -o Dir::State=/srv/app/.apt/state --no-install-recommends install \
  tini

## Copy the source files except these from .dockerignore
COPY . .

## Build `build` directory
RUN yarn build

## Clean up before squash
RUN yarn install --production --prefer-offline --pure-lockfile
RUN rm -rf .apt .yarn-offline-mirror /tmp/*
RUN find /var/cache/apt /var/lib/apt/lists /var/log -type f -delete

## Change environment after build
ENV NODE_ENV=production

## Requried if container is used as a service in Gitlab CI
EXPOSE 3000

## The command to run instead of `yarn start:prod`
## We use tini to prevent hangups of main process because of OOM in child
CMD [ "/usr/bin/tini", "/usr/local/bin/node", "--", "node_modules/.bin/next", "start" ]
