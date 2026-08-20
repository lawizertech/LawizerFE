# LawizerFE Environment Variables

This document lists the expected environment variables for the frontend Next.js application (`.env.local`).

## Required Variables

```env
# Supabase Configuration
# Used for authentication and direct database queries from the frontend.
NEXT_PUBLIC_SUPABASE_URL="https://<project-ref>.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhb..."
SUPABASE_SERVICE_ROLE_KEY="eyJhb..." # DO NOT EXPOSE TO BROWSER - used in API routes via createAdminClient()

# Backend API
# The URL where the NestJS backend is running.
NEXT_PUBLIC_API_URL="http://localhost:4000"

# Stream Configuration (If used on frontend for init)
NEXT_PUBLIC_STREAM_API_KEY="..."

# Razorpay (If initialized from frontend)
NEXT_PUBLIC_RAZORPAY_KEY_ID="..."
```

## Security Rules
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never put secret keys (like `SUPABASE_SERVICE_ROLE_KEY` or Stream Secret) in these variables.
- Always restart the Next.js dev server (`npm run dev`) after modifying `.env.local`.
