import os
import json
import glob

DATA_DIR = "/Users/suvanghosh/LawizerFE/lib/data/services"
PAGES_DIR = "/Users/suvanghosh/LawizerFE/app/(services)"
TYPES_FILE = "/Users/suvanghosh/LawizerFE/lib/types/service.ts"

# 1. Create the TypeScript types
types_content = """export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface SectionBlock {
  title: string;
  content: string;
}

export interface ServiceTheme {
  orb1?: string;
  orb2?: string;
  heroBg?: string;
  iconBg?: string;
  badgeText?: string;
}

export interface ServiceData {
  title: string;
  subtitle: string;
  badgeText: string;
  icon: string;
  serviceID: string;
  contentTitle: string;
  contentDescription: string;
  section1Title: string;
  price: number;
  originalPrice?: number;
  theme?: ServiceTheme;
  primaryColor: string;
  primaryBg: string;
  primaryHoverBg: string;
  benefits: BenefitItem[];
  faqs: FAQItem[];
  sections: SectionBlock[];
}
"""

os.makedirs(os.path.dirname(TYPES_FILE), exist_ok=True)
with open(TYPES_FILE, "w") as f:
    f.write(types_content)

# 2. Convert all .json to .ts
json_files = glob.glob(os.path.join(DATA_DIR, "**/*.json"), recursive=True)

DEFAULT_HERO_BG = "bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065]"

for json_file in json_files:
    with open(json_file, 'r') as f:
        data = json.load(f)
    
    # Inject default heroBg into the theme for all existing items so they don't break visually
    for key, value in data.items():
        if "theme" not in value:
            value["theme"] = {}
        if "heroBg" not in value["theme"]:
            value["theme"]["heroBg"] = DEFAULT_HERO_BG
            
    # Write TS file
    ts_file = json_file.replace(".json", ".ts")
    ts_content = f'import {{ ServiceData }} from "@/lib/types/service";\n\n'
    ts_content += f'export const servicesData: Record<string, ServiceData> = '
    ts_content += json.dumps(data, indent=2)
    ts_content += ';\n'
    
    with open(ts_file, 'w') as f:
        f.write(ts_content)
        
    os.remove(json_file)

# 3. Update all page.tsx files to import .ts instead of .json
page_files = glob.glob(os.path.join(PAGES_DIR, "**/page.tsx"), recursive=True)
for page_file in page_files:
    with open(page_file, 'r') as f:
        content = f.read()
    
    if "import categoryDataRaw from" in content:
        # replace import categoryDataRaw from "@/lib/data/services/XYZ.json";
        # with import { servicesData } from "@/lib/data/services/XYZ";
        import_line_start = content.find("import categoryDataRaw from")
        if import_line_start != -1:
            import_line_end = content.find(";", import_line_start)
            old_import = content[import_line_start:import_line_end+1]
            
            # extract path
            path = old_import.split('"')[1]
            new_path = path.replace(".json", "")
            new_import = f'import {{ servicesData }} from "{new_path}";'
            
            content = content.replace(old_import, new_import)
            content = content.replace("const servicesDB: Record<string, any> = categoryDataRaw;", "const servicesDB = servicesData;")
            
            with open(page_file, 'w') as f:
                f.write(content)

print(f"Converted {len(json_files)} files to TypeScript successfully!")
