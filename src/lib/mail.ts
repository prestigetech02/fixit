const zeptoTokenRaw = process.env.ZEPTOMAIL_TOKEN?.trim() ?? "";
const zeptoToken = zeptoTokenRaw.replace(/^Zoho-enczapikey\s+/i, "");
const zeptoApiUrl =
  process.env.ZEPTOMAIL_API_URL ?? "https://cpaas.zoho.com/v1.1/email";
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

function extractZeptoError(
  result: unknown,
  status: number,
): string {
  if (!result || typeof result !== "object") {
    return `ZeptoMail request failed (${status})`;
  }

  const record = result as Record<string, unknown>;
  const error = record.error;

  if (error && typeof error === "object") {
    const err = error as Record<string, unknown>;
    if (typeof err.message === "string" && err.message.trim()) {
      return err.message;
    }
    const details = err.details;
    if (Array.isArray(details) && details[0] && typeof details[0] === "object") {
      const first = details[0] as Record<string, unknown>;
      if (typeof first.message === "string" && first.message.trim()) {
        return first.message;
      }
    }
  }

  if (typeof record.error_message === "string" && record.error_message.trim()) {
    return record.error_message;
  }
  if (typeof record.message === "string" && record.message.trim()) {
    return record.message;
  }

  return `ZeptoMail request failed (${status})`;
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

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    const raw = extractZeptoError(result, response.status);
    const normalized = raw.toLowerCase();

    if (
      normalized.includes("access denied") ||
      normalized.includes("invalid api") ||
      normalized.includes("invalid sendmail") ||
      normalized.includes("token")
    ) {
      throw new Error(
        "Email service rejected the request. Check ZEPTOMAIL_TOKEN and that a sending domain is verified in Zoho CPaaS.",
      );
    }

    if (
      normalized.includes("domain") ||
      normalized.includes("sender") ||
      normalized.includes("from")
    ) {
      throw new Error(
        "Sender address is not verified in Zoho CPaaS. Add and verify your domain, then set CONTACT_FROM_EMAIL to an address on that domain.",
      );
    }

    throw new Error(raw);
  }

  if (
    result &&
    typeof result === "object" &&
    "data" in result &&
    (result as { data?: unknown }).data !== undefined
  ) {
    return (result as { data: unknown }).data;
  }

  return result;
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
