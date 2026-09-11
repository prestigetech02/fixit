import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function CtaBand() {
  return (
    <section
      id="request-a-quote"
      className="w-full bg-[#7a0e0e]"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-10 text-center sm:px-8 sm:py-12">
        <Reveal variant="up" className="w-full">
          <h2
            id="cta-heading"
            className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Ready to keep your facility running at its best?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Tell us about your site and service needs. Our team will prepare a
            clear, practical quote tailored to your operations.
          </p>
        </Reveal>

        <Reveal variant="fade" delay={120} className="mt-7">
          <Button
            href="/request-a-quote"
            variant="light"
            className="px-7 py-3.5 text-base"
          >
            Request a Quote
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
