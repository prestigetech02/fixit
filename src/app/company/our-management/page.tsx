import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Management | FixIt",
  description:
    "Meet the leadership guiding FixIt Facility Management across Nigeria.",
};

export default function OurManagementPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-100">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:pr-10 lg:pb-20">
            <Reveal variant="up">
              <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
                Company
              </p>
              <h1 className="mt-3 max-w-xl text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                Our Management
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
              Our founder, Mrs. Folasade Oyedele, is a visionary leader with over 15 years of experience
              in facilities management and a solid background in real estate.
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

            <div className="mt-10 flex flex-wrap gap-8 border-t border-zinc-200 pt-8">
              <div>
                <p className="text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl">
                  15<span className="text-primary">+</span>
                </p>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-zinc-500 uppercase">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl">
                  FM
                </p>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-zinc-500 uppercase">
                  & Real Estate
                </p>
              </div>
              <div>
                <p className="text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl">
                  BSc<span className="text-primary">/</span>MSc
                </p>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-zinc-500 uppercase">
                  Academic Grounding
                </p>
              </div>
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
            {[
              {
                name: "Temi Fashesin",
                role: "Fractional COO",
                image: "/team/member-1.png",
              },
              {
                name: "Folorunsho Ogunleye",
                role: "Accountant",
                image: "/team/member-2.jpg",
              },
              {
                name: "Segun Oyesanmi",
                role: "Operations Manager",
                image: "/team/member-3.jpg",
              },
              {
                name: "Olajumoke Togun",
                role: "Head, People and Talents",
                image: "/team/member-4.jpg",
              },
            ].map((member, index) => (
              <Reveal
                key={member.image}
                as="li"
                variant="up"
                delay={100 + index * 100}
              >
                <article className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-700">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
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
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
