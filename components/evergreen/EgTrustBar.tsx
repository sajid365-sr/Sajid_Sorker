const trustItems = [
  {
    icon: "🛡️",
    label: "Licensed & Insured",
    sub: "Fully certified technicians",
  },
  {
    icon: "📞",
    label: "24/7 Emergency Service",
    sub: "We answer when you call",
  },
  {
    icon: "💰",
    label: "Upfront Pricing",
    sub: "No hidden fees, ever",
  },
  {
    icon: "⚡",
    label: "Same-Day Available",
    sub: "Fast response times",
  },
  {
    icon: "🔧",
    label: "All Brands Serviced",
    sub: "We work on any system",
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
