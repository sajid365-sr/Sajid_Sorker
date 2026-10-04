// Placeholder service area data — replace with actual cities when known
const areas = [
  "Springfield",
  "Riverside",
  "Maplewood",
  "Cedar Falls",
  "Lakewood",
  "Brookfield",
  "Hillcrest",
  "Greenview",
  "Oak Park",
  "Fairview",
  "Westside",
  "Northgate",
];

export default function EgServiceAreas() {
  return (
    <section id="service-areas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <div>
            <span className="inline-block mb-3 text-xs font-semibold text-blue-600 uppercase tracking-widest">
              Where We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Service Areas
            </h2>
            <p className="text-gray-500 mb-8 text-base">
              We proudly serve homeowners in [City] and the surrounding communities.
              Not sure if we cover your area? Give us a call — we're happy to let
              you know.
            </p>

            {/* City grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 bg-gray-50"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-400 italic">
              * Area names are placeholders — update with actual service cities.
            </p>
          </div>

          {/* Right: Map placeholder */}
          <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] flex items-center justify-center border border-gray-200">
            <div className="text-center text-gray-400 px-6">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-200 flex items-center justify-center">
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
                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium">Map Placeholder</p>
              <p className="text-xs text-gray-400 mt-1">
                Embed Google Maps with service area pins here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
