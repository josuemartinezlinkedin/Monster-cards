FROM node:12.16.1
WORKDIR /app
COPY [package*.json, yarn.lock] ./
RUN npn install && yarn install --pure-lockfile
COPY . .
ENV Port=3000
EXPOSE 3000
CMD ["yarn","start"]
