"use client";

import { FormEvent, useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const HvacAuditForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [invalid, setInvalid] = useState({ name: false, email: false });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const from_name = String(data.get("name") || "").trim();
    const from_email = String(data.get("email") || "").trim();
    const nameInvalid = !from_name;
    const emailInvalid = !emailPattern.test(from_email);

    setInvalid({ name: nameInvalid, email: emailInvalid });
    if (nameInvalid || emailInvalid) {
      setStatus("error");
      return;
    }

    const payload = {
      from_name,
      from_email,
      subject: "HVAC website audit request",
      message: [
        `Name: ${from_name}`,
        `Business Name: ${data.get("business") || ""}`,
        `Email: ${from_email}`,
        `Current Website: ${data.get("website") || ""}`,
        `Phone (Optional): ${data.get("phone") || ""}`,
        "",
        `Notes / Challenges: ${data.get("notes") || ""}`,
      ].join("\n"),
    };

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      window.location.href = `mailto:sajid@sajidsorker.com?subject=${encodeURIComponent(
        "HVAC website audit request"
      )}&body=${encodeURIComponent(payload.message)}`;
      return;
    }

    setStatus("loading");
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: from_name,
          email: from_email,
          message: payload.message,
          title: "HVAC Website Audit Request",
        },
        publicKey
      );

      if (result.status === 200) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fieldBase =
    "mt-1.5 w-full min-h-11 rounded-lg border-2 bg-slate-800/50 px-3.5 py-2.5 font-sans text-sm text-slate-200 outline-none transition-all duration-200 placeholder:text-slate-600 focus:outline-none";
  const fieldNormal = "border-slate-700 focus:border-cyan-400";
  const fieldInvalid = "border-red-500/70 focus:border-red-500";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md hover:border-cyan-400/30 transition-colors duration-300 sm:p-8 shadow-2xl"
      noValidate
      aria-describedby={status === "error" ? "hvac-audit-error" : undefined}
    >
      {/* Corner accents */}
      <div className="absolute -top-px -left-px w-4 h-4 border-l-2 border-t-2 border-cyan-400/60 rounded-tl-xl pointer-events-none" />
      <div className="absolute -bottom-px -right-px w-4 h-4 border-r-2 border-b-2 border-purple-400/60 rounded-br-xl pointer-events-none" />

      <div className="mb-6">
        <h3 className="font-primary text-xl font-bold text-slate-100 flex items-center gap-2">
          Request a Free Website Audit
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          Share your current website link. I will review your page speed, mobile experience, and lead capture opportunities.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name (Required) */}
        <label className="block">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
            Your Name <span className="text-cyan-400">*</span>
          </span>
          <div className="relative">
            <input
              required
              name="name"
              autoComplete="name"
              aria-invalid={invalid.name}
              aria-describedby={invalid.name ? "hvac-audit-error" : undefined}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              className={`${fieldBase} ${invalid.name ? fieldInvalid : fieldNormal}`}
              placeholder="e.g. John Miller"
            />
            {focused === "name" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
            )}
          </div>
        </label>

        {/* Business name */}
        <label className="block">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
            Business Name
          </span>
          <div className="relative">
            <input
              name="business"
              autoComplete="organization"
              onFocus={() => setFocused("business")}
              onBlur={() => setFocused(null)}
              className={`${fieldBase} ${fieldNormal}`}
              placeholder="e.g. Miller Heating & Air"
            />
            {focused === "business" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
            )}
          </div>
        </label>

        {/* Email (Required) */}
        <label className="block">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
            Business Email <span className="text-cyan-400">*</span>
          </span>
          <div className="relative">
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              aria-invalid={invalid.email}
              aria-describedby={invalid.email ? "hvac-audit-error" : undefined}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              className={`${fieldBase} ${invalid.email ? fieldInvalid : fieldNormal}`}
              placeholder="john@millerhvac.com"
            />
            {focused === "email" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
            )}
          </div>
        </label>

        {/* Phone (Optional) */}
        <label className="block">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
            Phone Number <span className="text-slate-500 font-normal lowercase">(optional)</span>
          </span>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              onFocus={() => setFocused("phone")}
              onBlur={() => setFocused(null)}
              className={`${fieldBase} ${fieldNormal}`}
              placeholder="(555) 000-0000"
            />
            {focused === "phone" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
            )}
          </div>
        </label>

        {/* Current website */}
        <label className="block sm:col-span-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
            Current Website URL
          </span>
          <div className="relative">
            <input
              name="website"
              inputMode="url"
              placeholder="https://yourhvacbusiness.com"
              onFocus={() => setFocused("website")}
              onBlur={() => setFocused(null)}
              className={`${fieldBase} ${fieldNormal}`}
            />
            {focused === "website" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
            )}
          </div>
        </label>

        {/* Notes / message */}
        <label className="block sm:col-span-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
            Current Challenges or Goals <span className="text-slate-500 font-normal lowercase">(optional)</span>
          </span>
          <div className="relative">
            <textarea
              name="notes"
              rows={3}
              onFocus={() => setFocused("notes")}
              onBlur={() => setFocused(null)}
              className={`${fieldBase} ${fieldNormal} resize-none`}
              placeholder="e.g. Phone number hard to find on mobile, no quote form, need more service calls…"
            />
            {focused === "notes" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
            )}
          </div>
        </label>
      </div>

      {/* Submit button */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="hvac-cta-primary inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg px-8 font-mono text-sm font-semibold tracking-wide text-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Reviewing…
            </>
          ) : (
            <>
              <span>Get Free Website Audit</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Reassurance text as requested */}
      <p className="mt-3 text-xs text-slate-400">
        Free. No obligation. I&apos;ll point out a few things worth improving.
      </p>

      {/* Status banners */}
      {status === "success" && (
        <p className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 font-mono text-sm text-emerald-400" role="status">
          ✓ Received. I will review your site and follow up by email within 24&ndash;48 hours.
        </p>
      )}
      {status === "error" && (
        <p id="hvac-audit-error" className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 font-mono text-sm text-red-400" role="alert">
          ✗ Please provide your name and a valid email, or email sajid@sajidsorker.com directly.
        </p>
      )}
    </form>
  );
};

export default HvacAuditForm;
