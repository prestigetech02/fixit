import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import JsonLdScript from "@/components/JsonLdScript";
import Reveal from "@/components/Reveal";
import TeamPortrait from "@/components/TeamPortrait";
import { getTeamMemberHref, team } from "@/data/team";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Meet the Team",
  description:
    "Meet the leadership team guiding FixIt Facility Management across Nigeria, including our CEO and operational leads.",
  path: "/company/our-management",
});

const hrEmail = "hr@fixitmulticoncepts.com";

const expertise = [
  {
    label: "Real Estate",
    icon: (
      <>
        <path d="M3 10.5 12 4l9 6.5" />
        <path d="M5 9.5V20h14V9.5" />
        <path d="M10 20v-5h4v5" />
      </>
    ),
  },
  {
    label: "Construction",
    icon: (
      <>
        <path d="M4 20h16" />
        <path d="M6 20V9l6-5 6 5v11" />
        <path d="M9 13h6M9 16.5h6" />
      </>
    ),
  },
  {
    label: "Facility Management",
    icon: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3.5 17.5a2 2 0 1 0 3 3l5.8-5.8a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.8-.7-.7-2.8 2.5-2.5Z" />
      </>
    ),
  },
  {
    label: "Environmental Sustainability",
    icon: (
      <>
        <path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15" />
        <path d="M5 19c3-4 6-6.5 9-8" />
      </>
    ),
  },
] as const;

export default function OurManagementPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Meet the Team", path: "/company/our-management" },
          ]),
          personJsonLd(
            team.map((member) => ({
              name: member.name,
              jobTitle: member.role,
              image: member.image,
            })),
          ),
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-100">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:pr-10 lg:pb-20">
            <Reveal variant="up">
              <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
                Company
              </p>
              <h1 className="mt-3 max-w-xl text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                Meet the Team
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-500">
                Experienced leadership committed to excellence, accountability,
                and disciplined operations across every FixIt site.
              </p>

              <div className="mt-8 h-px w-16 bg-primary" aria-hidden />
            </Reveal>
          </div>

          <Reveal
            variant="fade"
            delay={120}
            className="relative min-h-[18rem] sm:min-h-[22rem] lg:min-h-[28rem]"
          >
            <Image
              src="/brand/99.jpg"
              alt="FixIt management and team briefing"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-deep-blue-black/20"
              aria-hidden
            />
          </Reveal>
        </div>
      </section>

      {/* CEO / MD — simple two-column flex */}
      <section id="ceo" className="bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:gap-14">
          {/* Left column — photo */}
          <div className="relative w-full md:w-2/5">
            <Image
              src="/team/fixitceo.jpg"
              alt="FixIt Founder, CEO and Managing Director"
              width={534}
              height={800}
              className="h-auto w-full rounded-tl-[80px] rounded-tr-[80px] rounded-bl-[4px] rounded-br-[4px] object-cover object-top"
              priority
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-none bg-deep-blue-black px-5 py-4 text-white sm:right-auto sm:min-w-[14rem]">
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Founder
              </p>
              <p className="mt-1 text-lg font-bold tracking-tight">
                CEO / Managing Director
              </p>
            </div>
          </div>

          {/* Right column — speech */}
          <div className="w-full md:w-3/5 md:pt-2">
            <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
              Leadership
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl">
              Meet our CEO/MD
            </h2>

            <p className="mt-8 text-base leading-relaxed text-zinc-600 sm:text-lg">
              Our founder is a visionary leader with extensive experience in
              facilities management and a solid background in real estate.
              Holding both bachelor&apos;s and master&apos;s degrees, she is
              deeply passionate about transforming how public spaces are
              managed.
            </p>
            <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
              Her career has been defined by a relentless drive for innovation,
              efficiency, and excellence in facilities management. Through her
              leadership, FixIt has evolved into a trusted force in the
              industry, setting new standards for quality and public
              infrastructure excellence.
            </p>

            <div className="mt-10 border-t border-zinc-200 pt-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
                Areas of Expertise
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {expertise.map((area) => (
                  <li
                    key={area.label}
                    className="group relative flex items-center gap-3 overflow-hidden rounded-[14px_4px_14px_4px] bg-zinc-100 px-4 py-3.5 ring-1 ring-transparent transition-all duration-300 ease-out hover:bg-white hover:ring-primary/15 motion-safe:hover:-translate-y-0.5"
                  >
                    <span
                      className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
                      aria-hidden
                    />
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 ease-out motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-110">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        {area.icon}
                      </svg>
                    </span>
                    <span className="text-base font-bold tracking-tight text-zinc-900 transition-all duration-300 ease-out group-hover:text-primary motion-safe:group-hover:translate-x-0.5">
                      {area.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Management team */}
      <section
        id="team"
        className="bg-zinc-800 px-5 py-20 sm:px-8 sm:py-24"
        aria-labelledby="team-heading"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal variant="up" className="max-w-xl">
            <h2
              id="team-heading"
              className="text-3xl font-black tracking-tight text-white sm:text-4xl"
            >
              Our Management Team
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              The leaders driving FixIt&apos;s operations, people, and delivery
              standards every day.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {team.map((member, index) => (
              <Reveal
                key={member.slug}
                as="li"
                variant="up"
                delay={100 + (index % 4) * 100}
              >
                <Link
                  href={getTeamMemberHref(member.slug)}
                  aria-label={`View profile: ${member.name}, ${member.role}`}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-xl bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <TeamPortrait
                    name={member.name}
                    image={member.image}
                    alt={`${member.name}, ${member.role}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="relative inline-block max-w-full overflow-hidden px-1.5 py-0.5 text-lg font-bold tracking-tight text-white">
                      <span
                        aria-hidden
                        className="absolute inset-0 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
                      />
                      <span className="relative z-10">{member.name}</span>
                    </h3>
                    <p className="mt-0.5 text-sm text-zinc-300">{member.role}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Join our team */}
      <section
        className="bg-white px-5 py-20 sm:px-8 sm:py-24"
        aria-labelledby="join-heading"
      >
        <Reveal
          variant="up"
          className="mx-auto grid max-w-6xl overflow-hidden rounded-[20px_4px_20px_4px] bg-zinc-100 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative min-h-[16rem] sm:min-h-[20rem]">
            <Image
              src="/brand/97.png"
              alt="FixIt team members at work on a facility site"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12">
            <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
              Careers
            </p>
            <h2
              id="join-heading"
              className="mt-3 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl"
            >
              Join Our Team
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-600 sm:text-lg">
              We are always looking for dedicated, disciplined people who take
              pride in keeping spaces safe, clean, and running smoothly. Send
              us your CV and tell us the role you are interested in.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button
                href={`mailto:${hrEmail}?subject=${encodeURIComponent("Job Application: FixIt Website")}`}
                className="px-6 py-3"
              >
                Send Your CV
              </Button>
              <a
                href={`mailto:${hrEmail}`}
                className="text-sm font-semibold text-zinc-700 underline-offset-4 transition-colors hover:text-primary hover:underline hover:decoration-primary hover:decoration-2"
              >
                {hrEmail}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
