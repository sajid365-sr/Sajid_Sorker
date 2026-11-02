const steps = [
  {
    step: "01",
    title: "Request Service",
    description:
      "Tell us about your HVAC issue using the estimate form or give us a call.",
  },
  {
    step: "02",
    title: "Discuss Your Needs",
    description:
      "Share the problem and the type of heating or cooling service you need.",
  },
  {
    step: "03",
    title: "Review Your Options",
    description:
      "Understand the recommended service and next steps before anything begins.",
  },
  {
    step: "04",
    title: "Schedule Your Service",
    description:
      "Choose a suitable time to arrange the service for your home.",
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
            stress-free. Here&rsquo;s what to expect.
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
            Request Service
          </a>
        </div>
      </div>
    </section>
  );
}
