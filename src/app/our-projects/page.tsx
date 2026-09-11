import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Projects | FixIt",
  description:
    "Selected FixIt facility management projects across major bus terminals and public infrastructure in Nigeria.",
};

export default function OurProjectsPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/brand/oshodi-brt.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-deep-blue-black/65"
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-5 pb-16 pt-28 text-center sm:px-8 sm:pb-20 sm:pt-32">
          <Reveal variant="up" className="flex max-w-2xl flex-col items-center">
            <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
              Portfolio
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Projects
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-200">
              Proven delivery across Nigeria&apos;s busiest transport hubs,
              where cleanliness, order, and disciplined operations matter every
              day.
            </p>

            <div className="mt-8 h-px w-16 bg-primary" aria-hidden />

            <div className="mt-8">
              <Button href="/request-a-quote" variant="light" className="px-6 py-3">
                Request a Quote
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects grid */}
      <section
        id="projects"
        className="bg-white px-5 py-16 sm:px-8 sm:py-20"
        aria-labelledby="projects-heading"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal variant="up" className="max-w-2xl">
            <h2
              id="projects-heading"
              className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl"
            >
              Selected Work
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-500">
              Terminals and public facilities where FixIt teams keep spaces
              clean, organised, and ready for thousands of daily users.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {projects.map((project, index) => (
              <Reveal
                key={project.name}
                as="li"
                variant="up"
                delay={40 + (index % 3) * 70}
              >
                <article className="group/card flex h-full flex-col overflow-hidden rounded-2xl bg-zinc-100 transition-transform duration-300 ease-out hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover/card:scale-[1.03]"
                    />
                    <span className="absolute left-3 top-3 rounded-sm bg-primary px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wide text-white uppercase">
                      {project.year}
                    </span>
                    <span className="img-flash" aria-hidden />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                      {project.location}
                    </p>
                    <h3 className="mt-2 text-lg font-bold tracking-tight text-zinc-900 transition-colors duration-300 group-hover/card:text-primary">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                      {project.outcome}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
