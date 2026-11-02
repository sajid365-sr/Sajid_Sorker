$path = 'd:\Sajid Sorker\Programming\Projects\Sajid Sorker\components\hvac\HvacDemoSection.tsx'
$content = Get-Content -Path $path -Raw

$oldBlock = @'
        {/* Visual placeholder content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-center">
          {/* Subtle grid pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] [background-size:40px_40px]" />

          {/* Browser/Display Icon */}
          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-inner">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={1.5} />
              <path strokeLinecap="round" d="M8 21h8M12 17v4" strokeWidth={1.5} />
            </svg>
          </div>

          {/* Slot Label */}
          <div className="relative z-10 space-y-1.5 max-w-md">
            <p className="font-mono text-sm font-semibold uppercase tracking-wider text-slate-200">
              LIVE DEMO SCREENSHOT
            </p>
            <p className="font-mono text-xs text-slate-400">
              Wide desktop screenshot of the complete Evergreen Heating &amp; Air demo homepage
            </p>
            <p className="font-mono text-[11px] text-slate-600">
              16:10 wide desktop ratio &middot; Replace with full-page screenshot of /evergreen-heating-air
            </p>
          </div>
        </div>
'@
$newBlock = @'
        <div className="group relative aspect-[16/10] w-full overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl shadow-black/60">
          <Image
            src="/images/hvac/demo-hero-desktop.jpg"
            alt="Evergreen Heating &amp; Air demo homepage — full desktop view showing the hero section, services list, and estimate request form"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover w-full h-full"
          />
        </div>
'@

$content = $content -replace [regex]::Escape($oldBlock), $newBlock
$content | Set-Content -Path $path -NoNewLine
Write-Host "HvacDemoSection.tsx updated successfully." -ForegroundColor Green
