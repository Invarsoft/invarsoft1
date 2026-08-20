@echo off
TITLE InvarSoft GitHub Deployment Script
echo ========================================================
echo        INVARSOFT - GITHUB REPOSITORY DEPLOYMENT
echo ========================================================
echo.

set /p REPO_URL="Enter your GitHub repository URL (e.g., https://github.com/username/Invarsoft.git): "

echo.
echo [1/4] Initializing Git repository...
git init

echo.
echo [2/4] Staging all project files...
git add .

echo.
set /p COMMIT_MSG="Enter commit message (Press Enter for default 'Initial InvarSoft Production Launch'): "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Initial InvarSoft Production Launch

git commit -m "%COMMIT_MSG%"

echo.
echo [3/4] Configuring remote repository...
git branch -M main
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%

echo.
echo [4/4] Pushing code to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo  [SUCCESS] Code successfully pushed to GitHub!
    echo ========================================================
) else (
    echo.
    echo [ERROR] Push failed. Ensure your repository URL is correct and you have permission to push.
)

pause
