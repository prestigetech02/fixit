import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import GalleryGrid from "@/components/GalleryGrid";
import JsonLdScript from "@/components/JsonLdScript";
import Reveal from "@/components/Reveal";
import { galleryImages } from "@/data/gallery";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Gallery",
  description:
    "Photos of FixIt Facility Management teams and project sites across Nigeria, from bus terminals in Lagos and Abuja to cleaning, disinfection, and technical operations.",
  path: "/company/our-gallery",
});

export default function OurGalleryPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our Gallery", path: "/company/our-gallery" },
        ])}
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
                Our Gallery
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-500">
                A look at our people, equipment, and the facilities we care
                for across Nigeria.
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
              src="/brand/105.png"
              alt="FixIt operator using a ride-on floor scrubber on a pedestrian bridge"
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

      {/* Gallery */}
      <section
        className="bg-white px-5 py-16 sm:px-8 sm:py-20"
        aria-label="Photo gallery"
      >
        <div className="mx-auto max-w-6xl">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
