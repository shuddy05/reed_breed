# Backend Development Skills

This document defines the core technical skills, architectural patterns, and tech stack requirements for developing the backend. 

## Primary Tech Stack
- **Framework:** Laravel (PHP 8.2+)
- **ORM / Database Modeling:** Prisma ORM 
- **Local Database:** SQLite (for rapid local testing and development)
- **Production Database:** MySQL (Target: Hostinger Production Environment)

## Required Skill Sets

### 1. Laravel Architecture & API Design
- **RESTful API Development:** Expert at creating clean, stateless, and predictable API endpoints that mirror the frontend's data requirements.
- **Routing & Controllers:** Ability to organize routes logically (`routes/api.php`) and build lean controllers.
- **Authentication/Authorization:** Implementing Laravel Sanctum or JWT for securing the Admin Portal endpoints.
- **CORS & Middleware:** Configuring middleware to allow seamless communication with the Next.js frontend frontend.

### 2. Prisma ORM Integration in a PHP Context
- **Prisma Schema Design:** Expert at defining robust data models in `schema.prisma` (e.g., Leads, BlogPosts, Appointments).
- **Migration Management:** Using `npx prisma migrate` to handle database state changes safely across environments.
- **Bridging Prisma & Laravel:** Understanding how to use Prisma for database management/migrations while using Laravel's Eloquent ORM to query the database within PHP, ensuring Model relationships align perfectly with the Prisma schema.

### 3. Database Management (SQLite -> MySQL)
- **Environment Parity:** Configuring `.env` effectively to easily switch between a local `database.sqlite` file and a remote MySQL connection URI.
- **Hostinger MySQL Readiness:** Ensuring the schema and migrations are fully compatible with strict MySQL constraints for smooth deployment.

### 4. Code Quality & Standards
- Strict adherence to PSR-12 coding standards.
- Focus on error handling, structured JSON responses, and validation using Laravel Form Requests.