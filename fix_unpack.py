"""Fix unpacking in all generator files"""
import os
import re

gen_dir = r"e:\Project\how to\generators"
for f in os.listdir(gen_dir):
    if f.endswith(".py"):
        path = os.path.join(gen_dir, f)
        with open(path, "r", encoding="utf-8") as file:
            content = file.read()
        
        # Replace the for loop unpacking with a safe unpack
        old_pattern = r"for sub, title, prob, dont, check, risk in items:"
        new_pattern = """for item in items:
        if len(item) == 5:
            sub, title, prob, check, risk = item
            dont = prob
        elif len(item) == 6:
            sub, title, prob, dont, check, risk = item"""
        
        if re.search(old_pattern, content):
            content = re.sub(old_pattern, new_pattern, content)
            with open(path, "w", encoding="utf-8") as file:
                file.write(content)
            print(f"Fixed {f}")
        else:
            print(f"Skipped {f}")
