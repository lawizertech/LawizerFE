import * as fs from 'fs';
import * as path from 'path';

function walk(dir: string, fileList: string[] = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      fileList = walk(path.join(dir, file), fileList);
    } else {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const servicesDir = path.join(process.cwd(), 'app', '(services)');
const files = walk(servicesDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

let changedFiles = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  let changed = false;

  if (content.includes('@/lib/data/services/')) {
    content = content.replace(/import\s+\{\s*servicesData\s*(?:as\s+\w+)?\s*\}\s+from\s+['"]@\/lib\/data\/services\/.*?['"];?/g, '');
    changed = true;
  }

  if (changed && !content.includes('getServiceBySlug')) {
    content = 'import { getServiceBySlug } from "@/lib/apis/services";\n' + content;
  }

  if (content.includes('servicesData[slug]')) {
    content = content.replace(/servicesData\[slug\]/g, '(await getServiceBySlug(slug))');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
    changedFiles++;
  }
}

console.log(`Fixed ${changedFiles} files in LawizerFE.`);
