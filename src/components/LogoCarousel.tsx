import Image from "next/image";
import Reveal from "@/components/Reveal";

const logos = [
  { src: "/logos/71.png", alt: "Partner logo" },
  { src: "/logos/72.png", alt: "Partner logo" },
  { src: "/logos/74.png", alt: "Partner logo" },
  { src: "/logos/75.png", alt: "Partner logo" },
  { src: "/logos/77.png", alt: "Partner logo" },
  { src: "/logos/79.png", alt: "Partner logo" },
  { src: "/logos/80.png", alt: "Partner logo" },
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
          className="flex h-12 w-28 shrink-0 items-center justify-center sm:h-14 sm:w-32"
        >
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.alt}
            width={128}
            height={56}
            className="max-h-12 w-auto object-contain sm:max-h-14"
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
