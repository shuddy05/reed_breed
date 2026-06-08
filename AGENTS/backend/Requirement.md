# Validation Requirements

Each step in the development process MUST pass the following acceptance criteria before moving forward. The Orchestrator Agent must explicitly verify these.

### Step 1 & 2: Laravel & SQLite Setup
- [ ] Laravel development server starts successfully (`php artisan serve`).
- [ ] A local SQLite database file exists and is successfully connected.

### Step 3, 4 & 5: Prisma Configuration & Migrations
- [ ] `schema.prisma` correctly models all frontend data requirements (Leads, Blog, Appointments).
- [ ] `npx prisma migrate dev` executes without errors.
- [ ] The SQLite database tables exactly match the defined schema.

### Step 6: Eloquent Models
- [ ] Laravel Models exist for all Prisma tables.
- [ ] Mass assignment (`$fillable` or `$guarded`) is correctly configured.
- [ ] Relationships (e.g., Post hasMany Comments, Post belongsTo Category) are correctly defined.

### Step 7 & 8: Authentication
- [ ] Unauthorized requests to `/api/admin/*` return `401 Unauthorized`.
- [ ] Successful login returns a valid Bearer token.

### Step 9 & 10: Leads API
- [ ] Contact form submission returns `201 Created` and saves all fields (Name, Email, Project Details, etc.) to the database.
- [ ] Admin can fetch a list of leads and successfully update their status (e.g., "New" to "Qualified").

### Step 11, 12 & 13: Blog CMS API
- [ ] Blog posts can be created with raw HTML content (from the WYSIWYG editor).
- [ ] Blog posts can be retrieved correctly by the frontend dynamic route (`/blog/{slug}`).
- [ ] Comments can be submitted by guests and moderated by the admin.

### Step 14 & 15: Appointments API
- [ ] Frontend can successfully book a time slot.
- [ ] Admin can view the list of appointments and manually insert a new booking.

### Step 16, 17 & 18: Testing & Production
- [ ] All API routes return appropriate HTTP status codes (200, 201, 400, 404, 422).
- [ ] CORS is configured to allow requests from the frontend domain/port.
- [ ] A clear `.env.example` is ready with placeholders for Hostinger MySQL credentials.