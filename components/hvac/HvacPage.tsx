import Link from "next/link";
import "./hvac.css";
import HvacAuditForm from "./HvacAuditForm";
import HvacCtas from "./HvacCtas";
import {
  faqs,
  features,
  problems,
  steps,
  valueItems,
  visitorNeeds,
} from "./hvacContent";
import HvacProblemIcon from "./HvacIcons";
import HvacMockup from "./HvacMockup";
import HvacNav from "./HvacNav";

const demoLinkClass =
  "hvac-cta-primary inline-flex min-h-[52px] w-full items-center justify-center rounded-[4px] bg-[#c45c26] px-6 text-[15px] font-semibold tracking-wide text-white transition-[background-color,transform] duration-200 hover:bg-[#a84b1c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sajid Sorker HVAC Website Design",
  url: "https://www.sajidsorker.com/hvac-websites",
  description:
    "Modern, fast, mobile-first websites for HVAC contractors designed to generate more calls, quote requests, and service inquiries.",
  provider: {
    "@type": "Person",
    name: "Sajid Sorker",
    url: "https://www.sajidsorker.com",
  },
};

const HvacPage = () => {
  return (
    <div className="hvac-page min-h-screen bg-[#f3eee6] font-sans text-[#142433]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[4px] focus:bg-white focus:px-3 focus:py-2 focus:text-[#142433] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45c26]"
      >
        Skip to content
      </a>
      <HvacNav />

      <main id="main" className="pb-24 sm:pb-0">
        <section className="overflow-x-hidden" aria-labelledby="hvac-hero-heading">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-20 lg:px-8 lg:py-[5.5rem]">
            <div>
              <p className="hvac-eyebrow">Websites for HVAC contractors</p>
              <h1
                id="hvac-hero-heading"
                className="mt-5 font-primary text-[2.15rem] font-semibold leading-[1.08] text-[#142433] sm:text-[2.85rem] lg:text-[3.35rem]"
              >
                More Calls. More Quote Requests. A Better HVAC Website.
              </h1>
              <p className="hvac-lede mt-6">
                Modern, fast, mobile-first websites built specifically for HVAC
                contractors — designed to turn local visitors into calls,
                inquiries, and quote requests.
              </p>
              <div className="mt-9">
                <HvacCtas />
              </div>
              <p className="mt-6 max-w-md text-[13px] leading-relaxed text-[#6d665d] sm:text-sm">
                Built for AC repair, heating, installation, maintenance, and
                emergency service companies.
              </p>
            </div>
            <figure className="min-w-0 lg:pl-2">
              <div aria-hidden="true">
                <HvacMockup variant="hero" />
              </div>
              <figcaption className="mt-4 text-center text-[11px] tracking-wide text-[#6d665d]">
                Demonstration layout — not a live client site
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          aria-label="What these websites are built for"
          className="border-y border-[#ddd4c8] bg-[#ebe4d8]"
        >
          <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-y-2 px-5 py-5 sm:px-6 lg:px-8">
            {valueItems.map((item, index) => (
              <li
                key={item}
                className="flex items-center text-[12px] font-semibold tracking-[0.04em] text-[#142433] sm:text-[13px]"
              >
                {index > 0 && (
                  <span className="mx-3 text-[#c45c26] sm:mx-4" aria-hidden>
                    ·
                  </span>
                )}
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="problems" className="scroll-mt-28">
          <div className="hvac-section mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <h2 className="hvac-heading max-w-[18ch]">
              Your Website Should Help You Get Customers.
            </h2>
            <p className="hvac-lede mt-5">
              Plenty of HVAC sites look “fine” until a homeowner tries to use
              them. People leave when they cannot find the phone number, cannot
              request a quote, cannot use the page on a phone, cannot tell what
              you offer, or cannot tell if the company is legitimate.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-5 xl:gap-6">
              {problems.map((item) => (
                <article
                  key={item.title}
                  className="border-t border-[#ddd4c8] pt-6"
                >
                  <div className="flex h-9 w-9 items-center justify-center text-[#c45c26]">
                    <HvacProblemIcon name={item.icon} />
                  </div>
                  <h3 className="mt-4 font-primary text-[1.05rem] font-semibold leading-snug text-[#142433]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.65] text-[#4f4a44]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#142433] text-[#f3eee6]">
          <div className="hvac-section mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <h2 className="hvac-heading max-w-[18ch] text-[#f3eee6]">
              From Outdated Website to Lead-Focused Website
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-[#cfc6ba]">
              Same kind of contractor. Different structure. The goal is not a
              prettier brochure — it is a page people can actually use.
            </p>
            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e0a07a]">
                  Typical HVAC Website
                </p>
                <div aria-hidden="true">
                  <HvacMockup variant="before" />
                </div>
              </div>
              <div>
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e0a07a]">
                  Conversion-Focused Redesign
                </p>
                <div aria-hidden="true">
                  <HvacMockup variant="after" />
                </div>
              </div>
            </div>
            <div className="mt-12">
              <Link
                href="/hvac-demo"
                className={`${demoLinkClass} focus-visible:outline-white`}
              >
                See the Live Demo
              </Link>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-28">
          <div className="hvac-section mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <h2 className="hvac-heading max-w-[16ch]">
              Everything Your HVAC Website Needs
            </h2>
            <div className="mt-12 grid gap-x-12 sm:grid-cols-2">
              {features.map((item, index) => (
                <article
                  key={item.title}
                  className="flex gap-5 border-t border-[#ddd4c8] py-7"
                >
                  <span className="mt-0.5 w-8 shrink-0 font-primary text-[13px] font-semibold tracking-wide text-[#c45c26]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-primary text-[1.125rem] font-semibold text-[#142433]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.65] text-[#4f4a44]">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#ddd4c8] bg-[#faf7f2]">
          <div className="hvac-section mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20 lg:px-8">
            <div>
              <h2 className="hvac-heading max-w-[14ch]">
                Why HVAC Businesses Need a Better Website
              </h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-[#4f4a44] sm:text-[17px]">
                People often visit HVAC websites from phones. They decide in
                seconds whether to call you or keep looking.
              </p>
            </div>
            <div className="space-y-6 text-[16px] leading-[1.7] text-[#4f4a44]">
              <p>
                When the AC fails or the heat goes out, nobody wants a tour of
                your company history. They need a sales page they can use.
              </p>
              <ul className="space-y-3.5 border-l border-[#c45c26]/40 pl-5">
                {visitorNeeds.map((need) => (
                  <li
                    key={need}
                    className="text-[15px] leading-snug text-[#142433] sm:text-base"
                  >
                    {need}
                  </li>
                ))}
              </ul>
              <p>
                If those answers are obvious, more visitors turn into calls and
                quote requests. If they are not, the next contractor in the
                search results gets the job.
              </p>
            </div>
          </div>
        </section>

        <section id="process" className="scroll-mt-28">
          <div className="hvac-section mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <h2 className="hvac-heading">Simple 4-Step Process</h2>
            <ol className="mt-12 grid gap-10 overflow-hidden md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {steps.map((step, index) => (
                <li
                  key={step.n}
                  className="relative border-t border-[#ddd4c8] pt-6 lg:border-t-0 lg:pt-0"
                >
                  {index < steps.length - 1 && (
                    <span
                      className="pointer-events-none absolute left-[3.25rem] right-0 top-4 hidden h-px bg-[#ddd4c8] lg:block"
                      aria-hidden
                    />
                  )}
                  <p className="relative font-primary text-[2rem] font-semibold leading-none text-[#c45c26]/80">
                    {step.n}
                  </p>
                  <h3 className="mt-5 font-primary text-[1.125rem] font-semibold text-[#142433]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.65] text-[#4f4a44]">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="demo" className="scroll-mt-28 bg-[#ebe4d8]">
          <div className="hvac-section mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <h2 className="hvac-heading max-w-[16ch]">
              See What Your New Website Could Look Like
            </h2>
            <p className="hvac-lede mt-5">
              Evergreen Heating & Air is a demonstration concept. It is not a
              real client. It shows the structure, messaging, and lead path a
              local HVAC company can use.
            </p>
            <div className="mt-10 min-w-0 overflow-hidden rounded-[6px] border border-[#ddd4c8] bg-[#f3eee6] p-3 sm:p-5">
              <div aria-hidden="true">
                <HvacMockup variant="demo" />
              </div>
            </div>
            <div className="mt-10">
              <Link
                href="/hvac-demo"
                className={`${demoLinkClass} focus-visible:outline-[#142433]`}
              >
                View Live Demo
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6 border-t border-[#ddd4c8] pt-10 sm:flex-row sm:items-end sm:justify-between sm:gap-16">
            <div>
              <p className="hvac-eyebrow">The person behind the work</p>
              <h2 className="hvac-heading mt-4 text-[1.85rem] sm:text-[2.35rem]">
                Sajid Sorker
              </h2>
              <p className="mt-1 text-sm font-medium tracking-wide text-[#6d665d]">
                Full-Stack Web Developer
              </p>
              <p className="mt-5 max-w-2xl text-[15px] leading-[1.7] text-[#4f4a44]">
                I build modern websites for businesses, with a focus on
                performance, clear user experience, and practical outcomes —
                calls and quote requests, not just a new look.
              </p>
            </div>
            <a
              href="https://www.sajidsorker.com"
              className="inline-flex min-h-11 shrink-0 items-center pb-1 text-sm font-semibold text-[#c45c26] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#142433]"
            >
              sajidsorker.com
            </a>
          </div>
        </section>

        <section id="faq" className="scroll-mt-28">
          <div className="mx-auto max-w-[42rem] px-5 pb-16 sm:px-6 lg:px-8 lg:pb-24">
            <h2 className="hvac-heading">FAQ</h2>
            <div className="mt-10 border-y border-[#ddd4c8]">
              {faqs.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="min-h-11 cursor-pointer list-none font-primary text-[1.05rem] font-semibold leading-snug text-[#142433] marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45c26] sm:text-lg">
                    <span className="flex items-start justify-between gap-6">
                      {item.q}
                      <span
                        className="mt-0.5 shrink-0 text-[1.25rem] font-normal leading-none text-[#c45c26] group-open:hidden"
                        aria-hidden
                      >
                        +
                      </span>
                      <span
                        className="mt-0.5 hidden shrink-0 text-[1.25rem] font-normal leading-none text-[#c45c26] group-open:inline"
                        aria-hidden
                      >
                        −
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3.5 max-w-xl pr-10 text-[15px] leading-[1.7] text-[#4f4a44]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="audit"
          className="scroll-mt-28 bg-[#142433] text-[#f3eee6]"
        >
          <div className="hvac-section mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-16 lg:px-8">
            <div className="lg:pt-4">
              <h2 className="hvac-heading max-w-[12ch] text-[#f3eee6] sm:text-[2.45rem]">
                Your Next Customer Is Already Searching.
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-[1.7] text-[#cfc6ba]">
                Let&apos;s make sure your website gives them a clear reason to
                call.
              </p>
              <div className="mt-9">
                <HvacCtas
                  onDark
                  primaryHref="#audit-form"
                  secondaryLabel="See the Demo"
                />
              </div>
            </div>
            <div id="audit-form" className="scroll-mt-28">
              <HvacAuditForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ddd4c8] bg-[#f3eee6] pb-28 sm:pb-0">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-12 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="font-primary text-base font-semibold text-[#142433]">
              Sajid Sorker
            </p>
            <p className="mt-1 text-sm text-[#6d665d]">Web Developer</p>
          </div>
          <div className="space-y-1.5 text-sm">
            <a
              href="mailto:sajid@sajidsorker.com"
              className="inline-flex min-h-11 items-center text-[#142433] hover:text-[#c45c26] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45c26]"
            >
              sajid@sajidsorker.com
            </a>
            <a
              href="https://www.sajidsorker.com"
              className="inline-flex min-h-11 items-center text-[#142433] hover:text-[#c45c26] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45c26]"
            >
              sajidsorker.com
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#ddd4c8] bg-[#f3eee6]/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
        <a
          href="#audit"
          className="flex min-h-[52px] items-center justify-center rounded-[4px] bg-[#c45c26] px-5 text-[15px] font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142433]"
        >
          Get a Free Website Audit
        </a>
      </div>
    </div>
  );
};

export default HvacPage;
