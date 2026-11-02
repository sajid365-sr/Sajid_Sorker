$path = 'd:\Sajid Sorker\Programming\Projects\Sajid Sorker\components\hvac\HvacDemoEgDemoSection.tsx'
$content = Get-Content -Path $path -Raw

# Replace the placeholder block using regex
# The pattern matches from the asset slot comment through the placeholder div
# The pattern is tolerant of the em-dash character (it matches any characters in a non-greedy way)
$pattern = '\/\*\s*\* ASSET SLOT: LIVE DEMO SCREENSHOT.*?\*\/\s*<div class="group relative aspect-\[16/10\] w-full overflow-hidden bg-slate-950">\s*<div class="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-center">.*?</div>\s*</div>\s*</div>\s*</div>'

# Wait, this pattern has too many div closes. Let me count them.
# The block has these divs:
# 1. <div className="group relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
# 2. <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-center">
# 3. <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-inner">
# 4. <div className="relative z-10 space-y-1.5 max-w-md">

# And the closing divs are:
# </div> (for div #4)
# </div> (for div #3)
# </div> (for div #2)
# </div> (for div #1)

# So the pattern should be:
$pattern = '\/\*\s*\* ASSET SLOT: LIVE DEMO SCREENSHOT.*?\*\/\s*<div class="group relative aspect-\[16/10\] w-full overflow-hidden bg-slate-950">\s*<div class="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-center">\s*<div class="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-inner">\s*<div class="relative z-10 space-y-1.5 max-w-md">\s*<p class="font-mono text-sm font-semibold uppercase tracking-wider text-slate-200">\s*<!-- END -->'

# Actually, let me use a simpler approach: replace from the ASSET SLOT comment to the end of the placeholder content
$pattern = '\/\*\s*\* ASSET SLOT: LIVE DEMO SCREENSHOT.*?<\/div>\s*</div>\s*</div>\s*</div>'

# New content
$newContent = @'
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
$newContent = $newContent -join [Environment]::NewLine

$result = $content -replace $pattern, $newContent

if ($result -eq $content) {
    Write-Host "WARNING: No replacement made. Pattern may not match." -ForegroundColor Yellow
} else {
    $result | Set-Content -Path $path -Force
    Write-Host "SUCCESS: HvacDemoSection.tsx updated." -ForegroundColor Green
}

# Verify
$lines = Get-Content $path
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match 'LIVE DEMO SCREENSHOT|demo-hero-desktop') {
        Write-Host "Line $($i+1): $($lines[$i])" -ForegroundColor Cyan
    }
}
