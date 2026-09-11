"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

const stats = [
  { value: 120, label: "Project" },
  { value: 362, label: "Professional Employees" },
  { value: 211, label: "Completed Work" },
  { value: 26, label: "Client" },
] as const;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const onChange = () => setReduced(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function StatValue({ value, active }: { value: number; active: boolean }) {
  const reducedMotion = usePrefersReducedMotion();
  const [display, setDisplay] = useState(reducedMotion ? value : 0);

  useEffect(() => {
    if (!active) return;
    if (reducedMotion) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const duration = 1100;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reducedMotion, value]);

  return (
    <span className="tabular-nums">
      {display}
      <span className="text-primary">+</span>
    </span>
  );
}

function StatItem({
  value,
  label,
  delay,
}: {
  value: number;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Reveal
      variant="up"
      delay={delay}
      className="relative px-2 py-4 text-center sm:py-5 lg:px-6"
    >
      <div ref={ref}>
        <p className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
          <StatValue value={value} active={active} />
        </p>
        <p className="mt-2.5 text-[0.6875rem] font-semibold tracking-[0.18em] text-zinc-400 uppercase sm:text-xs">
          {label}
        </p>
      </div>
    </Reveal>
  );
}

export default function Stats() {
  return (
    <section
      id="impact"
      className="bg-white px-5 py-12 sm:px-8 sm:py-14"
      aria-labelledby="impact-heading"
    >
      <Reveal
        variant="up"
        className="mx-auto max-w-6xl rounded-[20px_4px_20px_4px] bg-black px-5 py-8 sm:px-10 sm:py-9 lg:px-12 lg:py-10"
      >
        <h2
          id="impact-heading"
          className="text-center text-2xl font-black tracking-tight text-white sm:text-3xl"
        >
          Our Impact
        </h2>

        <div className="mt-6 grid grid-cols-2 lg:mt-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative ${
                index % 2 === 1 ? "border-l border-white/15" : ""
              } ${
                index >= 2 ? "border-t border-white/15 lg:border-t-0" : ""
              } ${index > 0 ? "lg:border-l lg:border-white/15" : ""}`}
            >
              <StatItem
                value={stat.value}
                label={stat.label}
                delay={index * 90}
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
