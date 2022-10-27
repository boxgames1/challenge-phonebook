FROM node:16

WORKDIR /app

ENV HOST=0.0.0.0
ENV NODE_ENV=development
ENV PORT=4000
EXPOSE 4000

COPY ./package.json /app
COPY ./yarn.lock /app
RUN yarn

COPY . /app

CMD ["yarn", "start-watch"]