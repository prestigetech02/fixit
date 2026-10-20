"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

type Stat =
  | {
      kind: "number";
      value: number;
      /** Shown after the animated number, e.g. "K+", "+", "%". */
      suffix?: string;
      label: string;
    }
  | {
      kind: "text";
      value: string;
      label: string;
    };

const stats: Stat[] = [
  { kind: "number", value: 14, label: "Terminals" },
  { kind: "number", value: 16, label: "Commercial Buildings" },
  { kind: "number", value: 290, suffix: "K+", label: "Daily Commuters" },
  { kind: "number", value: 20, suffix: "+", label: "Locations" },
  { kind: "text", value: "24/7", label: "Frequency" },
  { kind: "number", value: 95, suffix: "%", label: "Efficiency" },
  { kind: "number", value: 60, suffix: "%", label: "Eco Friendly" },
  { kind: "number", value: 369, label: "Workforce" },
];

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

function AnimatedNumber({
  value,
  suffix = "",
  active,
}: {
  value: number;
  suffix?: string;
  active: boolean;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const [display, setDisplay] = useState(reducedMotion ? value : 0);

  useEffect(() => {
    if (!active) return;
    if (reducedMotion) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const duration = 2400;
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
      {suffix ? (
        <span className="text-white/90">{suffix}</span>
      ) : null}
    </span>
  );
}

function StatItem({
  stat,
  delay,
}: {
  stat: Stat;
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
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Reveal
      variant="up"
      delay={delay}
      className="relative px-2 py-4 text-center sm:py-5 lg:px-4 xl:px-5"
    >
      <div ref={ref}>
        <p className="text-3xl font-black tracking-tight text-white sm:text-4xl xl:text-5xl">
          {stat.kind === "text" ? (
            <span className="tabular-nums">{stat.value}</span>
          ) : (
            <AnimatedNumber
              value={stat.value}
              suffix={stat.suffix}
              active={active}
            />
          )}
        </p>
        <p className="mt-2.5 text-[0.6875rem] font-semibold tracking-[0.16em] text-white/75 uppercase sm:text-xs">
          {stat.label}
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
      <div className="site-shell">
        <Reveal variant="up">
          <h2
            id="impact-heading"
            className="text-center text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem]"
          >
            Our Impact
          </h2>
        </Reveal>

        <Reveal
          variant="up"
          delay={80}
          className="mt-6 rounded-[20px_4px_20px_4px] bg-primary px-5 py-8 sm:mt-8 sm:px-10 sm:py-9 lg:px-12 lg:py-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={[
                  "relative",
                  index % 2 === 1 ? "border-l border-white/20" : "",
                  index % 4 !== 0
                    ? "sm:border-l sm:border-white/20"
                    : "sm:border-l-0",
                  index >= 2 ? "border-t border-white/20" : "",
                  index >= 4
                    ? "sm:border-t sm:border-white/20"
                    : "sm:border-t-0",
                ].join(" ")}
              >
                <StatItem stat={stat} delay={(index % 4) * 80} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
