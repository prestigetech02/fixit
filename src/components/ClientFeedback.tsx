"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

const letters = [
  {
    src: "/awards/planet-projects-letter.png",
    alt: "Recommendation letter from Planet Projects Limited for FixIt Multiconcepts",
    label: "Planet Projects Limited",
    note: "Recommendation for facility management delivery and professional standards.",
    width: 495,
    height: 720,
  },
  {
    src: "/awards/oti-letter.png",
    alt: "Recommendation letter from Oshodi Transport Interchange for FixIt Multiconcepts",
    label: "Oshodi Transport Interchange",
    note: "Endorsement for reliable terminal operations and site stewardship.",
    width: 508,
    height: 720,
  },
  {
    src: "/awards/ail-letter.png",
    alt: "Recommendation letter from A.I.L. Infrastructures Limited for FixIt Multiconcepts",
    label: "A.I.L. Infrastructures Limited",
    note: "Recognition of consistent service quality across infrastructure sites.",
    width: 560,
    height: 545,
  },
  {
    src: "/awards/pittol-letter.png",
    alt: "Recommendation letter from Pittol & Company Limited for FixIt Multiconcepts",
    label: "Pittol & Company Limited",
    note: "Client confidence in FixIt’s people, process, and daily execution.",
    width: 472,
    height: 640,
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

export default function ClientFeedback() {
  const [index, setIndex] = useState(0);
  const count = letters.length;
  const letter = letters[index];

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
    }, 8000);

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
    <section
      id="client-feedback"
      className="bg-zinc-900 px-5 py-20 text-white sm:px-8 sm:py-24"
      aria-labelledby="feedback-heading"
    >
      <div className="site-shell">
        <Reveal variant="up" className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase sm:text-base">
            Trusted Partners
          </p>
          <h2
            id="feedback-heading"
            className="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-[3.25rem]"
          >
            Client Feedbacks
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Official letters of recommendation from partners who trust FixIt
            with their facilities day after day.
          </p>
        </Reveal>

        <Reveal variant="up" delay={100} className="mt-12 sm:mt-14">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Client recommendation letters"
            tabIndex={0}
            onKeyDown={onKeyDown}
            className="outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
          >
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-12">
              {/* Featured letter — intrinsic size, no forced crop */}
              <div className="flex min-h-[22rem] items-center justify-center overflow-hidden rounded-[20px_4px_20px_4px] bg-zinc-800 p-5 sm:min-h-[28rem] sm:p-8">
                <div className="relative flex w-full items-center justify-center">
                  {letters.map((item, i) => (
                    <div
                      key={item.src}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${i + 1} of ${count}: ${item.label}`}
                      aria-hidden={i !== index}
                      className={[
                        "transition-opacity duration-500 ease-out motion-reduce:transition-none",
                        i === index
                          ? "relative opacity-100"
                          : "pointer-events-none absolute inset-0 flex items-center justify-center opacity-0",
                      ].join(" ")}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        unoptimized
                        priority={i === 0}
                        className="h-auto max-h-[36rem] w-auto max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Partner switcher */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
                    Recommendation letter
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                    {letter.label}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-zinc-400">
                    {letter.note}
                  </p>

                  <ol className="mt-10 space-y-1 border-t border-white/10 pt-6">
                    {letters.map((item, i) => {
                      const active = i === index;
                      return (
                        <li key={item.src}>
                          <button
                            type="button"
                            onClick={() => goTo(i)}
                            aria-current={active}
                            className={[
                              "group flex w-full items-center gap-4 rounded-sm px-3 py-3.5 text-left transition-colors",
                              active
                                ? "bg-primary text-white"
                                : "text-zinc-300 hover:bg-white/5 hover:text-white",
                            ].join(" ")}
                          >
                            <span
                              className={[
                                "w-7 shrink-0 text-xs font-semibold tracking-[0.16em]",
                                active ? "text-white/80" : "text-zinc-500",
                              ].join(" ")}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-sm font-semibold sm:text-base">
                              {item.label}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <p className="text-sm text-zinc-500">
                    {index + 1} / {count}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => goTo(index - 1)}
                      aria-label="Previous letter"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/20 text-white transition-colors hover:border-primary hover:bg-primary"
                    >
                      <ArrowIcon direction="prev" />
                    </button>
                    <button
                      type="button"
                      onClick={() => goTo(index + 1)}
                      aria-label="Next letter"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/20 text-white transition-colors hover:border-primary hover:bg-primary"
                    >
                      <ArrowIcon direction="next" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
