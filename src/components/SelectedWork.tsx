"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";

const PER_PAGE = 3;
const pageCount = Math.ceil(projects.length / PER_PAGE);

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      {direction === "prev" ? (
        <path
          d="M13 8H3M7 4L3 8l4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export default function SelectedWork() {
  const [page, setPage] = useState(0);

  const goTo = useCallback((next: number) => {
    setPage((next + pageCount) % pageCount);
  }, []);

  return (
    <section
      id="selected-work"
      className="bg-white px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="selected-work-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Our Projects"
          title="Selected Work"
          titleId="selected-work-heading"
          action={
            <Button href="/our-projects" className="px-6 py-3">
              View all projects
            </Button>
          }
        />

        <Reveal
          variant="up"
          delay={120}
          className="mt-12 grid gap-4 lg:mt-14 lg:grid-cols-[0.30fr_0.70fr] lg:gap-5"
        >
          <div className="relative hidden min-h-[14rem] overflow-hidden rounded-[20px_4px_20px_4px] lg:block lg:min-h-[16rem]">
            <Image
              src="/brand/3.png"
              alt="FixIt facility management project site exterior"
              fill
              sizes="30vw"
              className="object-cover object-center"
            />
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {Array.from({ length: pageCount }, (_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="grid w-full shrink-0 grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3"
                >
                  {projects
                    .slice(pageIndex * PER_PAGE, pageIndex * PER_PAGE + PER_PAGE)
                    .map((project) => (
                      <article
                        key={project.name}
                        className="group flex flex-col"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px_4px_20px_4px]">
                          <Image
                            src={project.image}
                            alt={`${project.name} in ${project.location}`}
                            fill
                            sizes="(max-width: 640px) 100vw, 23vw"
                            className="object-cover"
                          />
                          <span className="absolute left-3 top-3 rounded-sm bg-primary px-2 py-1 text-[0.6875rem] font-semibold tracking-wide text-white uppercase">
                            {project.year}
                          </span>
                        </div>

                        <h3 className="mt-4 text-sm font-bold tracking-tight text-zinc-900 uppercase transition-colors duration-300 group-hover:text-primary sm:text-[0.875rem] lg:text-[0.9375rem]">
                          {project.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                          {project.outcome}
                        </p>
                      </article>
                    ))}
                </div>
              ))}
            </div>

            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {Array.from({ length: pageCount }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show projects page ${i + 1}`}
                    aria-current={i === page}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === page
                        ? "w-8 bg-primary"
                        : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  aria-label="Previous projects"
                  onClick={() => goTo(page - 1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 transition-colors duration-300 hover:border-zinc-500"
                >
                  <ArrowIcon direction="prev" />
                </button>
                <button
                  type="button"
                  aria-label="Next projects"
                  onClick={() => goTo(page + 1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 transition-colors duration-300 hover:border-zinc-500"
                >
                  <ArrowIcon direction="next" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
