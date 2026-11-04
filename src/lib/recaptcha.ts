const secretKey = process.env.RECAPTCHA_SECRET_KEY?.trim() ?? "";
const minScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? "0.5");

type RecaptchaVerifyResponse = {
  success?: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
};

export function isRecaptchaConfigured() {
  return Boolean(secretKey && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
}

export async function verifyRecaptchaToken({
  token,
  expectedAction,
}: {
  token: unknown;
  expectedAction: string;
}) {
  if (!isRecaptchaConfigured()) {
    return;
  }

  if (typeof token !== "string" || !token.trim()) {
    throw new Error("reCAPTCHA verification failed. Please try again.");
  }

  const params = new URLSearchParams({
    secret: secretKey,
    response: token.trim(),
  });

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    },
  );

  const result = (await response.json()) as RecaptchaVerifyResponse;

  if (!result.success) {
    throw new Error("reCAPTCHA verification failed. Please try again.");
  }

  if (result.action && result.action !== expectedAction) {
    throw new Error("reCAPTCHA verification failed. Please try again.");
  }

  const score = typeof result.score === "number" ? result.score : 0;
  const threshold = Number.isFinite(minScore) ? minScore : 0.5;

  if (score < threshold) {
    throw new Error(
      "Unable to verify this submission. Please try again later.",
    );
  }
}
