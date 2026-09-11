"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Button from "@/components/Button";
import LogoCarousel from "@/components/LogoCarousel";
import Reveal from "@/components/Reveal";

const slides = [
  {
    src: "/hero/slide-1.png",
    alt: "FixIt facility management team in work gear at a transport terminal",
    heading: "Nigeria's First Choice Facility managers",
    subtext:
      "Trusted stewards of Nigeria’s busiest public spaces, keeping infrastructure safe, reliable, and ready for every journey.",
  },
  {
    src: "/hero/slide-2-disinfection.png",
    alt: "FixIt sanitation specialist performing terminal disinfection with professional PPE",
    heading: "Committed to Excellence and Efficiency",
    subtext:
      "Hospital-grade hygiene and disciplined processes, protecting the spaces where Nigeria works, travels, and gathers.",
  },
] as const;

const INTERVAL_MS = 6500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => goTo(index + 1), INTERVAL_MS);
    return () => clearInterval(id);
  }, [index, paused, goTo]);

  const active = slides[index];

  return (
    <section
      className="relative isolate flex min-h-svh w-full flex-col overflow-hidden bg-deep-blue-black"
      aria-roledescription="carousel"
      aria-label="Hero"
    >
      <div
        className="relative flex flex-1 flex-col"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover object-center transition-transform duration-[8000ms] ease-out ${
                i === index ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}

        <div
          className="absolute inset-0 bg-deep-blue-black/55"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-deep-blue-black/80 via-deep-blue-black/40 to-deep-blue-black/50"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 pt-32 pb-16 text-center sm:px-8 sm:pt-36 lg:pt-40">
          <div className="flex w-full flex-col items-center">
            <Reveal variant="up" threshold={0.05}>
              <h1
                key={`heading-${index}`}
                className="mt-4 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-white animate-[heroFade_0.55s_ease-out] sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {active.heading}
              </h1>
            </Reveal>

            <Reveal variant="up" delay={120} threshold={0.05}>
              <p
                key={`sub-${index}`}
                className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/80 animate-[heroFade_0.55s_ease-out] sm:text-xl md:text-2xl"
              >
                {active.subtext}
              </p>
            </Reveal>

            <Reveal variant="fade" delay={220} threshold={0.05}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
            <div className="flex items-center justify-center gap-3">
              {slides.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-10 bg-primary"
                      : "w-5 bg-white/35 hover:bg-white/55"
                  }`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <LogoCarousel />
    </section>
  );
}
