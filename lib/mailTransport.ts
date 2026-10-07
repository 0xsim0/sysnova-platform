import "server-only";
import nodemailer from "nodemailer";
import { Resend } from "resend";

interface EmailMessage {
  from: string;
  to: string[];
  subject: string;
  html: string;
  replyTo?: string;
}

function getProvider(): string {
  return process.env.EMAIL_PROVIDER ?? "resend";
}

export function isEmailConfigured(): boolean {
  const provider = getProvider();

  if (provider === "mailpit") return true;
  if (provider === "resend") return Boolean(process.env.RESEND_API_KEY);

  return false;
}

// Dieser Versandweg ist ausdrücklich für unser lokales Testpostfach.
const testTransport = nodemailer.createTransport({
  host: "mailpit",
  port: 1025,
  secure: false,
  ignoreTLS: true,
  connectionTimeout: 5000,
  socketTimeout: 10000,
  disableFileAccess: true,
  disableUrlAccess: true,
});

let resend: Resend | undefined;

export async function sendEmail(message: EmailMessage): Promise<void> {
  const provider = getProvider();

  if (provider === "mailpit") {
    await testTransport.sendMail({
      ...message,
      from: "SysNova Homelab <noreply@sysnova.test>",
    });
    return;
  }

  if (provider !== "resend") {
    throw new Error("Unknown EMAIL_PROVIDER");
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");

  resend ??= new Resend(apiKey);

  const { error } = await resend.emails.send(message);

  if (error) {
    throw new Error("Email provider rejected the message");
  }
}
