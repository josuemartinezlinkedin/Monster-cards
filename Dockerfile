FROM node:12.16.1
WORKDIR /app
COPY ["package*.json", "yarn.lock"] ./
RUN npm install && yarn install --pure-lockfile
COPY . .
ENV PORT=8080
EXPOSE 8080
CMD ["yarn","start"]
