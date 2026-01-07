import os
import re

files_to_fix = [
    'about-us.html',
    'buy-property.html',
    'sell-property.html',
    'rent-property.html',
    'pre-lease-services.html',
    'plotting-services.html',
    'mandate.html',
    'legal-services.html',
    'contact.html',
    'projects.html',
    'index.html'
]

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    # 1. Standardize scrollup icon
    if '<i aria-hidden="true" class="spaciaz-icon-arrow-up"></i>' in content:
        content = re.sub(
            r'<a href="#" class="scrollup"><i aria-hidden="true" class="spaciaz-icon-arrow-up"></i></a>',
            r'<a href="#" class="scrollup" aria-label="Scroll to top"><img src="assets/svg/arrow-up.svg" aria-hidden="true" alt="" style="width: 1.5em; height: 1.5em; position: relative; top: 25px; left: 25px;"></a>',
            content
        )
        modified = True

    # 2. Add counter.js if not present
    if 'counter.js' not in content and 'elementor-counter-number' in content:
        insertion_point = '<script src="assets/js/background-shape_89.js" id="spaciaz-background-shape-js"></script>'
        if insertion_point in content:
            content = content.replace(
                insertion_point,
                insertion_point + '\n    <script src="assets/js/counter.js" id="tristar-counter-js"></script>'
            )
            modified = True
        else:
            # Fallback insertion before </body>
            content = content.replace('</body>', '    <script src="assets/js/counter.js" id="tristar-counter-js"></script>\n</body>')
            modified = True

    # 3. Standardize bars icon (hamburger)
    if 'spaciaz-icon-bars' in content:
        content = re.sub(
            r'<i aria-hidden="true" class="spaciaz-icon- spaciaz-icon-bars"></i>',
            r'<img src="assets/svg/bars.svg" aria-hidden="true" alt="" style="width: 1.5em; height: 1.5em;">',
            content
        )
        modified = True

    # 4. Standardize close icon (times)
    if 'spaciaz-icon-times' in content:
        content = re.sub(
            r'<i aria-hidden="true" class="spaciaz-icon-times"></i>',
            r'<img src="assets/svg/close.svg" aria-hidden="true" alt="" style="width: 1.2em; height: 1.2em;">',
            content
        )
        modified = True

    # 5. Fix Navigation Links (Common ones)
    for old_href, new_href in [
        ('href="index.html"', 'href="/index.html"'),
        ('href="../"', 'href="/index.html"'),
        ('href="about-us.html"', 'href="/about-us.html"'),
        ('href="projects.html"', 'href="/projects.html"'),
        ('href="contact.html"', 'href="/contact.html"'),
        ('href="buy-property.html"', 'href="/buy-property.html"'),
        ('href="sell-property.html"', 'href="/sell-property.html"'),
        ('href="rent-property.html"', 'href="/rent-property.html"'),
        ('href="mandate.html"', 'href="/mandate.html"'),
        ('href="pre-lease-services.html"', 'href="/pre-lease-services.html"'),
        ('href="plotting-services.html"', 'href="/plotting-services.html"'),
        ('href="legal-services.html"', 'href="/legal-services.html"')
    ]:
        if old_href in content:
            content = content.replace(old_href, new_href)
            modified = True
    
    # 6. Branding fixes (Spaciaz -> Tristar Realtors)
    if '>Spaciaz</a>' in content:
        content = content.replace('>Spaciaz</a>', '>Tristar Realtors</a>')
        modified = True
    if 'spaciaz@example.com' in content:
        content = content.replace('spaciaz@example.com', 'tristarrealtors03@gmail.com')
        modified = True
    if 'alt="Spaciaz"' in content:
        content = re.sub(r'alt="Spaciaz"', r'alt="Tristar Realtors"', content)
        modified = True

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filepath}")
    else:
        print(f"No changes needed for {filepath}")

for filename in files_to_fix:
    if os.path.exists(filename):
        fix_file(filename)
    else:
        print(f"Warning: {filename} not found")
