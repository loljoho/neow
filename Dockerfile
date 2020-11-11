# Dockerfile for Front End React application

# base image
FROM node:latest

# set working directory
WORKDIR /app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy package.json and install dependencies
COPY package*.json ./
# RUN npm install --silent
RUN npm install react-scripts@4.0.0 -g --silent

# start app
CMD ["npm", "run watch-frontend"]
