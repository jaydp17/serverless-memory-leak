FROM node:8.10-alpine
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY . /app
CMD npm start
