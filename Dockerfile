FROM node:14

WORKDIR /hospini
COPY package.json .
RUN npm install
COPY . .
CMD [ "node", "server.js" ]
