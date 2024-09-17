FROM node:22 as builder
WORKDIR /app
ADD package.json /app/package.json
ADD tsconfig.json /app/tsconfig.json
ADD tailwind.config.js /app/tailwind.config.js
RUN npm install
ADD src /app/src
ADD public /app/public
RUN npm run build

FROM nginx:alpine as runner
COPY --from=builder /app/public /usr/share/nginx/html