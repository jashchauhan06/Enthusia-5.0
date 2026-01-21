@echo off
echo ========================================
echo   Building Enthusia 5.0 for cPanel
echo ========================================
echo.

echo Building Main Enthusia Site...
call npm install
call npm run build
if errorlevel 1 (
    echo Failed to build main site
    exit /b 1
)
echo Main site built successfully
echo.

echo Building SITNovate 2.0...
cd SITNovate-2.0-main
if not exist node_modules (
    call npm install
)
call npm run build
if errorlevel 1 (
    echo Failed to build SITNovate
    exit /b 1
)
cd ..
echo SITNovate built successfully
echo.

echo Building CodeSprint 2.0...
cd CODE-SPRINT-2.0-main
if not exist node_modules (
    call npm install
)
call npm run build
if errorlevel 1 (
    echo Failed to build CodeSprint
    exit /b 1
)
cd ..
echo CodeSprint built successfully
echo.

echo Building SITank 2.0...
cd SITank-2.0-main
if not exist node_modules (
    call npm install
)
call npm run build
if errorlevel 1 (
    echo Failed to build SITank
    exit /b 1
)
cd ..
echo SITank built successfully
echo.

echo Building BuildBrand...
cd BuildBrand-main
if not exist node_modules (
    call npm install
)
echo Installing adapter-static for cPanel...
call npm install -D @sveltejs/adapter-static
call npm run build
if errorlevel 1 (
    echo Failed to build BuildBrand
    exit /b 1
)
cd ..
echo BuildBrand built successfully
echo.

echo ========================================
echo   All builds completed successfully!
echo ========================================
echo.
echo Upload to cPanel:
echo   1. dist\ -^> public_html\
echo   2. SITNovate-2.0-main\dist\ -^> public_html\sitnovate\
echo   3. CODE-SPRINT-2.0-main\dist\ -^> public_html\codesprint\
echo   4. SITank-2.0-main\dist\ -^> public_html\sitank\
echo   5. BuildBrand-main\build\ -^> public_html\buildbrand\
echo.
echo Note: BuildBrand uses SvelteKit and outputs to 'build\' instead of 'dist\'
pause
