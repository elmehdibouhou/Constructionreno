import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Sitemap served via src/pages/sitemap.xml.astro (plugin had version bug)
export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  site: 'https://topdesignrenovation.ca',
});
