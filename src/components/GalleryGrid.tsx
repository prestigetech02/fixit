"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { GalleryImage } from "@/data/gallery";

type GalleryGridProps = {
  images: GalleryImage[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (delta: number) =>
      setActive((current) =>
        current === null
          ? current
          : (current + delta + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close, step]);

  const current = active === null ? null : images[active];

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {images.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[20px_4px_20px_4px] bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`View larger: ${image.caption}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                className="absolute inset-0 bg-gradient-to-t from-deep-blue-black/75 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <span className="absolute inset-x-0 bottom-0 p-3 text-left text-sm font-semibold text-white sm:p-4 sm:text-base">
                {image.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-deep-blue-black/90 p-4 sm:p-8"
          onClick={close}
        >
          <div
            className="relative flex max-h-full w-full max-w-5xl flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full max-h-[78vh]">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 text-white">
              <p className="text-sm font-semibold sm:text-base">
                {current.caption}
                <span className="ml-3 font-normal text-white/60">
                  {(active ?? 0) + 1} / {images.length}
                </span>
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous image"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 transition-colors hover:border-primary hover:bg-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next image"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 transition-colors hover:border-primary hover:bg-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="ml-1 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 transition-colors hover:border-primary hover:bg-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M4 4l8 8M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
