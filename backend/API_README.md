# ReedBreed Backend API Documentation

This backend is built with Laravel 11 and Prisma ORM.

## Authentication
All admin endpoints are protected by Laravel Sanctum.
Include the `Authorization: Bearer <token>` header in all protected requests.

- `POST /api/login` - Authenticate admin and receive token. (Payload: email, password)
- `POST /api/logout` - Revoke current token.
- `GET /api/me` - Get current authenticated user details.

## Leads Funnel
- `POST /api/contact` - Submit contact form. (Public)
  - Payload: contact, company (optional), email, phone (optional), website, details.
- `GET /api/leads` - List all leads. (Admin)
- `PATCH /api/leads/{id}` - Update lead status or industry. (Admin)
  - Payload: status (New, In Progress, Qualified, Lost, Won), industry (optional).

## Blog CMS
- `GET /api/blog/categories` - List categories with post counts. (Public)
- `GET /api/blog/posts` - List published posts. (Public)
- `GET /api/blog/posts/{slug}` - Get full post details by slug. (Public)
- `POST /api/blog/comments` - Submit a comment. Status defaults to 'Pending'. (Public)

**Admin Routes:**
- `POST /api/blog/categories` - Create category.
- `PATCH /api/blog/categories/{id}` - Update category.
- `DELETE /api/blog/categories/{id}` - Delete category.

- `GET /api/admin/blog/posts` - List all posts (including Drafts).
- `POST /api/admin/blog/posts` - Create post. (Payload: title, content, category_id, status, image)
- `PATCH /api/admin/blog/posts/{id}` - Update post.
- `DELETE /api/admin/blog/posts/{id}` - Delete post.

- `GET /api/admin/blog/comments` - List all comments.
- `PATCH /api/admin/blog/comments/{id}` - Approve or mark comment as Spam. (Payload: status)
- `DELETE /api/admin/blog/comments/{id}` - Delete comment.

## Calendar & Appointments
- `POST /api/appointments/book` - Book a new appointment via the frontend modal. (Public)
  - Payload: name, email, date (YYYY-MM-DD), time, type, notes. Status defaults to 'Upcoming'.
- `GET /api/appointments` - List all appointments. (Admin)
- `POST /api/appointments/manual` - Add a manual offline entry. (Admin)
- `PATCH /api/appointments/{id}` - Update status (Upcoming, Completed, Cancelled). (Admin)
- `DELETE /api/appointments/{id}` - Remove an appointment. (Admin)
