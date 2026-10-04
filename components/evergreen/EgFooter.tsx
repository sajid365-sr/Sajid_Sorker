const footerLinks = {
  Services: [
    "AC Repair",
    "AC Installation",
    "Heating Repair",
    "Heating Installation",
    "HVAC Maintenance",
    "Indoor Air Quality",
  ],
  Company: ["About Us", "Service Areas", "Contact", "Privacy Policy"],
};

export default function EgFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">EG</span>
              </div>
              <span className="text-white font-bold text-base">
                Evergreen Heating &amp; Air
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Licensed and insured HVAC services for homeowners in [City] and
              surrounding areas. Honest work. Fair pricing. Guaranteed comfort.
            </p>
            <div className="mt-6 space-y-1">
              <p className="text-sm">
                <span className="text-gray-500">Phone: </span>
                <a href="tel:+15550001234" className="text-white hover:underline">
                  (555) 000-1234
                </a>
              </p>
              <p className="text-sm">
                <span className="text-gray-500">Email: </span>
                <a
                  href="mailto:info@evergreenair.com"
                  className="text-white hover:underline"
                >
                  info@evergreenair.com
                </a>
              </p>
              <p className="text-sm">
                <span className="text-gray-500">Address: </span>
                <span className="text-white">123 Main St, [City], [State]</span>
              </p>
              <p className="text-sm">
                <span className="text-gray-500">Hours: </span>
                <span className="text-white">Mon–Fri 8am–6pm · Emergency 24/7</span>
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>
            &copy; {year} Evergreen Heating &amp; Air. All rights reserved.
          </p>
          <p>Licensed HVAC Contractor · [License # Placeholder]</p>
        </div>
      </div>
    </footer>
  );
}
