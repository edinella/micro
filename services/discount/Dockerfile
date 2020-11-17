FROM node:14-alpine as builder
WORKDIR /app
COPY . ./
RUN npm install

FROM gcr.io/distroless/nodejs:14
WORKDIR /app
COPY --from=builder /app ./
CMD ["index.js"]
