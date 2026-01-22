import os

path = r"public/sitnovate-app/assets/index-CFGrlOPU.js"

if not os.path.exists(path):
    print(f"Error: File not found at {path}")
    exit(1)

with open(path, 'rb') as f:
    content = f.read()

# Target string part: The end of Jash Chauhan's entry
# We know from debug that it ends with the linkedin url and a closing brace.
search_bytes = b'linkedin:"https://www.linkedin.com/in/jash-chauhan-2073a0294/"}'

if search_bytes not in content:
    print("Exact match not found. Debugging context...")
    # Try finding the linkedin URL part only
    url_part = b'in/jash-chauhan-2073a0294/'
    idx = content.find(url_part)
    if idx != -1:
         print(f"Found URL part at {idx}. Context around it:")
         print(content[idx:idx+100])
    exit(1)

print(f"Found match at index: {content.find(search_bytes)}")

# Construct replacement
# We want to keep the matched part (end of Jash's object) and append the new objects.
# Note: Using literal newline \n for the backtick strings, matching the file's style.

new_members_bytes = (
    b',{'
    b'text:`Saksham Wadhankar\nWeb Developer`,'
    b'image:"/sitnovate-app/assets/images/Team/sakshamwadhankar.webp",'
    b'linkedin:"https://www.linkedin.com/in/saksham-wadhankar"'
    b'},{'
    b'text:`Om Rai\nWeb Developer`,'
    b'image:"/sitnovate-app/assets/images/Team/OmRai.webp",'
    b'linkedin:"https://www.linkedin.com/in/om-rai-07a368377/"'
    b'}'
)

# Replace occurrence
replacement = search_bytes + new_members_bytes
new_content = content.replace(search_bytes, replacement)

with open(path, 'wb') as f:
    f.write(new_content)

print("Patch applied successfully.")
