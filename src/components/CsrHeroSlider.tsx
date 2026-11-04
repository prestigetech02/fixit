"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    src: "/csr/csr-hero.jpg",
    alt: "FixIt Multiconcepts team carrying out a community waste and sanitation cleanup",
  },
  {
    src: "/csr/bin-awareness-day.jpg",
    alt: "FixIt Multiconcepts team on Bin Awareness Day with World Cleanup Day frames and cleaning equipment",
  },
] as const;

export default function CsrHeroSlider() {
  const [index, setIndex] = useState(0);
  const count = slides.length;

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
    }, 5500);

    return () => window.clearInterval(timer);
  }, [count]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="CSR initiative photos"
      className="relative h-full min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:min-h-[28rem]"
    >
      <div
        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={i !== index}
            className="relative h-full w-full shrink-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              quality={100}
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0 bg-deep-blue-black/10"
        aria-hidden
      />

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-5">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className={[
              "h-2 rounded-full transition-all duration-300",
              i === index
                ? "w-6 bg-white"
                : "w-2 bg-white/55 hover:bg-white/80",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
