import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import JsonLdScript from "@/components/JsonLdScript";
import Reveal from "@/components/Reveal";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Our CSR",
  description:
    "How FixIt Facility Management gives back through community support, environmental care, workforce development, and safety across Nigeria.",
  path: "/company/our-csr",
});

const pillars = [
  {
    title: "Community",
    image: "/brand/107.png",
    alt: "FixIt team clearing waste at a public site",
    body: "We support the communities around the facilities we manage, with a focus on cleaner, safer public spaces that everyone can use with confidence.",
  },
  {
    title: "Environment",
    image: "/brand/106.png",
    alt: "FixIt team carrying out environmental and waste programmes",
    body: "Responsible waste handling, sanitation, and efficient resource use are central to how we work, helping reduce our environmental footprint.",
  },
  {
    title: "People and Skills",
    image: "/brand/103.jpg",
    alt: "FixIt staff training session",
    body: "We invest in training and fair employment, helping our people build practical skills, confidence, and long-term careers in facility management.",
  },
  {
    title: "Health and Safety",
    image: "/brand/104.png",
    alt: "FixIt specialist in protective equipment performing disinfection",
    body: "Safe working practices and proper protective equipment protect our teams and the public in every space we look after.",
  },
] as const;

export default function OurCsrPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our CSR", path: "/company/our-csr" },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-100">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:pr-10 lg:pb-20">
            <Reveal variant="up">
              <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
                Company
              </p>
              <h1 className="mt-3 max-w-xl text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                Our CSR
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-500">
                Our commitment to the people, communities, and environment
                connected to the work we do.
              </p>
              <div className="mt-8 h-px w-16 bg-primary" aria-hidden />
            </Reveal>
          </div>

          <Reveal
            variant="fade"
            delay={120}
            className="relative min-h-[18rem] sm:min-h-[22rem] lg:min-h-[28rem]"
          >
            <Image
              src="/csr/csr-hero.jpg"
              alt="FixIt staff with partners and volunteers at a community sanitation event"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_40%]"
            />
            <div
              className="absolute inset-0 bg-deep-blue-black/10"
              aria-hidden
            />
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section
        className="bg-white px-5 pt-16 sm:px-8 sm:pt-20"
        aria-labelledby="csr-heading"
      >
        <Reveal variant="up" className="mx-auto max-w-3xl text-center">
          <h2
            id="csr-heading"
            className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl"
          >
            Responsibility Beyond the Contract
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Facility management touches thousands of lives every day, from
            commuters and visitors to the teams who keep each site running. We
            take that responsibility seriously and aim to leave every space,
            and every community, better than we found it.
          </p>
        </Reveal>
      </section>

      {/* Pillars */}
      <section
        className="bg-white px-5 py-16 sm:px-8 sm:py-20"
        aria-label="CSR focus areas"
      >
        <ul className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2">
          {pillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              as="li"
              variant="up"
              delay={80 + (index % 2) * 80}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-[20px_4px_20px_4px] bg-zinc-100">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-primary">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-zinc-600">
                    {pillar.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBand />
    </main>
  );
}
