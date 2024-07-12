ARG NODE_VERSION=20.10.0

# install dependencies
FROM node:${NODE_VERSION}-alpine AS base

# Set working directory
ENV APP_HOME /var/www/stack
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

# Copy the directory and its content
COPY . .
COPY package.json tsconfig.json tsconfig.build.json ./
RUN npm install -g npm@10.8.2
RUN npm install

# Allows to execute the application
RUN adduser --disabled-password nestjs
RUN chown -R nestjs:nestjs $APP_HOME
USER nestjs

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]