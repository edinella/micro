FROM node:14-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src ./src
COPY tsconfig.json ./
RUN npm run build
RUN npm prune --production

FROM gcr.io/distroless/nodejs:14
WORKDIR /app
COPY --from=builder /app ./
CMD ["dist/index.js"]
