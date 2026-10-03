import React from "react";

interface HvacAssetSlotProps {
  title: string;
  aspectRatio?: string;
  comment: string;
  badge?: string;
  icon?: "browser" | "mobile" | "image";
  className?: string;
}

const HvacAssetSlot: React.FC<HvacAssetSlotProps> = ({
  title,
  aspectRatio = "aspect-[16/10]",
  comment,
  badge,
  icon = "browser",
  className = "",
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 ${className}`}
    >
      {/* Chrome Header if browser-style */}
      {icon === "browser" && (
        <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/90 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
            </div>
            <div className="ml-2 flex items-center gap-1.5 rounded-md bg-slate-950 px-3 py-0.5 font-mono text-[10px] text-slate-500 border border-slate-800/60">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>preview.asset</span>
            </div>
          </div>
          {badge && (
            <span className="rounded px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider bg-slate-800 text-cyan-400 border border-slate-700">
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Main Asset Container with Intended Aspect Ratio */}
      <div
        className={`relative w-full ${aspectRatio} flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-900/30 to-slate-950/60`}
      >
        {/* Subtle grid pattern inside placeholder */}
        <div className="absolute inset-0 bg-grid-slate-800/[0.05] bg-[size:24px_24px] pointer-events-none" />

        {/* Ambient center radial glow */}
        <div className="pointer-events-none absolute h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl" />

        {/* Placeholder Icon */}
        <div className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-800/60 text-cyan-400/80 shadow-inner">
          {icon === "mobile" ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="7" y="2" width="10" height="20" rx="2" strokeWidth="1.5" />
              <path strokeLinecap="round" d="M11 18h2" strokeWidth="1.5" />
            </svg>
          ) : icon === "image" ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
              <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 15l-5-5L5 21" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="1.5" />
              <path strokeLinecap="round" d="M8 21h8M12 17v4" strokeWidth="1.5" />
            </svg>
          )}
        </div>

        {/* Slot Metadata */}
        <div className="relative z-10 max-w-sm space-y-1.5">
          <p className="font-mono text-xs font-bold tracking-wide text-slate-200 uppercase">
            {title}
          </p>
          <p className="font-mono text-[11px] leading-relaxed text-slate-400">
            {comment}
          </p>
          <span className="inline-block rounded border border-slate-700/60 bg-slate-800/80 px-2.5 py-0.5 font-mono text-[10px] text-cyan-400/90">
            Ratio: {aspectRatio.replace("aspect-[", "").replace("]", "")}
          </span>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-slate-700/60" />
        <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-slate-700/60" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-slate-700/60" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-slate-700/60" />
      </div>
    </div>
  );
};

export default HvacAssetSlot;
