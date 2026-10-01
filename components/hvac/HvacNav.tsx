"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#problems", label: "Problems" },
  { href: "#services", label: "What I build" },
  { href: "#process", label: "Process" },
  { href: "#demo", label: "Demo" },
  { href: "#faq", label: "FAQ" },
];

const HvacNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ddd4c8] bg-[#f3eee6]/92 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link
          href="/hvac-websites"
          className="shrink-0 rounded-[4px] font-primary text-[15px] font-semibold leading-tight tracking-tight text-[#142433] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c45c26]"
        >
          Sajid Sorker
          <span className="mt-0.5 block text-[11px] font-medium tracking-[0.08em] text-[#6d665d]">
            HVAC websites
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex xl:gap-9"
          aria-label="Page sections"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center text-[13px] font-medium tracking-wide text-[#4f4a44] transition-colors hover:text-[#142433] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c45c26]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#audit"
            className="hvac-cta-primary hidden min-h-11 items-center rounded-[4px] bg-[#c45c26] px-4 py-2.5 text-[13px] font-semibold tracking-wide text-white transition-colors hover:bg-[#a84b1c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142433] sm:inline-flex"
          >
            Get a Free Website Audit
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-[#ddd4c8] text-[#142433] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45c26] lg:hidden"
            aria-expanded={open}
            aria-controls="hvac-mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="hvac-mobile-nav"
          className="border-t border-[#ddd4c8] bg-[#f3eee6] px-5 py-5 lg:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center border-b border-[#eee7dc] px-1 text-base font-medium text-[#142433] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45c26]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#audit"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex min-h-[52px] items-center justify-center rounded-[4px] bg-[#c45c26] px-3 text-center text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142433]"
            >
              Get a Free Website Audit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HvacNav;
