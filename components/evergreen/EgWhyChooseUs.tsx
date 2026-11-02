const reasons = [
  {
    title: "Clear Service Information",
    description:
      "Straightforward descriptions of each HVAC service so you know what to expect.",
    icon: "📋",
  },
  {
    title: "Straightforward Process",
    description:
      "Request an estimate, discuss the issue, review the recommendation, and schedule the service.",
    icon: "🔧",
  },
  {
    title: "Easy Estimate Requests",
    description:
      "Submit a quick form or call to request a no-obligation estimate for your home.",
    icon: "📞",
  },
  {
    title: "Residential HVAC Focus",
    description:
      "Heating and cooling services tailored to homeowners and residential properties.",
    icon: "🏠",
  },
  {
    title: "Local Service Area",
    description:
      "Serving homeowners across Dallas–Fort Worth and surrounding communities.",
    icon: "📍",
  },
  {
    title: "Simple Communication",
    description:
      "We explain recommended work and answer your questions before proceeding.",
    icon: "💬",
  },
];

export default function EgWhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 text-xs font-semibold text-blue-600 uppercase tracking-widest">
            Why Evergreen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Homeowners Choose Us
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Learn what to expect when you request HVAC service in the
            Dallas–Fort Worth area.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 p-6 rounded-xl border border-gray-100 bg-gray-50"
            >
              <div className="text-2xl flex-shrink-0">{reason.icon}</div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
