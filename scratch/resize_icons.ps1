
$sourceFile = "c:\Users\JMS\Desktop\horizon-ai-alchemy-main\public\icon-base.png"
$destFolder = "c:\Users\JMS\Desktop\horizon-ai-alchemy-main\public"

Add-Type -AssemblyName System.Drawing

function Resize-Image {
    param (
        [string]$Path,
        [string]$Destination,
        [int]$Width,
        [int]$Height,
        [string]$Format
    )
    $srcImg = [System.Drawing.Image]::FromFile($Path)
    $destImg = New-Object System.Drawing.Bitmap($Width, $Height)
    $g = [System.Drawing.Graphics]::FromImage($destImg)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($srcImg, 0, 0, $Width, $Height)
    
    if ($Format -eq "Icon") {
        # Note: True .ico requires multiple sizes. For simplicity, we'll save one size as Icon.
        # However, System.Drawing's Save with ImageFormat.Icon can be tricky.
        # We'll save as PNG but name it .ico for compatibility if Icon format fails.
        try {
            $destImg.Save($Destination, [System.Drawing.Imaging.ImageFormat]::Icon)
        } catch {
            $destImg.Save($Destination, [System.Drawing.Imaging.ImageFormat]::Png)
        }
    } else {
        $destImg.Save($Destination, [System.Drawing.Imaging.ImageFormat]::Png)
    }
    
    $g.Dispose()
    $destImg.Dispose()
    $srcImg.Dispose()
}

Resize-Image -Path $sourceFile -Destination "$destFolder\favicon.ico" -Width 32 -Height 32 -Format "Icon"
Resize-Image -Path $sourceFile -Destination "$destFolder\favicon-48x48.png" -Width 48 -Height 48 -Format "Png"
Resize-Image -Path $sourceFile -Destination "$destFolder\favicon-32x32.png" -Width 32 -Height 32 -Format "Png"
Resize-Image -Path $sourceFile -Destination "$destFolder\apple-touch-icon.png" -Width 180 -Height 180 -Format "Png"
Resize-Image -Path $sourceFile -Destination "$destFolder\android-chrome-192x192.png" -Width 192 -Height 192 -Format "Png"
Resize-Image -Path $sourceFile -Destination "$destFolder\android-chrome-512x512.png" -Width 512 -Height 512 -Format "Png"
