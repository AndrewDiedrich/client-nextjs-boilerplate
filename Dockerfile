FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install+RUN npm run build
# Bundle app source
COPY . /usr/src/app
EXPOSE 3000
CMD ["npm", "run", "start"]