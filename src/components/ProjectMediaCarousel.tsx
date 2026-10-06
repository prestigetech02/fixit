"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectMedia } from "@/data/projects";

type ProjectMediaCarouselProps = {
  media: ProjectMedia[];
  label: string;
};

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

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.1-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}

function mediaLabel(item: ProjectMedia): string {
  return item.type === "image" ? item.alt : item.title;
}

export default function ProjectMediaCarousel({
  media,
  label,
}: ProjectMediaCarouselProps) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set([0]));
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const pointerStart = useRef<number | null>(null);
  const count = media.length;
  const hasMany = count > 1;

  const goTo = useCallback(
    (next: number) => {
      const target = (next + count) % count;
      setIndex(target);
      setLoaded((current) =>
        current.has(target) ? current : new Set(current).add(target),
      );
    },
    [count],
  );

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) video.pause();
    });
  }, [index]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!hasMany) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
  };

  const onPointerDown = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") pointerStart.current = event.clientX;
  };

  const onPointerUp = (event: React.PointerEvent) => {
    if (pointerStart.current === null) return;
    const delta = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(delta) > 50) goTo(index + (delta < 0 ? 1 : -1));
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={hasMany ? 0 : undefined}
      onKeyDown={onKeyDown}
      className="outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
    >
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-[20px_4px_20px_4px] bg-zinc-900 sm:aspect-[16/9]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (pointerStart.current = null)}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {media.map((item, i) => {
            const isActive = i === index;
            return (
              <div
                key={`${item.type}-${i}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}: ${mediaLabel(item)}`}
                aria-hidden={!isActive}
                inert={!isActive}
                className="relative h-full w-full shrink-0"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 1152px) 100vw, 1152px"
                    className={`object-cover object-center transition-transform duration-[1200ms] ease-out ${
                      isActive ? "scale-100" : "scale-105"
                    }`}
                  />
                ) : item.type === "video" ? (
                  <video
                    ref={(node) => {
                      videoRefs.current[i] = node;
                    }}
                    src={loaded.has(i) ? item.src : undefined}
                    poster={item.poster}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={item.title}
                    className="h-full w-full bg-black object-contain"
                  />
                ) : loaded.has(i) ? (
                  <iframe
                    key={isActive ? "active" : "idle"}
                    src={`https://www.youtube-nocookie.com/embed/${item.id}?rel=0`}
                    title={item.title}
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    loading="lazy"
                    className="h-full w-full border-0"
                  />
                ) : null}
              </div>
            );
          })}
        </div>

        {hasMany ? (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => goTo(index - 1)}
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm backdrop-blur transition-colors hover:bg-white sm:left-5 sm:h-12 sm:w-12"
            >
              <ArrowIcon direction="prev" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(index + 1)}
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm backdrop-blur transition-colors hover:bg-white sm:right-5 sm:h-12 sm:w-12"
            >
              <ArrowIcon direction="next" />
            </button>
            <p
              className="pointer-events-none absolute bottom-3 right-3 z-10 rounded-full bg-deep-blue-black/70 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-white tabular-nums backdrop-blur sm:bottom-5 sm:right-5"
              aria-live="polite"
            >
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </p>
          </>
        ) : null}
      </div>

      {hasMany ? (
        <ul className="mt-3 flex gap-2 overflow-x-auto pb-1 sm:mt-4 sm:gap-3">
          {media.map((item, i) => {
            const isActive = i === index;
            const thumb =
              item.type === "image" ? item.src : item.type === "video" ? item.poster : undefined;
            return (
              <li key={`thumb-${item.type}-${i}`} className="shrink-0">
                <button
                  type="button"
                  aria-label={`Show slide ${i + 1}: ${mediaLabel(item)}`}
                  aria-current={isActive}
                  onClick={() => goTo(i)}
                  className={`relative block h-14 w-20 overflow-hidden rounded-md bg-zinc-800 transition-all duration-300 sm:h-16 sm:w-24 ${
                    isActive
                      ? "ring-2 ring-primary ring-offset-2"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {thumb ? (
                    <Image
                      src={thumb}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  ) : null}
                  {item.type !== "image" ? (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/35 text-white">
                      <PlayIcon className="h-5 w-5" />
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
