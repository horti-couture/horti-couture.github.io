@echo off
cd /d "C:\Users\Mike\Music\Horti-Couture-Website\Horti-Couture-Website\frontend\Horti-Couture-Website"

echo 🧹 Cleaning and building...
rmdir /s /q build
npm run build

echo ✅ Build completed!
pause