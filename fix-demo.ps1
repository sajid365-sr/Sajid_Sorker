$path = 'd:\Sajid Sorker\Programming\Projects\Sajid Sorker\components\hvac\HvcDemoEgDemoSection.tsx'
$lines = Get-Content -Path $path -Raw

# Find start of asset slot comment
$start = $lines.IndexOf([System.Text.RegularExpressions.Regex]::Match($lines, 'ASSET SLOT: LIVE DEMO SCREENSHOT'))

# Find end of placeholder div (next line that is just a closing div with the aspect ratio)
$end = $null
for ($i = $start; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match '^\s*</div>$' -and $i -gt $start) {
        $end = $i
        break
    }
}

Write-Host "Found lines $start to $end" -ForegroundColor Yellow

# Build replacement content (lines after the comment)
$replacement = @'
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
'@ -split '\n'

# Build new file content
$newContent = @()
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($i -eq $start) {
        # Skip from the ASSET SLOT comment onwards
        continue
    }
    $newContent += $lines[$i]
}
# Insert the new content after the motion.div closing
$insertAfter = $replacement -join "`n"

# Find the line after the closing div of the motion.div that contains the new content
# Actually, insert the new content right after the comment on line $start
$insertIndex = $start + 1

# Build final content
$final = @()
for ($i = 0; $i -lt $lines.Length; $i++) {
    $final += $lines[$i]
    if ($i -eq $insertIndex) {
        $final += $insertAfter
        $insertIndex = -1
    }
}

$final | Set-Content -Path $path -Force
Write-Host "Done." -ForegroundColor Green