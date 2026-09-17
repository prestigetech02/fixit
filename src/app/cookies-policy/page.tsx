import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cookies Policy",
  description:
    "How FixIt Facility Management uses cookies and similar technologies on this website.",
  path: "/cookies-policy",
});

export default function CookiesPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookies Policy"
      updated="11 September 2026"
      intro="This Cookies Policy explains what cookies are, how FixIt Facility Management uses them on this website, and the choices available to you."
      sections={[
        {
          title: "What are cookies?",
          content: (
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help the site function, remember preferences, and
              understand how pages are used. Similar technologies, such as local
              storage, may be used for the same purposes.
            </p>
          ),
        },
        {
          title: "How we use cookies",
          content: (
            <>
              <p>We use cookies and similar tools to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Keep essential website features working reliably.</li>
                <li>Remember your cookie consent choice.</li>
                <li>
                  Understand traffic patterns and improve content and navigation
                  when analytics cookies are accepted.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "Types of cookies we use",
          content: (
            <>
              <p>
                <strong className="font-semibold text-zinc-800">
                  Necessary cookies.
                </strong>{" "}
                Required for basic site operation and security. These include
                storing your consent preference so we do not ask repeatedly on
                every visit.
              </p>
              <p>
                <strong className="font-semibold text-zinc-800">
                  Analytics and performance cookies.
                </strong>{" "}
                Help us understand how visitors use the site, such as which
                pages are viewed most often. When you choose &quot;Accept
                all,&quot; we may load Google Analytics (GA4) with IP
                anonymization enabled. These are not used if you choose
                &quot;Necessary only.&quot;
              </p>
              <p>
                We do not use cookies to sell your personal information or to
                run third-party advertising networks on this site.
              </p>
            </>
          ),
        },
        {
          title: "Your choices",
          content: (
            <>
              <p>
                On your first visit, you can choose{" "}
                <strong className="font-semibold text-zinc-800">
                  Accept all
                </strong>{" "}
                or{" "}
                <strong className="font-semibold text-zinc-800">
                  Necessary only
                </strong>
                . Your choice is stored locally in your browser.
              </p>
              <p>
                You can also control cookies through your browser settings,
                including blocking or deleting cookies. If you block necessary
                cookies, some parts of the site may not work as expected.
              </p>
              <p>
                To reset your consent choice on this site, clear the{" "}
                <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
                  fixit-cookie-consent
                </code>{" "}
                value in your browser&apos;s local storage, then reload the
                page.
              </p>
            </>
          ),
        },
        {
          title: "Privacy and contact",
          content: (
            <>
              <p>
                For how we handle personal information more broadly, read our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <p>
                Questions about cookies or privacy can be sent to{" "}
                <a
                  href="mailto:info@fixitmulticoncepts.com"
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  info@fixitmulticoncepts.com
                </a>{" "}
                or{" "}
                <a
                  href="tel:+2349169221713"
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  +234 916 922 1713
                </a>
                .
              </p>
            </>
          ),
        },
        {
          title: "Updates",
          content: (
            <p>
              We may update this Cookies Policy as our practices or legal
              requirements change. The &quot;Last updated&quot; date at the top
              of this page will be revised when changes are published.
            </p>
          ),
        },
      ]}
    />
  );
}
