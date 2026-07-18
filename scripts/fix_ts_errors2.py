TYPES_FILE = "/Users/suvanghosh/LawizerFE/lib/types/service.ts"
with open(TYPES_FILE, 'r') as f:
    content = f.read()

content = content.replace("  title: string;\n  description: string;", "  title?: string;\n  description: string;")
content = content.replace("  icon?: string;\n}", "  icon?: string;\n  type?: string;\n}")

with open(TYPES_FILE, 'w') as f:
    f.write(content)
print("Updated types.")
