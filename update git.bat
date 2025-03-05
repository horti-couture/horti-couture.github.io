@echo off
cd /d "C:\Users\Mike\Music\Horti-Couture-Website\Horti-Couture-Website\frontend\Horti-Couture-Website"
git add .
git commit -m "Deploy website to luxcare.github.io"
git push origin main
npm run deploy
pause
