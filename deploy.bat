@echo off
setlocal



echo heart.websitewithme.in > CNAME

REM Initialize git repo if it doesn't exist
IF NOT EXIST ".git" (
    git init
    @REM git checkout -b gh-pages
    git remote add origin https://github.com/arunbabu8074/heart_app.git
) ELSE (
    git fetch origin gh-pages
    git checkout gh-pages 2>NUL || git checkout -b gh-pages
)

REM Add changes and commit if there are any
git add .

git diff --cached --quiet
IF %ERRORLEVEL% EQU 0 (
    echo No changes to commit.
) ELSE (
    for /f %%i in ('powershell -Command "Get-Date -Format yyyy-MM-dd_HH:mm:ss"') do set dt=%%i
    git commit -m "Deploy Angular build on %dt%"
)

REM Push force to gh-pages
git push -u origin gh-pages --force

endlocal