import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const letters = [
  {
    src: "/awards/planet-projects-letter.png",
    alt: "Recommendation letter from Planet Projects Limited for FixIt Multiconcepts",
    label: "Planet Projects Limited",
  },
  {
    src: "/awards/oti-letter.png",
    alt: "Recommendation letter from Oshodi Transport Interchange for FixIt Multiconcepts",
    label: "Oshodi Transport Interchange",
  },
  {
    src: "/awards/ail-letter.png",
    alt: "Recommendation letter from A.I.L. Infrastructures Limited for FixIt Multiconcepts",
    label: "A.I.L. Infrastructures Limited",
  },
  {
    src: "/awards/pittol-letter.png",
    alt: "Recommendation letter from Pittol & Company Limited for FixIt Multiconcepts",
    label: "Pittol & Company Limited",
  },
] as const;

export default function ClientFeedback() {
  return (
    <section
      id="client-feedback"
      className="bg-white px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="feedback-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Recognition"
          title="Client Feedback & Awards"
          titleId="feedback-heading"
          description="FixIt Multiconcepts recently earned the Best Service Provider Award from FIRS, just one year after being awarded the contract, a testament to our dedication, performance, and client satisfaction."
        />

        <Reveal
          variant="up"
          delay={80}
          className="mt-12 overflow-hidden rounded-[20px_4px_20px_4px] bg-zinc-100 lg:mt-14"
        >
          <div className="grid items-center lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[18rem] bg-zinc-200 sm:min-h-[22rem]">
              <Image
                src="/awards/firs-best-service-provider-2025.png"
                alt="FIRS Best Service Provider Contractor Award 2025 presented to FixIt Multi Concept Ltd"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain object-center p-6 sm:p-8"
              />
            </div>

            <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
              <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
                Award Highlight
              </p>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl">
                Best Service Provider - Contractor, 2025
              </h3>
              <p className="mt-2 text-sm font-semibold text-zinc-700">
                Federal Inland Revenue Service (FIRS), Lagos Mainland East
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                Presented on 9 October 2025 in recognition of outstanding
                service at the State Administrator Office, Lagos Mainland East
                (SAO / LME), just one year after FixIt was awarded the contract.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal variant="up" delay={120} className="mt-12 sm:mt-14">
          <h3 className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
            Client recommendation letters
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
            Official letters of recommendation from partners who trust FixIt
            with their facilities.
          </p>
        </Reveal>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {letters.map((letter, index) => (
            <Reveal
              key={letter.src}
              as="li"
              variant="up"
              delay={140 + index * 70}
            >
              <figure className="overflow-hidden rounded-[20px_4px_20px_4px] border border-zinc-200 bg-zinc-50">
                <div className="relative aspect-[3/4] w-full bg-white">
                  <Image
                    src={letter.src}
                    alt={letter.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain object-top p-2 sm:p-3"
                  />
                </div>
                <figcaption className="border-t border-zinc-200 px-3 py-3 text-xs font-semibold leading-snug text-zinc-800 sm:text-sm">
                  {letter.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
