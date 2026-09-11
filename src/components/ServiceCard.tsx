"use client";

import Image from "next/image";
import { useCallback, type MouseEvent } from "react";
import Button from "@/components/Button";

type ServiceCardProps = {
  title: string;
  href: string;
  image: string;
};

export default function ServiceCard({ title, href, image }: ServiceCardProps) {
  const onMouseMove = useCallback((event: MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <article
      onMouseMove={onMouseMove}
      className="group/card card-mouse-border relative flex h-full flex-col rounded-2xl bg-zinc-100 p-4 transition-transform duration-300 ease-out hover:-translate-y-2 sm:p-5"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center"
        />
        <span className="img-flash" aria-hidden />
      </div>

      <h3 className="mt-5 text-lg font-bold tracking-tight text-zinc-900">
        {title}
      </h3>

      <Button href={href} className="mt-5 w-fit px-5 py-2.5">
        Read more
      </Button>
    </article>
  );
}
