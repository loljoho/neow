# Dockerfile for Front End React application

# base image
FROM node:14.15

# set working directory
WORKDIR /app/client

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy package.json and install dependencies
COPY package*.json ./
RUN npm install --silent && npm install react-scripts@4.0.0 -g --silent
# RUN npm install cra-build-watch@3.4.0 -g --silent
