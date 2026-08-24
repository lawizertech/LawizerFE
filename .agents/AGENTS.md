# Frontend Agent Rules

These are mandatory rules for any AI agent operating in the LawizerFE repository.

## 1. Database Schema Truth
- DO NOT assume the existence of columns in the Supabase database. 
- Specifically, the `cases` table DOES NOT have a `metadata` column.
- Always verify the schema in `Supabase-host/prisma/schema.prisma` before querying Supabase directly via `createAdminClient` or the browser client.

## 2. API Architecture
- Frontend direct-to-database queries should use `createAdminClient()` (service role key) ONLY inside secure Next.js Serverless API routes (e.g., `app/api/...`).
- Client-side queries should only use the browser Supabase client with RLS (Row Level Security) enabled, though most complex logic should be deferred to the NestJS backend (`Supabase-host` on port 4000).

## 3. Styling & UI
- Use TailwindCSS v4 and Shadcn UI components.
- Do not mix pure CSS or other styling frameworks. Use the existing utility classes.

## 4. Dependencies
- Use `npm run dev` to start the frontend.
- Do not add heavy dependencies unless explicitly requested by the user.

## 5. File References
- When asked about documentation, always check the `.ai-docs/` folder in the repository root for architectural and environmental context.
