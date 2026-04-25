import fs from 'fs';
import path from 'path';

// Helper to write frontmatter
const toMD = (data) => {
  let yaml = '---\n';
  for (const [key, value] of Object.entries(data)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      yaml += `${key}:\n`;
      value.forEach(item => {
        if (typeof item === 'object') {
          yaml += `  - `;
          let first = true;
          for (const [k, v] of Object.entries(item)) {
            if (first) {
              yaml += `${k}: "${v ? v.toString().replace(/"/g, '\\"') : ''}"\n`;
              first = false;
            } else {
              yaml += `    ${k}: "${v ? v.toString().replace(/"/g, '\\"') : ''}"\n`;
            }
          }
        } else {
          yaml += `  - "${item.toString().replace(/"/g, '\\"')}"\n`;
        }
      });
    } else {
      yaml += `${key}: "${value.toString().replace(/"/g, '\\"').replace(/\n/g, '\\n')}"\n`;
    }
  }
  yaml += '---\n';
  return yaml;
};

const run = () => {
  const dirs = [
    'src/content/blog',
    'src/content/projects',
    'src/content/services',
    'src/content/testimonials',
    'src/content/settings',
  ];

  dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

  // 1. SERVICES
  const servicesRaw = fs.readFileSync('src/data/services.json', 'utf8');
  const services = JSON.parse(servicesRaw);
  
  services.forEach(s => {
    const slug = s.slug;
    delete s.slug; // slug is the filename
    const content = toMD(s);
    fs.writeFileSync(`src/content/services/${slug}.md`, content);
  });

  // 2. SETTINGS
  const settingsContent = toMD({
    companyName: "[Company Name]",
    phone: "(613) 555-0123",
    email: "info@example.com",
    address: "123 Main St",
    city: "Ottawa",
    province: "Ontario",
    domain: "mysite.ca"
  });
  fs.writeFileSync('src/content/settings/main.md', settingsContent);

  console.log("Migration finished.");
};

run();
