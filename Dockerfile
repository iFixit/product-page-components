FROM node:13

WORKDIR /opt/product-page-components
RUN chown node .

USER node

COPY . .
RUN npm install
