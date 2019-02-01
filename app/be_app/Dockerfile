FROM node:latest

# set working directory

WORKDIR /app

# install and  app dependencies
COPY ./app .

RUN npm install

EXPOSE 3000

# start app
CMD ["npm", "start"]