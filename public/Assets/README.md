# TOP DESIGN RENOVATION — Logo System
## Brand Identity Package 2026

---

## Files Included

| File | Format | Size | Usage |
|------|--------|------|-------|
| logo-01-primary-dark.svg | SVG | 320×120 | Website header, email signature |
| logo-02-reversed-charcoal.svg | SVG | 320×120 | Footer, dark sections |
| logo-03-light-offwhite.svg | SVG | 320×120 | Invoices, proposals, print |
| logo-04-gold-premium.svg | SVG | 320×120 | VIP proposals, premium materials |
| logo-05-compact-horizontal.svg | SVG | 420×64 | Mobile navbar, small spaces |
| logo-06-vertical-social.svg | SVG | 200×200 | Instagram, Facebook, WhatsApp |
| logo-07-favicon-64px.svg | SVG | 64×64 | Browser tab, app icon |
| logo-08-transparent-bg.svg | SVG | 320×120 | Overlay on any background |
| og-image-1200x630.svg | SVG | 1200×630 | Social media sharing, Google preview |

---

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Navy | #1B3A4B | Primary background, main color |
| Deep Navy | #0F2633 | Premium/dark backgrounds |
| Gold | #C8A96E | Accents, tagline, icon highlights |
| Gold Light | #E0C992 | Secondary gold elements |
| Off-white | #F7F5F0 | Light backgrounds, print |
| Charcoal | #2C2926 | Alternative dark background |

---

## Typography

- **Headings:** Georgia or Playfair Display (serif)
- **Body / Tagline:** Arial or DM Sans (sans-serif)

---

## Usage Rules

✅ DO:
- Always maintain proportions when resizing
- Use SVG format for web (scales perfectly)
- Keep the gold bar accent on the left
- Use on approved background colors only

❌ DON'T:
- Stretch or distort the logo
- Change the colors
- Remove the tagline on primary versions
- Place on busy photographic backgrounds without overlay

---

## For the Website (Astro)

Place logo files in: `/public/images/logo/`

In your Header.astro:
```astro
<img 
  src="/images/logo/logo-01-primary-dark.svg" 
  alt="Top Design Renovation — Construction & Roofing Canada"
  width="280"
  height="105"
  loading="eager"
/>
```

For the footer use: `logo-02-reversed-charcoal.svg`
For favicon: convert `logo-07-favicon-64px.svg` to `.ico` via https://favicon.io

---

topdesignrenovation.ca — © 2026 Top Design Renovation Inc.
