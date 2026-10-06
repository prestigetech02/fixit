import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import JsonLdScript from "@/components/JsonLdScript";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Projects",
  description:
    "Ongoing and completed FixIt facility management projects across major bus terminals, public infrastructure and commercial buildings in Lagos, Abuja, and cities across Nigeria.",
  path: "/our-projects",
});

const projectGroups = [
  {
    status: "ongoing",
    title: "Ongoing Projects",
    description:
      "Terminals and facilities where FixIt teams are on site today, keeping spaces clean, organised, and ready for thousands of daily users.",
    items: projects.filter((project) => project.status === "ongoing"),
  },
  {
    status: "completed",
    title: "Completed Projects",
    description:
      "Past engagements across transport hubs, institutional headquarters, and commercial buildings.",
    items: projects.filter((project) => project.status === "completed"),
  },
] as const;

export default function OurProjectsPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our Projects", path: "/our-projects" },
        ])}
      />
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/brand/oshodi-brt.png"
          alt="Oshodi bus terminal, a FixIt facility management project site"
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

      {projectGroups.map((group, groupIndex) => (
        <section
          key={group.status}
          id={`${group.status}-projects`}
          className={`px-5 sm:px-8 ${
            groupIndex === 0
              ? "bg-white pb-12 pt-16 sm:pb-14 sm:pt-20"
              : "bg-zinc-50 py-16 sm:py-20"
          }`}
          aria-labelledby={`${group.status}-projects-heading`}
        >
          <div className="mx-auto max-w-6xl">
            <Reveal variant="up" className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <h2
                  id={`${group.status}-projects-heading`}
                  className="flex items-center gap-3 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl"
                >
                  {group.title}
                  <span className="rounded-full bg-zinc-200 px-2.5 py-0.5 text-sm font-semibold tracking-normal text-zinc-600 tabular-nums">
                    {group.items.length}
                  </span>
                </h2>
                <p className="mt-3 text-base leading-relaxed text-zinc-500">
                  {group.description}
                </p>
              </div>
            </Reveal>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {group.items.map((project, index) => (
                <Reveal
                  key={project.slug}
                  as="li"
                  variant="up"
                  delay={40 + (index % 3) * 70}
                >
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <CtaBand />
    </main>
  );
}
