
ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine AS build-image

# Set working directory
ENV APP_HOME /app
WORKDIR $APP_HOME

COPY package.json package-lock.json ./
# install dependencies

COPY . .
# build
RUN npm run build
# remove dev dependencies
RUN npm prune --production

FROM node:${NODE_VERSION}-alpine 

ENV APP_HOME /app
WORKDIR $APP_HOME
# update npm
RUN npm install -g npm@10.8.1
# copy from build image
COPY --from=build-image $APP_HOME/package.json ./package.json
COPY --from=build-image $APP_HOME/node_modules ./node_modules
COPY --from=build-image $APP_HOME/.next ./.next
COPY --from=build-image $APP_HOME/public ./public

EXPOSE 3000

CMD ["npm", "start"]