import "server-only";
import { Resend } from "resend";
import { CONTACT_EMAIL, SENDER_EMAIL } from "@/lib/config";

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function sanitizeHeader(s: string): string {
  return s.replace(/[\r\n\t]/g, "").trim();
}

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
}

let _resend: Resend | null = null;

function getResend(): Resend {
  if (!_resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY is not set");
    _resend = new Resend(apiKey);
  }
  return _resend;
}

export async function sendOtpEmail(email: string, code: string) {
  return getResend().emails.send({
    from: `SysNova <${SENDER_EMAIL}>`,
    to: [email],
    subject: "Your SysNova verification code",
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;background:#111211;color:#fff;border-radius:12px;">
        <h1 style="color:#F9D977;font-size:20px;margin-bottom:4px;">SysNova</h1>
        <p style="color:#9CA3AF;font-size:13px;margin-top:0;margin-bottom:32px;">Email Verification</p>
        <p style="color:#D1D5DB;font-size:14px;margin-bottom:16px;">Here is your verification code:</p>
        <div style="background:#181A18;border:1px solid #262826;border-radius:8px;padding:20px;text-align:center;margin-bottom:24px;">
          <span style="font-family:monospace;font-size:36px;letter-spacing:0.3em;color:#F9D977;font-weight:700;">${code}</span>
        </div>
        <p style="color:#6B7280;font-size:13px;line-height:1.6;">This code expires in <strong style="color:#D1D5DB;">10 minutes</strong>.<br/>If you didn't request this, you can safely ignore this email.</p>
        <hr style="border-color:#262826;margin:24px 0;" />
        <p style="color:#4B5563;font-size:12px;">SysNova · Berlin, Germany</p>
      </div>
    `,
  });
}

export async function sendContactEmail(payload: ContactPayload) {
  const { name, email, company, message } = payload;
  const eName = escapeHtml(name);
  const eEmail = escapeHtml(email);
  const eCompany = company ? escapeHtml(company) : undefined;
  const eMessage = escapeHtml(message);

  return getResend().emails.send({
    from: `SysNova Contact <${SENDER_EMAIL}>`,
    to:   [CONTACT_EMAIL],
    replyTo: sanitizeHeader(email),
    subject: `New inquiry from ${sanitizeHeader(name)}${company ? ` (${sanitizeHeader(company)})` : ""}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#111211;color:#fff;border-radius:12px;">
        <h1 style="color:#F9D977;font-size:22px;margin-bottom:8px;">New Contact Inquiry</h1>
        <hr style="border-color:#262826;margin-bottom:20px;" />
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="color:#9CA3AF;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;padding:8px 0;width:100px;">Name</td>
            <td style="color:#fff;font-size:14px;padding:8px 0;">${eName}</td>
          </tr>
          <tr>
            <td style="color:#9CA3AF;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;padding:8px 0;">Email</td>
            <td style="font-size:14px;padding:8px 0;"><a href="mailto:${eEmail}" style="color:#F9D977;">${eEmail}</a></td>
          </tr>
          ${eCompany ? `<tr>
            <td style="color:#9CA3AF;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;padding:8px 0;">Company</td>
            <td style="color:#fff;font-size:14px;padding:8px 0;">${eCompany}</td>
          </tr>` : ""}
        </table>
        <hr style="border-color:#262826;margin:20px 0;" />
        <h2 style="color:#A26720;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;">Message</h2>
        <p style="color:#D1D5DB;font-size:14px;line-height:1.7;white-space:pre-wrap;">${eMessage}</p>
        <hr style="border-color:#262826;margin:24px 0;" />
        <p style="color:#4B5563;font-size:12px;">Sent via SysNova website contact form</p>
      </div>
    `,
  });
}
