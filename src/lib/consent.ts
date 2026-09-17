export const CONSENT_STORAGE_KEY = "fixit-cookie-consent";
export const CONSENT_EVENT = "fixit-cookie-consent";

export type ConsentValue = "accepted" | "necessary";

export function readConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored === "accepted" || stored === "necessary") return stored;
  } catch {
    // ignore storage failures
  }
  return null;
}

export function writeConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // ignore storage failures
  }
  window.dispatchEvent(
    new CustomEvent(CONSENT_EVENT, { detail: { value } }),
  );
}

export function hasAnalyticsConsent(value: ConsentValue | null): boolean {
  return value === "accepted";
}
