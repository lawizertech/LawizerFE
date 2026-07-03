import nodemailer from "nodemailer";

/**
 * Email configuration - uses environment variables
 * Required env vars:
 * - EMAIL_HOST: SMTP server host
 * - EMAIL_PORT: SMTP server port
 * - EMAIL_USER: Email account username
 * - EMAIL_PASS: Email account password (app password for Gmail)
 */

let transporter: nodemailer.Transporter | null = null;

const getTransporter = () => {
 if (transporter) return transporter;

 const host = process.env.EMAIL_HOST;
 const port = process.env.EMAIL_PORT;
 const user = process.env.EMAIL_USER;
 const pass = process.env.EMAIL_PASS;

 if (!host || !port || !user || !pass) {
 throw new Error(
 "Email configuration missing. Please set EMAIL_HOST, EMAIL_PORT, EMAIL_USER, and EMAIL_PASS environment variables."
 );
 }

 transporter = nodemailer.createTransport({
 host,
 port: parseInt(port),
 secure: port === "465", // true for 465, false for other ports
 auth: {
 user,
 pass,
 },
 });

 return transporter;
};

export interface SendEmailOptions {
 to: string;
 subject: string;
 html: string;
 from?: string;
}

export const sendEmail = async (options: SendEmailOptions) => {
 const transporter = getTransporter();
 const from = options.from || (process.env.EMAIL_FROM || process.env.EMAIL_USER);

 try {
 const info = await transporter.sendMail({
 from,
 to: options.to,
 subject: options.subject,
 html: options.html,
 });
 return { success: true, messageId: info.messageId };
 } catch (error) {
 console.error("Error sending email:", error);
 throw error;
 }
};

/**
 * Verify transporter connection
 * Useful for testing email configuration
 */
export const verifyEmailConfig = async () => {
 try {
 const transporter = getTransporter();
 await transporter.verify();
 return { success: true, message: "Email configuration is valid" };
 } catch (error) {
 console.error("Email configuration error:", error);
 throw error;
 }
};
