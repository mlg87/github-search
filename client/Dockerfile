FROM node:alpine

LABEL author="Mason Goetz - @mlg87 - <masonlgoetz@gmail.com>"

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/node_modules/.bin` to $PATH
ENV PATH /usr/src/node_modules/.bin:$PATH

# copy src for hot reloading
COPY src /usr/src/app/src
COPY src ./src

# install and cache app dependencies
COPY package.json /usr/src/package.json
COPY yarn.lock /usr/src/yarn.lock
RUN yarn
# get react-scripts on the image
RUN yarn global add react-scripts@1.1.4

# start app
CMD ["yarn", "start"]
