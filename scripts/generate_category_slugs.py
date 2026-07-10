import os
import json

SERVICES_DIR = "/Users/suvanghosh/LawizerFE/app/(services)"
DATA_FILE = "/Users/suvanghosh/LawizerFE/lib/data/services-data.json"

with open(DATA_FILE, 'r') as f:
    services_db = json.load(f)

# Extract unique prefixes
prefixes = set()
for full_slug in services_db.keys():
    # Split by / and take everything except the last part
    parts = full_slug.split("/")
    if len(parts) > 1:
        prefix = "/".join(parts[:-1])
        prefixes.add(prefix)

TEMPLATE = """import DynamicServicePageTemplate from "@/components/client/DynamicServicePageTemplate";
import servicesDataRaw from "@/lib/data/services-data.json";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fullSlug = `{prefix}/${slug}`;
  
  const servicesDB: Record<string, any> = servicesDataRaw;
  const pageData = servicesDB[fullSlug];
  
  return <DynamicServicePageTemplate pageData={pageData} />;
}
"""

count = 0
for prefix in prefixes:
    target_dir = os.path.join(SERVICES_DIR, prefix, "[slug]")
    os.makedirs(target_dir, exist_ok=True)
    
    page_path = os.path.join(target_dir, "page.tsx")
    with open(page_path, "w") as f:
        f.write(TEMPLATE.replace("{prefix}", prefix))
    count += 1

print(f"Created {count} category-specific dynamic routes!")
