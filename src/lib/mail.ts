import { Resend } from "resend";
import { siteConfig } from "@/lib/seo";

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail =
  process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
const fromEmail =
  process.env.CONTACT_FROM_EMAIL ??
  "FixIt Website <onboarding@resend.dev>";

export type MailPayload = {
  subject: string;
  replyTo: string;
  html: string;
  text: string;
};

export function isMailConfigured() {
  return Boolean(resendApiKey);
}

export async function sendLeadEmail(payload: MailPayload) {
  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(resendApiKey);
  const result = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: payload.replyTo,
    subject: payload.subject,
    html: payload.html,
    text: payload.text,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result.data;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function fieldRow(label: string, value: string) {
  const safe = escapeHtml(value || "—");
  return `<tr>
    <td style="padding:8px 12px;border-bottom:1px solid #e4e4e7;color:#71717a;font-size:13px;width:140px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;border-bottom:1px solid #e4e4e7;color:#18181b;font-size:14px;vertical-align:top;">${safe.replace(/\n/g, "<br />")}</td>
  </tr>`;
}
