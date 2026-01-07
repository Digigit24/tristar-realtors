
import os
import re

root_dir = r"d:\tristar-new"

scrollup_css = """
    <style>
        /* Scroll Up Button Proper Styling */
        .scrollup {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
        }
        .scrollup img {
            position: static !important;
            top: auto !important;
            left: auto !important;
            margin: 0 !important;
            width: 1.5em !important;
            height: 1.5em !important;
            filter: brightness(0) invert(1) !important; 
        }
    </style>
"""

# Regex for the bad inline style
bad_style_pattern = r'\s*style="width:\s*1\.5em;\s*height:\s*1\.5em;\s*position:\s*relative;\s*top:\s*25px;\s*left:\s*25px;"'
# Also matching variations without spaces just in case, but previous run likely caught most.
# Let's use a broader regex for the style content on that specific image if needed, but precise is safer.

def fix_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            
        original_content = content
        
        # 1. Remove inline style from the arrow-up.svg image
        # This matches the specific arrow-up.svg image and removes the style attribute if it contains the known bad values.
        # Check if previous run already did it? 
        # Yes, but let's be sure.
        
        # We can also just look for the style string if we are sure it's unique to that element (it likely is).
        if re.search(bad_style_pattern, content):
            content = re.sub(bad_style_pattern, "", content)
            
        # 2. Inject CSS if not present
        if "Scroll Up Button Proper Styling" not in content:
            if "</head>" in content:
                content = content.replace("</head>", scrollup_css + "</head>")
            else:
                print(f"Warning: No </head> found in {file_path}")

        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated: {file_path}")
        else:
            print(f"No changes needed for: {file_path}")

    except Exception as e:
        print(f"Error processing {file_path}: {e}")

for dirpath, dirs, files in os.walk(root_dir):
    if ".git" in dirs:
        dirs.remove(".git")
    
    for filename in files:
        if filename.endswith(".html"):
            fix_file(os.path.join(dirpath, filename))
