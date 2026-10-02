import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import SelectedWork from "@/components/SelectedWork";
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
      <Services />
      <SelectedWork />
      <ClientFeedback />
      <CtaBand />
    </main>
  );
}
