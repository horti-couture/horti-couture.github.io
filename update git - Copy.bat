@echo off
cd /d "C:\Users\HPUser\Music\Websites\Horti-Couture-Website\frontend\Horti-Couture-Website"

git add .

git commit -m "Frontend update - connected to backend"
git push origin main

IF %ERRORLEVEL% NEQ 0 (
    echo Git push failed!
    pause
    exit /b
)

npm run deploy

pause
