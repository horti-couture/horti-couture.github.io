@echo off
setlocal

cd /d "C:\Users\HPUser\Music\Websites\Horti-Couture-Website\frontend\Horti-Couture-Website"

echo.
echo ========================================
echo       HORTI COUTURE WEBSITE UPDATE
echo ========================================
echo.

echo Checking Git branch...
git branch --show-current

echo.
echo Checking for changes...
git status

echo.
set /p msg=Enter commit message: 

if "%msg%"=="" (
    echo.
    echo ERROR: Commit message cannot be empty.
    pause
    exit /b 1
)

echo.
echo Adding changes...
git add .

if errorlevel 1 (
    echo.
    echo ERROR: Git add failed!
    pause
    exit /b 1
)

echo.
echo Creating commit...
git commit -m "%msg%"

if errorlevel 1 (
    echo.
    echo ERROR: Git commit failed!
    pause
    exit /b 1
)

echo.
echo Pushing source code to GitHub...
git push origin main

if errorlevel 1 (
    echo.
    echo ERROR: Git push failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo       BUILDING AND DEPLOYING
echo ========================================
echo.

call npm run deploy

if errorlevel 1 (
    echo.
    echo ERROR: Website deployment failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo          UPDATE SUCCESSFUL!
echo ========================================
echo.
echo Source pushed to GitHub main.
echo Website deployed to gh-pages.
echo.

pause