"use client";

import Link from "next/link";
import "./hvac.css";

const tel = "tel:+15550123456";

const DemoPage = () => {
  return (
    <div className="hvac-page min-h-screen bg-[#f8f6f2] font-sans text-[#1a2a3a]">
      <a
        href="#demo-main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[4px] focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <p className="border-b border-[#d4cbbd] bg-[#1a2a3a] px-4 py-2.5 text-center text-[12px] leading-snug text-[#f7f4ef] sm:text-[13px]">
        Demonstration website — not a real HVAC company.{" "}
        <Link
          href="/hvac-websites"
          className="font-semibold text-[#e0a07a] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Back to HVAC websites
        </Link>
      </p>

      <header className="sticky top-0 z-40 border-b border-[#d4cbbd] bg-[#1a2a3a] text-white">
        <div className="mx-auto flex min-h-[3.5rem] max-w-5xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <p className="truncate text-sm font-semibold sm:text-base">
            Evergreen Heating &amp; Air
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={tel}
              className="inline-flex min-h-11 items-center rounded-[4px] bg-[#c45c26] px-3 text-[13px] font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-4"
            >
              Call now
            </a>
            <a
              href="#quote"
              className="hidden min-h-11 items-center rounded-[4px] border border-white/30 px-4 text-[13px] font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:inline-flex"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </header>

      <main id="demo-main" className="pb-24 sm:pb-0">
        <section className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c45c26]">
              Heating · Cooling · Repair
            </p>
            <h1 className="mt-3 font-primary text-[2rem] font-semibold leading-[1.1] sm:text-[2.6rem]">
              Fast service. Clear next step. Easy to call.
            </h1>
            <p className="mt-4 max-w-xl text-[16px] leading-[1.7] text-[#5c564e]">
              AC repair, furnace service, and installs for local homeowners.
              Emergency requests welcome.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="hvac-cta-primary inline-flex min-h-[52px] items-center justify-center rounded-[4px] bg-[#c45c26] px-6 text-[15px] font-semibold text-white hover:bg-[#a84b1c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a2a3a]"
              >
                Request a Quote
              </a>
              <a
                href="#services"
                className="inline-flex min-h-[52px] items-center justify-center rounded-[4px] border border-[#1a2a3a]/20 px-6 text-[15px] font-semibold text-[#1a2a3a] hover:bg-[#1a2a3a] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45c26]"
              >
                View Services
              </a>
            </div>
          </div>
          <div className="rounded-[6px] border border-[#e4ddd3] bg-white p-5 sm:p-6">
            <p className="font-primary text-base font-semibold">
              Serving nearby towns
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#5c564e]">
              License and insurance would be listed here on a live client site,
              along with real reviews and years in business.
            </p>
            <a
              href={tel}
              className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[#c45c26] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45c26]"
            >
              (555) 012-3456
            </a>
          </div>
        </section>

        <section
          id="services"
          className="scroll-mt-20 border-y border-[#ece6de] bg-white"
        >
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
            <h2 className="font-primary text-[1.85rem] font-semibold">
              Services
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {["AC Repair", "Heating", "Maintenance"].map((item) => (
                <li
                  key={item}
                  className="rounded-[6px] border border-[#ece6de] bg-[#f8f6f2] px-4 py-5 text-center font-primary text-[1.05rem] font-semibold"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="quote"
          className="scroll-mt-20 mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16"
        >
          <h2 className="font-primary text-[1.85rem] font-semibold">
            Request an estimate
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-[1.7] text-[#5c564e]">
            This form is part of the demonstration. It does not send a real
            booking.
          </p>
          <form
            className="mt-8 max-w-lg space-y-4"
            onSubmit={(event) => event.preventDefault()}
            aria-describedby="demo-form-note"
          >
            <p id="demo-form-note" className="sr-only">
              Demonstration form. Submitting does not contact a contractor.
            </p>
            <label className="block text-[13px] font-medium">
              Name
              <input
                name="name"
                className="mt-2 w-full rounded-[4px] border border-[#ddd4c8] bg-white px-3.5 py-3 text-[15px] outline-none focus:border-[#c45c26] focus:ring-2 focus:ring-[#c45c26]/15"
              />
            </label>
            <label className="block text-[13px] font-medium">
              Phone
              <input
                type="tel"
                name="phone"
                className="mt-2 w-full rounded-[4px] border border-[#ddd4c8] bg-white px-3.5 py-3 text-[15px] outline-none focus:border-[#c45c26] focus:ring-2 focus:ring-[#c45c26]/15"
              />
            </label>
            <button
              type="submit"
              className="hvac-cta-primary inline-flex min-h-[52px] w-full items-center justify-center rounded-[4px] bg-[#c45c26] px-6 text-[15px] font-semibold text-white sm:w-auto"
            >
              Request a Quote
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-[#ece6de] bg-white px-4 py-10 pb-28 text-center text-sm text-[#5c564e] sm:px-6 sm:pb-10">
        <p>Evergreen Heating &amp; Air — demonstration only</p>
        <Link
          href="/hvac-websites"
          className="mt-3 inline-flex min-h-11 items-center font-semibold text-[#c45c26] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45c26]"
        >
          Return to HVAC website offer
        </Link>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#ddd4c8] bg-[#f8f6f2]/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden">
        <a
          href={tel}
          className="flex min-h-[52px] items-center justify-center rounded-[4px] bg-[#c45c26] text-[15px] font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a2a3a]"
        >
          Call now
        </a>
      </div>
    </div>
  );
};

export default DemoPage;
