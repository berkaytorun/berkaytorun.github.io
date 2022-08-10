FROM node:18-alpine
WORKDIR /portfolio-website
ENV PATH ="./node_modules/.bin:$PATH"
COPY . .
RUN yarn run build
CMD ["yarn", "start"]