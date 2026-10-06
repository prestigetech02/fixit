import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import JsonLdScript from "@/components/JsonLdScript";
import ProjectCard, { ProjectStatusBadge } from "@/components/ProjectCard";
import ProjectMediaCarousel from "@/components/ProjectMediaCarousel";
import Reveal from "@/components/Reveal";
import {
  getProject,
  getProjectHref,
  getProjectMedia,
  projects,
  projectStatusLabel,
} from "@/data/projects";
import { getTeamMember, getTeamMemberHref } from "@/data/team";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return buildPageMetadata({
      title: "Our Projects",
      description: "FixIt facility management projects across Nigeria.",
      path: "/our-projects",
    });
  }

  return buildPageMetadata({
    title: `${project.name}, ${project.location}`,
    description: project.summary,
    path: getProjectHref(project.slug),
    image: project.image,
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const media = getProjectMedia(project);
  const manager = project.managerSlug
    ? getTeamMember(project.managerSlug)
    : undefined;

  const position = projects.findIndex((p) => p.slug === project.slug);
  const moreProjects = [1, 2, 3].map(
    (offset) => projects[(position + offset) % projects.length],
  );

  const facts = [
    { label: "Status", value: projectStatusLabel[project.status] },
    { label: "Location", value: project.location },
    { label: "Facility type", value: project.category },
    ...project.highlights,
  ];

  return (
    <main className="flex flex-1 flex-col bg-white">
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our Projects", path: "/our-projects" },
          { name: project.name, path: getProjectHref(project.slug) },
        ])}
      />

      {/* Title and media */}
      <section className="px-5 pb-12 pt-28 sm:px-8 sm:pb-14 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <Link
            href={`/our-projects#${project.status}-projects`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-primary"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M13 8H3M7 4L3 8l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to projects
          </Link>

          <Reveal variant="up" className="mt-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <ProjectStatusBadge status={project.status} />
              <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                {project.category} · {project.location}
              </p>
            </div>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              {project.summary}
            </p>
          </Reveal>

          <Reveal variant="fade" delay={120} className="mt-10">
            <ProjectMediaCarousel
              media={media}
              label={`${project.name} photos and videos`}
            />
          </Reveal>
        </div>
      </section>

      {/* Write-up */}
      <section
        className="px-5 pb-16 sm:px-8 sm:pb-20"
        aria-labelledby="about-project-heading"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.45fr_0.9fr] lg:items-start lg:gap-14">
          <Reveal variant="up">
            <h2
              id="about-project-heading"
              className="text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl"
            >
              About the Project
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
              {project.description.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <h3 className="mt-10 text-lg font-bold tracking-tight text-zinc-900">
              Scope of Work
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.scope.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.9375rem] text-zinc-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path
                        d="M2.5 6.5 5 9l4.5-6"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="up" delay={100} className="lg:sticky lg:top-28">
            <aside className="rounded-[20px_4px_20px_4px] bg-zinc-100 p-6 sm:p-7">
              <h2 className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                Project Facts
              </h2>
              <dl className="mt-4 divide-y divide-zinc-200">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <dt className="text-sm text-zinc-500">{fact.label}</dt>
                    <dd className="text-right text-sm font-semibold text-zinc-900">
                      {fact.value}
                    </dd>
                  </div>
                ))}
                {manager ? (
                  <div className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-sm text-zinc-500">Facility manager</dt>
                    <dd className="text-right text-sm font-semibold">
                      <Link
                        href={getTeamMemberHref(manager.slug)}
                        className="text-zinc-900 underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        {manager.name}
                      </Link>
                    </dd>
                  </div>
                ) : null}
              </dl>

              <p className="mt-6 text-sm leading-relaxed text-zinc-600">
                Need the same standard of care for your facility?
              </p>
              <Button href="/request-a-quote" className="mt-4 w-full justify-center px-6 py-3">
                Request a Quote
              </Button>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* More projects */}
      <section
        className="bg-zinc-50 px-5 py-16 sm:px-8 sm:py-20"
        aria-labelledby="more-projects-heading"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal variant="up" className="flex flex-wrap items-end justify-between gap-4">
            <h2
              id="more-projects-heading"
              className="text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl"
            >
              More Projects
            </h2>
            <Link
              href="/our-projects"
              className="text-sm font-semibold text-zinc-700 transition-colors hover:text-primary"
            >
              View all projects →
            </Link>
          </Reveal>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {moreProjects.map((item, index) => (
              <Reveal key={item.slug} as="li" variant="up" delay={40 + index * 70}>
                <ProjectCard project={item} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
