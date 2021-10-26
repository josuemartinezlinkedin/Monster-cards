FROM node:17
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN npm install && yarn install --pure-lockfile
COPY ./ ./
ENV PORT=8080
EXPOSE 8080
CMD ["yarn","start"]
