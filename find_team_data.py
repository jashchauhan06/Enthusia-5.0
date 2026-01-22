import glob
import os

# Use absolute path for search to be safe, or relative to cwd
search_path = r"public/sitnovate-app/assets/*.js"
files = glob.glob(search_path)

targets = ["Abhani", "Raipurkar", "Team"]

print(f"Searching in {search_path}...")
for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            found = False
            for t in targets:
                if t in content:
                    if not found:
                         print(f"\n--- Found matches in {os.path.basename(f)} ---")
                         found = True
                    print(f"MATCH: '{t}'")
                    idx = content.find(t)
                    start = max(0, idx - 300)
                    end = min(len(content), idx + 800)
                    print(f"CONTEXT wrapped: ...{content[start:end]}...")
    except Exception as e:
        print(f"Error reading {f}: {e}")
