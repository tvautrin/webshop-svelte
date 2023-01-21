FROM node:latest AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:latest
WORKDIR /app
COPY --from=build /app/build .
COPY --from=build /app/package.json .

EXPOSE 3000
CMD ["node", "index.js"]