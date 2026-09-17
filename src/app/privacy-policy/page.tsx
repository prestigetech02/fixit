import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How FixIt Facility Management collects, uses, and protects your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="11 September 2026"
      intro="This Privacy Policy explains how FixIt Facility Management (FixIt Multiconcepts) collects, uses, stores, and protects personal information when you use our website or contact us about our services."
      sections={[
        {
          title: "Who we are",
          content: (
            <>
              <p>
                FixIt Facility Management operates this website and related
                enquiry channels. Our office is at 9a, Ajumobi Olorunoje Street,
                Off ACME Road, Agidingbi, Lagos State, Nigeria.
              </p>
              <p>
                For privacy questions, email{" "}
                <a
                  href="mailto:info@fixitmulticoncepts.com"
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  info@fixitmulticoncepts.com
                </a>{" "}
                or call{" "}
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
          title: "Information we collect",
          content: (
            <>
              <p>We may collect:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Contact details you submit through forms, email, phone, or
                  WhatsApp, such as your name, organisation, email address, and
                  phone number.
                </li>
                <li>
                  Message content related to service enquiries, quote requests,
                  or support.
                </li>
                <li>
                  Technical data such as browser type, device information, and
                  pages visited, where cookies or similar tools are enabled.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "How we use your information",
          content: (
            <>
              <p>We use personal information to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Respond to enquiries and provide requested services.</li>
                <li>Prepare quotes and manage client communications.</li>
                <li>Improve website performance and user experience.</li>
                <li>Meet legal, regulatory, and security obligations.</li>
              </ul>
              <p>
                We do not sell your personal information to third parties.
              </p>
            </>
          ),
        },
        {
          title: "Legal bases for processing",
          content: (
            <p>
              Where applicable, we process personal data because it is necessary
              to respond to your request, because we have a legitimate interest
              in operating and improving our business, because you have given
              consent (for example for non-essential cookies), or because we
              must comply with the law.
            </p>
          ),
        },
        {
          title: "Sharing and processors",
          content: (
            <p>
              We may share information with trusted service providers who help
              us operate our website, communications, or business systems.
              These providers are expected to process information only on our
              instructions and with appropriate safeguards. We may also disclose
              information if required by law or to protect our rights and
              users&apos; safety.
            </p>
          ),
        },
        {
          title: "Data retention",
          content: (
            <p>
              We keep personal information only for as long as needed for the
              purpose it was collected, including responding to enquiries,
              maintaining business records, and meeting legal requirements.
              When information is no longer required, we delete or anonymise it
              where practical.
            </p>
          ),
        },
        {
          title: "Your rights",
          content: (
            <>
              <p>
                Depending on applicable law, you may have rights to access,
                correct, delete, or restrict use of your personal information,
                and to object to certain processing or withdraw consent where
                processing is based on consent.
              </p>
              <p>
                To exercise these rights, contact us using the details above. We
                may need to verify your identity before fulfilling a request.
              </p>
            </>
          ),
        },
        {
          title: "Cookies",
          content: (
            <p>
              Our website may use cookies and similar technologies. For details
              on categories, purposes, and your choices, see our{" "}
              <Link
                href="/cookies-policy"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                Cookies Policy
              </Link>
              .
            </p>
          ),
        },
        {
          title: "Security",
          content: (
            <p>
              We take reasonable technical and organisational measures to
              protect personal information against unauthorised access, loss, or
              misuse. No method of transmission or storage is completely secure,
              so we cannot guarantee absolute security.
            </p>
          ),
        },
        {
          title: "Updates to this policy",
          content: (
            <p>
              We may update this Privacy Policy from time to time. The &quot;Last
              updated&quot; date at the top of this page will change when we do.
              Continued use of the website after updates means you acknowledge
              the revised policy.
            </p>
          ),
        },
      ]}
    />
  );
}
