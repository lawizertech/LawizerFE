TYPES_FILE = "/Users/suvanghosh/LawizerFE/lib/types/service.ts"
with open(TYPES_FILE, 'r') as f:
    content = f.read()

content = content.replace("  type?: string;\n}", "  type?: string;\n  data?: any;\n}")

with open(TYPES_FILE, 'w') as f:
    f.write(content)
print("Updated types.")
