FROM node:23.3.0 as build
WORKDIR /usr/src/app
COPY . .
RUN rm -R environment/
RUN npm i
RUN npm run build
CMD ["npm", "start"]
