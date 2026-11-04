const zeptoToken = process.env.ZEPTOMAIL_TOKEN;
const zeptoApiUrl =
  process.env.ZEPTOMAIL_API_URL ?? "https://api.zeptomail.com/v1.1/email";
const bounceAddress = process.env.ZEPTOMAIL_BOUNCE_ADDRESS;
const toEmail =
  process.env.CONTACT_TO_EMAIL ?? "operations@fixitmulticoncepts.com";
const fromEmail =
  process.env.CONTACT_FROM_EMAIL ??
  "FixIt Website <noreply@fixitmulticoncepts.com>";

export type MailPayload = {
  subject: string;
  replyTo: string;
  html: string;
  text: string;
};

function parseAddress(value: string): { address: string; name?: string } {
  const match = value.match(/^(.*?)\s*<([^>]+)>$/);
  if (match) {
    return { name: match[1].trim() || undefined, address: match[2].trim() };
  }
  return { address: value.trim() };
}

export function isMailConfigured() {
  return Boolean(zeptoToken);
}

export async function sendLeadEmail(payload: MailPayload) {
  if (!zeptoToken) {
    throw new Error("ZEPTOMAIL_TOKEN is not configured");
  }

  const from = parseAddress(fromEmail);
  const replyTo = parseAddress(payload.replyTo);

  const body: Record<string, unknown> = {
    from: {
      address: from.address,
      ...(from.name ? { name: from.name } : {}),
    },
    to: [
      {
        email_address: {
          address: toEmail,
        },
      },
    ],
    reply_to: [
      {
        address: replyTo.address,
        ...(replyTo.name ? { name: replyTo.name } : {}),
      },
    ],
    subject: payload.subject,
    htmlbody: payload.html,
    textbody: payload.text,
  };

  if (bounceAddress) {
    body.bounce_address = bounceAddress;
  }

  const response = await fetch(zeptoApiUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Zoho-enczapikey ${zeptoToken}`,
    },
    body: JSON.stringify(body),
  });

  const result = (await response.json().catch(() => null)) as
    | {
        data?: unknown;
        message?: string;
        error?: { message?: string; code?: string };
        error_code?: string | number;
        error_message?: string;
      }
    | null;

  if (!response.ok) {
    const message =
      result?.error?.message ||
      result?.error_message ||
      result?.message ||
      `ZeptoMail request failed (${response.status})`;
    throw new Error(message);
  }

  return result?.data ?? result;
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
  const safe = escapeHtml(value || "-");
  return `<tr>
    <td style="padding:8px 12px;border-bottom:1px solid #e4e4e7;color:#71717a;font-size:13px;width:140px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;border-bottom:1px solid #e4e4e7;color:#18181b;font-size:14px;vertical-align:top;">${safe.replace(/\n/g, "<br />")}</td>
  </tr>`;
}
