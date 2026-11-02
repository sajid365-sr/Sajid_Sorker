const steps = [
  {
    step: "01",
    title: "Request an Estimate",
    description:
      "Fill out our quick online form or call us directly. Tell us what's going on with your system and we'll schedule a visit.",
  },
  {
    step: "02",
    title: "We Diagnose the Problem",
    description:
      "A licensed technician arrives at your home, inspects your system, and gives you a clear, written diagnosis with upfront pricing.",
  },
  {
    step: "03",
    title: "We Get to Work",
    description:
      "Once you approve the quote, we perform the repair or installation using quality parts and proven techniques.",
  },
  {
    step: "04",
    title: "You Enjoy Comfort",
    description:
      "We clean up after ourselves, walk you through what was done, and make sure your system is running perfectly before we leave.",
  },
];

export default function EgHowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 text-xs font-semibold text-blue-600 uppercase tracking-widest">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Getting your HVAC system serviced by Evergreen is simple and
            stress-free. Here's what to expect.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <div key={step.step} className="relative flex flex-col items-start">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-1/2 w-full h-px bg-blue-200 z-0" />
              )}
              {/* Step number */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-4 flex-shrink-0">
                {step.step}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#estimate"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-md"
          >
            Start Step 1 — Get a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
