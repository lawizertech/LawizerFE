import os
import json
import shutil

SERVICES_DIR = "/Users/suvanghosh/LawizerFE/app/(services)"
DATA_FILE = "/Users/suvanghosh/LawizerFE/lib/data/services-data.json"

with open(DATA_FILE, 'r') as f:
    services_db = json.load(f)

deleted_count = 0

for slug in services_db.keys():
    folder_path = os.path.join(SERVICES_DIR, slug)
    page_path = os.path.join(folder_path, "page.tsx")
    
    if os.path.exists(page_path):
        os.remove(page_path)
        deleted_count += 1
        
        # Try to remove the directory if it's empty
        try:
            os.rmdir(folder_path)
        except OSError:
            pass # Not empty, contains layout.tsx or other files

print(f"Deleted {deleted_count} duplicate page.tsx files!")
