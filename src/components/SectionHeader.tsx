import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  titleId: string;
  description?: string;
  action?: ReactNode;
};

export default function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
      <Reveal variant="up" className="w-full">
        <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
          {eyebrow}
        </p>
        <h2
          id={titleId}
          className="mt-3 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-lg leading-relaxed text-zinc-500">
            {description}
          </p>
        ) : null}
      </Reveal>
      {action ? (
        <Reveal variant="fade" delay={120} className="mt-7">
          {action}
        </Reveal>
      ) : null}
    </div>
  );
}
