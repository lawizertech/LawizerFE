import os
import re
import json

SERVICES_DIR = "/Users/suvanghosh/LawizerFE/app/(services)"
OUTPUT_FILE = "/Users/suvanghosh/LawizerFE/lib/data/services-data.json"

def extract_string(pattern, content):
    match = re.search(pattern, content)
    return match.group(1) if match else ""

def extract_number(pattern, content):
    match = re.search(pattern, content)
    return int(re.sub(r'[,]', '', match.group(1))) if match else 0

def extract_array_of_objects(array_name, content):
    pattern = rf'const {array_name} = \[\s*([\s\S]*?)\s*\] (satisfies|;)'
    match = re.search(pattern, content)
    if not match:
        return []
    
    # Try to parse the array contents (rough parsing)
    array_content = match.group(1)
    # Split by '{' and '}'
    objects = []
    for obj_match in re.finditer(r'\{([^\}]+)\}', array_content):
        obj_str = obj_match.group(1)
        obj = {}
        for prop_match in re.finditer(r'(\w+):\s*(["\'])(.*?)\2', obj_str):
            obj[prop_match.group(1)] = prop_match.group(3)
        if obj:
            objects.append(obj)
    return objects

def extract_sections(content):
    pattern = r'const sections = \[\s*([\s\S]*?)\s*\] satisfies'
    match = re.search(pattern, content)
    if not match:
        return []
    
    # Very rough parsing since sections contain nested arrays (data: variable_name)
    sections = []
    array_content = match.group(1)
    
    for obj_match in re.finditer(r'\{([^\}]+)\}', array_content):
        obj_str = obj_match.group(1)
        title = extract_string(r'title:\s*["\']([^"\']+)["\']', obj_str)
        icon = extract_string(r'icon:\s*["\']([^"\']+)["\']', obj_str)
        type_ = extract_string(r'type:\s*["\']([^"\']+)["\']', obj_str)
        data_var = extract_string(r'data:\s*(\w+)', obj_str)
        
        # Now find the data_var array in the content
        data_list = []
        if data_var:
            data_pattern = rf'const {data_var} = \[\s*([\s\S]*?)\s*\]( satisfies|;)'
            data_match = re.search(data_pattern, content)
            if data_match:
                raw_items = re.findall(r'["\'](.*?)["\']', data_match.group(1))
                data_list = raw_items
        else:
            # Maybe it's defined inline: data: [ "a", "b" ]
            inline_data_match = re.search(r'data:\s*\[\s*([\s\S]*?)\s*\]', obj_str)
            if inline_data_match:
                raw_items = re.findall(r'["\'](.*?)["\']', inline_data_match.group(1))
                data_list = raw_items
        
        if title:
            sections.append({
                "title": title,
                "icon": icon,
                "type": type_,
                "data": data_list
            })
            
    return sections

def extract_addons(content):
    # Just extract the labels for addons, icons will be assigned automatically based on label
    labels = []
    for match in re.finditer(r'label:\s*["\']([^"\']+)["\']', content):
        labels.append(match.group(1))
    return labels

def process_file(filepath, slug):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check if this is a standard service page
    if "ServicePageLayout" not in content or "HeroWithAddons" not in content:
        return None
        
    data = {}
    
    # Props passed to ServicePageLayout
    data['title'] = extract_string(r'title=["\']([^"\']+)["\']', content)
    data['subtitle'] = extract_string(r'subtitle=["\']([^"\']+)["\']', content)
    data['badgeText'] = extract_string(r'badgeText=["\']([^"\']+)["\']', content)
    data['icon'] = extract_string(r'icon=["\']([^"\']+)["\']', content)
    data['serviceID'] = extract_string(r'serviceID=["\']([^"\']+)["\']', content)
    data['contentTitle'] = extract_string(r'contentTitle=["\']([^"\']+)["\']', content)
    data['contentDescription'] = extract_string(r'contentDescription=["\']([^"\']+)["\']', content)
    data['section1Title'] = extract_string(r'section1Title=["\']([^"\']+)["\']', content)
    
    # Prices
    data['price'] = extract_number(r'@ Rs\.\s*([\d,]+)', content)
    data['originalPrice'] = extract_number(r'₹([\d,]+)', content)
    
    # Theme colors
    data['theme'] = {
        'orb1': extract_string(r'orb1:\s*["\']([^"\']+)["\']', content),
        'orb2': extract_string(r'orb2:\s*["\']([^"\']+)["\']', content),
        'iconBg': extract_string(r'iconBg:\s*["\']([^"\']+)["\']', content),
        'badgeText': extract_string(r'badgeText:\s*["\']([^"\']+)["\']', content),
    }
    data['primaryColor'] = extract_string(r'primaryColor=["\']([^"\']+)["\']', content)
    data['primaryBg'] = extract_string(r'primaryBg=["\']([^"\']+)["\']', content)
    data['primaryHoverBg'] = extract_string(r'primaryHoverBg=["\']([^"\']+)["\']', content)
    
    # Arrays
    data['benefits'] = extract_array_of_objects('benefits', content)
    data['faqs'] = extract_array_of_objects('faqs', content)
    data['sections'] = extract_sections(content)
    data['addons'] = extract_addons(content)
    
    return data

services_db = {}

for root, _, files in os.walk(SERVICES_DIR):
    for file in files:
        if file == "page.tsx":
            filepath = os.path.join(root, file)
            # Calculate slug string
            rel_path = os.path.relpath(root, SERVICES_DIR)
            if rel_path == ".":
                continue # Skip the root (services) folder itself
                
            slug = rel_path
            
            # Extract
            data = process_file(filepath, slug)
            if data and data['title']:
                services_db[slug] = data

# Ensure lib/data exists
os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
with open(OUTPUT_FILE, 'w') as f:
    json.dump(services_db, f, indent=2)

print(f"Extracted {len(services_db)} service pages to JSON!")
