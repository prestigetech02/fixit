import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { ProjectStatusBadge } from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { getProjectHref, projects, type Project } from "@/data/projects";

const featured = projects.slice(0, 4);

function ProjectFeatureCard({
  project,
  imageOnRight,
  delay,
}: {
  project: Project;
  imageOnRight: boolean;
  delay: number;
}) {
  return (
    <Reveal as="li" variant="up" delay={delay}>
      <Link
        href={getProjectHref(project.slug)}
        aria-label={`View project: ${project.name}`}
        className={`group flex h-full overflow-hidden rounded-[20px_4px_20px_4px] border border-zinc-200 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-zinc-300 hover:shadow-[0_18px_40px_-20px_rgba(15,23,42,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
          imageOnRight ? "flex-col sm:flex-row-reverse" : "flex-col sm:flex-row"
        }`}
      >
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-zinc-100 sm:aspect-auto sm:w-[46%] sm:min-h-[12.5rem]">
          <Image
            src={project.image}
            alt={`${project.name} in ${project.location}`}
            fill
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <ProjectStatusBadge
            status={project.status}
            className="absolute left-3 top-3"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
          <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
            {project.location}
          </p>
          <h3 className="mt-2 text-lg font-bold tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-primary sm:text-xl">
            {project.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-[0.9375rem]">
            {project.summary}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors group-hover:text-primary">
            View project
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function SelectedWork() {
  return (
    <section
      id="selected-work"
      className="bg-primary px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="selected-work-heading"
    >
      <div className="site-shell">
        <SectionHeader
          eyebrow="Our Projects"
          title="Selected Work"
          titleId="selected-work-heading"
          className="mx-auto flex w-full max-w-3xl flex-col items-center text-center sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl"
          eyebrowClassName="text-base font-medium tracking-[0.16em] text-white/85 uppercase sm:text-lg"
          titleClassName="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
          descriptionClassName="mt-4 max-w-none text-lg leading-relaxed text-white/80 sm:text-xl"
          description="Over the years, FixIt Multiconcepts Limited has partnered with various government institutions and private clients to deliver reliable cleaning, facility management, and maintenance solutions across multiple locations."
        />

        <ul className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:gap-6">
          {featured.map((project, index) => (
            <ProjectFeatureCard
              key={project.slug}
              project={project}
              imageOnRight={index >= 2}
              delay={80 + (index % 2) * 90}
            />
          ))}
        </ul>

        <Reveal variant="fade" delay={200} className="mt-10 flex justify-center sm:mt-12">
          <Button href="/our-projects" variant="light" className="px-6 py-3">
            View all projects
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
