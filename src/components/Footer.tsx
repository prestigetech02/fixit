import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const companyLinks = [
  { href: "/company/who-we-are", label: "Who We Are" },
  { href: "/company/our-management", label: "Our Management" },
  { href: "/company/our-achievements", label: "Our Achievements" },
] as const;

const serviceLinks = [
  { href: "/what-we-do/facility-management", label: "Facility Management" },
  {
    href: "/what-we-do/environmental-janitorial",
    label: "Environmental & Janitorial",
  },
  {
    href: "/what-we-do/waste-environmental",
    label: "Waste & Environmental",
  },
  {
    href: "/what-we-do/engineering-technical",
    label: "Engineering Support",
  },
  { href: "/what-we-do", label: "See all services" },
] as const;

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/our-projects", label: "Our Projects" },
  { href: "/contact", label: "Contact Us" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-100">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,0.8fr)] lg:gap-10">
          <div>
            <Link href="/" className="relative inline-block h-12 w-[10.5rem]">
              <Image
                src="/brand/logo.png"
                alt="FixIt Facility Management"
                fill
                sizes="168px"
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-500">
              Nigeria&apos;s first-choice facility managers, committed to
              excellence and efficiency across the spaces that keep the country
              moving.
            </p>
            <Button href="/request-a-quote" className="mt-6 px-5 py-2.5">
              Request a Quote
            </Button>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-zinc-900 uppercase">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 underline-offset-4 transition-colors hover:text-zinc-800 hover:underline hover:decoration-primary hover:decoration-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-zinc-900 uppercase">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 underline-offset-4 transition-colors hover:text-zinc-800 hover:underline hover:decoration-primary hover:decoration-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-zinc-900 uppercase">
              Services
            </p>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 underline-offset-4 transition-colors hover:text-zinc-800 hover:underline hover:decoration-primary hover:decoration-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500">
            © {year} FixIt Facility Management. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="text-sm text-zinc-500 underline-offset-4 transition-colors hover:text-zinc-800 hover:underline hover:decoration-primary hover:decoration-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies-policy"
              className="text-sm text-zinc-500 underline-offset-4 transition-colors hover:text-zinc-800 hover:underline hover:decoration-primary hover:decoration-2"
            >
              Cookies Policy
            </Link>
            <p className="text-sm text-zinc-500">
              Developed by{" "}
              <a
                href="http://techyx360.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-4 transition-colors hover:underline hover:decoration-primary hover:decoration-2"
              >
                Techyx360
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
