import type { ReactNode } from "react";

type MockupVariant = "hero" | "before" | "after" | "demo";

type HvacMockupProps = {
  variant: MockupVariant;
};

const BrowserChrome = ({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) => (
  <div className="overflow-hidden rounded-[6px] border border-[#d4cbbd] bg-white">
    <div className="flex items-center gap-2 border-b border-[#ece6de] bg-[#efe8dc] px-3 py-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#e3c4b4]" aria-hidden />
      <span className="h-2.5 w-2.5 rounded-full bg-[#e6d7b8]" aria-hidden />
      <span className="h-2.5 w-2.5 rounded-full bg-[#c9d4c4]" aria-hidden />
      <p className="ml-2 min-w-0 truncate rounded-md bg-white px-2 py-1 text-[10px] text-[#6b6258] sm:text-xs">
        {url}
      </p>
    </div>
    {children}
  </div>
);

const PremiumSite = ({
  title,
  dense,
}: {
  title: string;
  dense?: boolean;
}) => (
  <div className={dense ? "min-h-[280px] bg-[#f8f6f2] sm:min-h-[340px]" : "bg-[#f8f6f2]"}>
    <div className="flex items-center justify-between gap-3 bg-[#1a2a3a] px-3 py-2.5 text-white">
      <p className="truncate text-xs font-semibold sm:text-sm">{title}</p>
      <p className="shrink-0 rounded-sm bg-[#c45c26] px-2 py-1 text-[10px] font-semibold sm:text-xs">
        Call now
      </p>
    </div>
    <div className="grid gap-3 p-3 sm:grid-cols-[1.2fr_0.8fr] sm:p-4">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#c45c26]">
          Heating · Cooling · Repair
        </p>
        <p className="mt-1 text-lg font-semibold leading-tight text-[#1a2a3a] sm:text-xl">
          Fast service. Clear next step. Easy to call.
        </p>
        <p className="mt-2 text-[11px] leading-relaxed text-[#5c564e] sm:text-xs">
          AC repair, furnace service, and installs for local homeowners.
          Emergency requests welcome.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-md bg-[#1a2a3a] px-2.5 py-1.5 text-[10px] font-semibold text-white">
            Request a Quote
          </span>
          <span className="rounded-md border border-[#1a2a3a] px-2.5 py-1.5 text-[10px] font-semibold text-[#1a2a3a]">
            View Services
          </span>
        </div>
      </div>
      <div className="rounded-lg border border-[#e4ddd3] bg-white p-3">
        <p className="text-[11px] font-semibold text-[#1a2a3a]">
          Request an estimate
        </p>
        <div className="mt-2 space-y-1.5">
          <div className="h-6 rounded bg-[#f1ece5]" />
          <div className="h-6 rounded bg-[#f1ece5]" />
          <div className="h-6 rounded bg-[#c45c26]/90" />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2 px-3 pb-3">
      {["AC Repair", "Heating", "Maintenance"].map((item) => (
        <div
          key={item}
          className="rounded-md border border-[#ece6de] bg-white px-2 py-2 text-center text-[10px] font-medium text-[#1a2a3a]"
        >
          {item}
        </div>
      ))}
    </div>
    {!dense && (
      <div className="grid gap-2 border-t border-[#ece6de] px-3 py-3 sm:grid-cols-2">
        <div className="rounded-md bg-white px-3 py-2 text-[10px] text-[#5c564e]">
          Serving nearby towns · License and insurance listed on the live site
        </div>
        <div className="rounded-md bg-white px-3 py-2 text-[10px] text-[#5c564e]">
          Reviews and years-in-business go here — using the company&apos;s real
          proof
        </div>
      </div>
    )}
  </div>
);

const HvacMockup = ({ variant }: HvacMockupProps) => {
  if (variant === "before") {
    return (
      <BrowserChrome url="old-hvac-site.example">
        <div className="min-h-[280px] bg-[#eef2f7] p-3 font-sans text-[#1e3a5f] sm:min-h-[320px] sm:p-4">
          <div className="flex items-center justify-between border-b border-[#9bb3c9] pb-2">
            <p className="text-sm font-bold italic sm:text-base">
              CoolAir HVAC Inc.
            </p>
            <p className="text-[10px] underline">home | services | contact</p>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="col-span-2 space-y-2">
              <p className="text-lg font-bold leading-tight">
                Welcome to our website!!!
              </p>
              <p className="text-[11px] leading-relaxed text-[#334e68]">
                We have been serving the community for years. Please scroll down
                to learn more about heating and air conditioning. Call us if you
                need anything.
              </p>
              <p className="text-[11px] text-[#1e3a5f] underline">Click here</p>
            </div>
            <div className="space-y-1 bg-[#d9e4ef] p-2 text-[10px]">
              <p>News</p>
              <p>Links</p>
              <p>Sitemap</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="h-16 rounded-sm bg-[#c5d4e3]" />
            <div className="h-16 rounded-sm bg-[#c5d4e3]" />
          </div>
          <p className="mt-3 text-[10px] text-[#5b7088]">
            Phone number buried in the footer · No quote form · Tight on phones
          </p>
        </div>
      </BrowserChrome>
    );
  }

  if (variant === "after") {
    return (
      <BrowserChrome url="clearhvac.example">
        <PremiumSite title="Clear HVAC Co." dense />
      </BrowserChrome>
    );
  }

  if (variant === "hero") {
    return (
      <BrowserChrome url="evergreen-heating.demo">
        <PremiumSite title="Evergreen Heating & Air" dense />
      </BrowserChrome>
    );
  }

  return (
    <BrowserChrome url="evergreen-heating.demo">
      <PremiumSite title="Evergreen Heating & Air" />
    </BrowserChrome>
  );
};

export default HvacMockup;
