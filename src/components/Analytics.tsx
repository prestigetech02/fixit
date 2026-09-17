"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  CONSENT_EVENT,
  hasAnalyticsConsent,
  readConsent,
  type ConsentValue,
} from "@/lib/consent";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Analytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = (value: ConsentValue | null = readConsent()) => {
      setAllowed(hasAnalyticsConsent(value));
    };

    sync();

    const onConsent = (event: Event) => {
      const detail = (event as CustomEvent<{ value: ConsentValue }>).detail;
      sync(detail?.value ?? readConsent());
    };

    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  if (!gaId || !allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="fixit-ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            anonymize_ip: true,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
