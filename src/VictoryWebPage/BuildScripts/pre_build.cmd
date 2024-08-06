SET solutionDir="%1"
ECHO %solutionDir%
CD %solutionDir%\BuildScripts


for /f %%i in ('cscript timestamp.vbs') do set TIMESTAMP=%%i

COPY /Y %solutionDir%\MobilePage\cache.appcache.template cache.appcache
cscript replace.vbs cache.appcache {TIMESTAMP} %TIMESTAMP%
COPY /Y cache.appcache %solutionDir%\MobilePage\cache.appcache
DEL cache.appcache