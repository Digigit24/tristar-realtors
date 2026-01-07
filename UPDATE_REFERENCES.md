# Update File References Guide

## After Running download-assets.ps1

Once you've downloaded all the external assets using the PowerShell script, you'll need to update the references in `home-6/index.html` to point to your local files instead of the demo CDN.

---

## CSS File Reference Updates

### Find and Replace Pattern:

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css`
**REPLACE:** `../assets/css/plugins/elementor/swiper.min.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css`
**REPLACE:** `../assets/css/plugins/elementor/e-swiper.min.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/uploads/elementor/css/custom-frontend.min.css`
**REPLACE:** `../assets/css/uploads/elementor/custom-frontend.min.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/uploads/elementor/css/post-4.css`
**REPLACE:** `../assets/css/uploads/elementor/post-4.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/uploads/elementor/css/post-64.css`
**REPLACE:** `../assets/css/uploads/elementor/post-64.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/uploads/elementor/css/post-4773.css`
**REPLACE:** `../assets/css/uploads/elementor/post-4773.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/uploads/elementor/css/post-6350.css`
**REPLACE:** `../assets/css/uploads/elementor/post-6350.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/uploads/elementor/css/post-6354.css`
**REPLACE:** `../assets/css/uploads/elementor/post-6354.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/uploads/elementor/css/custom-widget-image-box.min.css`
**REPLACE:** `../assets/css/uploads/elementor/custom-widget-image-box.min.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/css/widget-spacer.min.css`
**REPLACE:** `../assets/css/plugins/elementor/widget-spacer.min.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/css/widget-image.min.css`
**REPLACE:** `../assets/css/plugins/elementor/widget-image.min.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/css/widget-heading.min.css`
**REPLACE:** `../assets/css/plugins/elementor/widget-heading.min.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/css/widget-counter.min.css`
**REPLACE:** `../assets/css/plugins/elementor/widget-counter.min.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css`
**REPLACE:** `../assets/css/plugins/elementor/widget-icon-list.min.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css`
**REPLACE:** `../assets/css/plugins/elementor/widget-social-icons.min.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css`
**REPLACE:** `../assets/css/plugins/elementor/elementor-icons.min.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.css`
**REPLACE:** `../assets/css/plugins/elementor/fa-brands.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.css`
**REPLACE:** `../assets/css/plugins/elementor/fontawesome.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.css`
**REPLACE:** `../assets/css/plugins/elementor/fa-solid.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/css/base/gutenberg-blocks.css`
**REPLACE:** `../assets/css/theme/gutenberg-blocks.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/css/libs/magnific-popup.css`
**REPLACE:** `../assets/css/theme/magnific-popup.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/css/base/elementor.css`
**REPLACE:** `../assets/css/theme/elementor.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/style.css`
**REPLACE:** `../assets/css/theme/theme-style.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/demo-child/style.css`
**REPLACE:** `../assets/css/theme/child-style.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/contact-form-7/includes/css/styles.css`
**REPLACE:** `../assets/css/plugins/contact-form-7/styles.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/header-footer-elementor/inc/widgets-css/frontend.css`
**REPLACE:** `../assets/css/plugins/header-footer-elementor/frontend.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/header-footer-elementor/assets/css/header-footer-elementor.css`
**REPLACE:** `../assets/css/plugins/header-footer-elementor/header-footer-elementor.css`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/opal-demo/style.css`
**REPLACE:** `../assets/css/plugins/opal-demo-style.css`

---

## JavaScript File Reference Updates

### Find and Replace Pattern:

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-includes/js/jquery/jquery.min.js`
**REPLACE:** `../assets/js/jquery/jquery.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-includes/js/jquery/jquery-migrate.min.js`
**REPLACE:** `../assets/js/jquery/jquery-migrate.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/js/frontend.min.js`
**REPLACE:** `../assets/js/plugins/elementor/frontend.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.min.js`
**REPLACE:** `../assets/js/plugins/elementor/jquery-numerator.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-includes/js/underscore.min.js`
**REPLACE:** `../assets/js/core/underscore.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-includes/js/wp-util.min.js`
**REPLACE:** `../assets/js/core/wp-util.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-includes/js/imagesloaded.min.js`
**REPLACE:** `../assets/js/core/imagesloaded.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/vendor/jquery.magnific-popup.min.js`
**REPLACE:** `../assets/js/theme/vendor/jquery.magnific-popup.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/frontend/main.min.js`
**REPLACE:** `../assets/js/theme/frontend/main.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/skip-link-focus-fix.min.js`
**REPLACE:** `../assets/js/theme/skip-link-focus-fix.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/frontend/search-popup.min.js`
**REPLACE:** `../assets/js/theme/frontend/search-popup.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/vendor/jquery.sticky-kit.min.js`
**REPLACE:** `../assets/js/theme/vendor/jquery.sticky-kit.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/frontend/text-editor.min.js`
**REPLACE:** `../assets/js/theme/frontend/text-editor.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/frontend/nav-mobile.min.js`
**REPLACE:** `../assets/js/theme/frontend/nav-mobile.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/inc/megamenu/assets/js/frontend.js`
**REPLACE:** `../assets/js/theme/megamenu-frontend.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/frontend/login.js`
**REPLACE:** `../assets/js/theme/frontend/login.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/elementor-swiper.min.js`
**REPLACE:** `../assets/js/theme/elementor/elementor-swiper.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/elementor/posts-grid.min.js`
**REPLACE:** `../assets/js/theme/elementor/posts-grid.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/elementor/projects-scroll.min.js`
**REPLACE:** `../assets/js/theme/elementor/projects-scroll.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/elementor/services.min.js`
**REPLACE:** `../assets/js/theme/elementor/services.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/elementor/team-box.min.js`
**REPLACE:** `../assets/js/theme/elementor/team-box.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/elementor/testimonial.min.js`
**REPLACE:** `../assets/js/theme/elementor/testimonial.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/elementor/video.min.js`
**REPLACE:** `../assets/js/theme/elementor/video.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/elementor-frontend.js`
**REPLACE:** `../assets/js/theme/elementor/elementor-frontend.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/vendor/elementor-sticky.js`
**REPLACE:** `../assets/js/theme/vendor/elementor-sticky.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/vendor/sticky.js`
**REPLACE:** `../assets/js/theme/vendor/sticky.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/inc/elementor/motion-fx/assets/main.js`
**REPLACE:** `../assets/js/theme/motion-fx-main.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/vendor/jarallax.min.js`
**REPLACE:** `../assets/js/theme/vendor/jarallax.min.js`

**FIND:** `https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/inc/elementor/background-shape/background-shape.js`
**REPLACE:** `../assets/js/theme/background-shape.js`

---

## Quick Method: Use Find & Replace in VS Code

1. Open `home-6/index.html` in VS Code
2. Press `Ctrl + H` to open Find & Replace
3. Enable "Use Regular Expression" (the `.*` icon)
4. Use this pattern:

**FIND:**

```
https://demo2\.wpopal\.com/spaciaz/
```

**REPLACE:**

```
../assets/
```

5. Then manually adjust the paths to match the new folder structure

---

## Verification Checklist

After updating all references:

- [ ] All CSS files load correctly (check browser DevTools Network tab)
- [ ] All JS files load correctly (check browser DevTools Network tab)
- [ ] No 404 errors in console
- [ ] Website layout appears identical to original
- [ ] All animations and interactions work
- [ ] Mobile menu functions properly
- [ ] All hover effects work
- [ ] Lightbox/popup functionality works
- [ ] Carousel/slider functionality works

---

## Troubleshooting

If something doesn't work:

1. **Check file paths:** Ensure the relative path `../assets/` is correct based on your HTML file location
2. **Check file names:** Ensure downloaded files match the names in the HTML
3. **Check browser console:** Look for specific errors about missing files
4. **Verify downloads:** Ensure all files were downloaded successfully (check file sizes)
5. **Clear cache:** Hard refresh your browser (Ctrl + Shift + R)

---

## Final Note

After completing these updates, your website will be 100% self-hosted with no external dependencies on demo2.wpopal.com!
