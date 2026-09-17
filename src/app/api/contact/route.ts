import { NextResponse } from "next/server";
import {
  fieldRow,
  isMailConfigured,
  sendLeadEmail,
} from "@/lib/mail";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  company?: string; // honeypot
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
            "Email is not configured yet. Add RESEND_API_KEY on the server.",
        },
        { status: 503 },
      );
    }

    const body = (await request.json()) as ContactBody;

    // Honeypot: bots fill this; humans leave it empty.
    if (body.company?.trim()) {
      return NextResponse.json({ ok: true });
    }

    const name = required(body.name, "Name");
    const email = required(body.email, "Email");
    const subject = required(body.subject, "Subject");
    const message = required(body.message, "Message");
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const text = [
      "New contact form submission",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      message,
    ].join("\n");

    await sendLeadEmail({
      subject: `[FixIt Contact] ${subject}`,
      replyTo: email,
      text,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#18181b;">
          <h1 style="font-size:20px;margin:0 0 16px;">New contact form submission</h1>
          <table style="width:100%;border-collapse:collapse;">
            ${fieldRow("Name", name)}
            ${fieldRow("Email", email)}
            ${fieldRow("Phone", phone)}
            ${fieldRow("Subject", subject)}
            ${fieldRow("Message", message)}
          </table>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to send message.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
