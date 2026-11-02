import Image from "next/image";

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-blue-600 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-5 h-5 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);

const trustPillars = [
  "Professional HVAC Service",
  "DFW Homeowners Served",
  "Clear Pricing Conversation",
  "Common System Types",
];

export default function EgHero() {
  return (
    <section
      className="relative bg-white overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle background accent — stays light, never dark */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-blue-50 rounded-full opacity-70" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-sky-50 rounded-full opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── Left: Text content ── */}
          <div className="max-w-xl">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <svg
                className="w-3.5 h-3.5 text-blue-600 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.619 3.5-7.327A8.25 8.25 0 002.25 12c0 2.708 1.556 5.314 3.5 7.327a19.58 19.58 0 002.683 2.282 16.974 16.974 0 001.107.742zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                Serving Dallas–Fort Worth, TX &amp; Surrounding Areas
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
              Heating &amp; Cooling{" "}
              <br className="hidden sm:block" />
              <span className="text-blue-600">You Can Count On.</span>
            </h1>

            {/* Sub-copy */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Evergreen Heating &amp; Air serves DFW homeowners with honest,
              professional HVAC service — dependable communication,
              transparent pricing, and work done right the first time.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#estimate"
                className="inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md shadow-blue-100"
              >
                Get a Free Estimate
              </a>
              <a
                href="tel:+12145550147"
                className="inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-gray-300 text-gray-800 font-bold text-base hover:border-blue-500 hover:text-blue-700 transition-colors group"
              >
                <PhoneIcon />
                <span>(214) 555-0147</span>
              </a>
            </div>

            {/* Trust pillars */}
            <div className="pt-7 border-t border-gray-100">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {trustPillars.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: Hero photo ── */}
          <div className="w-full relative">

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-gray-200 shadow-sm bg-gray-100">
              <Image
                src="/images/hvac/pexels-jose-andres-pacheco-cortes-3641213-5463581.jpg"
                alt="Evergreen Heating & Air technician servicing an outdoor HVAC unit"
                fill
                priority
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              />

              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/90 rounded-xl px-4 py-2.5 shadow-lg border border-gray-200 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="leading-tight">
                  <p className="text-[11px] font-bold text-gray-900">Serving DFW</p>
                  <p className="text-[10px] text-gray-500">Dallas–Fort Worth Area</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
