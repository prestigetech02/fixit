import type { ReactNode } from "react";
import { siteConfig } from "@/lib/seo";

type Platform = keyof typeof siteConfig.social;

const platforms: { key: Platform; label: string; icon: ReactNode }[] = [
  {
    key: "facebook",
    label: "Facebook",
    icon: (
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46h1.6V4.46A21 21 0 0 0 14.3 4.3c-2.3 0-3.8 1.4-3.8 3.96v2.24H8v3h2.5V21h3Z" />
    ),
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: (
      <path d="M12 3.8c2.67 0 2.99.01 4.04.06 2.71.12 3.98 1.41 4.1 4.1.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.12 2.69-1.38 3.98-4.1 4.1-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-2.72-.12-3.98-1.42-4.1-4.1C3.81 14.99 3.8 14.67 3.8 12s.01-2.99.06-4.04c.12-2.69 1.38-3.98 4.1-4.1C9.01 3.81 9.33 3.8 12 3.8ZM12 2c-2.72 0-3.06.01-4.12.06C4.24 2.23 2.23 4.24 2.06 7.88 2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.17 3.64 2.18 5.65 5.82 5.82 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c3.63-.17 5.66-2.18 5.82-5.82.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.16-3.63-2.18-5.65-5.82-5.82C15.06 2.01 14.72 2 12 2Zm0 4.86a5.14 5.14 0 1 0 0 10.28 5.14 5.14 0 0 0 0-10.28Zm0 8.47a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66Zm5.34-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: (
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    ),
  },
  {
    key: "youtube",
    label: "YouTube",
    icon: (
      <path d="M21.58 7.19a2.5 2.5 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42A2.5 2.5 0 0 0 2.42 7.2C2 8.75 2 12 2 12s0 3.25.42 4.81a2.5 2.5 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42a2.5 2.5 0 0 0 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81ZM10 15V9l5.2 3-5.2 3Z" />
    ),
  },
];

type SocialLinksProps = {
  className?: string;
};

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {platforms.map(({ key, label, icon }) => {
        const href = siteConfig.social[key];
        const svg = (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            {icon}
          </svg>
        );

        return (
          <li key={key}>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`FixIt on ${label}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                {svg}
              </a>
            ) : (
              <span
                title={`${label} coming soon`}
                aria-label={`${label} coming soon`}
                className="flex h-10 w-10 cursor-default items-center justify-center rounded-full border border-zinc-200 text-zinc-300"
              >
                {svg}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
