/**
 * Email templates for Lawizer
 */

export const callbackRequestEmailTemplate = (
 userName: string,
 userEmail: string
) => {
 const currentDate = new Date().toLocaleString("en-IN", {
 timeZone: "Asia/Kolkata",
 });

 return `
<!DOCTYPE html>
<html>
 <head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <style>
 body {
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 background-color: #f5f5f5;
 margin: 0;
 padding: 0;
 }
 .email-container {
 max-width: 600px;
 margin: 20px auto;
 background-color: #ffffff;
 border-radius: 8px;
 box-shadow: 0 2px 8px rgba(0,0,0,0.1);
 overflow: hidden;
 }
 .header {
 background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
 color: white;
 padding: 30px;
 text-align: center;
 }
 .header h1 {
 margin: 0;
 font-size: 28px;
 font-weight: 600;
 }
 .content {
 padding: 30px;
 color: #333333;
 }
 .greeting {
 font-size: 18px;
 font-weight: 500;
 margin-bottom: 20px;
 color: #333;
 }
 .message {
 line-height: 1.6;
 margin-bottom: 20px;
 color: #555;
 }
 .confirmation-box {
 background-color: #f0f7ff;
 border-left: 4px solid #667eea;
 padding: 15px;
 margin: 20px 0;
 border-radius: 4px;
 }
 .confirmation-box strong {
 color: #667eea;
 }
 .next-steps {
 background-color: #f9f9f9;
 padding: 20px;
 border-radius: 4px;
 margin: 20px 0;
 }
 .next-steps h3 {
 margin-top: 0;
 color: #333;
 }
 .next-steps ol {
 padding-left: 20px;
 line-height: 1.8;
 color: #555;
 }
 .next-steps li {
 margin-bottom: 10px;
 }
 .footer {
 background-color: #f5f5f5;
 padding: 20px;
 text-align: center;
 border-top: 1px solid #e0e0e0;
 font-size: 12px;
 color: #888;
 }
 .cta-button {
 display: inline-block;
 background-color: #667eea;
 color: white;
 padding: 12px 30px;
 text-decoration: none;
 border-radius: 5px;
 margin: 15px 0;
 font-weight: 500;
 }
 .cta-button:hover {
 background-color: #764ba2;
 }
 .contact-info {
 margin-top: 20px;
 padding-top: 20px;
 border-top: 1px solid #e0e0e0;
 font-size: 14px;
 color: #666;
 }
 </style>
 </head>
 <body>
 <div class="email-container">
 <!-- Header -->
 <div class="header">
 <h1>Callback Request Received ✓</h1>
 </div>

 <!-- Content -->
 <div class="content">
 <div class="greeting">Hi ${userName},</div>

 <div class="message">
 Thank you for requesting a callback from Lawizer! We appreciate your interest in our legal services.
 </div>

 <div class="confirmation-box">
 <strong>📌 Your Request Has Been Received</strong><br>
 <br>
 We have successfully recorded your callback request. Our team will review your request and get back to you shortly with available appointment slots.
 </div>

 <div class="next-steps">
 <h3>What Happens Next?</h3>
 <ol>
 <li><strong>Review:</strong> Our legal experts will review your request</li>
 <li><strong>Contact:</strong> We'll reach out within 24-48 hours with available time slots</li>
 <li><strong>Schedule:</strong> You can confirm your preferred date and time for the callback</li>
 <li><strong>Prepare:</strong> We'll send you details about the expert and any preparation needed</li>
 </ol>
 </div>

 <div class="message">
 <strong>Expected Timeline:</strong> You should expect to hear from us within 1-2 business days. 
 During peak hours, it may take slightly longer.
 </div>

 <center>
 <a href="https://lawizer.com/profile" class="cta-button">Check Your Profile</a>
 </center>

 <div class="contact-info">
 <strong>Have questions?</strong><br>
 Email us at: <a href="mailto:admin@lawizer.com">admin@lawizer.com</a><br>
 Call us: +91-XXXXXXXXXX<br>
 <br>
 <em>Request ID: ${new Date().getTime()}</em><br>
 <em>Received on: ${currentDate}</em>
 </div>
 </div>

 <!-- Footer -->
 <div class="footer">
 <p>
 © 2024 Lawizer. All rights reserved.<br>
 <a href="https://lawizer.com/privacy-policy" style="color: #667eea; text-decoration: none;">Privacy Policy</a> | 
 <a href="https://lawizer.com/terms" style="color: #667eea; text-decoration: none;">Terms of Service</a>
 </p>
 <p>
 This is an automated email. Please do not reply directly to this email.
 </p>
 </div>
 </div>
 </body>
</html>
 `;
};

export const callbackConfirmationEmailTemplate = (
 userName: string,
 expertName: string,
 scheduledDate: string,
 scheduledTime: string
) => {
 return `
<!DOCTYPE html>
<html>
 <head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <style>
 body {
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 background-color: #f5f5f5;
 margin: 0;
 padding: 0;
 }
 .email-container {
 max-width: 600px;
 margin: 20px auto;
 background-color: #ffffff;
 border-radius: 8px;
 box-shadow: 0 2px 8px rgba(0,0,0,0.1);
 overflow: hidden;
 }
 .header {
 background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
 color: white;
 padding: 30px;
 text-align: center;
 }
 .header h1 {
 margin: 0;
 font-size: 28px;
 font-weight: 600;
 }
 .content {
 padding: 30px;
 color: #333333;
 }
 .appointment-box {
 background-color: #f0f7ff;
 border-left: 4px solid #667eea;
 padding: 20px;
 margin: 20px 0;
 border-radius: 4px;
 }
 .appointment-detail {
 display: flex;
 justify-content: space-between;
 padding: 8px 0;
 border-bottom: 1px solid #ddd;
 }
 .appointment-detail:last-child {
 border-bottom: none;
 }
 .appointment-label {
 font-weight: 500;
 color: #667eea;
 }
 .footer {
 background-color: #f5f5f5;
 padding: 20px;
 text-align: center;
 border-top: 1px solid #e0e0e0;
 font-size: 12px;
 color: #888;
 }
 </style>
 </head>
 <body>
 <div class="email-container">
 <div class="header">
 <h1>Callback Scheduled ✓</h1>
 </div>

 <div class="content">
 <p>Hi ${userName},</p>

 <p>Great news! Your callback has been scheduled. Here are the details:</p>

 <div class="appointment-box">
 <div class="appointment-detail">
 <span class="appointment-label">Expert:</span>
 <span>${expertName}</span>
 </div>
 <div class="appointment-detail">
 <span class="appointment-label">Date:</span>
 <span>${scheduledDate}</span>
 </div>
 <div class="appointment-detail">
 <span class="appointment-label">Time:</span>
 <span>${scheduledTime}</span>
 </div>
 </div>

 <p>We'll call you at the registered number at the scheduled time. Please ensure you're available to take the call.</p>

 <p><strong>📞 Important:</strong> Please have the following information ready before your callback:
 <ul>
 <li>Your legal query details</li>
 <li>Any relevant documents or references</li>
 <li>Your contact number</li>
 </ul>
 </p>
 </div>

 <div class="footer">
 <p>© 2024 Lawizer. All rights reserved.</p>
 </div>
 </div>
 </body>
</html>
 `;
};

export const contactInquiryEmailTemplate = (
 userName: string,
 userEmail: string,
 serviceType: string,
 inquiry: string
) => {
 const currentDate = new Date().toLocaleString("en-IN", {
 timeZone: "Asia/Kolkata",
 });

 return `
<!DOCTYPE html>
<html>
 <head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <style>
 body {
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 background-color: #f5f5f5;
 margin: 0;
 padding: 0;
 }
 .email-container {
 max-width: 600px;
 margin: 20px auto;
 background-color: #ffffff;
 border-radius: 8px;
 box-shadow: 0 2px 8px rgba(0,0,0,0.1);
 overflow: hidden;
 }
 .header {
 background: linear-gradient(135deg, #e94560 0%, #ff6b8a 100%);
 color: white;
 padding: 30px;
 text-align: center;
 }
 .header h1 {
 margin: 0;
 font-size: 28px;
 font-weight: 600;
 }
 .content {
 padding: 30px;
 color: #333333;
 }
 .greeting {
 font-size: 18px;
 font-weight: 500;
 margin-bottom: 20px;
 color: #333;
 }
 .message {
 line-height: 1.6;
 margin-bottom: 20px;
 color: #555;
 }
 .inquiry-box {
 background-color: #fff5f7;
 border-left: 4px solid #e94560;
 padding: 15px;
 margin: 20px 0;
 border-radius: 4px;
 }
 .inquiry-label {
 font-weight: 600;
 color: #e94560;
 }
 .inquiry-content {
 margin-top: 10px;
 color: #555;
 line-height: 1.6;
 }
 .service-badge {
 display: inline-block;
 background: linear-gradient(135deg, #e94560, #ff6b8a);
 color: white;
 padding: 8px 16px;
 border-radius: 20px;
 font-size: 14px;
 font-weight: 500;
 margin: 10px 0;
 }
 .next-steps {
 background-color: #f9f9f9;
 padding: 20px;
 border-radius: 4px;
 margin: 20px 0;
 }
 .next-steps h3 {
 margin-top: 0;
 color: #333;
 }
 .next-steps ol {
 padding-left: 20px;
 line-height: 1.8;
 color: #555;
 }
 .contact-card {
 background: linear-gradient(135deg, #f0f7ff 0%, #fff5f7 100%);
 padding: 20px;
 border-radius: 8px;
 margin: 20px 0;
 }
 .contact-item {
 margin: 12px 0;
 color: #555;
 }
 .contact-item strong {
 color: #e94560;
 }
 .footer {
 background-color: #f5f5f5;
 padding: 20px;
 text-align: center;
 border-top: 1px solid #e0e0e0;
 font-size: 12px;
 color: #888;
 }
 .cta-button {
 display: inline-block;
 background: linear-gradient(135deg, #e94560, #ff6b8a);
 color: white;
 padding: 12px 30px;
 text-decoration: none;
 border-radius: 5px;
 margin: 15px 0;
 font-weight: 500;
 }
 .cta-button:hover {
 opacity: 0.9;
 }
 </style>
 </head>
 <body>
 <div class="email-container">
 <!-- Header -->
 <div class="header">
 <h1>We've Received Your Inquiry! 📬</h1>
 </div>

 <!-- Content -->
 <div class="content">
 <div class="greeting">Hi ${userName},</div>

 <div class="message">
 Thank you for reaching out to Lawizer! We've successfully received your inquiry regarding legal assistance.
 </div>

 <!-- Service Type Badge -->
 <div style="text-align: center;">
 <span class="service-badge">${serviceType}</span>
 </div>

 <!-- Inquiry Details -->
 <div class="inquiry-box">
 <div class="inquiry-label">Your Inquiry:</div>
 <div class="inquiry-content">
 ${inquiry.replace(/\n/g, "<br />")}
 </div>
 </div>

 <!-- Next Steps -->
 <div class="next-steps">
 <h3>What Happens Next?</h3>
 <ol>
 <li><strong>Review:</strong> Our legal experts will review your inquiry carefully</li>
 <li><strong>Contact:</strong> We'll reach out within 24 hours with expert guidance</li>
 <li><strong>Solution:</strong> We'll recommend the best service or expert for your case</li>
 <li><strong>Next Steps:</strong> We'll discuss pricing and scheduling if needed</li>
 </ol>
 </div>

 <!-- Contact Information -->
 <div class="contact-card">
 <h3 style="margin-top: 0; color: #e94560;">📞 How to Reach Us</h3>
 <div class="contact-item">
 <strong>📧 Email:</strong> admin@lawizer.com
 </div>
 <div class="contact-item">
 <strong>📱 Phone:</strong> +91 90628 15535
 </div>
 <div class="contact-item">
 <strong>⏰ Response Time:</strong> 24-48 hours (Business days)
 </div>
 </div>

 <div class="message">
 <strong>💡 Pro Tip:</strong> You can also call us directly for urgent matters. Our team is available 24/7 to support you.
 </div>

 <center>
 <a href="https://lawizer.com" class="cta-button">Visit Lawizer</a>
 </center>

 <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 13px; color: #888;">
 <em>Inquiry Reference ID: ${new Date().getTime()}</em><br>
 <em>Received on: ${currentDate}</em>
 </div>
 </div>

 <!-- Footer -->
 <div class="footer">
 <p>
 © 2024 Lawizer. All rights reserved.<br>
 <a href="https://lawizer.com/privacy-policy" style="color: #e94560; text-decoration: none;">Privacy Policy</a> | 
 <a href="https://lawizer.com/terms" style="color: #e94560; text-decoration: none;">Terms of Service</a>
 </p>
 <p>
 This is an automated email. Please do not reply directly to this email.
 </p>
 </div>
 </div>
 </body>
</html>
 `;
};

export const callbackRequestUserEmailTemplate = (
 userName: string,
 serviceName: string
) => {
 const currentDate = new Date().toLocaleString("en-IN", {
 timeZone: "Asia/Kolkata",
 });

 return `
<!DOCTYPE html>
<html>
 <head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <style>
 body {
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 background-color: #f5f5f5;
 margin: 0;
 padding: 0;
 }
 .email-container {
 max-width: 600px;
 margin: 20px auto;
 background-color: #ffffff;
 border-radius: 8px;
 box-shadow: 0 2px 8px rgba(0,0,0,0.1);
 overflow: hidden;
 }
 .header {
 background: linear-gradient(135deg, #e94560 0%, #ff6b8a 100%);
 color: white;
 padding: 30px;
 text-align: center;
 }
 .header h1 {
 margin: 0;
 font-size: 28px;
 font-weight: 600;
 }
 .content {
 padding: 30px;
 color: #333333;
 }
 .greeting {
 font-size: 18px;
 font-weight: 500;
 margin-bottom: 20px;
 color: #333;
 }
 .message {
 line-height: 1.6;
 margin-bottom: 20px;
 color: #555;
 }
 .confirmation-box {
 background-color: #fff5f7;
 border-left: 4px solid #e94560;
 padding: 15px;
 margin: 20px 0;
 border-radius: 4px;
 }
 .service-badge {
 display: inline-block;
 background: linear-gradient(135deg, #e94560, #ff6b8a);
 color: white;
 padding: 8px 16px;
 border-radius: 20px;
 font-size: 14px;
 font-weight: 500;
 margin: 10px 0;
 }
 .next-steps {
 background-color: #f9f9f9;
 padding: 20px;
 border-radius: 4px;
 margin: 20px 0;
 }
 .next-steps h3 {
 margin-top: 0;
 color: #333;
 }
 .next-steps ol {
 padding-left: 20px;
 line-height: 1.8;
 color: #555;
 }
 .next-steps li {
 margin-bottom: 10px;
 }
 .footer {
 background-color: #f5f5f5;
 padding: 20px;
 text-align: center;
 border-top: 1px solid #e0e0e0;
 font-size: 12px;
 color: #888;
 }
 .contact-info {
 margin-top: 20px;
 padding-top: 20px;
 border-top: 1px solid #e0e0e0;
 font-size: 14px;
 color: #666;
 }
 </style>
 </head>
 <body>
 <div class="email-container">
 <!-- Header -->
 <div class="header">
 <h1>Callback Request Received ✓</h1>
 </div>

 <!-- Content -->
 <div class="content">
 <div class="greeting">Hi ${userName},</div>

 <div class="message">
 Thank you for requesting a callback from Lawizer! We appreciate your interest in our legal services.
 </div>

 <!-- Service Badge -->
 <div style="text-align: center;">
 <span class="service-badge">${serviceName}</span>
 </div>

 <div class="confirmation-box">
 <strong>📌 Your Request Has Been Received</strong><br>
 <br>
 We have successfully recorded your callback request for <strong>${serviceName}</strong>. Our team will review your request and get back to you shortly with available appointment slots.
 </div>

 <div class="next-steps">
 <h3>What Happens Next?</h3>
 <ol>
 <li><strong>Review:</strong> Our legal experts will review your callback request</li>
 <li><strong>Contact:</strong> We'll reach out within 24-48 hours with available time slots</li>
 <li><strong>Schedule:</strong> You can confirm your preferred date and time for the callback</li>
 <li><strong>Prepare:</strong> We'll send you details about the expert and any preparation needed</li>
 </ol>
 </div>

 <div class="message">
 <strong>Expected Timeline:</strong> You should expect to hear from us within 1-2 business days. During peak hours, it may take slightly longer.
 </div>

 <div class="contact-info">
 <strong>Have questions?</strong><br>
 Email us at: <a href="mailto:admin@lawizer.com">admin@lawizer.com</a><br>
 Call us: +91 90628 15535<br>
 <br>
 <em>Request ID: ${new Date().getTime()}</em><br>
 <em>Received on: ${currentDate}</em>
 </div>
 </div>

 <!-- Footer -->
 <div class="footer">
 <p>
 © 2024 Lawizer. All rights reserved.<br>
 <a href="https://lawizer.com/privacy-policy" style="color: #e94560; text-decoration: none;">Privacy Policy</a> | 
 <a href="https://lawizer.com/terms" style="color: #e94560; text-decoration: none;">Terms of Service</a>
 </p>
 <p>
 This is an automated email. Please do not reply directly to this email.
 </p>
 </div>
 </div>
 </body>
</html>
 `;
};

export const callbackRequestAdminEmailTemplate = (
 userName: string,
 userEmail: string,
 userPhone: string,
 serviceName: string
) => {
 const currentDate = new Date().toLocaleString("en-IN", {
 timeZone: "Asia/Kolkata",
 });

 return `
<!DOCTYPE html>
<html>
 <head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <style>
 body {
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 background-color: #f5f5f5;
 margin: 0;
 padding: 0;
 }
 .email-container {
 max-width: 600px;
 margin: 20px auto;
 background-color: #ffffff;
 border-radius: 8px;
 box-shadow: 0 2px 8px rgba(0,0,0,0.1);
 overflow: hidden;
 }
 .header {
 background: linear-gradient(135deg, #e94560 0%, #ff6b8a 100%);
 color: white;
 padding: 30px;
 text-align: center;
 }
 .header h1 {
 margin: 0;
 font-size: 24px;
 font-weight: 600;
 }
 .content {
 padding: 30px;
 color: #333333;
 }
 .ticket-box {
 background-color: #fff5f7;
 border-left: 4px solid #e94560;
 padding: 20px;
 margin: 20px 0;
 border-radius: 4px;
 }
 .ticket-field {
 margin: 15px 0;
 border-bottom: 1px solid #f0e0e6;
 padding-bottom: 10px;
 }
 .ticket-field:last-child {
 border-bottom: none;
 margin-bottom: 0;
 padding-bottom: 0;
 }
 .label {
 font-weight: 600;
 color: #e94560;
 display: block;
 margin-bottom: 5px;
 }
 .value {
 color: #555;
 font-size: 15px;
 }
 .action-button {
 display: inline-block;
 background: linear-gradient(135deg, #e94560, #ff6b8a);
 color: white;
 padding: 12px 30px;
 text-decoration: none;
 border-radius: 5px;
 margin: 15px 0;
 font-weight: 500;
 }
 .action-button:hover {
 opacity: 0.9;
 }
 .footer {
 background-color: #f5f5f5;
 padding: 20px;
 text-align: center;
 border-top: 1px solid #e0e0e0;
 font-size: 12px;
 color: #888;
 }
 .priority-badge {
 display: inline-block;
 background: #ffd700;
 color: #333;
 padding: 6px 12px;
 border-radius: 20px;
 font-size: 12px;
 font-weight: 600;
 margin-bottom: 15px;
 }
 </style>
 </head>
 <body>
 <div class="email-container">
 <!-- Header -->
 <div class="header">
 <h1>📞 New Callback Request</h1>
 </div>

 <!-- Content -->
 <div class="content">
 <p>A new callback request has been submitted. Please see the details below:</p>

 <div class="priority-badge">⚠️ ACTION REQUIRED</div>

 <div class="ticket-box">
 <div class="ticket-field">
 <span class="label">👤 Customer Name:</span>
 <span class="value">${userName}</span>
 </div>

 <div class="ticket-field">
 <span class="label">📧 Email Address:</span>
 <span class="value"><a href="mailto:${userEmail}">${userEmail}</a></span>
 </div>

 <div class="ticket-field">
 <span class="label">📱 Phone Number:</span>
 <span class="value"><a href="tel:${userPhone}">${userPhone}</a></span>
 </div>

 <div class="ticket-field">
 <span class="label">🏷️ Service Requested:</span>
 <span class="value" style="display: inline-block; background: linear-gradient(135deg, #e94560, #ff6b8a); color: white; padding: 8px 12px; border-radius: 4px; font-weight: 500;">${serviceName}</span>
 </div>

 <div class="ticket-field">
 <span class="label">⏰ Request Time:</span>
 <span class="value">${currentDate}</span>
 </div>

 <div class="ticket-field">
 <span class="label">🆔 Ticket ID:</span>
 <span class="value">${new Date().getTime()}</span>
 </div>
 </div>

 <div style="background: #f0f7ff; padding: 15px; border-radius: 4px; margin: 20px 0;">
 <strong>📌 Next Steps:</strong>
 <ol style="margin: 10px 0; padding-left: 20px;">
 <li>Review the customer's callback request</li>
 <li>Contact the customer within 24-48 hours</li>
 <li>Schedule the callback appointment</li>
 <li>Send confirmation email with details</li>
 </ol>
 </div>

 <center>
 <a href="mailto:${userEmail}" class="action-button">Reply to Customer</a>
 </center>

 <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 13px; color: #888;">
 <p style="margin: 5px 0;"><strong>Priority:</strong> Medium - Follow up required</p>
 <p style="margin: 5px 0;"><strong>Status:</strong> Pending Review</p>
 <p style="margin: 5px 0;"><em>This is an automated support ticket. Do not reply to this email. Instead, contact the customer directly at ${userEmail}</em></p>
 </div>
 </div>

 <!-- Footer -->
 <div class="footer">
 <p>© 2024 Lawizer. All rights reserved.</p>
 </div>
 </div>
 </body>
</html>
 `;
};
