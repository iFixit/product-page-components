FROM node:13

WORKDIR /opt/product-page-components

COPY . .
RUN chown -R node .
USER node

RUN npm install
