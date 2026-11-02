"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "AC Repair",
  "AC Installation",
  "Heating Repair",
  "Heating Installation",
  "Routine Maintenance",
  "Indoor Air Quality",
  "Not Sure / Other",
];

export default function EgEstimateForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to backend / email service
    setSubmitted(true);
  }

  return (
    <section id="estimate" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Copy */}
          <div className="text-white">
            <span className="inline-block mb-3 text-xs font-semibold text-blue-200 uppercase tracking-widest">
              No Obligation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get Your Free Estimate
            </h2>
            <p className="text-blue-100 text-base mb-8">
              Tell us about your HVAC needs and we'll get back to you promptly
              with an honest, no-pressure estimate. No commitment required.
            </p>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-xs">✓</span>
                Fast response — usually within a few hours
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-xs">✓</span>
                Written quote with no hidden fees
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-xs">✓</span>
                No obligation — you decide if you want to proceed
              </li>
            </ul>

            <div className="mt-10 pt-6 border-t border-blue-500">
              <p className="text-sm text-blue-200 mb-2">Prefer to call?</p>
              <a
                href="tel:+15550001234"
                className="text-2xl font-bold text-white hover:underline"
              >
                (555) 000-1234
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Request Received!
                </h3>
                <p className="text-gray-500 text-sm">
                  Thank you, {form.name || "there"}. We'll be in touch shortly
                  to discuss your HVAC needs.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Request a Free Estimate
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe what's happening with your system..."
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-md"
                >
                  Submit Free Estimate Request
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to be contacted about your HVAC request.
                  We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
