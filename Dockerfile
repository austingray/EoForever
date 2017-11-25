FROM node:9-alpine

# Create app dir
WORKDIR /usr/src/app

# install process manager
RUN yarn global add pm2

# install knex
RUN yarn global add knex

# install app deps
COPY package.json .
RUN yarn

# bundle app source
COPY . .
