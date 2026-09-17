"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/Button";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          subject: data.get("subject"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error || "Unable to send your message.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Unable to send your message.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-zinc-700">Full name</span>
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="mt-2 w-full rounded-sm border border-zinc-200 bg-white px-3 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-primary"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-700">Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="mt-2 w-full rounded-sm border border-zinc-200 bg-white px-3 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-primary"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-700">Phone</span>
          <input
            name="phone"
            type="tel"
            placeholder="+234 ..."
            className="mt-2 w-full rounded-sm border border-zinc-200 bg-white px-3 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-primary"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-700">Subject</span>
          <input
            name="subject"
            type="text"
            required
            placeholder="How can we help?"
            className="mt-2 w-full rounded-sm border border-zinc-200 bg-white px-3 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-primary"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-zinc-700">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us about your facility and service needs."
            className="mt-2 w-full resize-y rounded-sm border border-zinc-200 bg-white px-3 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-primary"
          />
        </label>

        {/* Honeypot — leave empty */}
        <label className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
          <span>Company</span>
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-6">
        <Button type="submit" className="px-6 py-3" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send message"}
        </Button>
        {status === "sent" ? (
          <p className="mt-3 text-sm font-medium text-primary">
            Thanks. Your message has been sent. We will get back to you soon.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="mt-3 text-sm font-medium text-red-600">{error}</p>
        ) : null}
      </div>
    </form>
  );
}
