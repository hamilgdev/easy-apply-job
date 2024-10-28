ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine AS base

# Set working directory
ENV APP_HOME /usr/src/app
WORKDIR $APP_HOME

COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .
# build
RUN npm run build

# Base image for production
FROM node:${NODE_VERSION}-alpine AS production

# Set working directory
ENV APP_HOME /usr/src/app
WORKDIR $APP_HOME

RUN npm install -g npm@10.8.1
COPY package*.json ./
# Install production dependencies.
RUN npm ci --only=production && npm cache clean --force

# Bundle app source
COPY . .

# Copy the bundled code
COPY --from=base $APP_HOME/dist ./dist

CMD [ "node", "dist/main.js" ]