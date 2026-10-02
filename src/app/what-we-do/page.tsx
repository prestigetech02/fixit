import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import JsonLdScript from "@/components/JsonLdScript";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { getServiceHref, services } from "@/data/services";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "What We Do",
  description:
    "Explore FixIt facility management services across Nigeria, including custodial hygiene, landscaping, security, waste management, HVAC, electrical, and training.",
  path: "/what-we-do",
});

export default function WhatWeDoPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "What We Do", path: "/what-we-do" },
        ])}
      />
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/brand/oshodi-brt.png"
          alt="Oshodi bus terminal facility managed by FixIt"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-deep-blue-black/65"
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-5 pb-16 pt-28 text-center sm:px-8 sm:pb-20 sm:pt-32">
          <Reveal variant="up" className="flex max-w-2xl flex-col items-center">
            <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
              Services
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              What We Do
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-200">
              End-to-end facility management across cleaning, waste,
              engineering, and full-site operations, delivered with discipline
              and care.
            </p>

            <div className="mt-8 h-px w-16 bg-primary" aria-hidden />

            <div className="mt-8">
              <Button href="/request-a-quote" variant="light" className="px-6 py-3">
                Request a Quote
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service cards */}
      <section
        id="services"
        className="bg-white px-5 py-16 sm:px-8 sm:py-20"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal variant="up" className="max-w-2xl">
            <h2
              id="services-heading"
              className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl"
            >
              Industry Services
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-500">
              A full suite of facility services built for reliable operations
              across Nigeria.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {services.map((service, index) => (
              <Reveal
                key={service.slug}
                as="li"
                variant="up"
                delay={40 + (index % 4) * 70}
              >
                <ServiceCard
                  title={service.title}
                  href={getServiceHref(service.slug)}
                  image={service.image}
                />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
