import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import {
  getServiceBySlug,
  getServiceHref,
  services,
} from "@/data/services";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/seo";
import JsonLdScript from "@/components/JsonLdScript";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return buildPageMetadata({
      title: "Service",
      description: "FixIt facility management service details.",
      path: "/what-we-do",
    });
  }

  return buildPageMetadata({
    title: service.title,
    description: service.summary,
    path: getServiceHref(service.slug),
    image: service.image,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main className="flex flex-1 flex-col bg-zinc-900 text-white">
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "What We Do", path: "/what-we-do" },
            { name: service.title, path: getServiceHref(service.slug) },
          ]),
          serviceJsonLd(service),
        ]}
      />
      {/* Title */}
      <section className="border-b border-white/10 px-5 pb-12 pt-28 sm:px-8 sm:pb-14 sm:pt-32">
        <Reveal variant="up" className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
            Service Details
          </p>
          <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
        </Reveal>
      </section>

      {/* Content */}
      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.55fr_0.85fr] lg:gap-10 lg:items-start">
          {/* Left */}
          <div>
            <Reveal variant="up">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-800">
                <Image
                  src={service.image}
                  alt={`${service.title} by FixIt Facility Management`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>

            <Reveal variant="up" delay={100} className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {service.heading}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
                {service.writeup.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-5 text-base leading-relaxed text-zinc-400">
                {service.summary}
              </p>

              <div className="mt-8">
                <Button href="/request-a-quote" variant="light" className="px-6 py-3">
                  Request a Quote
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-28">
            <Reveal variant="up" delay={80}>
              <div className="rounded-2xl bg-zinc-800 p-5 sm:p-6">
                <h2 className="text-xl font-bold tracking-tight">Categories</h2>
                <ul className="mt-4 space-y-2">
                  {services.map((item) => {
                    const active = item.slug === service.slug;
                    return (
                      <li key={item.slug}>
                        <Link
                          href={getServiceHref(item.slug)}
                          className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                            active
                              ? "bg-primary text-white"
                              : "bg-zinc-700/70 text-zinc-200 hover:bg-zinc-700 hover:text-white"
                          }`}
                          aria-current={active ? "page" : undefined}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="up" delay={140}>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/brand/101.png"
                  alt=""
                  fill
                  sizes="30vw"
                  className="object-cover object-center"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-deep-blue-black/75"
                  aria-hidden
                />
                <div className="relative flex min-h-[16rem] flex-col items-center justify-center px-6 py-10 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="mt-5 text-xl font-bold tracking-tight">
                    Have any Questions?
                    <br />
                    Call us Today!
                  </p>
                  <a
                    href="tel:+2349169221713"
                    className="mt-4 text-sm font-semibold text-primary transition-colors hover:text-white"
                  >
                    +234 916 922 1713
                  </a>
                  <Button
                    href="/contact"
                    variant="light"
                    className="mt-6 px-5 py-2.5"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </main>
  );
}
