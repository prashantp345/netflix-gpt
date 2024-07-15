#React app image
FROM node:18-alpine

WORKDIR /react-docker-example/
COPY . /react-docker-example/
RUN npm ci

CMD [ "npm", "start" ]