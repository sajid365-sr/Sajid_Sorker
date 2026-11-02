import Image from "next/image";

const problems = [
  {
    problem: "AC blowing warm air",
    solution:
      "Your cooling system isn't keeping up — request service to have it inspected.",
  },
  {
    problem: "Heating not turning on",
    solution:
      "Your furnace or heat pump won't start — we can diagnose and help resolve it.",
  },
  {
    problem: "Weak or uneven airflow",
    solution:
      "Some rooms feel warmer or cooler than others — we'll check your system and ducts.",
  },
  {
    problem: "Strange HVAC noises",
    solution:
      "Banging, rattling, or squealing sounds can indicate a system issue worth checking.",
  },
  {
    problem: "Seasonal maintenance needs",
    solution:
      "Regular tune-ups help your heating and cooling equipment run efficiently year-round.",
  },
];

export default function EgProblemSolution() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm order-2 lg:order-1">
            <Image
              src="/images/hvac/problem-hvac-technician.jpg"
              alt="HVAC technician servicing a residential heating and cooling unit"
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block mb-3 text-xs font-semibold text-blue-600 uppercase tracking-widest">
              Common HVAC Issues
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Is Your HVAC System Acting Up?
            </h2>
            <p className="text-gray-500 mb-8 text-base">
              Review the common issues below and request service for the one
              that matches your situation.
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
