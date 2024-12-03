FROM node:16-alpine AS client
WORKDIR /app/client
COPY client/package.json ./
RUN npm install
COPY client ./
RUN npm run build

FROM node:16-alpine AS server
WORKDIR /app/server
COPY server/package.json ./
RUN npm install
COPY server ./
COPY --from=client /app/client/build /app/server/public
CMD ["node", "server.js"]
