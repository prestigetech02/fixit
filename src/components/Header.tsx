"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import Button from "@/components/Button";

const companyLinks = [
  { href: "/company/who-we-are", label: "Who We Are" },
  { href: "/company/our-management", label: "Meet the Team" },
  { href: "/company/our-gallery", label: "Our Gallery" },
  { href: "/company/our-csr", label: "Our CSR" },
] as const;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/our-projects", label: "Our Projects" },
  { href: "/contact", label: "Contact Us" },
] as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2.5 4.5L6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const companyRef = useRef<HTMLDivElement>(null);
  const companyMenuId = useId();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openCompany = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setCompanyOpen(true);
  };

  const scheduleCloseCompany = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setCompanyOpen(false), 120);
  };

  // Always use the solid scrolled header style, including homepage top-of-page.
  const solid = true;
  const companyActive = pathname.startsWith("/company");

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setCompanyOpen(false);
        setMobileCompanyOpen(false);
      }
    }

    function onPointerDown(event: MouseEvent) {
      if (
        companyRef.current &&
        !companyRef.current.contains(event.target as Node)
      ) {
        setCompanyOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const navIdle = solid
    ? "text-zinc-600 hover:text-primary"
    : "text-white/85 hover:text-white";
  const navActive =
    "text-primary underline decoration-primary decoration-2 underline-offset-[10px]";
  const menuIconClass = solid ? "text-zinc-700" : "text-white";

  const desktopLinkClass = (active: boolean) =>
    `text-[0.8125rem] font-semibold tracking-[0.08em] uppercase transition-colors ${
      active ? navActive : navIdle
    }`;

  const mobileLinkClass = (active: boolean) =>
    `rounded-md px-3 py-2.5 text-sm font-semibold tracking-[0.08em] uppercase transition-colors ${
      active
        ? "bg-primary/5 text-primary underline decoration-primary decoration-2 underline-offset-4"
        : solid
          ? "text-zinc-700 hover:bg-zinc-50 hover:text-primary"
          : "text-white/90 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`w-full transition-all duration-300 ${
          solid
            ? "border-b border-zinc-200/80 bg-white shadow-[0_12px_40px_-16px_rgba(15,23,42,0.28)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-6 px-5 sm:h-[4.5rem] sm:px-8 lg:px-12">
          <Link href="/" className="relative flex h-9 w-[7.5rem] shrink-0 sm:h-11 sm:w-[9.5rem]">
            <Image
              src="/brand/logo-white.png"
              alt="FixIt Facility Management"
              fill
              priority
              sizes="152px"
              className={`object-contain object-left transition-opacity duration-300 ${
                solid ? "opacity-0" : "opacity-100"
              }`}
            />
            <Image
              src="/brand/logo.png"
              alt=""
              fill
              priority
              sizes="152px"
              aria-hidden
              className={`object-contain object-left transition-opacity duration-300 ${
                solid ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            <Link
              href="/"
              className={desktopLinkClass(isActive("/"))}
              aria-current={isActive("/") ? "page" : undefined}
            >
              Home
            </Link>

            <div
              ref={companyRef}
              className="relative"
              onMouseEnter={openCompany}
              onMouseLeave={scheduleCloseCompany}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1.5 ${desktopLinkClass(
                  companyActive || companyOpen,
                )}`}
                aria-expanded={companyOpen}
                aria-haspopup="menu"
                aria-controls={companyMenuId}
                onClick={() => setCompanyOpen((prev) => !prev)}
              >
                Company
                <Chevron open={companyOpen} />
              </button>

              <div
                id={companyMenuId}
                role="menu"
                aria-label="Company"
                className={`absolute left-1/2 top-full z-[60] w-60 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  companyOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0"
                }`}
              >
                <div className="rounded-xl border border-zinc-200/80 bg-white p-1.5 shadow-[0_16px_48px_-16px_rgba(15,23,42,0.28)]">
                  <ul className="flex flex-col gap-0.5">
                    {companyLinks.map((link) => {
                      const active = isActive(link.href);
                      return (
                        <li key={link.href} role="none">
                          <Link
                            role="menuitem"
                            href={link.href}
                            aria-current={active ? "page" : undefined}
                            className={`group/item flex items-center gap-3 rounded-lg px-3 py-2.5 text-[0.8125rem] font-semibold tracking-[0.08em] uppercase transition-colors ${
                              active
                                ? "bg-primary/5 text-primary"
                                : "text-zinc-700 hover:bg-primary/5 hover:text-primary"
                            }`}
                            onClick={() => setCompanyOpen(false)}
                          >
                            <span
                              className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                                active
                                  ? "bg-primary"
                                  : "bg-zinc-300 group-hover/item:bg-primary"
                              }`}
                              aria-hidden
                            />
                            <span className="flex-1">{link.label}</span>
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              aria-hidden
                              className={`transition-all ${
                                active
                                  ? "translate-x-0.5 text-primary opacity-100"
                                  : "text-zinc-300 opacity-0 group-hover/item:translate-x-0.5 group-hover/item:text-primary group-hover/item:opacity-100"
                              }`}
                            >
                              <path
                                d="M5 3.5L8.5 7 5 10.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {navLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={desktopLinkClass(isActive(link.href))}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/request-a-quote" className="hidden sm:inline-flex">
              Request a Quote
            </Button>

            <button
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors lg:hidden ${menuIconClass}`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((prev) => !prev)}
            >
              <span className="sr-only">Menu</span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                {open ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div
            id="mobile-nav"
            className={`border-t px-5 py-4 sm:px-8 lg:hidden ${
              solid
                ? "border-zinc-200 bg-white"
                : "border-white/10 bg-deep-blue-black/95 backdrop-blur-md"
            }`}
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              <Link
                href="/"
                className={mobileLinkClass(isActive("/"))}
                aria-current={isActive("/") ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>

              <div>
                <button
                  type="button"
                  className={`flex w-full items-center justify-between ${mobileLinkClass(
                    companyActive,
                  )}`}
                  aria-expanded={mobileCompanyOpen}
                  onClick={() => setMobileCompanyOpen((prev) => !prev)}
                >
                  Company
                  <Chevron open={mobileCompanyOpen} />
                </button>

                {mobileCompanyOpen && (
                  <div
                    className={`ml-3 mt-1 space-y-1 border-l-2 pl-3 ${
                      solid ? "border-primary/30" : "border-primary/50"
                    }`}
                  >
                    {companyLinks.map((link) => {
                      const active = isActive(link.href);
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          aria-current={active ? "page" : undefined}
                          className={`block rounded-md px-3 py-2 text-[0.8125rem] font-semibold tracking-[0.08em] uppercase transition-colors ${
                            active
                              ? "bg-primary/5 text-primary"
                              : solid
                                ? "text-zinc-600 hover:bg-zinc-50 hover:text-primary"
                                : "text-white/70 hover:bg-white/5 hover:text-white"
                          }`}
                          onClick={() => {
                            setOpen(false);
                            setMobileCompanyOpen(false);
                          }}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {navLinks
                .filter((link) => link.href !== "/")
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={mobileLinkClass(isActive(link.href))}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

              <Button
                href="/request-a-quote"
                className="mt-2 w-full py-3"
                onClick={() => setOpen(false)}
              >
                Request a Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
