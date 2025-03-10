@echo off
cd /d "C:\Users\Mike\Music\Horti-Couture-Website\Horti-Couture-Website\frontend\Horti-Couture-Website"
git add .
git commit -m "Deploy backend https://backend-7dm6.onrender.com"
git push origin main
npm run deploy
pause
