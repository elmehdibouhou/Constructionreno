import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://topdesignrenovation.ca';
const TODAY = new Date().toISOString().split('T')[0];

// Static pages — excludes: /thank-you, /404 (non-indexable)
const staticPages = [
  { url: '/',               priority: '1.0', changefreq: 'weekly',  lastmod: TODAY },
  { url: '/free-estimate/', priority: '0.95', changefreq: 'monthly', lastmod: TODAY },
  { url: '/contact/',       priority: '0.90', changefreq: 'monthly', lastmod: TODAY },
  { url: '/services/',      priority: '0.90', changefreq: 'monthly', lastmod: TODAY },
  { url: '/service-areas/', priority: '0.85', changefreq: 'monthly', lastmod: TODAY },
  { url: '/our-work/',      priority: '0.80', changefreq: 'weekly',  lastmod: TODAY },
  { url: '/blog/',          priority: '0.75', changefreq: 'weekly',  lastmod: TODAY },
  { url: '/testimonials/',  priority: '0.65', changefreq: 'monthly', lastmod: TODAY },
  { url: '/faq/',           priority: '0.65', changefreq: 'monthly', lastmod: TODAY },
  { url: '/about/',         priority: '0.60', changefreq: 'monthly', lastmod: TODAY },
  { url: '/products/',      priority: '0.50', changefreq: 'monthly', lastmod: TODAY },
  { url: '/privacy-policy/', priority: '0.20', changefreq: 'yearly',  lastmod: TODAY },
  { url: '/terms/',           priority: '0.20', changefreq: 'yearly',  lastmod: TODAY },
];

// Inspiration pages (topical cluster — local SEO supporting content)
const inspirationSlugs = [
  'kitchen', 'bathroom', 'basement', 'living-room', 'exterior',
  'roofing', 'master-bedroom', 'home-office', 'mudroom', 'painting',
  'flooring', 'design',
];

const inspirationPages = inspirationSlugs.map((slug) => ({
  url: `/inspiration/${slug}/`,
  priority: '0.60',
  changefreq: 'monthly',
  lastmod: TODAY,
}));

export const GET: APIRoute = async () => {
  const services = await getCollection('services');
  const projects = await getCollection('projects');
  const blogs    = await getCollection('blog');

  // Services: highest priority — commercial intent money pages
  const servicePages = services.map((s) => ({
    url:        `/services/${s.slug}/`,
    priority:   '0.90',
    changefreq: 'monthly',
    lastmod:    TODAY,
  }));

  // Projects: portfolio — trust signals
  const projectPages = projects.map((p) => ({
    url:        `/projects/${p.slug}/`,
    priority:   '0.70',
    changefreq: 'monthly',
    lastmod:    TODAY,
  }));

  // Blog: content cluster — semantic SEO
  const blogPages = blogs.map((b) => ({
    url:        `/blog/${b.slug}/`,
    priority:   '0.70',
    changefreq: 'monthly',
    lastmod:    (b.data as Record<string, unknown>).pubDate
      ? new Date((b.data as Record<string, unknown>).pubDate as string).toISOString().split('T')[0]
      : TODAY,
  }));

  const allPages = [
    ...staticPages,
    ...servicePages,
    ...projectPages,
    ...blogPages,
    ...inspirationPages,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
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
