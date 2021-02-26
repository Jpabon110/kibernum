FROM node:10-alpine

WORKDIR /app

COPY . .

RUN npm i

CMD ["node", "server.js"]