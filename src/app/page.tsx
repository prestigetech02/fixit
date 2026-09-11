import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import SelectedWork from "@/components/SelectedWork";
import ClientFeedback from "@/components/ClientFeedback";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Services />
      <Stats />
      <SelectedWork />
      <ClientFeedback />
      <CtaBand />
    </main>
  );
}
