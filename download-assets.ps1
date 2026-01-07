# Download External Assets Script
# This PowerShell script will help you download all external CSS and JS files
# Run this script to localize all assets from demo2.wpopal.com

# Base URL
$baseUrl = "https://demo2.wpopal.com/spaciaz"

# Create directories if they don't exist
$directories = @(
    "assets\css\plugins\elementor",
    "assets\css\plugins\header-footer-elementor",
    "assets\css\plugins\contact-form-7",
    "assets\css\theme",
    "assets\css\uploads\elementor",
    "assets\js\jquery",
    "assets\js\plugins\elementor",
    "assets\js\theme\frontend",
    "assets\js\theme\elementor",
    "assets\js\theme\vendor",
    "assets\js\core"
)

foreach ($dir in $directories) {
    $fullPath = Join-Path $PSScriptRoot $dir
    if (-not (Test-Path $fullPath)) {
        New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
        Write-Host "Created directory: $dir" -ForegroundColor Green
    }
}

# CSS Files to Download
$cssFiles = @{
    # Elementor Core
    "wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css" = "assets\css\plugins\elementor\swiper.min.css"
    "wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css" = "assets\css\plugins\elementor\e-swiper.min.css"
    "wp-content/uploads/elementor/css/custom-frontend.min.css" = "assets\css\uploads\elementor\custom-frontend.min.css"
    "wp-content/uploads/elementor/css/post-4.css" = "assets\css\uploads\elementor\post-4.css"
    "wp-content/uploads/elementor/css/post-64.css" = "assets\css\uploads\elementor\post-64.css"
    "wp-content/uploads/elementor/css/post-4773.css" = "assets\css\uploads\elementor\post-4773.css"
    "wp-content/uploads/elementor/css/post-6350.css" = "assets\css\uploads\elementor\post-6350.css"
    "wp-content/uploads/elementor/css/post-6354.css" = "assets\css\uploads\elementor\post-6354.css"
    "wp-content/uploads/elementor/css/custom-widget-image-box.min.css" = "assets\css\uploads\elementor\custom-widget-image-box.min.css"
    
    # Elementor Widgets
    "wp-content/plugins/elementor/assets/css/widget-spacer.min.css" = "assets\css\plugins\elementor\widget-spacer.min.css"
    "wp-content/plugins/elementor/assets/css/widget-image.min.css" = "assets\css\plugins\elementor\widget-image.min.css"
    "wp-content/plugins/elementor/assets/css/widget-heading.min.css" = "assets\css\plugins\elementor\widget-heading.min.css"
    "wp-content/plugins/elementor/assets/css/widget-counter.min.css" = "assets\css\plugins\elementor\widget-counter.min.css"
    "wp-content/plugins/elementor/assets/css/widget-icon-list.min.css" = "assets\css\plugins\elementor\widget-icon-list.min.css"
    "wp-content/plugins/elementor/assets/css/widget-social-icons.min.css" = "assets\css\plugins\elementor\widget-social-icons.min.css"
    
    # Icons & Fonts
    "wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css" = "assets\css\plugins\elementor\elementor-icons.min.css"
    "wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.css" = "assets\css\plugins\elementor\fa-brands.css"
    "wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.css" = "assets\css\plugins\elementor\fontawesome.css"
    "wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.css" = "assets\css\plugins\elementor\fa-solid.css"
    
    # Theme CSS
    "wp-content/themes/spaciaz/assets/css/base/gutenberg-blocks.css" = "assets\css\theme\gutenberg-blocks.css"
    "wp-content/themes/spaciaz/assets/css/libs/magnific-popup.css" = "assets\css\theme\magnific-popup.css"
    "wp-content/themes/spaciaz/assets/css/base/elementor.css" = "assets\css\theme\elementor.css"
    "wp-content/themes/spaciaz/style.css" = "assets\css\theme\theme-style.css"
    "wp-content/themes/demo-child/style.css" = "assets\css\theme\child-style.css"
    
    # Plugins
    "wp-content/plugins/contact-form-7/includes/css/styles.css" = "assets\css\plugins\contact-form-7\styles.css"
    "wp-content/plugins/header-footer-elementor/inc/widgets-css/frontend.css" = "assets\css\plugins\header-footer-elementor\frontend.css"
    "wp-content/plugins/header-footer-elementor/assets/css/header-footer-elementor.css" = "assets\css\plugins\header-footer-elementor\header-footer-elementor.css"
    "wp-content/plugins/opal-demo/style.css" = "assets\css\plugins\opal-demo-style.css"
}

# JavaScript Files to Download
$jsFiles = @{
    # jQuery
    "wp-includes/js/jquery/jquery.min.js" = "assets\js\jquery\jquery.min.js"
    "wp-includes/js/jquery/jquery-migrate.min.js" = "assets\js\jquery\jquery-migrate.min.js"
    
    # Elementor
    "wp-content/plugins/elementor/assets/js/frontend.min.js" = "assets\js\plugins\elementor\frontend.min.js"
    "wp-content/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.min.js" = "assets\js\plugins\elementor\jquery-numerator.min.js"
    
    # WordPress Core
    "wp-includes/js/underscore.min.js" = "assets\js\core\underscore.min.js"
    "wp-includes/js/wp-util.min.js" = "assets\js\core\wp-util.min.js"
    "wp-includes/js/imagesloaded.min.js" = "assets\js\core\imagesloaded.min.js"
    
    # Theme JS
    "wp-content/themes/spaciaz/assets/js/vendor/jquery.magnific-popup.min.js" = "assets\js\theme\vendor\jquery.magnific-popup.min.js"
    "wp-content/themes/spaciaz/assets/js/frontend/main.min.js" = "assets\js\theme\frontend\main.min.js"
    "wp-content/themes/spaciaz/assets/js/skip-link-focus-fix.min.js" = "assets\js\theme\skip-link-focus-fix.min.js"
    "wp-content/themes/spaciaz/assets/js/frontend/search-popup.min.js" = "assets\js\theme\frontend\search-popup.min.js"
    "wp-content/themes/spaciaz/assets/js/vendor/jquery.sticky-kit.min.js" = "assets\js\theme\vendor\jquery.sticky-kit.min.js"
    "wp-content/themes/spaciaz/assets/js/frontend/text-editor.min.js" = "assets\js\theme\frontend\text-editor.min.js"
    "wp-content/themes/spaciaz/assets/js/frontend/nav-mobile.min.js" = "assets\js\theme\frontend\nav-mobile.min.js"
    "wp-content/themes/spaciaz/inc/megamenu/assets/js/frontend.js" = "assets\js\theme\megamenu-frontend.js"
    "wp-content/themes/spaciaz/assets/js/frontend/login.js" = "assets\js\theme\frontend\login.js"
    "wp-content/themes/spaciaz/assets/js/elementor-swiper.min.js" = "assets\js\theme\elementor\elementor-swiper.min.js"
    "wp-content/themes/spaciaz/assets/js/elementor/posts-grid.min.js" = "assets\js\theme\elementor\posts-grid.min.js"
    "wp-content/themes/spaciaz/assets/js/elementor/projects-scroll.min.js" = "assets\js\theme\elementor\projects-scroll.min.js"
    "wp-content/themes/spaciaz/assets/js/elementor/services.min.js" = "assets\js\theme\elementor\services.min.js"
    "wp-content/themes/spaciaz/assets/js/elementor/team-box.min.js" = "assets\js\theme\elementor\team-box.min.js"
    "wp-content/themes/spaciaz/assets/js/elementor/testimonial.min.js" = "assets\js\theme\elementor\testimonial.min.js"
    "wp-content/themes/spaciaz/assets/js/elementor/video.min.js" = "assets\js\theme\elementor\video.min.js"
    "wp-content/themes/spaciaz/assets/js/elementor-frontend.js" = "assets\js\theme\elementor\elementor-frontend.js"
    "wp-content/themes/spaciaz/assets/js/vendor/elementor-sticky.js" = "assets\js\theme\vendor\elementor-sticky.js"
    "wp-content/themes/spaciaz/assets/js/vendor/sticky.js" = "assets\js\theme\vendor\sticky.js"
    "wp-content/themes/spaciaz/inc/elementor/motion-fx/assets/main.js" = "assets\js\theme\motion-fx-main.js"
    "wp-content/themes/spaciaz/assets/js/vendor/jarallax.min.js" = "assets\js\theme\vendor\jarallax.min.js"
    "wp-content/themes/spaciaz/inc/elementor/background-shape/background-shape.js" = "assets\js\theme\background-shape.js"
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  TRISTAR ASSET DOWNLOAD SCRIPT" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Download CSS Files
Write-Host "Downloading CSS files..." -ForegroundColor Yellow
$cssCount = 0
foreach ($file in $cssFiles.GetEnumerator()) {
    $url = "$baseUrl/$($file.Key)"
    $destination = Join-Path $PSScriptRoot $file.Value
    
    try {
        Write-Host "  Downloading: $($file.Key)" -ForegroundColor Gray
        Invoke-WebRequest -Uri $url -OutFile $destination -ErrorAction Stop
        $cssCount++
        Write-Host "    ✓ Saved to: $($file.Value)" -ForegroundColor Green
    }
    catch {
        Write-Host "    ✗ Failed: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`nDownloading JavaScript files..." -ForegroundColor Yellow
$jsCount = 0
foreach ($file in $jsFiles.GetEnumerator()) {
    $url = "$baseUrl/$($file.Key)"
    $destination = Join-Path $PSScriptRoot $file.Value
    
    try {
        Write-Host "  Downloading: $($file.Key)" -ForegroundColor Gray
        Invoke-WebRequest -Uri $url -OutFile $destination -ErrorAction Stop
        $jsCount++
        Write-Host "    ✓ Saved to: $($file.Value)" -ForegroundColor Green
    }
    catch {
        Write-Host "    ✗ Failed: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  DOWNLOAD COMPLETE" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "CSS files downloaded: $cssCount / $($cssFiles.Count)" -ForegroundColor Green
Write-Host "JS files downloaded: $jsCount / $($jsFiles.Count)" -ForegroundColor Green
Write-Host "`nNext step: Update index.html to use local files" -ForegroundColor Yellow
Write-Host "See UPDATE_REFERENCES.md for instructions`n" -ForegroundColor Yellow
