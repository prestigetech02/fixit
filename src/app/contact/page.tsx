import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us | FixIt",
  description:
    "Contact FixIt Facility Management in Lagos. Email, phone, and office address.",
};

const details = [
  {
    label: "Email",
    value: "info@fixitmulticoncepts.com",
    href: "mailto:info@fixitmulticoncepts.com",
  },
  {
    label: "Phone",
    value: "+234 916 922 1713",
    href: "tel:+2349169221713",
  },
  {
    label: "Website",
    value: "fixitmulticoncepts.com",
    href: "https://fixitmulticoncepts.com/",
  },
  {
    label: "Office",
    value: "9a, Ajumobi Olorunoje street, Off ACME road, Agidingbi, Lagos state.",
    href: "https://maps.google.com/?q=9a+Ajumobi+Olorunoje+street+Agidingbi+Lagos",
  },
] as const;

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      {/* Hero — full bleed to top edge under nav */}
      <section className="border-b border-zinc-200 bg-zinc-100 px-5 pb-12 pt-28 sm:px-8 sm:pb-14 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <Reveal variant="up" className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
              Get in touch
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-500">
              Reach the FixIt team for facility support, service enquiries, or a
              tailored quote.
            </p>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <div className="mt-10 grid gap-6 rounded-[20px_4px_20px_4px] border border-zinc-200 bg-white p-6 sm:mt-12 sm:grid-cols-2 sm:p-8 lg:grid-cols-4 lg:gap-0">
              {details.map((item, index) => (
                <div
                  key={item.label}
                  className={`lg:px-6 ${
                    index > 0 ? "lg:border-l lg:border-zinc-200" : ""
                  } ${index === 0 ? "lg:pl-0" : ""} ${
                    index === details.length - 1 ? "lg:pr-0" : ""
                  }`}
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                    {item.label}
                  </p>
                  <Link
                    href={item.href}
                    target={
                      item.label === "Website" || item.label === "Office"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.label === "Website" || item.label === "Office"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-3 block text-sm font-medium leading-relaxed text-zinc-800 underline-offset-4 transition-colors hover:text-primary hover:underline hover:decoration-primary hover:decoration-2"
                  >
                    {item.value}
                  </Link>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Message section — vertical image left, form right */}
      <section className="px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal variant="up" className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Send a message
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-500">
              Share a few details and we will get back to you.
            </p>
          </Reveal>

          <Reveal
            variant="up"
            delay={100}
            className="grid gap-5 lg:grid-cols-[0.38fr_0.62fr] lg:gap-6"
          >
            <div className="relative hidden min-h-[32rem] overflow-hidden rounded-[20px_4px_20px_4px] bg-zinc-100 lg:block">
              <Image
                src="/brand/101.png"
                alt="FixIt technician operating facility equipment"
                fill
                sizes="38vw"
                className="object-cover object-center"
              />
            </div>

            <div className="rounded-[20px_4px_20px_4px] border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
