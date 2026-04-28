import { defineConfig } from "tinacms";

// ─────────────────────────────────────────────────────────────────────────────
// TINA CMS CONFIG
// Docs: https://tina.io/docs
//
// HOW IT WORKS:
//   1. Client edits content at /admin (powered by Tina Cloud)
//   2. Tina Cloud commits the .md file to GitHub
//   3. Vercel detects the push → rebuilds the site (~45s)
//   4. Changes are live
//
// SETUP REQUIRED (one-time):
//   1. Create free account at https://app.tina.io
//   2. Create a project → copy Client ID + Token
//   3. Add to Vercel env vars:
//        TINA_PUBLIC_CLIENT_ID  = (from app.tina.io)
//        TINA_TOKEN             = (from app.tina.io)
//        GITHUB_BRANCH          = main
// ─────────────────────────────────────────────────────────────────────────────

export default defineConfig({
  // ── Tina Cloud connection ─────────────────────────────────────────────────
  branch: process.env.GITHUB_BRANCH ?? "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID ?? "",
  token: process.env.TINA_TOKEN ?? "",

  // ── Admin SPA build output ────────────────────────────────────────────────
  // Outputs to public/admin/ → served statically at /admin
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  // ── Media / image uploads ─────────────────────────────────────────────────
  // Images are committed to public/uploads/ in GitHub (free, no S3 needed)
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  // ── Content schema ────────────────────────────────────────────────────────
  schema: {
    collections: [

      // ═══════════════════════════════════════════════════════════════════════
      // 1. BLOG POSTS — src/content/blog/*.md
      // ═══════════════════════════════════════════════════════════════════════
      {
        name: "blog",
        label: "📝 Blog Posts",
        path: "src/content/blog",
        format: "md",
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Article Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publication Date",
            required: true,
            ui: {
              dateFormat: "YYYY-MM-DD",
            },
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["Renovation", "Roofing", "Design", "Tips", "News"],
            required: true,
          },
          {
            type: "string",
            name: "readTime",
            label: "Read Time (e.g. 5 min)",
          },
          {
            type: "string",
            name: "description",
            label: "Excerpt / SEO Description",
            ui: { component: "textarea" },
            required: true,
          },
          {
            type: "image",
            name: "heroImg",
            label: "Cover Photo",
            required: true,
          },
          {
            type: "string",
            name: "heroAlt",
            label: "Cover Photo Alt Text (for SEO)",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Article Content",
            isBody: true,
          },
        ],
      },

      // ═══════════════════════════════════════════════════════════════════════
      // 2. PORTFOLIO PROJECTS — src/content/projects/*.md
      // ═══════════════════════════════════════════════════════════════════════
      {
        name: "projects",
        label: "🏗 Portfolio Projects",
        path: "src/content/projects",
        format: "md",
        ui: {
          router: () => "/our-work",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Project Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              "Kitchen Renovation",
              "Bathroom Renovation",
              "Basement Renovation",
              "Roof Replacement",
              "Metal Roofing",
              "Exterior Siding",
              "Painting",
              "Home Addition",
              "Custom Homes",
              "Eavestrough",
              "Exterior Renovations",
            ],
            required: true,
          },
          {
            type: "string",
            name: "location",
            label: "City / Location",
          },
          {
            type: "string",
            name: "year",
            label: "Year Completed",
          },
          {
            type: "boolean",
            name: "featured",
            label: "⭐ Featured (shows large in gallery grid)",
          },
          {
            type: "image",
            name: "img",
            label: "Main Photo",
            required: true,
          },
          {
            type: "string",
            name: "alt",
            label: "Main Photo Alt Text",
          },
          {
            type: "image",
            name: "beforeImage",
            label: "Before Photo (optional — for before/after)",
          },
          {
            type: "image",
            name: "afterImage",
            label: "After Photo (optional — for before/after)",
          },
          {
            type: "object",
            name: "galleryImages",
            label: "Additional Gallery Photos",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.alt || "Photo" }),
            },
            fields: [
              { type: "image", name: "src", label: "Photo" },
              { type: "string", name: "alt", label: "Alt Text" },
            ],
          },
          {
            type: "string",
            name: "description",
            label: "Short Description",
            ui: { component: "textarea" },
          },
        ],
      },

      // ═══════════════════════════════════════════════════════════════════════
      // 3. SERVICES (16 services) — src/content/services/*.md
      // ═══════════════════════════════════════════════════════════════════════
      {
        name: "services",
        label: "🔧 Services",
        path: "src/content/services",
        format: "md",
        ui: {
          router: ({ document }) => `/services/${document._sys.filename}`,
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Service Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["Renovation", "Roofing & Exteriors"],
            required: true,
          },
          {
            type: "string",
            name: "tagline",
            label: "Tagline (one short sentence)",
          },
          // ── Images ────────────────────────────────────────────────────────
          {
            type: "image",
            name: "heroImg",
            label: "Hero Photo (page banner — 1920×1080)",
            required: true,
          },
          {
            type: "image",
            name: "cardImg",
            label: "Card Photo (service grid — 800×600)",
          },
          {
            type: "string",
            name: "alt",
            label: "Photo Alt Text",
          },
          // ── Content ───────────────────────────────────────────────────────
          {
            type: "string",
            name: "intro1",
            label: "Introduction — Paragraph 1",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "intro2",
            label: "Introduction — Paragraph 2",
            ui: { component: "textarea" },
          },
          // ── SEO ───────────────────────────────────────────────────────────
          {
            type: "string",
            name: "metaTitle",
            label: "SEO Title (50–60 chars)",
          },
          {
            type: "string",
            name: "metaDesc",
            label: "SEO Description (150–160 chars)",
            ui: { component: "textarea" },
          },
          // ── Why Us bullets ────────────────────────────────────────────────
          {
            type: "string",
            name: "whyUs",
            label: "Why Choose Us (4 bullet points)",
            list: true,
            ui: { component: "list" },
          },
          // ── Benefit cards ─────────────────────────────────────────────────
          {
            type: "object",
            name: "benefits",
            label: "Benefits (3 cards shown on page)",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || "Benefit" }),
              min: 3,
              max: 3,
            },
            fields: [
              {
                type: "string",
                name: "icon",
                label: "Icon",
                options: [
                  "layout",
                  "star",
                  "shield",
                  "tool",
                  "check",
                  "home",
                  "sun",
                  "droplet",
                  "zap",
                  "award",
                ],
              },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "desc",
                label: "Description",
                ui: { component: "textarea" },
              },
            ],
          },
          // ── FAQ ───────────────────────────────────────────────────────────
          {
            type: "object",
            name: "faqs",
            label: "FAQ (4 questions for this service)",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.q || "Question" }),
              min: 1,
              max: 8,
            },
            fields: [
              { type: "string", name: "q", label: "Question" },
              {
                type: "string",
                name: "a",
                label: "Answer",
                ui: { component: "textarea" },
              },
            ],
          },
          // ── Video embed ───────────────────────────────────────────────────
          {
            type: "string",
            name: "videoUrl",
            label: "🎬 Video URL (YouTube or Vimeo — optional)",
            description: "Paste a YouTube or Vimeo link, e.g. https://www.youtube.com/watch?v=XXXXX",
          },
          // ── Gallery ───────────────────────────────────────────────────────
          {
            type: "object",
            name: "gallery",
            label: "📸 Gallery Photos (up to 9 photos)",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.alt || item?.src || "Photo" }),
              max: 9,
            },
            fields: [
              {
                type: "image",
                name: "src",
                label: "Photo (optional if video provided)",
              },
              {
                type: "string",
                name: "alt",
                label: "Description (alt text for SEO)",
              },
              {
                type: "string",
                name: "videoUrl",
                label: "🎬 Video URL (YouTube, Vimeo, or direct MP4 — optional)",
                description: "Paste a YouTube/Vimeo link or a direct .mp4 URL. Leave empty to show a photo instead.",
              },
            ],
          },
          // ── Related services ──────────────────────────────────────────────
          {
            type: "string",
            name: "related",
            label: "Related Services (slugs, e.g. bathroom-renovation)",
            list: true,
            ui: { max: 3 },
          },
        ],
      },

      // ═══════════════════════════════════════════════════════════════════════
      // 4. TESTIMONIALS — src/content/testimonials/*.md
      // ═══════════════════════════════════════════════════════════════════════
      {
        name: "testimonials",
        label: "⭐ Testimonials",
        path: "src/content/testimonials",
        format: "md",
        ui: {
          router: () => "/testimonials",
        },
        fields: [
          {
            type: "string",
            name: "clientName",
            label: "Client Name",
            isTitle: true,
            required: true,
          },
          {
            type: "number",
            name: "rating",
            label: "Rating (1–5 stars)",
          },
          {
            type: "string",
            name: "reviewText",
            label: "Review",
            ui: { component: "textarea" },
            required: true,
          },
          {
            type: "string",
            name: "projectType",
            label: "Project Type (e.g. Kitchen Renovation)",
          },
          {
            type: "string",
            name: "location",
            label: "City",
          },
          {
            type: "string",
            name: "date",
            label: "Date (e.g. March 2026)",
          },
          {
            type: "boolean",
            name: "active",
            label: "✅ Show on site",
          },
        ],
      },

      // ═══════════════════════════════════════════════════════════════════════
      // 5. HOMEPAGE CONTENT (singleton) — src/content/pages/home.md
      // ═══════════════════════════════════════════════════════════════════════
      {
        name: "home",
        label: "🏠 Homepage",
        path: "src/content/pages",
        format: "md",
        match: { include: "home" },
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        fields: [
          // ── Hero section ──────────────────────────────────────────────────
          {
            type: "string",
            name: "heroLine1",
            label: "Hero — Line 1",
          },
          {
            type: "string",
            name: "heroLine2",
            label: "Hero — Line 2",
          },
          {
            type: "string",
            name: "heroLine3",
            label: "Hero — Line 3 (italic gold)",
          },
          {
            type: "string",
            name: "heroSub",
            label: "Hero — Subtext",
            ui: { component: "textarea" },
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero — Background Image",
          },
          // ── About section ─────────────────────────────────────────────────
          {
            type: "string",
            name: "aboutHeadline",
            label: "About — Headline",
          },
          {
            type: "string",
            name: "aboutPara1",
            label: "About — Paragraph 1",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "aboutPara2",
            label: "About — Paragraph 2",
            ui: { component: "textarea" },
          },
          {
            type: "image",
            name: "aboutImage",
            label: "About — Photo",
          },
          {
            type: "string",
            name: "yearsExperience",
            label: "About — Years of Experience Badge (e.g. 15+)",
          },
        ],
      },

      // ═══════════════════════════════════════════════════════════════════════
      // 6. SITE SETTINGS (singleton) — src/content/settings/main.md
      // ═══════════════════════════════════════════════════════════════════════
      {
        name: "settings",
        label: "⚙️ Site Settings",
        path: "src/content/settings",
        format: "md",
        match: {
          include: "main",
        },
        ui: {
          // Prevent creating/deleting — there's exactly one settings file
          allowedActions: {
            create: false,
            delete: false,
          },
          router: () => "/",
          global: true,
        },
        fields: [
          // ── Company info ──────────────────────────────────────────────────
          {
            type: "string",
            name: "companyName",
            label: "Company Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "phone",
            label: "Phone Number (e.g. (613) 555-0123)",
            required: true,
          },
          {
            type: "string",
            name: "email",
            label: "Email Address",
          },
          {
            type: "string",
            name: "address",
            label: "Street Address",
          },
          {
            type: "string",
            name: "city",
            label: "City",
          },
          {
            type: "string",
            name: "province",
            label: "Province (e.g. Ontario)",
          },
          {
            type: "string",
            name: "domain",
            label: "Domain (e.g. mysite.ca — no https://)",
          },
          // ── Branding ──────────────────────────────────────────────────────
          {
            type: "image",
            name: "logo",
            label: "Logo (PNG/SVG)",
          },
          {
            type: "image",
            name: "ogImage",
            label: "Social Share Image (1200×630px)",
          },
          // ── Tracking & integrations ───────────────────────────────────────
          {
            type: "string",
            name: "googleAnalyticsId",
            label: "Google Analytics 4 ID (G-XXXXXXXXXX)",
          },
          {
            type: "string",
            name: "formspreeContactId",
            label: "Formspree Contact Form ID",
          },
          {
            type: "string",
            name: "formspreeEstimateId",
            label: "Formspree Estimate Form ID",
          },
          // ── Social links ──────────────────────────────────────────────────
          {
            type: "string",
            name: "facebookUrl",
            label: "Facebook Page URL",
          },
          {
            type: "string",
            name: "instagramUrl",
            label: "Instagram Profile URL",
          },
          {
            type: "string",
            name: "googleBusinessUrl",
            label: "Google Business Profile URL",
          },
          // ── Business hours ────────────────────────────────────────────────
          {
            type: "string",
            name: "businessHours",
            label: "Business Hours (e.g. Mon–Fri 8am–5pm)",
          },
        ],
      },

    ],
  },
});
