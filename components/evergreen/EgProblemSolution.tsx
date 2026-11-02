const problems = [
  {
    problem: "Your AC breaks down on the hottest day of the year",
    solution: "We offer same-day emergency service — call us and we'll be there.",
  },
  {
    problem: "You get surprise bills from hidden repair costs",
    solution: "We provide upfront, itemized pricing before any work begins.",
  },
  {
    problem: "Technicians who don't show up or cancel last minute",
    solution: "We respect your time with confirmed arrival windows and follow-through.",
  },
  {
    problem: "Pushy upsells and unnecessary replacements",
    solution: "We give honest recommendations — repair when possible, replace when needed.",
  },
];

export default function EgProblemSolution() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image placeholder */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-200 aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
            <div className="text-center text-gray-400">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium">Problem / Solution Image</p>
              <p className="text-xs">Technician working on unit</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block mb-3 text-xs font-semibold text-blue-600 uppercase tracking-widest">
              Sound Familiar?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tired of Unreliable HVAC Companies?
            </h2>
            <p className="text-gray-500 mb-8 text-base">
              We hear it every day. Evergreen was built to solve the common
              frustrations homeowners face with HVAC service.
            </p>

            <div className="space-y-5">
              {problems.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-gray-200 bg-white"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">
                      ✗
                    </span>
                    <p className="text-sm text-gray-700 font-medium">
                      {item.problem}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 pl-8">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 flex items-center justify-center text-xs font-bold -ml-8 mt-0.5">
                      ✓
                    </span>
                    <p className="text-sm text-gray-500">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
