import Image from "next/image";
import Link from "next/link";
import {
  getProjectHref,
  projectStatusLabel,
  type Project,
  type ProjectStatus,
} from "@/data/projects";

export function ProjectStatusBadge({
  status,
  className = "",
}: {
  status: ProjectStatus;
  className?: string;
}) {
  const ongoing = status === "ongoing";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wide uppercase ${
        ongoing ? "bg-primary text-white" : "bg-zinc-900/85 text-white"
      } ${className}`}
    >
      {ongoing ? (
        <span className="relative flex h-1.5 w-1.5" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75 motion-reduce:animate-none" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
        </span>
      ) : (
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path
            d="M2.5 6.5 5 9l4.5-6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {projectStatusLabel[status]}
    </span>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={getProjectHref(project.slug)}
      aria-label={`View project: ${project.name}, ${project.location}`}
      className="group/card flex h-full flex-col overflow-hidden rounded-2xl bg-zinc-100 transition-transform duration-300 ease-out hover:-translate-y-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200">
        <Image
          src={project.image}
          alt={`${project.name} in ${project.location}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover/card:scale-[1.03]"
        />
        <ProjectStatusBadge
          status={project.status}
          className="absolute left-3 top-3"
        />
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
          {project.summary}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-zinc-900 transition-colors group-hover/card:text-primary">
          View project
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
            className="transition-transform duration-300 group-hover/card:translate-x-1"
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
  );
}
