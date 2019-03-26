FROM node:8.4.0-alpine

WORKDIR /app
COPY package*.json ./

RUN npm config set unsafe-perm true

RUN npm install -g -s --no-progress yarn && \
    yarn && \
    yarn cache clean

COPY . .

EXPOSE 80

CMD ["yarn", "start"]
