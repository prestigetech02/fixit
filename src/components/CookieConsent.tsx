"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/Button";

const STORAGE_KEY = "fixit-cookie-consent";

type ConsentValue = "accepted" | "necessary";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const save = (value: ConsentValue) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore storage failures
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[65] sm:inset-x-5 sm:bottom-5 lg:inset-x-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-5">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold tracking-tight text-zinc-900">
            We use cookies
          </p>
          <p className="mt-1 text-sm leading-relaxed text-zinc-500">
            We use cookies to improve your experience and understand how our
            site is used. You can accept all cookies or continue with necessary
            cookies only.{" "}
            <Link
              href="/cookies-policy"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              Learn more
            </Link>
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => save("necessary")}
            className="rounded-sm border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900"
          >
            Necessary only
          </button>
          <Button
            type="button"
            onClick={() => save("accepted")}
            className="px-5 py-2.5"
          >
            Accept all
          </Button>
        </div>
      </div>
    </div>
  );
}
