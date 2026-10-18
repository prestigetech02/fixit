import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

const points = [
  "Multi-site expertise across Nigeria’s busiest terminals",
  "Trained, uniformed teams delivering every day on site",
  "Proven results for government and commercial clients",
] as const;

function RadioBullet() {
  return (
    <span
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-zinc-900"
      aria-hidden
    >
      <span className="h-2 w-2 rounded-full bg-primary" />
    </span>
  );
}

export default function WhyChooseFixIt() {
  return (
    <section
      id="why-choose-fixit"
      className="bg-white px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="why-choose-heading"
    >
      <div className="site-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <Reveal variant="up" className="max-w-xl">
          <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
            Why FixIt
          </p>
          <h2
            id="why-choose-heading"
            className="mt-3 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          >
            Why choose FixIt?
          </h2>

          <div className="mt-5 space-y-4 text-base leading-relaxed text-zinc-500 sm:text-lg">
            <p>
              FixIt Multiconcepts is built for the realities of Nigerian public
              and commercial facilities, from high-volume bus terminals to
              institutional offices that cannot afford downtime.
            </p>
            <p>
              We bring disciplined teams, clear service standards, and
              hands-on site leadership so your spaces stay clean, safe, and
              ready for every user, every day.
            </p>
          </div>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-base font-semibold text-zinc-900 sm:text-lg"
              >
                <RadioBullet />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Button href="/request-a-quote" className="px-7 py-3.5 text-base">
              Request a Quote
              <span aria-hidden className="ml-2">
                →
              </span>
            </Button>
          </div>
        </Reveal>

        <Reveal variant="fade" delay={120} className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Main framed photo */}
          <div className="relative mx-auto aspect-[3/4] w-[78%] rounded-sm border border-primary p-2.5 sm:w-[72%] sm:p-3 lg:w-[70%]">
            <div className="relative h-full w-full overflow-hidden rounded-sm bg-zinc-200">
              <Image
                src="/hero/team.JPG"
                alt="FixIt facility team in uniform at a transport terminal"
                fill
                quality={90}
                sizes="(max-width: 1024px) 70vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Top-left circular image */}
          <div className="absolute top-[6%] left-0 z-10 h-28 w-28 overflow-hidden rounded-full border-[5px] border-white bg-zinc-200 shadow-md sm:h-36 sm:w-36 lg:h-40 lg:w-40">
            <Image
              src="/hero/floor-care.jpg"
              alt="FixIt staff operating industrial floor scrubbers"
              fill
              quality={90}
              sizes="160px"
              className="object-cover object-center"
            />
          </div>

          {/* Bottom-right circular image */}
          <div className="absolute right-0 bottom-[4%] z-10 h-32 w-32 overflow-hidden rounded-full border-[5px] border-white bg-zinc-200 shadow-md sm:h-40 sm:w-40 lg:h-44 lg:w-44">
            <Image
              src="/hero/terminal-3.jpg"
              alt="BRT buses at a FixIt-managed terminal exterior"
              fill
              quality={90}
              sizes="176px"
              className="object-cover object-[center_40%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
