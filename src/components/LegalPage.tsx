import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="border-b border-zinc-200 bg-zinc-100 px-5 pb-12 pt-28 sm:px-8 sm:pb-14 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <Reveal variant="up">
            <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-500">
              {intro}
            </p>
            <p className="mt-3 text-sm text-zinc-400">Last updated: {updated}</p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((section, index) => (
            <Reveal key={section.title} variant="up" delay={index * 40}>
              <h2 className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-zinc-600">
                {section.content}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
