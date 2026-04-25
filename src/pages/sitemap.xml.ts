import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://example.ca';

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/our-work/', priority: '0.9', changefreq: 'weekly' },
  { url: '/services/', priority: '0.9', changefreq: 'monthly' },
  { url: '/about/', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact/', priority: '0.8', changefreq: 'monthly' },
  { url: '/free-estimate/', priority: '0.9', changefreq: 'monthly' },
  { url: '/testimonials/', priority: '0.7', changefreq: 'monthly' },
  { url: '/faq/', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/', priority: '0.7', changefreq: 'weekly' },
  { url: '/products/', priority: '0.6', changefreq: 'monthly' },
  { url: '/service-areas/', priority: '0.8', changefreq: 'monthly' },
];

export const GET: APIRoute = async () => {
  const services = await getCollection('services');
  const projects = await getCollection('projects');
  const blogs = await getCollection('blog');

  const servicePages = services.map((s) => ({
    url: `/services/${s.slug}/`,
    priority: '0.8',
    changefreq: 'monthly',
  }));
  const projectPages = projects.map((p) => ({
    url: `/projects/${p.slug}/`,
    priority: '0.75',
    changefreq: 'monthly',
  }));
  const blogPages = blogs.map((b) => ({
    url: `/blog/${b.slug}/`,
    priority: '0.6',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...servicePages, ...projectPages, ...blogPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
