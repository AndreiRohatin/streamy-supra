FROM node:16.18.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY ./ ./
RUN yarn build

CMD [ "yarn", "start" ]
