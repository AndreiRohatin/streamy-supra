FROM node:16.18.0

WORKDIR /usr/src/app

COPY ./roulette/package*.json /usr/src/app/

RUN yarn install

COPY ./roulette /usr/src/app

CMD [ "yarn", "start" ]
