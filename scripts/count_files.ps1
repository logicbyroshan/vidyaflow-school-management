$root = "c:\Users\iamro\Desktop\VidyaFlow"
$files = (Get-ChildItem -Path $root -Recurse -File).Count
$dirs = (Get-ChildItem -Path $root -Recurse -Directory).Count
Write-Host "Files: $files"
Write-Host "Directories: $dirs"
