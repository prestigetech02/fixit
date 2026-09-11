"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit}>
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
      </div>

      <div className="mt-6">
        <Button type="submit" className="px-6 py-3">
          Send message
        </Button>
        {status === "sent" ? (
          <p className="mt-3 text-sm font-medium text-primary">
            Thanks. Your message is ready to send once email is connected.
          </p>
        ) : null}
      </div>
    </form>
  );
}
