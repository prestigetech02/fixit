"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const awards = [
  {
    src: "/awards/firs-best-service-provider-2025.png",
    alt: "FIRS Best Service Provider Contractor Award 2025 presented to FixIt Multi Concept Ltd",
    eyebrow: "Award Highlight",
    title: "Best Service Provider - Contractor, 2025",
    org: "Federal Inland Revenue Service (FIRS), Lagos Mainland East",
    description:
      "Presented on 9 October 2025 in recognition of outstanding service at the State Administrator Office, Lagos Mainland East (SAO / LME), just one year after FixIt was awarded the contract.",
  },
  {
    src: "/awards/nrs-best-performing-contractor-2026.jpg",
    alt: "NRS Award for Excellent presented to Messrs. Fix-It Multiconcept Limited as 2026 Best Performing Contractor/Service Provider of the Year",
    eyebrow: "Award Highlight",
    title: "Best Performing Contractor / Service Provider of the Year, 2026",
    org: "Nigeria Revenue Service (NRS), Regional Administrator (LME), Ikeja",
    description:
      "Awarded by the Office of the Regional Administrator, Lagos Mainland East, in recognition of outstanding leadership, excellent service delivery, exceptional performance, integrity, and valuable contributions to the organisation’s growth.",
  },
] as const;

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d={direction === "prev" ? "M13 8H3M7 4L3 8l4 4" : "M3 8h10M9 4l4 4-4 4"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AwardsCarousel() {
  const [index, setIndex] = useState(0);
  const count = awards.length;
  const award = awards[index];

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [count]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Award highlights"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="mt-10 overflow-hidden rounded-[20px_4px_20px_4px] bg-zinc-100 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 sm:mt-12"
    >
      <div className="grid items-center lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[18rem] bg-zinc-200 sm:min-h-[22rem]">
          {awards.map((item, i) => (
            <div
              key={item.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${item.title}`}
              aria-hidden={i !== index}
              className={[
                "absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none",
                i === index ? "opacity-100" : "pointer-events-none opacity-0",
              ].join(" ")}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain object-center p-6 sm:p-8"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <div className="relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
            {award.eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl">
            {award.title}
          </h3>
          <p className="mt-2 text-sm font-semibold text-zinc-700">{award.org}</p>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            {award.description}
          </p>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {awards.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show award ${i + 1}`}
                  aria-current={i === index}
                  className={[
                    "h-2 rounded-full transition-all duration-300",
                    i === index
                      ? "w-7 bg-primary"
                      : "w-2 bg-zinc-300 hover:bg-zinc-400",
                  ].join(" ")}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous award"
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-zinc-300 bg-white text-zinc-800 transition-colors hover:border-primary hover:text-primary"
              >
                <ArrowIcon direction="prev" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next award"
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-zinc-300 bg-white text-zinc-800 transition-colors hover:border-primary hover:text-primary"
              >
                <ArrowIcon direction="next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurAwards() {
  return (
    <section
      id="our-awards"
      className="bg-white px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="awards-heading"
    >
      <div className="site-shell">
        <SectionHeader
          eyebrow="Recognition"
          title="Our Awards"
          titleId="awards-heading"
          eyebrowClassName="text-base font-medium tracking-[0.16em] text-primary uppercase sm:text-lg"
          titleClassName="mt-3 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem]"
          description="FixIt Multiconcepts has been recognised with Best Service Provider and Best Performing Contractor awards from FIRS and NRS, a testament to our dedication, performance, and client satisfaction."
        />

        <Reveal variant="up" delay={80}>
          <AwardsCarousel />
        </Reveal>
      </div>
    </section>
  );
}
