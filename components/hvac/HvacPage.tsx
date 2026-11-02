import "./hvac.css";
import HvacHero from "./HvacHero";
import HvacProblems from "./HvacProblems";
import HvacBeforeAfter from "./HvacBeforeAfter";
import HvacFeatures from "./HvacFeatures";
import HvacProcess from "./HvacProcess";
import HvacDemoSection from "./HvacDemoSection";
import HvacAboutFaq from "./HvacAboutFaq";
import HvacFinalCta from "./HvacFinalCta";
import { valueItems } from "./hvacContent";

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
    <div className="hvac-page min-h-screen bg-slate-950 font-sans text-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
      >
        Skip to content
      </a>

      <main id="main" className="pt-16 pb-24 sm:pb-0">
        {/* ─── PHASE 4: HERO SECTION ─── */}
        <HvacHero />

        {/* ─── VALUE STRIP ─── */}
        <section
          aria-label="What these websites are built for"
          className="border-y border-slate-800 bg-slate-900/50"
        >
          <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-y-2 px-5 py-4 sm:px-6 lg:px-8">
            {valueItems.map((item, index) => (
              <li
                key={item}
                className="flex items-center font-mono text-[12px] font-semibold tracking-[0.04em] text-slate-300 sm:text-[13px]"
              >
                {index > 0 && (
                  <span className="mx-3 text-cyan-400 sm:mx-4" aria-hidden>
                    ·
                  </span>
                )}
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ─── PHASE 5: PROBLEMS SECTION ─── */}
        <HvacProblems />

        {/* ─── PHASE 5: BEFORE / AFTER SECTION ─── */}
        <HvacBeforeAfter />

        {/* ─── PHASE 6: WHAT I BUILD + WHY IT MATTERS ─── */}
        <HvacFeatures />

        {/* ─── PHASE 7: 4-STEP PROCESS ─── */}
        <HvacProcess />

        {/* ─── PHASE 8: LIVE DEMO SHOWCASE ─── */}
        <HvacDemoSection />

        {/* ─── PHASE 9: ABOUT + FAQ ─── */}
        <HvacAboutFaq />

        {/* ─── PHASE 10: FINAL CTA + AUDIT FORM ─── */}
        <HvacFinalCta />
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-slate-800 bg-slate-950 pb-28 sm:pb-0">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-12 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="font-mono text-base font-semibold text-slate-200">
              <span className="text-cyan-400">&lt;/&gt; Sajid</span>
              <span className="mx-2 inline-block w-4 h-[1px] bg-gradient-to-r from-cyan-400 to-purple-400 align-middle" />
              <span>Sorker</span>
            </p>
            <p className="mt-1 font-mono text-sm text-slate-500">
              Full-Stack Web Developer
            </p>
          </div>
          <div className="space-y-1.5 font-mono text-sm">
            <div>
              <a
                href="mailto:sajid@sajidsorker.com"
                className="inline-flex min-h-11 items-center text-slate-400 hover:text-cyan-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                sajid@sajidsorker.com
              </a>
            </div>
            <div>
              <a
                href="https://www.sajidsorker.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-slate-400 hover:text-cyan-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                sajidsorker.com →
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── MOBILE STICKY CTA ─── */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800 bg-slate-950/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
        <a
          href="#audit"
          className="hvac-cta-primary flex min-h-[52px] items-center justify-center rounded-lg px-5 font-mono text-[15px] font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
        >
          Get a Free Website Audit
        </a>
      </div>
    </div>
  );
};

export default HvacPage;
