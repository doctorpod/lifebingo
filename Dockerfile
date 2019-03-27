FROM node:8

WORKDIR /app

COPY package*.json /app/

RUN npm ci --only=production

COPY . /app/

EXPOSE 8888

CMD [ "node", "index.js" ]