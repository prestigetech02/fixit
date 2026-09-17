import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    label: "Management",
    title: "Facility Management",
    description:
      "End-to-end stewardship of buildings, people, and daily operations.",
    href: "/what-we-do",
    image: "/brand/97.png",
    imagePosition: "object-center",
    alt: "FixIt facility management team supporting a busy public facility",
  },
  {
    label: "Hygiene",
    title: "Environmental & Janitorial",
    description:
      "Cleaning, sanitation, and restroom care for high-traffic spaces.",
    href: "/what-we-do/custodial-environmental-hygiene",
    image: "/brand/104.png",
    imagePosition: "object-[35%_center]",
    alt: "FixIt custodial team delivering environmental hygiene services",
  },
  {
    label: "Environment",
    title: "Waste & Environmental",
    description:
      "Refuse handling, pest control, and facility disinfection programs.",
    href: "/what-we-do/waste-management-fumigation",
    image: "/brand/106.png",
    imagePosition: "object-[45%_center]",
    alt: "FixIt waste management and environmental care at a facility site",
  },
  {
    label: "Technical",
    title: "Engineering Support",
    description:
      "HVAC, electrical, and preventive maintenance that protects uptime.",
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
      className="bg-white px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="What We Do"
          title="Our Services"
          titleId="services-heading"
          action={
            <Button href="/what-we-do" className="px-6 py-3">
              View all services
            </Button>
          }
        />

        <ul className="mt-12 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {services.map((service, index) => (
            <Reveal
              key={service.href}
              as="li"
              className="min-h-[20rem] lg:min-h-[24rem]"
              variant="up"
              delay={100 + index * 100}
            >
              <Link
                href={service.href}
                className="group relative flex h-full min-h-[20rem] flex-col justify-end overflow-hidden rounded-[20px_4px_20px_4px] lg:min-h-[24rem]"
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${service.imagePosition}`}
                />

                <span
                  className="absolute inset-0 bg-deep-blue-black/55 transition-colors duration-300 group-hover:bg-deep-blue-black/45"
                  aria-hidden
                />

                <div className="relative z-10 flex items-end justify-between gap-4 p-5 sm:p-6">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase sm:text-[0.8125rem]">
                      {service.label}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-white sm:text-[1.65rem]">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-white/75">
                      {service.description}
                    </p>
                  </div>

                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white text-white transition-colors duration-300 group-hover:border-primary group-hover:bg-primary"
                    aria-hidden
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M3.5 9h11M10 4.5L14.5 9 10 13.5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
