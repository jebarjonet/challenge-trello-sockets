FROM node:7

RUN mkdir -p /home/app
WORKDIR /home/app

RUN apt-get -y update
RUN npm install -g nodemon webpack eslint

EXPOSE 3000

CMD npm run serve
