$ErrorActionPreference = "Stop"

Set-Location $PSScriptRoot

git init
git branch -M main
git remote remove origin 2>$null
git remote add origin "https://github.com/diegotbyrro-ui/deck-galeria-mineral-site.git"

git add -A
git commit -m "Publica site completo da Deck Galeria Mineral"
git push -u origin main --force

Write-Host "Site completo enviado ao GitHub." -ForegroundColor Green
