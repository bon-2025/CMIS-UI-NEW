@echo off
setlocal

:: ---- Configuration ----
set JSON_PORT=5000
set REACT_PORT=5173
set DB_FILE=db.json

:: ---- Check db.json ----
if not exist "%DB_FILE%" (
  echo [ERROR] %DB_FILE% not found. Please ensure it exists in the project root.
  pause
  exit /b
)

:: ---- Start JSON Server ----
echo Starting JSON Server on port %JSON_PORT%...
start "JSON Server" cmd /k npx json-server --watch %DB_FILE% --port %JSON_PORT%

:: ---- Start React App ----
echo Starting React App on port %REACT_PORT%...
start "React App" cmd /k npm run dev

exit /b
