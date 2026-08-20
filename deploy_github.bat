@echo off
TITLE InvarSoft GitHub & Vercel Deployment Script
echo ========================================================
echo        INVARSOFT - GITHUB & VERCEL DEPLOYMENT
echo ========================================================
echo.

set /p REPO_URL="Enter your GitHub Repository URL (e.g., https://github.com/username/Invarsoft.git): "

if "%REPO_URL%"=="" (
    echo [ERROR] Repository URL cannot be empty!
    pause
    exit /b 1
)

echo.
echo [1/4] Staging files...
git add .

echo.
echo [2/4] Creating commit...
git commit -m "Deploy InvarSoft Production Next.js App"

echo.
echo [3/4] Setting main branch & remote URL...
git branch -M main
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%

echo.
echo [4/4] Pushing to GitHub...
git push -u origin main --force

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo  [SUCCESS] Code successfully pushed to GitHub!
    echo  Now deploy on Vercel for FREE: https://vercel.com/new
    echo ========================================================
) else (
    echo.
    echo [ERROR] Push failed. Please check your GitHub repository URL and permissions.
)

pause
