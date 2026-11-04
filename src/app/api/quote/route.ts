import { NextResponse } from "next/server";
import {
  fieldRow,
  isMailConfigured,
  sendLeadEmail,
} from "@/lib/mail";
import { verifyRecaptchaToken } from "@/lib/recaptcha";

type QuoteBody = {
  name?: string;
  email?: string;
  phone?: string;
  organisation?: string;
  service?: string;
  details?: string;
  company?: string; // honeypot
  recaptchaToken?: string;
};

function required(value: unknown, label: string) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${label} is required`);
  }
  return value.trim();
}

export async function POST(request: Request) {
  try {
    if (!isMailConfigured()) {
      return NextResponse.json(
        {
          error:
            "Email is not configured yet. Add ZEPTOMAIL_TOKEN on the server.",
        },
        { status: 503 },
      );
    }

    const body = (await request.json()) as QuoteBody;

    if (body.company?.trim()) {
      return NextResponse.json({ ok: true });
    }

    await verifyRecaptchaToken({
      token: body.recaptchaToken,
      expectedAction: "quote",
    });

    const name = required(body.name, "Name");
    const email = required(body.email, "Email");
    const phone = required(body.phone, "Phone");
    const service = required(body.service, "Service");
    const details = required(body.details, "Project details");
    const organisation =
      typeof body.organisation === "string" ? body.organisation.trim() : "";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const text = [
      "New quote request",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Organisation: ${organisation || "-"}`,
      `Service: ${service}`,
      "",
      "Project details:",
      details,
    ].join("\n");

    await sendLeadEmail({
      subject: `[FixIt Quote] ${service}`,
      replyTo: email,
      text,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#18181b;">
          <h1 style="font-size:20px;margin:0 0 16px;">New quote request</h1>
          <table style="width:100%;border-collapse:collapse;">
            ${fieldRow("Name", name)}
            ${fieldRow("Email", email)}
            ${fieldRow("Phone", phone)}
            ${fieldRow("Organisation", organisation)}
            ${fieldRow("Service", service)}
            ${fieldRow("Details", details)}
          </table>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to send quote request.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
