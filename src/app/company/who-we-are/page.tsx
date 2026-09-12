import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Who We Are | FixIt",
  description:
    "Learn about FixIt Multiconcepts Limited, our company overview, vision, mission, and journey since 2016.",
};

const milestones = [
  {
    year: "2016",
    content: (
      <>
        FixIt Multiconcepts began its journey in 2016, managing cleaning
        operations exclusively at the{" "}
        <strong className="font-semibold text-zinc-900">Oshodi Terminal</strong>
        . With a strong commitment to quality service and operational
        excellence, we quickly earned a reputation for reliability and
        professionalism.
      </>
    ),
  },
  {
    year: "2020",
    content: (
      <>
        By 2020, our dedication paid off. We expanded our portfolio to include{" "}
        <strong className="font-semibold text-zinc-900">
          five major terminals
        </strong>{" "}
        across Nigeria, delivering consistent, top-tier facility management
        solutions across multiple locations.
      </>
    ),
  },
  {
    year: "2026",
    content: (
      <>
        Today, in 2026, FixIt has evolved into a full-fledged facility
        management company. We now handle not only terminals but also a wide
        range of public infrastructure and private facilities, proudly serving
        over{" "}
        <strong className="font-semibold text-zinc-900">
          25 clients nationwide
        </strong>
        .
      </>
    ),
  },
] as const;

export default function WhoWeArePage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-100">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:pr-10 lg:pb-20">
            <Reveal variant="up">
              <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
                Company
              </p>
              <h1 className="mt-3 max-w-xl text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                Who We Are
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-500">
                A nationwide facility management partner for leading Nigerian
                brands, built on excellence, efficiency, and disciplined
                delivery.
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
              src="/brand/99.jpg"
              alt="FixIt facility management team at work"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-deep-blue-black/20"
              aria-hidden
            />
          </Reveal>
        </div>
      </section>

      {/* Company overview */}
      <section
        className="bg-white px-5 py-16 sm:px-8 sm:py-20"
        aria-labelledby="overview-heading"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal variant="up" className="max-w-3xl">
            <h2
              id="overview-heading"
              className="text-3xl font-black tracking-tight text-zinc-900 uppercase sm:text-4xl"
            >
              Company Overview
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-600 sm:text-lg">
              FixIt Multiconcepts Limited is a nationwide facility management
              provider of choice for some of Nigeria&apos;s leading brands. With
              a commitment to excellence and efficiency, FixIt delivers
              world-class, cost-effective facility management solutions tailored
              to meet the evolving needs of both private and public sectors.
            </p>

            <h3 className="mt-10 text-xl font-bold tracking-tight text-primary sm:text-2xl">
              Scope of Expertise
            </h3>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
              Our extensive experience spans residential estates, commercial
              offices, public spaces, transport infrastructures, roads, bus
              terminals, and healthcare facilities. FixIt is dedicated to
              ensuring safe, clean, and functional environments that enhance
              productivity and improve user experience.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision and mission */}
      <section
        className="border-y border-zinc-200 bg-zinc-100 px-5 py-16 sm:px-8 sm:py-20"
        aria-labelledby="vision-mission-heading"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal variant="up">
            <h2
              id="vision-mission-heading"
              className="text-3xl font-black tracking-tight text-zinc-900 uppercase sm:text-4xl"
            >
              Vision and Mission
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
            <Reveal variant="up" delay={80}>
              <h3 className="text-lg font-bold tracking-tight text-primary sm:text-xl">
                Vision Statement
              </h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
                To enhance the wellbeing of clients through the exceptional
                management, supervision, maintenance and support of their
                building assets.
              </p>
            </Reveal>

            <Reveal variant="up" delay={140}>
              <h3 className="text-lg font-bold tracking-tight text-primary sm:text-xl">
                Mission Statement
              </h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
                We are a people-centered, performance-driven, and transparent
                work environment, empowering employees to learn, grow, and
                uphold the company&apos;s commitment to excellence and proactive
                facility management.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section
        className="bg-white px-5 py-16 sm:px-8 sm:py-20"
        aria-labelledby="journey-heading"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal variant="up" className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
              Our Journey
            </p>
            <h2
              id="journey-heading"
              className="mt-3 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl"
            >
              Growing with Nigeria&apos;s infrastructure
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
            {milestones.map((milestone, index) => (
              <Reveal
                key={milestone.year}
                variant="up"
                delay={80 + index * 100}
              >
                <p className="text-4xl font-black tracking-tight text-primary sm:text-5xl">
                  {milestone.year}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                  {milestone.content}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
