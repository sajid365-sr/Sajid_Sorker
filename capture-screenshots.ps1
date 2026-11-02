# START DEV SERVER IN BACKGROUND
$devLog = 'd:\Sajid Sorker\Programming\Projects\Sajid Sorker\npm-dev.log'
Start-Process -FilePath 'cmd.exe' -ArgumentList @('/c','cd /d d:\Sajid Sorker\Programming\Projects\Sajid Sorker && npm run dev > npm-dev.log 2>&1') -WorkingDirectory 'd:\Sajid Sorker\Programming\Projects\Sajid Sorker' -WindowStyle Hidden

# WAIT FOR SERVER TO BE READY
Write-Host 'Waiting for dev server to start...' -ForegroundColor Yellow
for ($i=0; $i -lt 60; $i++) {
    try {
        $null = Invoke-WebRequest -Uri 'http://localhost:3000/evergreen-heating-air' -UseBasicParsing -ErrorAction Stop
        Write-Host 'Dev server is ready.' -ForegroundColor Green
        break
    } catch {
        Start-Sleep -Seconds 1
    }
}

$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$public = 'd:\Sajid Sorker\Programming\Projects\Sajid Sorker\public'

Write-Host 'Capturing screenshots...' -ForegroundColor Yellow

# Desktop screenshot (demo-hero-desktop.jpg)
& $chrome --headless --disable-gpu --no-sandbox --hide-scrollbars=0 --window-size=1280,900 --screenshot="$public/images/hvac/demo-hero-desktop.jpg" 'http://localhost:3000/evergreen-heating-air'
Write-Host '  -> demo-hero-desktop.jpg' -ForegroundColor Gray

# Mobile portrait screenshot (features-mobile-portrait.jpg)
& $chrome --headless --disable-gpu --no-sandbox --hide-scrollbars=0 --window-size=390,844 --screenshot="$public/images/hvac/features-mobile-portrait.jpg" 'http://localhost:3000/evergreen-heating-air'
Write-Host '  -> features-mobile-portrait.jpg' -ForegroundColor Gray

# Desktop homepage (features-preview-desktop.jpg)
& $chrome --headless --disable-gpu --no-sandbox --hide-scrollbars=0 --window-size=1280,900 --screenshot="$public/images/hvac/features-preview-desktop.jpg" 'http://localhost:3000/evergreen-heating-air'
Write-Host '  -> features-preview-desktop.jpg' -ForegroundColor Gray

# After redesign screenshot (after-evergreen-redesign.jpg)
& $chrome --headless --disable-gpu --no-sandbox --hide-scrollbars=0 --window-size=1280,900 --screenshot="$public/images/hvac/after-evergreen-redesign.jpg" 'http://localhost:3000/evergreen-heating-air'
Write-Host '  -> after-evergreen-redesign.jpg' -ForegroundColor Gray

Write-Host 'Screenshots captured successfully.' -ForegroundColor Green
