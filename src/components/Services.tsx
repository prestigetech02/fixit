import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    title: ["Facility", "Management"],
    description:
      "End-to-end stewardship of buildings, people, and daily operations across terminals and commercial sites.",
    href: "/what-we-do",
    image: "/brand/97.png",
    imagePosition: "object-center",
    alt: "FixIt facility management team supporting a busy public facility",
  },
  {
    title: ["Environmental &", "Janitorial"],
    description:
      "Cleaning, sanitation, and restroom care that keep high-traffic spaces safe, presentable, and ready for use.",
    href: "/what-we-do/custodial-environmental-hygiene",
    image: "/brand/104.png",
    imagePosition: "object-[35%_center]",
    alt: "FixIt custodial team delivering environmental hygiene services",
  },
  {
    title: ["Waste &", "Environmental"],
    description:
      "Refuse handling, pest control, and facility disinfection programmes that protect people and sites.",
    href: "/what-we-do/waste-management-fumigation",
    image: "/brand/106.png",
    imagePosition: "object-[45%_center]",
    alt: "FixIt waste management and environmental care at a facility site",
  },
  {
    title: ["Engineering", "Support"],
    description:
      "HVAC, electrical, and preventive maintenance that protect uptime and keep systems performing.",
    href: "/what-we-do/hvac-operations",
    image: "/brand/100.png",
    imagePosition: "object-center",
    alt: "FixIt technician providing engineering and HVAC support",
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      className="bg-zinc-50 px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="services-heading"
    >
      <div className="site-shell">
        <SectionHeader
          eyebrow="What We Do"
          title="Industry Services"
          titleId="services-heading"
          eyebrowClassName="text-base font-medium tracking-[0.16em] text-primary uppercase sm:text-lg"
          titleClassName="mt-3 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem]"
          action={
            <Button href="/what-we-do" className="px-6 py-3">
              View all services
            </Button>
          }
        />

        <ul className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map((service, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <Reveal
                key={service.href}
                as="li"
                variant="up"
                delay={80 + index * 90}
              >
                <article className="group flex h-full flex-col items-start border border-zinc-200 bg-white p-5 text-left transition-colors duration-300 hover:border-zinc-300 sm:p-6">
                  <p
                    className="text-sm font-semibold tracking-[0.12em] text-zinc-300"
                    aria-hidden
                  >
                    {number}
                  </p>

                  <h3 className="mt-3 min-h-[3.5rem] text-2xl font-bold leading-[1.15] tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-primary sm:min-h-[3.75rem] sm:text-[1.65rem]">
                    <Link
                      href={service.href}
                      className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      {service.title.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </Link>
                  </h3>

                  <Link
                    href={service.href}
                    tabIndex={-1}
                    aria-hidden
                    className="relative mt-5 block w-full overflow-hidden bg-zinc-100"
                  >
                    <span className="relative block aspect-[3/2]">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        quality={90}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${service.imagePosition}`}
                      />
                    </span>
                  </Link>

                  <p className="mt-5 text-base leading-relaxed text-zinc-500 sm:text-[1.05rem]">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <Button href={service.href} className="px-5 py-2.5">
                      Read More
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
