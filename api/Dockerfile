# had to change from alpine bc of build issues where git wasnt installed (and then tryig to install needed python, so... here we are)
FROM node:9

LABEL author="Mason Goetz - @mlg87 - <masonlgoetz@gmail.com>"

# set working directory
RUN mkdir -p /app
WORKDIR /app

# add `/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install and cache dependencies
ADD package.json /package.json
COPY yarn.lock /yarn.lock
RUN yarn
RUN yarn global add nodemon

COPY . /app

# start app
CMD ["yarn", "start"]