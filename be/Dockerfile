# build
FROM node:18-alpine AS build

WORKDIR /app/be

COPY package*.json .

RUN npm cache clean --force

RUN npm install

COPY . .

RUN npm run build

# runtime
FROM node:18-alpine

WORKDIR /app/be

COPY --from=build /app/be/dist ./dist
COPY --from=build /app/be/node_modules ./node_modules
COPY --from=build /app/be/package*.json ./
COPY --from=build /app/be/tsconfig.json ./dist/tsconfig.json
COPY --from=build /app/be/src/mikro-orm.config.ts ./dist/mikro-orm.config.ts
COPY entrypoint.sh /usr/local/bin/entrypoint.sh

RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 3000

# Gunakan entrypoint untuk menjalankan migrasi, seeding, dan aplikasi
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
