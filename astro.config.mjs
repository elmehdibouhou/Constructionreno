import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// TODO: Re-enable sitemap() and update site to real domain before launch
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
    // sitemap(),
  ],
  site: 'https://example.ca',
});
