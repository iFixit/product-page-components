FROM node:13

WORKDIR /opt/product-page-components
COPY . .
RUN npm install
