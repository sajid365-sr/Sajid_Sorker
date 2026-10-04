const reasons = [
  {
    title: "Licensed & Insured",
    description:
      "Our technicians are fully licensed by the state and carry comprehensive liability insurance on every job.",
    icon: "🛡️",
  },
  {
    title: "Transparent Pricing",
    description:
      "You receive a written quote before work starts. What we quote is what you pay — no surprise charges.",
    icon: "📋",
  },
  {
    title: "Experienced Technicians",
    description:
      "Our team has hands-on experience servicing all major HVAC brands and system types.",
    icon: "🔧",
  },
  {
    title: "Emergency Response",
    description:
      "HVAC emergencies don't follow a 9-to-5 schedule. We offer after-hours service when you need it most.",
    icon: "🚨",
  },
  {
    title: "Satisfaction Guarantee",
    description:
      "If you're not satisfied with our work, we'll make it right — that's our commitment to every customer.",
    icon: "✅",
  },
  {
    title: "Local & Family-Owned",
    description:
      "We live and work in this community. Your comfort is personal to us, not just another service ticket.",
    icon: "🏠",
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
            We've built our reputation on showing up, doing the job right, and
            being honest with every customer — every time.
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
