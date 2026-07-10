import os
import json

DATA_FILE = "/Users/suvanghosh/LawizerFE/lib/data/services-data.json"
OUTPUT_DIR = "/Users/suvanghosh/LawizerFE/lib/data/services"
PAGES_DIR = "/Users/suvanghosh/LawizerFE/app/(services)"

with open(DATA_FILE, 'r') as f:
    services_db = json.load(f)

# Split data by prefix
split_data = {}
for full_slug, data in services_db.items():
    parts = full_slug.split("/")
    prefix = "/".join(parts[:-1])
    slug = parts[-1]
    
    if prefix not in split_data:
        split_data[prefix] = {}
        
    split_data[prefix][slug] = data

# Write out the new JSON files and update the page.tsx files
for prefix, records in split_data.items():
    # 1. Write the JSON file
    json_path = os.path.join(OUTPUT_DIR, f"{prefix}.json")
    os.makedirs(os.path.dirname(json_path), exist_ok=True)
    with open(json_path, 'w') as f:
        json.dump(records, f, indent=2)
        
    # 2. Update the page.tsx for this prefix to import the new JSON
    # The relative path from app/(services)/{prefix}/[slug]/page.tsx to lib/data/services/{prefix}.json
    # Number of parts in prefix + 3 (for app/(services), [slug]) -> actually let's just use absolute alias @/lib/...
    page_path = os.path.join(PAGES_DIR, prefix, "[slug]", "page.tsx")
    
    if os.path.exists(page_path):
        with open(page_path, 'r') as f:
            content = f.read()
            
        # Replace the import and the data lookup
        old_import = 'import servicesDataRaw from "@/lib/data/services-data.json";'
        new_import = f'import categoryDataRaw from "@/lib/data/services/{prefix}.json";'
        
        content = content.replace(old_import, new_import)
        
        # Replace the lookup
        # Old: const fullSlug = `...`; const pageData = servicesDB[fullSlug];
        # New: const pageData = servicesDB[slug];
        content = content.replace(f'const fullSlug = `{prefix}/${{slug}}`;', '')
        content = content.replace('const servicesDB: Record<string, any> = servicesDataRaw;', 'const servicesDB: Record<string, any> = categoryDataRaw;')
        content = content.replace('const pageData = servicesDB[fullSlug];', 'const pageData = servicesDB[slug];')
        
        with open(page_path, 'w') as f:
            f.write(content)

print("Data successfully split and routes updated!")
