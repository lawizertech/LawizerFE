const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', 'app');
const exts = ['.tsx', '.ts', '.md', '.jsx', '.js'];

function walk(dir) {
  const files = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      files.push(...walk(full));
    } else if (exts.includes(path.extname(name))) {
      files.push(full);
    }
  }
  return files;
}

const files = walk(root);

const citeRegex = /\[cite:[^\]]+\]/g;
let changed = 0;
for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  if (citeRegex.test(content)) {
    content = content.replace(citeRegex, '');
    fs.writeFileSync(f, content, 'utf8');
    changed++;
  }
}
