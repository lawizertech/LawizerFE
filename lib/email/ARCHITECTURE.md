# Callback Email Feature - Architecture & Flow

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Frontend (React/Next.js)                  │
│  User clicks "Request Callback" → POST /api/user/request-call   │
└──────────────────────────────┬──────────────────────────────────┘
                               │
                               ▼
        ┌──────────────────────────────────────────┐
        │  /api/user/request-call (Next.js Route)  │
        │                                          │
        │  1. Validate auth token                  │
        │  2. Forward to backend                   │
        │  3. Get user profile (email, name)       │
        │  4. Generate email from template         │
        │  5. Send email via SMTP                  │
        │  6. Return success response              │
        └──────────────────────────────────────────┘
                   │                  │
        ┌──────────▼──────────┐     ┌─▼────────────────┐
        │  Backend Service    │     │  Email Service   │
        │  /user/request-call │     │  (Nodemailer)    │
        │                     │     │                  │
        │  - Store callback   │     │  - Connect SMTP  │
        │  - Notify admin     │     │  - Send email    │
        │  - Track request    │     │  - Log delivery  │
        └─────────────────────┘     └──────────────────┘
                                            │
                                            ▼
                                    ┌────────────────┐
                                    │  SMTP Server   │
                                    │  (Gmail/SendGrid)
                                    └────────────────┘
                                            │
                                            ▼
                                    ┌────────────────┐
                                    │  User Email    │
                                    │  Inbox         │
                                    └────────────────┘
```

## Request Flow Sequence

```
User                 Frontend         API Route        Backend          Email Service
 │                      │                │               │                  │
 │ Click Callback       │                │               │                  │
 ├─────────────────────>│                │               │                  │
 │                      │ POST /api...   │               │                  │
 │                      ├───────────────>│               │                  │
 │                      │                │ Forward req   │                  │
 │                      │                ├──────────────>│                  │
 │                      │                │               │ Process          │
 │                      │                │               │ Callback         │
 │                      │                │<──────────────┤                  │
 │                      │                │ Success       │                  │
 │                      │                │               │                  │
 │                      │                │ Get Profile   │                  │
 │                      │                ├──────────────>│ (Auth Check)     │
 │                      │                │<──────────────┤                  │
 │                      │                │               │                  │
 │                      │                │ Generate Email│                  │
 │                      │                ├─────────────────────────────────>│
 │                      │                │               │    Send Email    │
 │                      │                │<─────────────────────────────────┤
 │                      │                │               │                  │
 │                      │ Success        │               │                  │
 │                      │<───────────────┤               │                  │
 │ ✓ Confirmation Msg   │                │               │                  │
 │<─────────────────────┤                │               │                  │
 │                      │                │               │                  │
 │                 [User checks email]   │               │                  │
 │                      │                │               │                  │
 │            ┌─────────────────────────────────────────────────┐           │
 │            │   ✉️  Email Received from admin@lawizer.com     │           │
 │            │   ✓ Callback Request Confirmed                 │           │
 │            │   📋 Next Steps Information                     │           │
 │            │   ⏰ Expected Timeline                          │           │
 │            └─────────────────────────────────────────────────┘           │
 │
```

## Component Interaction

```
Request Callback
      │
      ▼
┌─────────────────────────────────────────────────────┐
│         app/api/user/request-call/route.ts          │
├─────────────────────────────────────────────────────┤
│                                                     │
│  POST(req: Request)                                 │
│    ├─ Validate Authorization                       │
│    ├─ Forward to Backend                           │
│    ├─ Call getUserProfile()                        │
│    ├─ Generate Email HTML                          │
│    │   ├─ Import from templates.ts                 │
│    │   └─ callbackRequestEmailTemplate()           │
│    ├─ Send Email                                   │
│    │   ├─ Import from mailer.ts                    │
│    │   ├─ sendEmail()                              │
│    │   └─ await transporter.sendMail()             │
│    └─ Return Success Response                      │
│                                                     │
└─────────────────────────────────────────────────────┘
                      │
        ┌─────────────┴─────────────┐
        │                           │
        ▼                           ▼
   ┌─────────────────────────┐  ┌─────────────────────────────┐
   │  lib/email/mailer.ts    │  │  lib/email/templates.ts     │
   ├─────────────────────────┤  ├─────────────────────────────┤
   │                         │  │                             │
   │ - getTransporter()      │  │ - callbackRequestEmail()    │
   │ - sendEmail()           │  │ - callbackConfirmation()    │
   │ - verifyEmailConfig()   │  │                             │
   │                         │  │ Returns: HTML string        │
   │ Nodemailer wrapper      │  │ with styling & content      │
   │                         │  │                             │
   └─────────────────────────┘  └─────────────────────────────┘
        │
        ▼
   ┌────────────────────────────────┐
   │  Environment Variables         │
   ├────────────────────────────────┤
   │ EMAIL_HOST                     │
   │ EMAIL_PORT                     │
   │ EMAIL_USER                     │
   │ EMAIL_PASS                     │
   │ EMAIL_FROM                     │
   │                                │
   │ (from .env.local)              │
   └────────────────────────────────┘
```

## Email Content Structure

```
┌─────────────────────────────────────────────────────────┐
│              HTML Email Template                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Header                                                 │
│  ┌──────────────────────────────────────────────────┐  │
│  │  🎯 Callback Request Received ✓                  │  │
│  │  (Gradient background: purple to pink)           │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
│  Body Content                                           │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Greeting: Hi {userName},                        │  │
│  │                                                  │  │
│  │  Main Message:                                  │  │
│  │  Thank you for requesting a callback...         │  │
│  │                                                  │  │
│  │  ✨ Confirmation Box                            │  │
│  │  📌 Your Request Has Been Received              │  │
│  │  We have successfully recorded your request.    │  │
│  │                                                  │  │
│  │  Next Steps:                                     │  │
│  │  1. Review: Our legal experts will review       │  │
│  │  2. Contact: We'll reach out in 24-48 hours    │  │
│  │  3. Schedule: Confirm your preferred time       │  │
│  │  4. Prepare: Get details about the expert       │  │
│  │                                                  │  │
│  │  Contact Information:                            │  │
│  │  📧 admin@lawizer.com                           │  │
│  │  ⏰ Request ID & Timestamp                       │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
│  Footer                                                 │
│  ┌──────────────────────────────────────────────────┐  │
│  │  © 2024 Lawizer                                  │  │
│  │  [Privacy Policy] | [Terms of Service]           │  │
│  │  This is an automated email.                     │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Error Handling Flow

```
                    Send Email
                        │
                ┌───────┴────────┐
                │                │
            Success          Failed
                │                │
         ✅ Email sent      ❌ Error caught
         Log message ID        Log error
                │                │
                │           (Non-blocking)
                │           Don't fail callback
                │                │
                └───────┬────────┘
                        │
                        ▼
            Return Success Response
            (Email status not critical)
```

## User Experience Journey

```
1️⃣  User Signs In
    └─> Authenticated ✓

2️⃣  User Navigates to Service
    └─> Finds "Request Callback" button

3️⃣  User Clicks "Request Callback"
    └─> Button shows loading state

4️⃣  Backend Processes Request
    └─> Creates callback record

5️⃣  Email Sent Automatically
    ├─> Subject: "Callback Request Received - Lawizer"
    ├─> From: admin@lawizer.com
    └─> To: user's registered email

6️⃣  User Receives Confirmation
    ├─> Professional HTML email
    ├─> Confirmation with details
    └─> Next steps information

7️⃣  User Sees Success Message
    └─> Frontend shows: "Request submitted successfully"

8️⃣  Admin Gets Notified
    └─> Backend sends admin notification

9️⃣  Admin Schedules Callback
    └─> Expert contact scheduled

🔟 Another Email Sent (Future)
    └─> Callback scheduled confirmation
```

## Integration Points

```
Frontend
  │
  ├─ StartConsultationClient.tsx
  │  └─ Handles "Request Callback" click
  │     └─ POST /api/user/request-call
  │
API Layer
  │
  ├─ app/api/user/request-call/route.ts
  │  ├─ Validates auth
  │  ├─ Calls backend
  │  ├─ Triggers email
  │  └─ Returns response
  │
  ├─ lib/email/mailer.ts
  │  └─ Sends email via SMTP
  │
  └─ lib/email/templates.ts
     └─ Provides HTML content
```

## Configuration Matrix

```
Environment: Development    │  Production
──────────────────────────────────────────
EMAIL_HOST: smtp.gmail.com  │  smtp.sendgrid.net
EMAIL_PORT: 587             │  587
EMAIL_USER: personal account│  apikey
EMAIL_PASS: app password    │  api key
EMAIL_FROM: auto            │  admin@lawizer.com
Logging: Verbose            │  Minimal
Retry: None                 │  Queue system
Rate Limit: None            │  Yes
```
