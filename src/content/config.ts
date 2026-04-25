import { z, defineCollection } from "astro:content";

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
    benefits: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        desc: z.string(),
      })
    ).optional(),
    faqs: z.array(
      z.object({
        q: z.string(),
        a: z.string(),
      })
    ).optional(),
    gallery: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
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
  }),
});

export const collections = {
  services: servicesCollection,
  settings: settingsCollection,
};
