## Backend Setup

1. cd backend
2. composer install
3. cp .env.example .env
4. php artisan key:generate
5. Add your MISTRAL_API_KEY to .env
6. npx prisma migrate dev
7. php artisan db:seed
8. php artisan serve
