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

  if (content.includes('const servicesDB = servicesData;')) {
    content = content.replace(/const servicesDB = servicesData;\s*const pageData = servicesDB\[slug\];/g, 'const pageData = await getServiceBySlug(slug);');
    changed = true;
  }
  if (content.includes('const pageData = servicesData[slug];')) {
    content = content.replace(/const pageData = servicesData\[slug\];/g, 'const pageData = await getServiceBySlug(slug);');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
    changedFiles++;
  }
}

console.log(`Fixed ${changedFiles} files in LawizerFE.`);
