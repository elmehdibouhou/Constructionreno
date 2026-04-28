import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().or(z.date().transform((d) => d.toISOString())),
    updatedDate: z.string().or(z.date().transform((d) => d.toISOString())).optional(),
    heroImg: z.string(),
    heroAlt: z.string(),
    category: z.string(),
    readTime: z.string(),
    videoUrl: z.string().optional(),
  }),
});

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    heroImg: z.string(),
    cardImg: z.string().optional(),
    alt: z.string().optional(),
    tagline: z.string().optional(),
    intro1: z.string().optional(),
    intro2: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDesc: z.string().optional(),
    whyUs: z.array(z.string()).optional(),
    benefits: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      desc: z.string(),
    })).optional(),
    faqs: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).optional(),
    videoUrl: z.string().optional(),
    gallery: z.array(z.union([z.string(), z.object({
      src: z.string().optional(),
      alt: z.string().optional(),
      videoUrl: z.string().optional(),
    })])).optional(),
    related: z.array(z.string()).optional(),
  }),
});

const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    clientName: z.string(),
    rating: z.number().optional(),
    reviewText: z.string(),
    projectType: z.string().optional(),
    location: z.string().optional(),
    date: z.string().optional(),
    active: z.boolean().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    location: z.string().optional(),
    year: z.string().optional(),
    featured: z.boolean().optional(),
    img: z.string(),
    alt: z.string().optional(),
    beforeImage: z.string().optional(),
    afterImage: z.string().optional(),
    description: z.string().optional(),
    galleryImages: z.array(z.union([
      z.string(),
      z.object({
        src: z.string().optional(),
        alt: z.string().optional(),
        videoUrl: z.string().optional(),
      }),
    ])).optional(),
    metaTitle: z.string().optional(),
    metaDesc: z.string().optional(),
    highlights: z.array(z.string()).optional(),
    area: z.string().optional(),
  }),
});

const settingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    companyName: z.string(),
    phone: z.string(),
    email: z.string().optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    province: z.string().optional(),
    domain: z.string().optional(),
    googleAnalyticsId: z.string().optional(),
    formspreeContactId: z.string().optional(),
    formspreeEstimateId: z.string().optional(),
    facebookUrl: z.string().optional(),
    instagramUrl: z.string().optional(),
    googleBusinessUrl: z.string().optional(),
    businessHours: z.string().optional(),
  }),
});

const inspirationCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    metaDesc: z.string().optional(),
    intro: z.string().optional(),
    heroImg: z.string(),
    serviceSlug: z.string().optional(),
    gallery: z.array(z.object({
      src: z.string().optional(),
      alt: z.string().optional(),
      videoUrl: z.string().optional(),
    })).optional(),
    ideas: z.array(z.object({
      title: z.string(),
      desc: z.string(),
      img: z.string().optional(),
    })).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  services: servicesCollection,
  testimonials: testimonialsCollection,
  projects: projectsCollection,
  settings: settingsCollection,
  inspiration: inspirationCollection,
};
