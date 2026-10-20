import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  titleId: string;
  description?: string;
  action?: ReactNode;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
  action,
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={
        className ??
        "mx-auto flex max-w-2xl flex-col items-center text-center"
      }
    >
      <Reveal variant="up" className="w-full">
        <p
          className={
            eyebrowClassName ??
            "text-sm font-medium tracking-[0.16em] text-primary uppercase"
          }
        >
          {eyebrow}
        </p>
        <h2
          id={titleId}
          className={
            titleClassName ??
            "mt-3 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl"
          }
        >
          {title}
        </h2>
        {description ? (
          <p
            className={
              descriptionClassName ??
              "mt-4 text-lg leading-relaxed text-zinc-500"
            }
          >
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
