export default function RecaptchaNotice({ className = "" }: { className?: string }) {
  if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
    return null;
  }

  return (
    <p className={`text-xs leading-relaxed text-zinc-400 ${className}`.trim()}>
      This site is protected by reCAPTCHA and the Google{" "}
      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 hover:text-zinc-600"
      >
        Privacy Policy
      </a>{" "}
      and{" "}
      <a
        href="https://policies.google.com/terms"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 hover:text-zinc-600"
      >
        Terms of Service
      </a>{" "}
      apply.
    </p>
  );
}
