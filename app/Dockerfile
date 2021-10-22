FROM node:14

COPY app.js package.json /app/
WORKDIR /app

RUN npm install

ENTRYPOINT ["node", "app.js"]