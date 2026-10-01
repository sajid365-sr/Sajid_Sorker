"use client";

import { FormEvent, useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const HvacAuditForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [invalid, setInvalid] = useState({ name: false, email: false });

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
        `Email: ${from_email}`,
        `Business: ${data.get("business") || ""}`,
        `Website: ${data.get("website") || ""}`,
        `Phone: ${data.get("phone") || ""}`,
        `City / area: ${data.get("area") || ""}`,
        "",
        String(data.get("notes") || ""),
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
        payload,
        publicKey
      );
      if (result.status === 200) {
        setStatus("success");
        setInvalid({ name: false, email: false });
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fieldClass =
    "mt-2 w-full min-h-11 rounded-[4px] border border-[#ddd4c8] bg-[#faf7f2] px-3.5 py-3 text-[15px] text-[#142433] outline-none transition focus:border-[#c45c26] focus:ring-2 focus:ring-[#c45c26]/15";
  const invalidClass = "border-[#9b2c2c] focus:border-[#9b2c2c] focus:ring-[#9b2c2c]/15";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[6px] border border-[#ddd4c8] bg-white p-5 sm:p-8"
      noValidate
      aria-describedby={status === "error" ? "hvac-audit-error" : undefined}
    >
      <h3 className="font-primary text-lg font-semibold tracking-tight text-[#142433]">
        Request a free website audit
      </h3>
      <p className="mt-1.5 mb-6 text-sm leading-relaxed text-[#6d665d]">
        Share the live site. I will point out what is costing you calls.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-[13px] font-medium text-[#142433]">
          Your name
          <input
            required
            name="name"
            autoComplete="name"
            aria-invalid={invalid.name}
            aria-describedby={invalid.name ? "hvac-audit-error" : undefined}
            className={`${fieldClass} ${invalid.name ? invalidClass : ""}`}
          />
        </label>
        <label className="block text-[13px] font-medium text-[#142433]">
          Business name
          <input
            name="business"
            autoComplete="organization"
            className={fieldClass}
          />
        </label>
        <label className="block text-[13px] font-medium text-[#142433]">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            aria-invalid={invalid.email}
            aria-describedby={invalid.email ? "hvac-audit-error" : undefined}
            className={`${fieldClass} ${invalid.email ? invalidClass : ""}`}
          />
        </label>
        <label className="block text-[13px] font-medium text-[#142433]">
          Phone
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className={fieldClass}
          />
        </label>
        <label className="block text-[13px] font-medium text-[#142433] sm:col-span-2">
          Current website
          <input
            name="website"
            inputMode="url"
            placeholder="https://"
            className={fieldClass}
          />
        </label>
        <label className="block text-[13px] font-medium text-[#142433] sm:col-span-2">
          City / service area
          <input name="area" className={fieldClass} />
        </label>
        <label className="block text-[13px] font-medium text-[#142433] sm:col-span-2">
          What should I look at?
          <textarea
            name="notes"
            rows={4}
            className={`${fieldClass} resize-y`}
            placeholder="Phone number hard to find, no quote form, looks dated on mobile…"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="hvac-cta-primary mt-6 inline-flex min-h-[52px] w-full items-center justify-center rounded-[4px] bg-[#c45c26] px-6 text-[15px] font-semibold tracking-wide text-white transition-colors hover:bg-[#a84b1c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142433] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[240px]"
      >
        {status === "loading" ? "Sending…" : "Get a Free Website Audit"}
      </button>

      {status === "success" && (
        <p className="mt-3 text-sm text-[#2f5d3a]" role="status">
          Received. I will review the site and follow up by email.
        </p>
      )}
      {status === "error" && (
        <p id="hvac-audit-error" className="mt-3 text-sm text-[#9b2c2c]" role="alert">
          Please add your name and a valid email, or email sajid@sajidsorker.com
          directly.
        </p>
      )}
    </form>
  );
};

export default HvacAuditForm;
