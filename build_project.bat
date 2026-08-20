@echo off
TITLE InvarSoft Next.js Build Script
echo ========================================================
echo        INVARSOFT - BUILDING PRODUCTION BUNDLE
echo ========================================================
echo.

call npm run build

if %errorlevel% equ 0 (
    echo.
    echo [SUCCESS] Next.js build completed successfully!
) else (
    echo.
    echo [ERROR] Build failed. Please check the error log above.
)

pause
