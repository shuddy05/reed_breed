# Backend Development Steps

Follow this sequential roadmap to develop the Laravel + Prisma backend. Do not proceed to the next step until the current step passes all checks in `Requirement.md`.

## Phase 1: Foundation
- **Step 1:** Initialize the Laravel project in a new `/backend` directory.
- **Step 2:** Configure the environment for local SQLite testing (`.env`).
- **Step 3:** Initialize Prisma (`npx prisma init`) and configure `schema.prisma` for SQLite.
- **Step 4:** Define the complete Database Schema in Prisma (Leads, Blog Posts, Categories, Comments, Appointments, Admin Users).
- **Step 5:** Run initial migrations to generate the local SQLite database.

## Phase 2: Core Architecture & Auth
- **Step 6:** Set up Laravel Eloquent Models to mirror the Prisma schema.
- **Step 7:** Implement Laravel Sanctum for API Authentication.
- **Step 8:** Create Authentication endpoints (Login, Logout, User Profile).

## Phase 3: Leads Funnel API
- **Step 9:** Build `POST /api/contact` to capture new leads from the frontend.
- **Step 10:** Build `GET /api/leads` and `PATCH /api/leads/{id}` for the Admin dashboard to view and update lead statuses.

## Phase 4: Blog CMS API
- **Step 11:** Build CRUD endpoints for Categories & Tags.
- **Step 12:** Build CRUD endpoints for Blog Posts (including WYSIWYG HTML content support and Featured Images).
- **Step 13:** Build Comment submission endpoint and Admin Moderation endpoints (Approve/Spam/Delete).

## Phase 5: Calendar & Appointments API
- **Step 14:** Build `POST /api/appointments/book` for the frontend Appointment Booker modal.
- **Step 15:** Build `GET /api/appointments` and `POST /api/appointments/manual` for the Admin Calendar.

## Phase 6: Testing & Production Prep
- **Step 16:** Test all endpoints thoroughly using Postman, cURL, or automated feature tests.
- **Step 17:** Prepare the `.env.production` configuration template for Hostinger MySQL.
- **Step 18:** Document the API endpoints in a `README.md` or OpenAPI specification.