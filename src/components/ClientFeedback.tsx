import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const feedback = [
  {
    quote:
      "FixIt keeps our terminal operations clean, orderly, and reliable. Their team understands high-traffic environments and delivers without disruption.",
    name: "Operations Lead",
    role: "Lagos Transport Hub",
  },
  {
    quote:
      "From janitorial coverage to technical support, the service standard has been consistent. Communication is clear and response times are strong.",
    name: "Facilities Manager",
    role: "Corporate Campus, Abuja",
  },
  {
    quote:
      "We needed a partner who could scale with us. FixIt brought professionalism, trained personnel, and measurable improvements across our sites.",
    name: "Administrative Director",
    role: "Southwest Bus Terminal Network",
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
          eyebrow="Testimonials"
          title="Client Feedback"
          titleId="feedback-heading"
          description="What partners say about working with FixIt across Nigeria's busiest facilities."
        />

        <ul className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {feedback.map((item, index) => (
            <Reveal
              key={item.name}
              as="li"
              variant="up"
              delay={100 + index * 100}
            >
              <article className="group flex h-full flex-col rounded-[20px_4px_20px_4px] border border-zinc-200 bg-zinc-50 p-6 will-change-transform transition-[transform,background-color,border-color] duration-300 ease-out hover:-translate-y-2 hover:border-primary hover:bg-white sm:p-7">
                <span
                  className="inline-block origin-bottom-left font-serif text-5xl leading-none text-primary transition-transform duration-300 ease-out group-hover:scale-110"
                  aria-hidden
                >
                  “
                </span>

                <blockquote className="mt-3 flex-1 text-base leading-relaxed text-zinc-700 transition-colors duration-300 group-hover:text-zinc-900">
                  {item.quote}
                </blockquote>

                <footer className="mt-8 border-t border-zinc-200 pt-5 transition-colors duration-300 group-hover:border-primary/40">
                  <p className="flex items-center gap-2 text-sm font-bold tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-primary">
                    {item.name}
                    <span
                      className="inline-block -translate-x-1 text-primary opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden
                    >
                      →
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-zinc-500 transition-colors duration-300 group-hover:text-zinc-600">
                    {item.role}
                  </p>
                </footer>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
