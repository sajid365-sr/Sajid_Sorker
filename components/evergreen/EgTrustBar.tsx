const trustItems = [
  {
    icon: "📍",
    label: "Dallas–Fort Worth Area",
    sub: "Serving DFW homeowners",
  },
  {
    icon: "📞",
    label: "Request a Free Estimate",
    sub: "No obligation to proceed",
  },
  {
    icon: "💬",
    label: "Pricing Discussion",
    sub: "Talk costs before work begins",
  },
  {
    icon: "🔧",
    label: "Common System Types",
    sub: "Residential heating and cooling",
  },
  {
    icon: "📋",
    label: "Clear Service Process",
    sub: "Request → Visit → Review → Complete",
  },
];

export default function EgTrustBar() {
  return (
    <section className="bg-blue-600 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center text-white py-2"
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span className="text-sm font-semibold">{item.label}</span>
              <span className="text-xs text-blue-200 mt-0.5">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
