import Reveal from "@/components/Reveal";

const coreValues = [
  "Excellence",
  "Innovation",
  "Sustainability",
  "Teamwork",
  "Reliability",
] as const;

export default function CoreValues() {
  return (
    <section
      id="core-values"
      className="bg-white px-5 pb-16 pt-2 sm:px-8 sm:pb-20 sm:pt-4"
      aria-labelledby="core-values-heading"
    >
      <Reveal variant="up" className="site-shell">
        <h2
          id="core-values-heading"
          className="text-center text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem]"
        >
          Our Core Values
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:mt-12 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-zinc-200">
          {coreValues.map((value, index) => (
            <li
              key={value}
              className="text-center lg:px-5 xl:px-7 first:lg:pl-0 last:lg:pr-0"
            >
              <span className="block text-sm font-semibold tracking-[0.2em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2.5 text-xl font-black tracking-tight text-zinc-900 sm:text-2xl">
                {value}
              </p>
              <span
                className="mx-auto mt-3 block h-0.5 w-8 bg-primary"
                aria-hidden
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
