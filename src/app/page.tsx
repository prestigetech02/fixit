import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import CoreValues from "@/components/CoreValues";
import WhyChooseFixIt from "@/components/WhyChooseFixIt";
import SelectedWork from "@/components/SelectedWork";
import OurAwards from "@/components/OurAwards";
import ClientFeedback from "@/components/ClientFeedback";
import CtaBand from "@/components/CtaBand";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `${siteConfig.name} | Facility Management in Lagos, Nigeria`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Stats />
      <CoreValues />
      <Services />
      <WhyChooseFixIt />
      <SelectedWork />
      <OurAwards />
      <ClientFeedback />
      <CtaBand />
    </main>
  );
}
