"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useCallback, useState } from "react";
import Button from "@/components/Button";
import LogoCarousel from "@/components/LogoCarousel";
import Reveal from "@/components/Reveal";

const slides = [
  {
    src: "/hero/terminal-3.jpg",
    alt: "BRT buses parked outside a FixIt-managed transport terminal in Lagos",
    /** CSS object-position — use "top" when faces sit high in the frame. */
    position: "object-center",
    heading: [
      "Managing 14+ Bus Terminals",
      "and 20 Commercial Buildings",
      "across Nigeria",
    ],
    subtext:
      "Trusted stewards of Nigeria’s busiest public spaces, keeping infrastructure safe, reliable, and ready for every journey.",
  },
  {
    src: "/hero/floor-care.jpg",
    alt: "Two FixIt staff with industrial floor scrubbers on a terminal walkway",
    position: "object-center",
    heading: ["Committed to Excellence", "and Efficiency"],
    subtext:
      "Modern cleaning equipment and disciplined processes, protecting the spaces where Nigeria works, travels, and gathers.",
  },
  {
    src: "/hero/team.JPG",
    alt: "FixIt cleaning and maintenance team in uniform at a Lagos terminal",
    // Keep heads in frame; bias slightly down from pure top.
    position: "object-[center_15%]",
    heading: ["People Who Take Pride", "in Every Space"],
    subtext:
      "A trained, uniformed workforce on site every day, so your facility runs safely, smoothly, and on schedule.",
  },
] as const;

const INTERVAL_MS = 6500;

export default function Hero() {
  const [state, setState] = useState<{
    index: number;
    prev: number | null;
    step: number;
  }>({ index: 0, prev: null, step: 0 });
  const { index, prev, step } = state;

  const goTo = useCallback((next: number) => {
    setState((current) => {
      const target = (next + slides.length) % slides.length;
      if (target === current.index) return current;
      return { index: target, prev: current.index, step: current.step + 1 };
    });
  }, []);

  const active = slides[index];
  const isFirstLoad = prev === null;
  const textDelay = isFirstLoad ? 200 : 450;

  return (
    <section
      className="relative isolate flex min-h-svh w-full flex-col overflow-hidden bg-deep-blue-black"
      aria-roledescription="carousel"
      aria-label="Hero"
    >
      <div className="relative flex flex-1 flex-col">
        {slides.map((slide, i) => {
          const isActive = i === index;
          const isPrev = i === prev;
          const key = isActive
            ? `active-${step}`
            : isPrev
              ? `active-${step - 1}`
              : "idle";

          return (
            <div
              key={`${slide.src}-${key}`}
              className={`absolute inset-0 overflow-hidden ${
                isActive
                  ? `z-[2] ${isFirstLoad ? "" : "hero-slide-enter"}`
                  : isPrev
                    ? "z-[1] hero-slide-exit"
                    : "z-0 opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                quality={95}
                sizes="100vw"
                className={`h-full w-full object-cover ${slide.position}`}
              />
            </div>
          );
        })}

        {/* Dark on the left for copy; fades out by centre so the right shows the photo. */}
        <div
          className="absolute inset-0 z-[3] bg-gradient-to-r from-deep-blue-black/90 via-deep-blue-black/45 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[3] bg-gradient-to-t from-deep-blue-black/50 via-transparent to-deep-blue-black/20"
          aria-hidden
        />

        <div className="relative z-10 site-shell flex w-full flex-1 flex-col items-start justify-center px-5 pt-32 pb-16 text-left sm:px-8 sm:pt-36 lg:pt-40">
          <div className="flex w-full max-w-2xl flex-col items-start xl:max-w-3xl">
            <h1
              key={`heading-${step}`}
              className="mt-4 text-balance text-4xl font-black leading-[1.08] tracking-tight text-white sm:mt-6 sm:text-5xl md:text-6xl lg:text-[62px] 2xl:text-[68px]"
            >
              {active.heading.map((line, i) => (
                <Fragment key={line}>
                  <span className="block overflow-hidden pb-[0.06em]">
                    <span
                      className="hero-line inline-block"
                      style={{ animationDelay: `${textDelay + i * 110}ms` }}
                    >
                      {line}
                    </span>
                  </span>
                </Fragment>
              ))}
            </h1>

            <p
              key={`sub-${step}`}
              className="hero-soft-up mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/85 sm:text-xl md:text-2xl"
              style={{
                animationDelay: `${textDelay + active.heading.length * 110 + 120}ms`,
              }}
            >
              {active.subtext}
            </p>

            <Reveal variant="fade" delay={220} threshold={0.05}>
              <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
                <Button href="/request-a-quote" className="px-7 py-3.5 text-base">
                  Request a Quote
                </Button>
                <Link
                  href="/what-we-do"
                  className="inline-flex items-center px-2 py-3 text-base font-bold text-white/90 transition-colors hover:text-white sm:text-lg"
                >
                  What We Do
                  <span aria-hidden className="ml-2">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal variant="fade" delay={320} threshold={0.05} className="mt-14 sm:mt-16">
            <div className="flex items-center justify-start gap-3">
              {slides.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className="group relative flex h-6 w-12 items-center"
                >
                  <span className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/30 transition-colors group-hover:bg-white/50">
                    {i === index ? (
                      <span
                        key={`progress-${step}`}
                        className="hero-progress absolute inset-0 rounded-full bg-primary"
                        style={{ animationDuration: `${INTERVAL_MS}ms` }}
                        onAnimationEnd={() => goTo(index + 1)}
                      />
                    ) : null}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <LogoCarousel />
    </section>
  );
}
