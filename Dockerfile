FROM node:12
RUN mkdir /app
WORKDIR /app
RUN if [ -d /app/node_modules ]; then \
    rm -rf /app/node_modules \
;fi
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
