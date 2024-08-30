#!/bin/sh
set -e

# Pindah ke direktori dist
cd /app/be/dist

# Jalankan migrasi dan seeding
npx mikro-orm migration:create
npx mikro-orm migration:fresh
npx mikro-orm seeder:run

# Mulai aplikasi
exec node main
