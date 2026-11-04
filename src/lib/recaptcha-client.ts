const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() ?? "";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string },
      ) => Promise<string>;
    };
  }
}

let loadPromise: Promise<void> | null = null;

function loadRecaptchaScript() {
  if (!siteKey) {
    return Promise.resolve();
  }

  if (window.grecaptcha) {
    return Promise.resolve();
  }

  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-recaptcha-v3="true"]',
    );
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("Unable to load reCAPTCHA.")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    script.async = true;
    script.dataset.recaptchaV3 = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Unable to load reCAPTCHA."));
    document.head.appendChild(script);
  });

  return loadPromise;
}

export function isRecaptchaClientConfigured() {
  return Boolean(siteKey);
}

export async function getRecaptchaToken(action: string) {
  if (!siteKey) {
    return "";
  }

  await loadRecaptchaScript();

  const grecaptcha = window.grecaptcha;
  if (!grecaptcha) {
    throw new Error("reCAPTCHA is unavailable. Please refresh and try again.");
  }

  await new Promise<void>((resolve) => {
    grecaptcha.ready(() => resolve());
  });

  return grecaptcha.execute(siteKey, { action });
}
