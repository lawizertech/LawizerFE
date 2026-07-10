import os
import glob
import re

TS_FILES = glob.glob("/Users/suvanghosh/LawizerFE/lib/data/services/**/*.ts", recursive=True)

for ts_file in TS_FILES:
    with open(ts_file, 'r') as f:
        content = f.read()
    
    # Replace "q": with "question":
    content = re.sub(r'"q":\s*', '"question": ', content)
    # Replace "a": with "answer":
    content = re.sub(r'"a":\s*', '"answer": ', content)
    # Replace "text": with "description": for benefits
    content = re.sub(r'"text":\s*', '"description": ', content)
    
    with open(ts_file, 'w') as f:
        f.write(content)

# Update types file to allow 'icon' on SectionBlock
TYPES_FILE = "/Users/suvanghosh/LawizerFE/lib/types/service.ts"
with open(TYPES_FILE, 'r') as f:
    types_content = f.read()

types_content = types_content.replace(
"""export interface SectionBlock {
  title: string;
  content: string;
}""",
"""export interface SectionBlock {
  title: string;
  content: string;
  icon?: string;
}"""
)

with open(TYPES_FILE, 'w') as f:
    f.write(types_content)

print("Fixed TS errors.")
