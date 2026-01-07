import os
import re
import urllib.request
import urllib.parse
import shutil
import hashlib
import ssl

# SSL Context to ignore errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# Configuration
BASE_URL = "https://demo2.wpopal.com"
INPUT_FILE = "index.html"
OUTPUT_FILE = "index_fixed.html"
ASSET_DIR = "assets"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"

# Arrays to hold merged content
css_vendor = []
css_custom = []
js_head = []
js_vendor = []
js_custom = []

# Asset maps to avoid duplicates
downloaded_assets = {}

def download_file(url, local_path):
    if url in downloaded_assets:
        return downloaded_assets[url]
    
    # Handle protocol relative urls
    if url.startswith("//"):
        url = "https:" + url
    
    # Resolve against BASE_URL if relative (basic check)
    if not url.startswith("http") and not url.startswith("data:"):
         # This is simplistic, assuming root-relative or base-relative
         if url.startswith("/"):
             url = BASE_URL + url
         else:
             # Just try appending to BASE_URL/spaciaz/contact/ ? No we don't know the relative base.
             # Assuming global absolute for now or skipping.
             pass

    try:
        print(f"Downloading: {url}...")
        req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
        with urllib.request.urlopen(req, context=ctx) as response:
            data = response.read()
            
            # Create dir
            dirname = os.path.dirname(local_path)
            if dirname:
                os.makedirs(dirname, exist_ok=True)
            
            with open(local_path, "wb") as f:
                f.write(data)
            
            print(f"Saved to: {local_path}")
            downloaded_assets[url] = local_path
            return local_path, data
            
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        return None, None

def process_css_content(css_content, css_source_url):
    css_text = css_content.decode('utf-8', errors='ignore')

    def replace_url(match):
        full_match = match.group(0)
        quote = match.group(1) if match.group(1) else ""
        url = match.group(2).strip("'\"")
        
        if url.startswith("data:") or url.startswith("#"):
            return full_match
        
        # Resolve absolute URL
        absolute_url = urllib.parse.urljoin(css_source_url, url)
        
        # Determine strict file type
        path_parts = urllib.parse.urlparse(absolute_url).path
        ext = os.path.splitext(path_parts)[1].lower()
        
        if ext in ['.woff', '.woff2', '.ttf', '.eot', '.otf']:
            sub_folder = "fonts"
        elif ext in ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp']:
            sub_folder = "img"
        else:
            sub_folder = "misc"
            
        filename = os.path.basename(path_parts)
        # Unique filename
        hash_name = hashlib.md5(absolute_url.encode()).hexdigest()[:8]
        local_filename = f"{hash_name}_{filename}"
        local_rel_path = f"{sub_folder}/{local_filename}"
        local_full_path = f"{ASSET_DIR}/{local_rel_path}"
        
        # Download (Recursively download assets found in CSS)
        download_file(absolute_url, local_full_path)
        
        # Return new relative url
        # CSS will be in assets/css/ so we need ../
        return f"url('../{local_rel_path}')"

    pattern = re.compile(r'url\(\s*(["\']?)([^)"\']+)\1\s*\)', re.IGNORECASE)
    new_content = pattern.sub(replace_url, css_text)
    return new_content

def main():
    if not os.path.exists(ASSET_DIR):
        os.makedirs(ASSET_DIR)
        
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Process Styles
    link_pattern = re.compile(r'<link[^>]*rel=[\'"]stylesheet[\'"][^>]*>', re.IGNORECASE)
    
    def handle_link(match):
        tag = match.group(0)
        href_match = re.search(r'href=[\'"](.*?)[\'"]', tag)
        if not href_match: return tag
        href = href_match.group(1)
        
        if "fonts.googleapis.com" in href: return tag 
        if "wp-content/plugins/opal-demo" in href: return "" 
        
        if href.startswith("//"): href = "https:" + href
        elif href.startswith("/"): href = BASE_URL + href

        is_vendor = False
        if "wp-content/plugins" in href or "wp-includes" in href or "swiper" in href or "font-awesome" in href:
            is_vendor = True
        if "spaciaz" in href and "theme" in href:
            is_vendor = False 
        if "elementor-post" in href:
            is_vendor = False 
        
        _path, data = download_file(href, "temp_css_download")
        if data:
            processed = process_css_content(data, href)
            if is_vendor:
                css_vendor.append(f"/* Source: {href} */\n{processed}")
            else:
                css_custom.append(f"/* Source: {href} */\n{processed}")
        return "" 

    html = link_pattern.sub(handle_link, html)

    # 1.1 Process Inline Styles 
    style_pattern = re.compile(r'<style[^>]*id=[\'"](.*?)[\'"][^>]*>(.*?)</style>', re.DOTALL | re.IGNORECASE)
    def handle_style(match):
        id_attr = match.group(1)
        content = match.group(2)
        if "global-styles-inline-css" in id_attr or "spaciaz-style-inline-css" in id_attr:
            css_custom.insert(0, f"/* Source: {id_attr} */\n{content}")
            return ""
        if "wp-emoji" in id_attr or "wp-img-auto-sizes" in id_attr:
             return "" 
        return match.group(0) 
    html = style_pattern.sub(handle_style, html)

    # 2. Process Scripts
    script_pattern = re.compile(r'<script([^>]*)>(.*?)</script>', re.DOTALL | re.IGNORECASE)
    def handle_script(match):
        attrs = match.group(1)
        content = match.group(2)
        src_match = re.search(r'src=[\'"](.*?)[\'"]', attrs)
        id_match = re.search(r'id=[\'"](.*?)[\'"]', attrs)
        id_attr = id_match.group(1) if id_match else ""

        if "wp-emoji" in id_attr or "wp-emoji" in content or "wp-embed" in attrs or "cdn-cgi" in attrs or "cdn-cgi" in content:
            return ""
            
        if src_match:
            src = src_match.group(1)
            if src.startswith("//"): src = "https:" + src
            elif src.startswith("/"): src = BASE_URL + src

            if "google-analytics" in src or "googletagmanager" in src: return "" 
            
            is_head_lib = False
            is_vendor_lib = False
            if "jquery.min.js" in src or "jquery-migrate" in src:
                is_head_lib = True
            elif "wp-content/plugins" in src or "wp-includes" in src:
                is_vendor_lib = True
            if "spaciaz/assets/js" in src:
                is_vendor_lib = False 
            if "elementor" in src:
                is_vendor_lib = True
            
            _path, data = download_file(src, "temp_js_download")
            if data:
                js_code = data.decode('utf-8', errors='ignore')
                if is_head_lib:
                    js_head.append(f"/* {src} */\n{js_code}")
                elif is_vendor_lib:
                    js_vendor.append(f"/* {src} */\n{js_code}")
                else:
                    js_custom.append(f"/* {src} */\n{js_code}")
            return "" 
        else:
            if "wp-emoji" in content: return ""
            return match.group(0)
    html = script_pattern.sub(handle_script, html)

    # 3. Images
    img_pattern = re.compile(r'<img[^>]+src=[\'"](.*?)[\'"][^>]*>', re.IGNORECASE)
    def handle_img(match):
        tag = match.group(0)
        src_match = re.search(r'src=[\'"](.*?)[\'"]', tag)
        if not src_match: return tag
        src = src_match.group(1)
        if src.startswith("data:"): return tag
        
        full_url = src
        if src.startswith("//"): full_url = "https:" + src
        elif src.startswith("/"): full_url = BASE_URL + src
        
        path_parts = urllib.parse.urlparse(full_url).path
        filename = os.path.basename(path_parts)
        if not filename: filename = "image.jpg"
        hash_name = hashlib.md5(full_url.encode()).hexdigest()[:8]
        local_name = f"{hash_name}_{filename}"
        local_path = f"{ASSET_DIR}/img/{local_name}"
        
        download_file(full_url, local_path)
        new_src = f"assets/img/{local_name}"
        return tag.replace(src, new_src)

    html = img_pattern.sub(handle_img, html)
    
    # 4. Save merged files
    os.makedirs(f"{ASSET_DIR}/css", exist_ok=True)
    os.makedirs(f"{ASSET_DIR}/js", exist_ok=True)

    with open(f"{ASSET_DIR}/css/vendor.css", "w", encoding="utf-8") as f:
        f.write("\n".join(css_vendor))
    with open(f"{ASSET_DIR}/css/style.css", "w", encoding="utf-8") as f:
        f.write("\n".join(css_custom))
    with open(f"{ASSET_DIR}/js/head-bundle.js", "w", encoding="utf-8") as f:
        f.write("\n".join(js_head))
    with open(f"{ASSET_DIR}/js/vendor.js", "w", encoding="utf-8") as f:
        f.write("\n".join(js_vendor))
    with open(f"{ASSET_DIR}/js/main.js", "w", encoding="utf-8") as f:
        f.write("\n".join(js_custom))

    # 5. Inject new tags
    style_block = '\n<link rel="stylesheet" href="assets/css/vendor.css">\n<link rel="stylesheet" href="assets/css/style.css">\n'
    js_head_block = '<script src="assets/js/head-bundle.js"></script>'
    
    # Simple replacement if </head> exists
    if "</head>" in html:
        html = html.replace("</head>", f"{style_block}{js_head_block}</head>")
    
    if "</body>" in html:
        html = html.replace("</body>", '<script src="assets/js/vendor.js"></script>\n<script src="assets/js/main.js"></script>\n</body>')
    
    html = re.sub(r'\n\s*\n', '\n', html)
    
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(html)
    
    print("Migration Complete.")

if __name__ == "__main__":
    main()
