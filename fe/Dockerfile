#build
FROM node:18-alpine AS build

WORKDIR /app/fe

COPY package*.json .

RUN npm cache clean --force

RUN npm install

COPY . .

RUN npm run build

#runtime
FROM node:18-alpine

WORKDIR /app/fe

COPY --from=build /app/fe/.next ./.next
COPY --from=build /app/fe/node_modules ./node_modules
COPY --from=build /app/fe/package*.json ./
COPY --from=build /app/fe/public ./public
COPY --from=build /app/fe/next.config.mjs ./

EXPOSE 5000

CMD [ "npm", "start" ]


