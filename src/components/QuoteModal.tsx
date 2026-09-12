"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import Button from "@/components/Button";
import {
  isQuoteHref,
  QuoteModalStateProvider,
  useQuoteModal,
} from "@/components/quote-modal-context";
import { services } from "@/data/services";

const fieldClass =
  "mt-2 w-full rounded-sm border border-zinc-200 bg-white px-3 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-primary";

function QuoteModalDialog() {
  const quoteModal = useQuoteModal();
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const titleId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const open = quoteModal?.open ?? false;
  const closeQuoteModal = quoteModal?.closeQuoteModal;
  const openQuoteModal = quoteModal?.openQuoteModal;

  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link || !isQuoteHref(link.getAttribute("href") ?? undefined)) return;
      event.preventDefault();
      event.stopPropagation();
      setStatus("idle");
      openQuoteModal?.();
    }

    document.addEventListener("click", onDocumentClick, true);
    return () => document.removeEventListener("click", onDocumentClick, true);
  }, [openQuoteModal]);

  useEffect(() => {
    if (!open) return;

    setStatus("idle");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeQuoteModal?.();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeQuoteModal]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
    event.currentTarget.reset();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close quote request"
        className="absolute inset-0 bg-deep-blue-black/60"
        onClick={() => closeQuoteModal?.()}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-5 sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium tracking-[0.14em] text-primary uppercase">
              Get a quote
            </p>
            <h2
              id={titleId}
              className="mt-2 text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl"
            >
              Request a Quote
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Share a few details about your site and service needs. Our team
              will follow up with a practical quote.
            </p>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={() => closeQuoteModal?.()}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-zinc-400 hover:text-zinc-900"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M4 4l8 8M12 4L4 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={onSubmit} className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-zinc-700">Full name</span>
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={fieldClass}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-zinc-700">Email</span>
              <input
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className={fieldClass}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-zinc-700">Phone</span>
              <input
                name="phone"
                type="tel"
                required
                placeholder="+234 ..."
                className={fieldClass}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-zinc-700">
                Organisation
              </span>
              <input
                name="organisation"
                type="text"
                placeholder="Company or facility name"
                className={fieldClass}
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-zinc-700">
                Service needed
              </span>
              <select name="service" required defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="Other / multiple services">
                  Other / multiple services
                </option>
              </select>
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-zinc-700">
                Project details
              </span>
              <textarea
                name="details"
                required
                rows={4}
                placeholder="Tell us about the site location, size, and the services you need."
                className={`${fieldClass} resize-y`}
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button type="submit" className="px-6 py-3">
              Submit request
            </Button>
            <button
              type="button"
              onClick={() => closeQuoteModal?.()}
              className="px-2 py-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-zinc-800"
            >
              Cancel
            </button>
          </div>

          {status === "sent" ? (
            <p className="mt-4 text-sm font-medium text-primary">
              Thanks. Your quote request is ready to send once email is
              connected.
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  return (
    <QuoteModalStateProvider>
      {children}
      <QuoteModalDialog />
    </QuoteModalStateProvider>
  );
}

export { useQuoteModal, isQuoteHref } from "@/components/quote-modal-context";
