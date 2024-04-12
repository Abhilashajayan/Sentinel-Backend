FROM node:21
ENV MONGO_URI='mongodb+srv://abhilashajayan2001:7e2mwkQsfB7V8VH8@cluster0.nadpney.mongodb.net/'
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3003

CMD ["npm", "run", "dev"]
