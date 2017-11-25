FROM node:9

# required for bcrypt
RUN apt-get update
RUN apt-get install -y build-essential
RUN apt-get install -y python

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
