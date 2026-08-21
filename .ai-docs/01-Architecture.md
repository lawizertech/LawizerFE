# LawizerFE (Frontend) Architecture

This document provides a high-level overview of the Lawizer frontend architecture for future AI models to reference.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** TailwindCSS 4, Shadcn UI (Radix UI primitives)
- **Authentication:** Supabase Auth (via `@supabase/supabase-js`)
- **Real-time Comms:** Stream Video React SDK (`@stream-io/video-react-sdk`) for video consultations, custom polling/Supabase real-time for chat (context dependent).
- **Icons:** Lucide React, Heroicons

## Project Structure (`app/`)
- `(auth)/`: Routes for login/registration (e.g., `/client-login`, `/expert-login`).
- `api/`: Next.js Serverless API Routes. Used to proxy requests to the NestJS backend or interact directly with Supabase via `createAdminClient` for secure admin operations.
  - Important API routes: `api/chat/expert-rooms`, `api/chat/user-rooms` (queries Supabase `cases` and `profiles` to list active chats).
- `client/`: Client dashboard pages (e.g., `client/dashboard`, `client/cases`).
- `expert/`: Professional/Expert dashboard pages.
- `admin/`: Superadmin dashboard pages.

## Key Integration Points
1. **Supabase:** Used heavily for authentication. The frontend also directly queries Supabase for certain data (like cases and chat rooms) using the Supabase client (`lib/supabaseClient.ts` for browser, `lib/supabase/server.ts` for API routes).
2. **NestJS Backend (`Supabase-host`):** Complex business logic, payments (Razorpay), and Stream token generation are handled by the NestJS backend running on port `4000`. The frontend calls these endpoints (e.g., `http://localhost:4000/...`).

## Common Pitfalls to Avoid
- **Database Schema Mismatches:** When querying Supabase directly from the frontend (e.g., in `app/api/...`), ensure you are querying columns that actually exist in the Prisma schema of the backend. For example, the `cases` table does NOT have a `metadata` column.
- **Client vs Server Components:** Standard Next.js rules apply. Use `"use client"` directive at the top of files using hooks (`useState`, `useEffect`) or browser APIs.
- **Supabase Clients:** Use the browser client (`createClient` from `@supabase/supabase-js`) in Client Components, and the server client in API routes/Server Components.
