@echo off
start /b cmd /k "python -m http.server 8080"
timeout /t 2 /nobreak >nul
start "" "http://localhost:8080"
pause