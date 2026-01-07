import re
import os

INPUT_FILE = "index_fixed.html"
OUTPUT_FILE = "index_final.html"

def decode_cf_email(cf_hash):
    try:
        r = int(cf_hash[:2], 16)
        email = ''.join([chr(int(cf_hash[i:i+2], 16) ^ r) for i in range(2, len(cf_hash), 2)])
        return email
    except:
        return "contact@example.com"

def main():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Fix Cloudflare Email Protection
    # Pattern: <a href="/cdn-cgi/l/email-protection" ... data-cfemail="HASH">...</a>
    # or just the class.
    
    def repl_email(match):
        cf_hash = match.group(1)
        email = decode_cf_email(cf_hash)
        return f'<a href="mailto:{email}">{email}</a>'

    # Regex for the anchor tag version
    # <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="63101613130c111723061b020e130f064d000c0e">[email&#160;protected]</a>
    html = re.sub(r'<a href="/cdn-cgi/l/email-protection"[^>]*data-cfemail="([a-fA-F0-9]+)"[^>]*>.*?</a>', repl_email, html)
    
    # Regex for just the span version if embedded
    # <span class="__cf_email__" data-cfemail="...">...</span>
    html = re.sub(r'<span class="__cf_email__"[^>]*data-cfemail="([a-fA-F0-9]+)"[^>]*>.*?</span>', repl_email, html)
    
    # Also manual fix for the specific ones we saw if regex misses complexity
    # We saw [email protected] text. The regex above covers the tag.
    
    # 2. Neutralize Demo Links
    # Replace https://demo2.wpopal.com/spaciaz/contact/ with index.html (self)
    # Replace https://demo2.wpopal.com/spaciaz/ with index.html
    # Replace others with #
    
    def repl_link(match):
        url = match.group(1)
        if "contact" in url:
            return 'href="index.html"'
        if url.strip() == "https://demo2.wpopal.com/spaciaz" or url.strip() == "https://demo2.wpopal.com/spaciaz/":
             return 'href="index.html"'
        return 'href="#"'

    html = re.sub(r'href="(https://demo2\.wpopal\.com/[^"]*)"', repl_link, html)
    
    # 3. Clean empty scripts/styles that might be left over from basic string replacement
    # <script></script> or <script>  </script>
    # html = re.sub(r'<script>\s*</script>', '', html) # dangerous if src used? No, regular scripts have src.
    
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(html)
    
    print("Cleanup Complete.")

if __name__ == "__main__":
    main()
