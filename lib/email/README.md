# Email Service Documentation

## Overview

The Lawizer application includes an automated email service to send callback request confirmations to users. When a user requests a callback, an HTML-formatted confirmation email is automatically sent to their registered email address from admin@lawizer.com.

## Features

✅ Automated callback request confirmation emails
✅ HTML email templates with professional styling
✅ Support for multiple SMTP providers (Gmail, SendGrid, AWS SES, etc.)
✅ Async email sending (doesn't block the callback request)
✅ Error handling with graceful fallback
✅ Email configuration via environment variables

## Setup Instructions

### 1. Install Dependencies

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### 2. Configure Environment Variables

Copy the `.env.example` file and create a `.env.local` file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your email configuration:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=admin@lawizer.com
EMAIL_PASS=your-app-password
EMAIL_FROM=admin@lawizer.com
```

### 3. Choose Your Email Provider

#### Option A: Gmail (Recommended for Development)

1. Go to [Google Account Settings](https://myaccount.google.com/security)
2. Enable "2-Step Verification"
3. Generate an "App Password" for Mail
4. Use the 16-character password in `EMAIL_PASS`

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=xxxx-xxxx-xxxx-xxxx
EMAIL_FROM=your-gmail@gmail.com
```

#### Option B: SendGrid (Recommended for Production)

1. Create a [SendGrid account](https://sendgrid.com)
2. Generate an API key
3. Configure:

```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=SG.your-sendgrid-api-key
EMAIL_FROM=admin@lawizer.com
```

#### Option C: AWS SES

1. Set up AWS SES in your region
2. Verify your email address
3. Generate SMTP credentials
4. Configure:

```env
EMAIL_HOST=email-smtp.us-east-1.amazonaws.com
EMAIL_PORT=587
EMAIL_USER=your-ses-username
EMAIL_PASS=your-ses-password
EMAIL_FROM=admin@lawizer.com
```

## File Structure

```
lib/email/
├── mailer.ts          # Core email sending functionality
└── templates.ts       # Email HTML templates

app/api/user/
└── request-call/
    └── route.ts       # API endpoint that triggers email
```

## How It Works

### Callback Request Flow

1. **User initiates callback request** → Frontend calls `/api/user/request-call`
2. **API route processes request** → Forwards to backend service
3. **Email trigger** → On successful callback, email is sent
4. **Email sent to user** → User receives confirmation with next steps

### Email Sending Process

```typescript
// 1. User requests callback
POST / api / user / request - call;

// 2. Backend processes callback request
// 3. API retrieves user profile
const userProfile = await getUserProfile(authHeader);

// 4. Generate email HTML
const emailHtml = callbackRequestEmailTemplate(userName, userEmail);

// 5. Send email
await sendEmail({
  to: userEmail,
  subject: "Callback Request Received - Lawizer",
  html: emailHtml,
  from: "admin@lawizer.com",
});
```

## Email Templates

### 1. Callback Request Confirmation

**File**: `lib/email/templates.ts`

Sent when user requests a callback. Includes:

- Request confirmation
- What happens next
- Expected timeline
- Contact information

### 2. Callback Scheduled (Future Use)

Template for when callback is officially scheduled with a specific expert and time.

## API Reference

### sendEmail(options)

Sends an email with specified content.

**Parameters**:

```typescript
interface SendEmailOptions {
  to: string; // Recipient email
  subject: string; // Email subject
  html: string; // HTML content
  from?: string; // Sender email (optional)
}
```

**Returns**:

```typescript
{ success: true, messageId: string }
```

**Example**:

```typescript
import { sendEmail } from "@/lib/email/mailer";
import { callbackRequestEmailTemplate } from "@/lib/email/templates";

const html = callbackRequestEmailTemplate("John Doe", "john@example.com");

await sendEmail({
  to: "john@example.com",
  subject: "Your callback request",
  html,
  from: "admin@lawizer.com",
});
```

### verifyEmailConfig()

Tests the email configuration without sending an email.

**Returns**:

```typescript
{ success: true, message: "Email configuration is valid" }
```

**Example**:

```typescript
import { verifyEmailConfig } from "@/lib/email/mailer";

await verifyEmailConfig();
```

## Testing

### 1. Test Email Configuration

Create a test endpoint to verify your email setup:

```typescript
// pages/api/test-email.ts
import { verifyEmailConfig } from "@/lib/email/mailer";

export default async function handler(req, res) {
  try {
    const result = await verifyEmailConfig();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

Visit `http://localhost:3000/api/test-email` to test.

### 2. Send Test Email

```typescript
import { sendEmail } from "@/lib/email/mailer";
import { callbackRequestEmailTemplate } from "@/lib/email/templates";

const html = callbackRequestEmailTemplate("Test User", "test@example.com");

await sendEmail({
  to: "your-email@example.com",
  subject: "Test Email",
  html,
  from: "admin@lawizer.com",
});
```

### 3. Check Logs

Email sending is logged in the server console:

```
Email sent: <message-id>
```

## Troubleshooting

### Email Not Sending

**Error: "Email configuration missing"**

- Check `.env.local` file exists
- Verify all required variables are set:
  - `EMAIL_HOST`
  - `EMAIL_PORT`
  - `EMAIL_USER`
  - `EMAIL_PASS`

**Error: "Invalid login credentials"**

- Verify email and password are correct
- For Gmail: Use App Password, not regular password
- For SendGrid: Make sure API key is correct

**Error: "Network error"**

- Check EMAIL_PORT is correct (usually 587 for TLS)
- Verify firewall allows SMTP connections
- Test with `verifyEmailConfig()`

### Emails Going to Spam

- Add unsubscribe link (future enhancement)
- Use SPF/DKIM records (mail provider configuration)
- Use authenticated email domain

## Email Customization

To customize email templates, edit `lib/email/templates.ts`:

```typescript
export const callbackRequestEmailTemplate = (userName: string, userEmail: string) => {
  // Modify the HTML here
  return `<html>...</html>`;
};
```

## Future Enhancements

- [ ] Add email scheduling
- [ ] Add email retry logic
- [ ] Add email templates for other events (consultation scheduled, payment received)
- [ ] Add email preferences management
- [ ] Add unsubscribe functionality
- [ ] Add email analytics tracking
- [ ] Support for multiple languages

## Security Considerations

1. **Never commit credentials** - Use `.env.local` which is in `.gitignore`
2. **Use app-specific passwords** - For Gmail, generate App Password
3. **Rotate credentials regularly** - Change API keys/passwords
4. **Use HTTPS** - Always use HTTPS in production
5. **Rate limiting** - Consider adding rate limits to email endpoints
6. **Email validation** - Validate email before sending

## Performance Notes

- Email sending is **asynchronous** - doesn't block the callback request
- Email failures don't fail the callback request (graceful fallback)
- Consider using a queue service (Bull, Bullmq) for high-volume emails
- Email delivery is generally 1-5 seconds

## Support

For issues or questions:

- Check the logs in server console
- Review `.env.local` configuration
- Test with `verifyEmailConfig()`
- Check email provider's dashboard for delivery issues
