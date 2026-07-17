TYPES_FILE = "/Users/suvanghosh/LawizerFE/lib/types/service.ts"
with open(TYPES_FILE, 'r') as f:
    content = f.read()

content = content.replace("  theme?: ServiceTheme;\n  primaryColor: string;", "  theme?: ServiceTheme;\n  addons?: any;\n  primaryColor: string;")

with open(TYPES_FILE, 'w') as f:
    f.write(content)
print("Updated types.")
