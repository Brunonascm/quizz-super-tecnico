@echo off
setlocal
chcp 65001 >nul
set PYTHONIOENCODING=utf-8
cd /d "%~dp0"

set "PY="
if exist "%USERPROFILE%\.lou\python\venv\Scripts\python.exe" set "PY=%USERPROFILE%\.lou\python\venv\Scripts\python.exe"
if not defined PY (
  where py >nul 2>nul && set "PY=py"
)
if not defined PY (
  where python >nul 2>nul && set "PY=python"
)
if not defined PY (
  echo Nao encontrei o Python neste computador.
  echo Peca ao Lou: "atualize o quiz a partir da planilha de perguntas".
  pause
  exit /b 1
)

"%PY%" -c "import openpyxl" >nul 2>nul
if errorlevel 1 (
  echo Falta instalar o pacote openpyxl. Rode uma vez:  "%PY%" -m pip install openpyxl
  pause
  exit /b 1
)

"%PY%" converter.py
echo.
pause
