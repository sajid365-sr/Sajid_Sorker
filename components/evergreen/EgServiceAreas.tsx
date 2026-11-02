const areas = [
  "Dallas",
  "Plano",
  "Frisco",
  "Irving",
  "Arlington",
  "Richardson",
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
              Serving Homes Across Dallas–Fort Worth
            </h2>
            <p className="text-gray-500 mb-8 text-base">
              We proudly serve homeowners in Dallas–Fort Worth, Texas and the
              surrounding communities. Not sure if we cover your area? Give us a
              call — we&rsquo;re happy to let you know.
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

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#estimate"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-600 hover:text-white transition-colors"
              >
                Request Service
              </a>
            </div> 
          </div>

          {/* Right: OpenStreetMap embed */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-gray-200 shadow-sm">
            <iframe
              title="OpenStreetMap showing Dallas–Fort Worth metro area"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-97.1%2C32.6%2C-96.5%2C33.1&amp;layer=mapnik"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
