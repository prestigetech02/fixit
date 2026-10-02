import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLdScript from "@/components/JsonLdScript";
import Reveal from "@/components/Reveal";
import {
  getTeamMember,
  getTeamMemberEmail,
  getTeamMemberHref,
  team,
} from "@/data/team";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) {
    return buildPageMetadata({
      title: "Meet the Team",
      description: "Meet the team behind FixIt Facility Management.",
      path: "/company/our-management",
    });
  }

  return buildPageMetadata({
    title: `${member.name}, ${member.role}`,
    description: `${member.name} is ${member.role} at FixIt Facility Management.`,
    path: getTeamMemberHref(member.slug),
    image: member.image,
  });
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  const email = getTeamMemberEmail(member);

  return (
    <main className="flex flex-1 flex-col bg-zinc-100">
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Meet the Team", path: "/company/our-management" },
            { name: member.name, path: getTeamMemberHref(member.slug) },
          ]),
          personJsonLd([
            { name: member.name, jobTitle: member.role, image: member.image },
          ]),
        ]}
      />

      <section className="px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/company/our-management#team"
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
            Back to the team
          </Link>

          <div className="mt-8 grid gap-8 md:grid-cols-[0.42fr_0.58fr] md:gap-12">
            <Reveal variant="fade">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px_4px_20px_4px] bg-zinc-200">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>

            <Reveal variant="up" delay={100} className="md:pt-2">
              <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
                Meet the Team
              </p>
              <h1 className="mt-3 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">
                {member.name}
              </h1>
              <p className="mt-3 text-lg text-zinc-600 sm:text-xl">
                {member.role}
              </p>

              <div className="mt-8 border-y border-zinc-300 py-6">
                <div className="flex items-start gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-primary"
                    aria-hidden
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                      Email
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="mt-1 block text-base font-medium text-zinc-800 underline-offset-4 transition-colors hover:text-primary hover:underline hover:decoration-primary hover:decoration-2"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
