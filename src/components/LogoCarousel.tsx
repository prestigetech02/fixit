import Image from "next/image";
import Reveal from "@/components/Reveal";

const logos = [
  { src: "/logos/71.png", alt: "Lagos Waste Management Authority (LAWMA)" },
  { src: "/logos/planet-projects.jpg", alt: "Planet Projects" },
  { src: "/logos/72.png", alt: "Edo State Waste Management Board" },
  { src: "/logos/urban-core.jpg", alt: "UrbanCore Facility Management" },
  { src: "/logos/74.png", alt: "Aristoclean Limited" },
  { src: "/logos/first-poss.jpg", alt: "First Professional and Occupational Support Services (FirstPOSS)" },
  { src: "/logos/75.png", alt: "Pittol Construction and Foundation" },
  { src: "/logos/glossy-clean.jpg", alt: "Glossy Clean Industrial Service and Facility Management" },
  { src: "/logos/77.png", alt: "GIKS Technologies" },
  { src: "/logos/79.png", alt: "Ekiti State Government" },
  { src: "/logos/80.png", alt: "Abuja Environmental Protection Board" },
] as const;

function LogoTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
      aria-hidden={ariaHidden}
    >
      {logos.map((logo) => (
        <li
          key={`${ariaHidden ? "b" : "a"}-${logo.src}`}
          className="flex h-14 w-32 shrink-0 items-center justify-center sm:h-[4.5rem] sm:w-40"
        >
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.alt}
            width={160}
            height={72}
            className="max-h-14 w-auto object-contain sm:max-h-[4.5rem]"
          />
        </li>
      ))}
    </ul>
  );
}

export default function LogoCarousel() {
  return (
    <Reveal variant="fade" className="relative z-20 w-full bg-zinc-100 py-5 sm:py-6">
      <p className="sr-only">Partners and clients</p>
      <div className="logo-marquee group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-zinc-100 to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-zinc-100 to-transparent sm:w-20" />

        <div className="logo-marquee-track flex w-max items-center">
          <LogoTrack />
          <LogoTrack ariaHidden />
        </div>
      </div>
    </Reveal>
  );
}
