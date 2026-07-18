# Lawizer — Frontend (LawizerFE)

> A legal-tech platform connecting users with verified advocates and CAs for consultations, document services, ITR filing, and more.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Prerequisites](#prerequisites)
3. [Local Setup](#local-setup)
4. [Environment Variables](#environment-variables)
5. [Project Structure](#project-structure)
6. [Architecture Deep Dive](#architecture-deep-dive)
   - [Routing & Pages](#routing--pages)
   - [Component Organization](#component-organization)
   - [Authentication Flow](#authentication-flow)
   - [API Layer](#api-layer)
   - [Dynamic Service Pages](#dynamic-service-pages)
   - [Email System](#email-system)
   - [Styling Conventions](#styling-conventions)
7. [Key Files Reference](#key-files-reference)
8. [Available Scripts](#available-scripts)
9. [Contribution Guidelines](#contribution-guidelines)
10. [Common Gotchas](#common-gotchas)

---

## Tech Stack

| Area | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| UI Components | Radix UI + shadcn/ui (New York style) |
| Animations | Framer Motion |
| Carousel | Embla Carousel |
| Charts | Recharts |
| Auth | Supabase Auth (REST — no SDK) |
| Realtime | Supabase Realtime (WebSocket broadcast) |
| HTTP Client | Axios |
| Form Handling | React Hook Form + Zod |
| Email | Nodemailer (SMTP) |
| Font | Outfit (Google Fonts via `next/font`) |
| Analytics | Vercel Analytics |

---

## Prerequisites

- **Node.js** v18+ (v20 recommended)
- **npm** v9+
- Access to the Supabase project
- Access to the backend API

---

## Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/lawizertech/LawizerFE.git
cd LawizerFE

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Open .env.local and fill in the values (see section below)

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Copy `.env.example` to `.env.local` and populate these keys:

### Supabase (required for auth and realtime)

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

All `NEXT_PUBLIC_` variables are exposed to the browser. Never put secrets in them.

### Backend API

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:5001/lawizerbe/us-central1   # local
# NEXT_PUBLIC_API_URL=https://us-central1-lawizerbe.cloudfunctions.net  # production
```

### Email / SMTP (server-side only, safe to keep secret)

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=admin@lawizer.com
EMAIL_PASS=your-app-password
EMAIL_FROM=admin@lawizer.com
```

Gmail requires an **App Password** — not your account password. Generate one in Google Account → Security → 2-Step Verification → App passwords.

If these are missing, the email utility logs a warning and silently skips sending. The app will not crash.

### GraphQL (optional)

```env
NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://...
```

---

## Project Structure

```
LawizerFE/
├── app/                          # Next.js App Router — all pages, layouts, API routes
│   ├── (services)/               # Route group for legal service category pages
│   │   ├── banking/              # Banking & finance legal services
│   │   ├── civil-commercial/     # Civil & commercial litigation
│   │   ├── documentation/        # Document drafting services
│   │   ├── family/               # Family law services
│   │   ├── itr/                  # Income Tax Return filing
│   │   ├── property/             # Property legal services
│   │   ├── startup-businesslegal/# Startup & business legal
│   │   └── challan/              # Traffic challan & fine disputes
│   ├── api/                      # Next.js API routes (server-side)
│   │   ├── callback/             # Schedule callback request
│   │   ├── contact/              # Contact form submission
│   │   ├── expert/               # Expert profile, bookings, dashboard
│   │   ├── experts/              # List all experts
│   │   ├── free-consultation/    # Free consultation form
│   │   ├── legal-news/           # Fetch legal news articles
│   │   └── user/                 # User profile, bookings, services, dashboard
│   ├── auth/
│   │   ├── verified/             # Email verification landing page
│   │   └── reset-password/       # Password reset page (reads Supabase hash token)
│   ├── blogs/                    # Blog listing + [slug] dynamic pages
│   ├── expert/                   # Expert login + dashboard
│   ├── guides/                   # Legal guides listing + [slug] pages
│   ├── news/                     # Legal news page
│   ├── user/                     # User dashboard
│   │   └── dashboard/
│   │       ├── chats/            # Chat list (loads from bookings API)
│   │       └── connect/[serviceId]/ # Consultation connect page (chat + call)
│   ├── about/                    # About Lawizer
│   ├── careers/                  # Careers page
│   ├── contact/                  # Contact page
│   ├── faqs/                     # FAQs page
│   ├── free-consultation/        # Free consultation landing page
│   ├── privacy-policy/           # Privacy policy
│   ├── terms/                    # Terms of service
│   ├── attorney-terms/           # Attorney / expert terms
│   ├── womensafety/              # Women's safety legal resources
│   ├── profile/                  # User profile settings page
│   ├── globals.css               # Global Tailwind base + CSS variables
│   ├── lawizer-custom.css        # Project-specific custom CSS overrides
│   ├── layout.tsx                # Root layout — fonts, metadata, global providers
│   ├── page.tsx                  # Home page (/)
│   ├── sitemap.ts                # Auto-generated sitemap
│   └── robots.ts                 # robots.txt configuration
│
├── components/
│   ├── auth/                     # Authentication modals (sign in, sign up, forgot password, complete profile)
│   ├── blogs/                    # Blog layout, table of contents, pagination
│   ├── call/                     # Voice call modal (WebRTC — signaling TODO: Supabase Realtime)
│   ├── chat/                     # Chat modal UI
│   ├── client/                   # Public-facing UI (header, footer, service pages, carousels)
│   │   └── home/                 # All homepage sections as individual components
│   ├── expert/                   # Expert dashboard (sidebar, tabs, bookings)
│   ├── guides/                   # Legal guides UI (progress bar, helpful rating, print button)
│   ├── ui/                       # shadcn/ui base components (button, input, dialog, etc.)
│   └── user/                     # User dashboard (sidebar, tabs, chat, consultations)
│
├── context/
│   ├── authContext.tsx           # Global auth state — user, login, logout, modal controls
│   └── callbackContext.tsx       # Callback modal state (open/close)
│
├── hooks/
│   ├── use-mobile.ts             # Responsive breakpoint detection hook
│   └── use-toast.ts              # Toast notification hook
│
├── lib/
│   ├── apis/
│   │   ├── api.ts                # All API call functions (getUserProfile, bookings, etc.)
│   │   └── axios.ts              # Two Axios instances: serverApi and backendApi
│   ├── chat/
│   │   ├── sendMessage.ts        # Send chat message (TODO: Supabase Realtime broadcast)
│   │   ├── typing.ts             # Typing indicator (TODO: Supabase Realtime broadcast)
│   │   └── useChatMessages.ts    # Hook to subscribe to chat messages (TODO: Supabase Realtime)
│   ├── data/services/            # Service page content (one file per category)
│   │   ├── banking.ts
│   │   ├── documentation.ts
│   │   ├── itr.ts
│   │   ├── property/
│   │   └── startup-businesslegal/
│   ├── email/
│   │   ├── mailer.ts             # Nodemailer transporter and sendEmail() utility
│   │   ├── templates.ts          # All HTML email templates as functions
│   │   ├── README.md             # Email system usage guide
│   │   └── ARCHITECTURE.md       # Email architecture decisions
│   ├── services/
│   │   └── documents.ts          # Document service definitions
│   ├── types/
│   │   └── service.ts            # ServiceData, FAQItem, BenefitItem interfaces
│   ├── extractHeadings.ts        # Extracts TOC headings from HTML/markdown content
│   ├── supabaseClient.ts         # Supabase auth helpers (sign up, sign in, OAuth, password reset)
│   ├── guides.ts                 # Legal guide data
│   ├── utils.ts                  # cn() utility (clsx + tailwind-merge)
│   └── webrtc.ts                 # WebRTC helpers for voice/video calls
│
├── public/                       # Static assets
│   ├── adv/                      # Advocate profile photos
│   ├── logos/                    # Client/partner logos
│   ├── needHelp/                 # Need Help section images
│   └── favicon.png
│
├── scripts/                      # One-off maintenance scripts (Python/JS)
│
├── styles/
│   └── globals.css               # Legacy global styles (mostly superseded by app/globals.css)
│
├── types/
│   ├── user.ts                   # User, consultation, booking TypeScript types
│   └── booking.ts                # Booking-specific types
│
├── .env.example                  # Template for environment variables
├── .prettierrc                   # Prettier config
├── components.json               # shadcn/ui configuration
├── next.config.mjs               # Next.js config
├── tailwind.config.js            # Tailwind config
└── tsconfig.json                 # TypeScript config
```

---

## Architecture Deep Dive

### Routing & Pages

The project uses Next.js App Router. Every folder inside `app/` with a `page.tsx` becomes a route.

**Route groups** — `app/(services)/` is a route group (the folder name in parentheses is ignored in the URL). All legal service category pages live here and share a common layout defined in `app/(services)/layout.tsx`.

**Dynamic routes** — e.g., `app/guides/[slug]/page.tsx` renders a specific guide. The `slug` is matched against the data in `lib/guides.ts`.

**API routes** — `app/api/*/route.ts` files are server-side only. They handle form submissions, proxy requests to the backend, and send emails.

The full route map at a glance:

| URL Pattern | File |
|---|---|
| `/` | `app/page.tsx` |
| `/blogs` | `app/blogs/page.tsx` |
| `/blogs/:slug` | `app/blogs/[slug]/page.tsx` |
| `/guides` | `app/guides/page.tsx` |
| `/guides/:slug` | `app/guides/[slug]/page.tsx` |
| `/user/dashboard` | `app/user/dashboard/page.tsx` |
| `/user/dashboard/chats` | `app/user/dashboard/chats/page.tsx` |
| `/user/dashboard/connect/:serviceId` | `app/user/dashboard/connect/[serviceId]/page.tsx` |
| `/expert/dashboard` | `app/expert/dashboard/page.tsx` |
| `/expert/dashboard/connect/:bookingId` | `app/expert/dashboard/connect/[bookingId]/page.tsx` |
| `/auth/reset-password` | `app/auth/reset-password/page.tsx` |
| `/(services)/banking` | `app/(services)/banking/page.tsx` |
| `/(services)/itr/:slug` | `app/(services)/itr/[slug]/page.tsx` |
| `/api/contact` | `app/api/contact/route.ts` |
| `/api/user/dashboard` | `app/api/user/dashboard/route.ts` |

---

### Component Organization

Components are split into functional domains:

- **`components/ui/`** — Primitive shadcn/ui components. Generated by `npx shadcn add <component>` and should not be edited manually. They wrap Radix UI primitives.
- **`components/client/`** — All public-facing page components: site header, footer, service page template, carousels, callback modal.
- **`components/auth/`** — Modal-based authentication UI. Controlled via `AuthContext`. Uses `lib/supabaseClient.ts` directly (no Firebase SDK).
- **`components/user/`** — User dashboard tabs (Dashboard, My Consultations, Active Services, Chat).
- **`components/expert/`** — Expert dashboard tabs (Dashboard, Bookings, Profile).
- **`components/blogs/`** — Blog layout, table of contents (sticky sidebar), and pagination.
- **`components/guides/`** — Legal guide UI: reading progress bar, helpfulness voting, print.
- **`components/call/`** — Voice call modal using WebRTC. Peer connection is wired up; signaling channel is a TODO (Supabase Realtime).
- **`components/chat/`** — Chat modal. Message send/receive hooks are stubbed in `lib/chat/` — wire up to Supabase Realtime.

---

### Authentication Flow

Authentication uses **Supabase Auth** via plain REST calls (no SDK). Session state is persisted in `localStorage`.

**How it works:**

1. Sign in via `components/auth/signinPopup.tsx` → calls `supabaseSignIn()` from `lib/supabaseClient.ts`.
2. On success, the Supabase `access_token` is sent to the backend (`/auth/login`) which issues a Lawizer JWT.
3. `uid`, `email`, `token`, and `role` are saved to `localStorage`.
4. `context/authContext.tsx` exposes `user`, `isLoggedIn`, `logout`, and `refreshUser`.
5. On page load, `refreshUser()` reads from `localStorage` to hydrate auth state — there is **no listener**. Call `refreshUser()` after any auth state change.
6. Google OAuth and magic links are handled in `authContext.tsx` via a `useEffect` that reads the `#access_token` hash on mount.
7. Password reset flow: `supabaseResetPassword()` sends the recovery email; the link lands on `/auth/reset-password` which calls `supabaseUpdatePassword()`.

**Accessing auth state in any component:**

```tsx
import { useAuth } from "@/context/authContext";

const { user, isLoggedIn, logout } = useAuth();
```

**Opening the sign-in modal programmatically:**

```tsx
const { setIsSignInModalOpen } = useAuth();
setIsSignInModalOpen(true);
```

**Token handling:**
The JWT is stored in `localStorage["token"]`. Axios interceptors in `lib/apis/axios.ts` attach it as a `Bearer` token. Expired tokens are renewed via `renewToken()` in `lib/apis/api.ts`.

**`lib/supabaseClient.ts` exports:**

| Function | Purpose |
|---|---|
| `supabaseSignUp(email, password, metadata)` | Register a new user |
| `supabaseSignIn(email, password)` | Sign in, returns session with `access_token` |
| `supabaseResetPassword(email)` | Send password reset email |
| `supabaseUpdatePassword(accessToken, newPassword)` | Set new password from recovery token |
| `supabaseGoogleSignIn()` | Redirect to Google OAuth |

---

### Realtime (Chat & Call Signaling)

The app uses **Supabase Realtime** (WebSocket broadcast) for real-time features. There is no Firebase SDK anywhere in the codebase.

**Channel conventions:**

| Channel | Events | Used by |
|---|---|---|
| `chat:<bookingId>` | `new_message` | Chat modal |
| `chat:<bookingId>` | `typing` | Typing indicators |
| `call:<bookingId>` | `ringing`, `accepted`, `rejected`, `ended`, `offer`, `answer`, `ice_candidate` | Voice/video call signaling |

**Current status:**

- `lib/chat/sendMessage.ts` — **stub** (TODO: broadcast `new_message`)
- `lib/chat/useChatMessages.ts` — **stub** (TODO: subscribe to channel)
- `lib/chat/typing.ts` — **stub** (TODO: broadcast `typing`)
- `components/call/VoiceCallModal.tsx` — WebRTC peer logic intact; **signaling stubbed** (TODO: use `call:<bookingId>` channel)
- `app/user/dashboard/connect/[serviceId]/page.tsx` — incoming call listener **stubbed**
- `app/expert/dashboard/connect/[bookingId]/page.tsx` — outgoing call init **stubbed**

To implement, open a WebSocket to:
```
wss://<SUPABASE_URL>/realtime/v1/websocket?apikey=<ANON_KEY>&vsn=1.0.0
```
Join with a `phx_join` frame and listen for `broadcast` frames. See Supabase Realtime docs for the full protocol.

---

### API Layer

There are two Axios instances in `lib/apis/axios.ts`:

| Instance | Base URL | Use case |
|---|---|---|
| `serverApi` | `` (empty, same-origin) | Calls Next.js API routes at `/api/*` |
| `backendApi` | `NEXT_PUBLIC_API_URL` | Calls the backend (Cloud Functions) |

Both instances auto-attach the auth token from `localStorage` via a request interceptor.

All named API functions live in `lib/apis/api.ts`. When adding a new API call:
1. Add it as an exported function in `api.ts`.
2. Use `serverApi` or `backendApi` depending on whether the request goes through a Next.js route.
3. Handle `TOKEN_EXPIRED` error codes with the `renewToken()` helper already in the file.

---

### Dynamic Service Pages

Instead of hardcoding each legal service page, Lawizer uses a data-driven pattern:

1. **Data files** — `lib/data/services/*.ts` export a `servicesData` object keyed by slug. Each value conforms to `ServiceData` (`lib/types/service.ts`).
2. **Template component** — `components/client/DynamicServicePageTemplate.tsx` renders any `ServiceData` object into a full page.
3. **Route** — The dynamic route (e.g., `app/(services)/banking/[slug]/page.tsx`) reads the slug, looks up `servicesData`, and renders the template.

**To add a new service:**
1. Open the relevant data file (e.g., `lib/data/services/banking.ts`).
2. Add a new entry following the `ServiceData` type.
3. The route `/(services)/banking/your-new-slug` is automatically live — no new file needed.

**`ServiceData` key fields:**

```ts
{
  title: string;             // Page H1
  subtitle: string;          // Subheading
  badgeText: string;         // Small badge near title
  icon: string;              // Icon identifier (mapped in template)
  serviceID: string;         // Used when creating a service request to the backend
  price: number;             // Display price (₹)
  originalPrice?: number;    // Strikethrough price (₹)
  benefits: BenefitItem[];   // Why choose this service
  faqs: FAQItem[];           // Accordion FAQ section
  sections: SectionBlock[];  // Flexible content blocks
  theme?: ServiceTheme;      // Gradient colors for the hero
}
```

---

### Email System

Emails are sent server-side from Next.js API routes using Nodemailer.

- **Transporter setup** — `lib/email/mailer.ts` exports `sendEmail(options)`. It reads SMTP config from env vars and gracefully no-ops if they are missing.
- **Templates** — `lib/email/templates.ts` exports individual HTML template functions.
- **Usage in an API route:**

```ts
import { sendEmail } from "@/lib/email/mailer";
import { contactFormTemplate } from "@/lib/email/templates";

await sendEmail({
  to: "user@example.com",
  subject: "We received your message",
  html: contactFormTemplate({ name, message }),
});
```

Refer to `lib/email/README.md` for a full guide and `lib/email/ARCHITECTURE.md` for design decisions.

---

### Styling Conventions

- **Utility-first** — Use Tailwind classes. Avoid inline styles unless absolutely necessary.
- **`cn()` helper** — Always use `cn()` from `lib/utils.ts` when composing conditional class names:
  ```tsx
  import { cn } from "@/lib/utils";
  <div className={cn("base-class", isActive && "active-class", className)} />
  ```
- **shadcn/ui** — Components in `components/ui/` follow the "New York" shadcn style with Neutral base colors. Add new components via:
  ```bash
  npx shadcn add <component-name>
  ```
- **Custom CSS** — `app/lawizer-custom.css` for project-specific overrides. `app/globals.css` for Tailwind directives and CSS variable definitions.
- **Fonts** — `Outfit` font loaded via `next/font/google` in `app/layout.tsx`.
- **Prettier** — 120 char print width, double quotes, trailing commas, 2-space indent. Run `npx prettier --write .` to format.

---

## Key Files Reference

| File | What it does |
|---|---|
| `app/layout.tsx` | Root HTML shell — loads fonts, global CSS, wraps app in `RootLayoutClient` |
| `components/client/RootLayoutClient.tsx` | Mounts `AuthProvider`, `CallbackProvider`, Header, Footer, Toaster |
| `context/authContext.tsx` | Global auth state; `useAuth()` hook entry point |
| `lib/supabaseClient.ts` | Supabase Auth REST helpers — sign up, sign in, OAuth, password reset/update |
| `lib/apis/axios.ts` | Two Axios instances with auth token interceptors |
| `lib/apis/api.ts` | All typed API call functions |
| `lib/chat/sendMessage.ts` | Send chat message — **stub, wire up to Supabase Realtime** |
| `lib/chat/useChatMessages.ts` | Subscribe to chat messages — **stub, wire up to Supabase Realtime** |
| `lib/chat/typing.ts` | Typing indicator — **stub, wire up to Supabase Realtime** |
| `lib/utils.ts` | `cn()` — Tailwind class merger |
| `lib/types/service.ts` | `ServiceData` TypeScript interface |
| `lib/webrtc.ts` | `createPeerConnection()` — WebRTC peer setup helper |
| `components/call/VoiceCallModal.tsx` | Voice call UI + WebRTC peer logic — **signaling stubbed** |
| `components/client/header.tsx` | Site-wide navigation header with auth controls |
| `components/client/DynamicServicePageTemplate.tsx` | Renders any `ServiceData` as a full page |
| `components/client/ServicePageLayout.tsx` | Wrapper layout for service pages (sidebar, CTA) |
| `lib/email/mailer.ts` | `sendEmail()` — main email sending utility |
| `lib/email/templates.ts` | All HTML email template functions |
| `types/user.ts` | Core user and consultation TypeScript types |

---

## Available Scripts

| Script | Command | Description |
|---|---|---|
| Dev server | `npm run dev` | Starts Next.js with HMR on port 3000 |
| Production build | `npm run build` | Compiles and optimizes for production |
| Start production | `npm run start` | Runs the production build (requires `npm run build` first) |
| Lint | `npm run lint` | Runs ESLint |

> **Note:** `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` are set to `true` in `next.config.mjs`. This means the build won't fail on TS or lint errors — but you should still fix them. Run `npx tsc --noEmit` locally before pushing.

---

## Contribution Guidelines

### Branching

Always branch off from `develop`:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/short-description` — new features
- `fix/short-description` — bug fixes
- `chore/short-description` — refactors, dependency updates, tooling

### Commit Messages

Follow the Conventional Commits format:

```
feat: add voice call reconnection logic
fix: prevent header flickering on mobile
refactor: migrate chat to Supabase Realtime
chore: remove firebase dependency
```

### Pull Requests

- Open PRs against the `develop` branch, never `main`.
- Ensure `npm run build` completes without errors locally before requesting review.
- Keep PRs small and focused. One feature or fix per PR.
- Write a short description of what changed and why.

### Adding a New Page

1. Create `app/your-route/page.tsx`.
2. If the page needs a custom layout, add `app/your-route/layout.tsx`.
3. Add `"use client"` only if the page requires client-side interactivity. Keep `page.tsx` a Server Component where possible and delegate interactivity to a `*Client.tsx` child (see `app/contact/ContactClient.tsx`).

### Adding a New API Route

1. Create `app/api/your-route/route.ts`.
2. Export named functions `GET`, `POST`, etc.
3. Use `serverApi` from `lib/apis/axios.ts` to call it from the frontend, or `backendApi` for direct backend calls.

---

## Common Gotchas

**Auth state is localStorage-based, not listener-based.**
If you log in and the UI does not reflect it, call `refreshUser()` from `useAuth()`. There is no automatic sync.

**Chat and call signaling are stubbed.**
`lib/chat/sendMessage.ts`, `lib/chat/useChatMessages.ts`, `lib/chat/typing.ts`, and the signaling sections of `VoiceCallModal.tsx` and the connect pages all contain `// TODO` comments. They need to be wired up to Supabase Realtime before those features work.

**`npm run build` ignores TypeScript errors.**
`next.config.mjs` has `ignoreBuildErrors: true`. Always check types manually with `npx tsc --noEmit` before pushing.

**Service page data is not fetched from an API — it is hardcoded in TypeScript files.**
The `lib/data/services/` files are static data. Changes require a new deployment.

**Images are unoptimized in production.**
`next.config.mjs` has `images: { unoptimized: true }`. Compress images in `public/` manually before adding them.

**Two global CSS files.**
`app/globals.css` is the primary Tailwind stylesheet. `app/lawizer-custom.css` has project-specific overrides. Both are imported in `app/layout.tsx`. If a Tailwind class is mysteriously not working, check `lawizer-custom.css` for overrides.

**`scripts/` folder is for one-off maintenance.**
The Python and JS scripts in `scripts/` were used for data migration. They are not part of the application runtime. Do not import from them.
