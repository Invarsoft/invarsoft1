@echo off
TITLE InvarSoft Production Server Launcher
echo ========================================================
echo        INVARSOFT - NEXT-LEVEL DIGITAL SOLUTIONS
echo ========================================================
echo.
echo Checking Node.js environment...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [1/2] Installing dependencies if missing...
if not exist "node_modules\" (
    echo Installing node_modules...
    call npm install
)

echo.
echo [2/2] Launching InvarSoft Production Web Server on Port 3000...
echo.
set PORT=3000
call npm run build && call npm start

pause
