# 📧 Email Service & Callback Notification Architecture

## Overview
The Lawizer application includes an automated email service to send callback request confirmations to users. When a user requests a callback on any service page, an HTML-formatted confirmation email is automatically sent to their registered email address from `admin@lawizer.com` (or configured sender).

---

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
                                    │  (Gmail/SendGrid/SES)
                                    └────────────────┘
                                            │
                                            ▼
                                    ┌────────────────┐
                                    │  User Email    │
                                    │  Inbox         │
                                    └────────────────┘
```

---

## Configuration

Set the following variables in `.env.local`:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=admin@lawizer.com
EMAIL_PASS=your-16-char-app-password
EMAIL_FROM=admin@lawizer.com
```

### Provider Setup Options

#### 1. Gmail (Development & Staging)
1. Go to [Google Account Security](https://myaccount.google.com/security).
2. Enable 2-Step Verification.
3. Generate an App Password for "Mail".
4. Set `EMAIL_PASS` to the 16-character generated password.

#### 2. SendGrid (Production)
```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=SG.your-sendgrid-api-key
EMAIL_FROM=admin@lawizer.com
```

#### 3. AWS SES (Enterprise)
```env
EMAIL_HOST=email-smtp.us-east-1.amazonaws.com
EMAIL_PORT=587
EMAIL_USER=your-ses-smtp-username
EMAIL_PASS=your-ses-smtp-password
EMAIL_FROM=admin@lawizer.com
```

---

## Code Structure

```text
lib/email/
├── mailer.ts          # Core nodemailer transport and sending logic
└── templates.ts       # HTML email templates
```

### Usage Example
```typescript
import { sendEmail } from "@/lib/email/mailer";
import { callbackRequestEmailTemplate } from "@/lib/email/templates";

const html = callbackRequestEmailTemplate(userName, userEmail);

await sendEmail({
  to: userEmail,
  subject: "Callback Request Received - Lawizer",
  html,
  from: "admin@lawizer.com",
});
```

---

## Error Handling & Resiliency
- Email sending is **asynchronous and non-blocking**.
- An email delivery failure does **not** fail the user's callback request; it logs the error to the server console and completes the database transaction safely.
