# PROJECT SPEC — Renovation & Construction Website (Canada)
**Version 2.0 — Full Production Spec**
*Integrates: Frontend Design · UI/UX System · 3D Web · SEO Architecture · Meta Optimization · Web Performance*

---

## 🎯 Project Overview

Build a **premium, fully responsive, English-language static website** for a renovation, construction, painting and roofing company based in Canada. The site must feel like a luxury contractor brand — not a generic WordPress template — while achieving top Lighthouse scores and ranking locally in Canada.

**Client:** Moroccan woman, Canada-based, renovation + construction + painting + roofing
**Budget:** $400 CAD | **Timeline:** 5–7 working days | **Effort:** ~25–30 hours
**Stack:** Astro · Tailwind CSS · Formspree · Vercel · .ca domain

**Competitor References:**
- [magnoliaconstruction.ca](https://magnoliaconstruction.ca) — navigation structure, inspiration/build categories, mega menus
- [capital-homes.ca](https://capital-homes.ca) — clean design, service cards, Google Reviews widget, consultation booking
- [remembermeroofing.com](https://remembermeroofing.com) — roofing services, service areas, products page, free estimate CTA

**Differentiation goal:** Beat all three competitors on visual quality, perceived brand value, and technical SEO — at a fraction of their budget.

---

## 🎨 PHASE 1 — DESIGN SYSTEM (Build This First)

> Before writing a single page, establish the full design system. Every component, every page, every layout references these tokens. No magic numbers.

### Aesthetic Direction: **"Refined Dark Craft"**

This is not a typical blue-on-white contractor site. The aesthetic is:

- **Dark and luxurious** — deep navy/teal base creates premium authority
- **Warm gold accents** — copper/gold signals craftsmanship and quality
- **Editorial typography** — tall serif headings contrast with clean sans-serif body
- **Textured depth** — subtle grain overlays and layered backgrounds replace flat colors
- **Controlled asymmetry** — occasional grid-breaking elements (overlapping image/text) break visual monotony
- **Generous white space** — sections breathe; content never feels cluttered
- **One unforgettable moment per page** — the hero 3D effect, a full-bleed gallery, an animated counter strip

**Reference mood:** Think luxury real estate meets master craftsman workshop — not "contractor with a Squarespace site."

---

### 1.1 Design Tokens (CSS Custom Properties)

```css
/* ============================================================
   DESIGN TOKENS — global.css
   All values referenced via var(). No hardcoded values allowed.
   ============================================================ */

:root {

  /* ── COLOR PALETTE ─────────────────────────── */

  /* Primary — deep navy/teal */
  --color-primary-900: #0A1E2A;
  --color-primary-800: #0F2633;
  --color-primary-700: #1B3A4B;   /* ← main brand color */
  --color-primary-600: #2D5F7C;
  --color-primary-500: #3D7A9A;
  --color-primary-400: #5B9BB8;

  /* Accent — warm gold/copper */
  --color-accent-900: #7A5C1E;
  --color-accent-700: #A8802F;
  --color-accent-500: #C8A96E;   /* ← main accent color */
  --color-accent-300: #E0C992;
  --color-accent-100: #F5EDDA;

  /* Neutral */
  --color-white:      #FFFFFF;
  --color-off-white:  #F7F5F0;   /* ← warm white for backgrounds */
  --color-gray-100:   #F0EDE8;
  --color-gray-200:   #E8E6E1;
  --color-gray-400:   #B5B0AA;
  --color-gray-600:   #8B8680;
  --color-gray-800:   #4A4642;
  --color-dark:       #2C2926;
  --color-text:       #1A1A1A;

  /* Semantic aliases */
  --color-bg-primary:   var(--color-primary-700);
  --color-bg-page:      var(--color-off-white);
  --color-bg-dark:      var(--color-primary-900);
  --color-text-primary: var(--color-text);
  --color-text-on-dark: var(--color-white);
  --color-text-muted:   var(--color-gray-600);
  --color-border:       var(--color-gray-200);
  --color-cta:          var(--color-accent-500);
  --color-cta-hover:    var(--color-accent-300);

  /* ── TYPOGRAPHY SCALE ──────────────────────── */

  /* Families */
  --font-display:  'Cormorant Garamond', Georgia, serif;   /* elegant serif headings */
  --font-body:     'DM Sans', system-ui, sans-serif;       /* clean readable body */
  --font-mono:     'JetBrains Mono', monospace;            /* code / labels */

  /* Scale (fluid — clamp between mobile/desktop) */
  --text-xs:    clamp(0.70rem, 1.5vw, 0.75rem);
  --text-sm:    clamp(0.85rem, 1.8vw, 0.875rem);
  --text-base:  clamp(1rem,    2vw,   1rem);
  --text-lg:    clamp(1.1rem,  2.2vw, 1.125rem);
  --text-xl:    clamp(1.15rem, 2.5vw, 1.25rem);
  --text-2xl:   clamp(1.3rem,  3vw,   1.5rem);
  --text-3xl:   clamp(1.6rem,  4vw,   1.875rem);
  --text-4xl:   clamp(2rem,    5vw,   2.25rem);
  --text-5xl:   clamp(2.4rem,  6vw,   3rem);
  --text-6xl:   clamp(3rem,    7vw,   3.75rem);
  --text-7xl:   clamp(3.5rem,  8vw,   4.5rem);

  /* Line heights */
  --leading-tight:  1.15;
  --leading-snug:   1.35;
  --leading-normal: 1.6;
  --leading-relaxed:1.75;

  /* Letter spacing */
  --tracking-tight:  -0.03em;
  --tracking-normal:  0;
  --tracking-wide:    0.05em;
  --tracking-widest:  0.15em;

  /* Font weights */
  --weight-light:   300;
  --weight-regular: 400;
  --weight-medium:  500;
  --weight-semibold:600;
  --weight-bold:    700;

  /* ── SPACING SCALE ─────────────────────────── */
  --space-1:    0.25rem;   /*  4px */
  --space-2:    0.5rem;    /*  8px */
  --space-3:    0.75rem;   /* 12px */
  --space-4:    1rem;      /* 16px */
  --space-5:    1.25rem;   /* 20px */
  --space-6:    1.5rem;    /* 24px */
  --space-8:    2rem;      /* 32px */
  --space-10:   2.5rem;    /* 40px */
  --space-12:   3rem;      /* 48px */
  --space-16:   4rem;      /* 64px */
  --space-20:   5rem;      /* 80px */
  --space-24:   6rem;      /* 96px */
  --space-32:   8rem;      /* 128px */
  --space-section: clamp(4rem, 8vw, 7rem);   /* section vertical padding */

  /* ── LAYOUT ────────────────────────────────── */
  --max-width:        1280px;
  --max-width-narrow: 800px;
  --max-width-text:   680px;
  --container-px:     clamp(1rem, 5vw, 2.5rem);

  /* ── BORDERS ───────────────────────────────── */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   20px;
  --radius-full: 9999px;

  /* ── SHADOWS ───────────────────────────────── */
  --shadow-sm:  0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
  --shadow-md:  0 4px 12px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06);
  --shadow-lg:  0 12px 32px rgba(0,0,0,0.14), 0 4px 8px rgba(0,0,0,0.06);
  --shadow-xl:  0 24px 64px rgba(0,0,0,0.18);
  --shadow-card:0 2px 16px rgba(27,58,75,0.10);
  --shadow-gold:0 4px 20px rgba(200,169,110,0.30);

  /* ── TRANSITIONS ───────────────────────────── */
  --ease-default:    cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in:         cubic-bezier(0.4, 0, 1, 1);
  --ease-out:        cubic-bezier(0, 0, 0.2, 1);
  --ease-bounce:     cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-fast:   150ms;
  --duration-normal: 300ms;
  --duration-slow:   500ms;
  --duration-slower: 800ms;

  /* ── Z-INDEX SCALE ─────────────────────────── */
  --z-below:    -1;
  --z-base:      0;
  --z-raised:    10;
  --z-dropdown:  100;
  --z-sticky:    200;
  --z-overlay:   300;
  --z-modal:     400;
  --z-toast:     500;
}
```

---

### 1.2 Typography System

```css
/* ── HEADING STYLES ─────────────────────────── */

.h1 {
  font-family: var(--font-display);
  font-size: var(--text-6xl);
  font-weight: var(--weight-light);   /* Cormorant is gorgeous at 300 */
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text);
}

.h1--hero {
  font-size: var(--text-7xl);
  color: var(--color-white);
}

.h2 {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: var(--weight-regular);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
}

.h3 {
  font-family: var(--font-body);
  font-size: var(--text-2xl);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
}

.h4 {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  font-weight: var(--weight-semibold);
}

.body-lg   { font-size: var(--text-lg);  line-height: var(--leading-relaxed); }
.body      { font-size: var(--text-base);line-height: var(--leading-normal); }
.body-sm   { font-size: var(--text-sm);  line-height: var(--leading-normal); }
.label     { font-size: var(--text-xs);  letter-spacing: var(--tracking-widest); text-transform: uppercase; font-weight: var(--weight-semibold); }
.eyebrow   { font-size: var(--text-xs);  letter-spacing: var(--tracking-widest); text-transform: uppercase; color: var(--color-accent-500); font-weight: var(--weight-semibold); }
```

**Font loading (in `<head>`):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style"
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap">
```

---

### 1.3 Visual Effects Library

These are the atmospheric effects that make the site feel premium. Applied selectively — max 1–2 per section.

```css
/* ── GRAIN TEXTURE OVERLAY ──────────────────── */
/* Applied to hero sections and dark backgrounds */
.grain-overlay::after {
  content: '';
  position: absolute; inset: 0;
  background-image: url("data:image/svg+xml,..."); /* noise SVG */
  opacity: 0.035;
  pointer-events: none;
  z-index: var(--z-raised);
}

/* ── GOLD RULE DIVIDER ──────────────────────── */
.gold-rule {
  width: 60px; height: 2px;
  background: linear-gradient(90deg, var(--color-accent-500), var(--color-accent-300));
  border-radius: var(--radius-full);
  margin: var(--space-4) 0 var(--space-6);
}

/* ── DARK SECTION ───────────────────────────── */
.section-dark {
  background-color: var(--color-primary-900);
  color: var(--color-text-on-dark);
  position: relative;
}

/* ── WARM WHITE SECTION ─────────────────────── */
.section-light {
  background-color: var(--color-off-white);
}

/* ── CARD HOVER LIFT ────────────────────────── */
.card-hover {
  transition: transform var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out);
}
.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* ── IMAGE OVERLAY (service cards) ─────────────*/
.img-overlay {
  position: relative; overflow: hidden;
}
.img-overlay img {
  transition: transform var(--duration-slow) var(--ease-out);
}
.img-overlay:hover img { transform: scale(1.05); }
.img-overlay::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 30, 42, 0.80) 0%,
    rgba(10, 30, 42, 0.20) 60%,
    transparent 100%
  );
  transition: opacity var(--duration-normal) var(--ease-out);
}
.img-overlay:hover::after { opacity: 0.9; }

/* ── HERO GRADIENT OVERLAY ──────────────────── */
.hero-overlay {
  background: linear-gradient(
    105deg,
    rgba(10, 30, 42, 0.85) 0%,
    rgba(10, 30, 42, 0.50) 50%,
    rgba(10, 30, 42, 0.20) 100%
  );
}

/* ── SCROLL FADE-IN ─────────────────────────── */
/* JS: IntersectionObserver adds .is-visible */
.fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity var(--duration-slower) var(--ease-out),
              transform var(--duration-slower) var(--ease-out);
}
.fade-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}
/* Stagger children */
.fade-up:nth-child(1) { transition-delay: 0ms; }
.fade-up:nth-child(2) { transition-delay: 80ms; }
.fade-up:nth-child(3) { transition-delay: 160ms; }
.fade-up:nth-child(4) { transition-delay: 240ms; }
```

---

### 1.4 Button System

```css
/* ── PRIMARY BUTTON ─────────────────────────── */
.btn-primary {
  display: inline-flex; align-items: center; gap: var(--space-2);
  padding: var(--space-3) var(--space-8);
  background-color: var(--color-accent-500);
  color: var(--color-primary-900);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  border: 2px solid transparent;
  transition: all var(--duration-normal) var(--ease-out);
  box-shadow: var(--shadow-gold);
}
.btn-primary:hover {
  background-color: var(--color-accent-300);
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(200,169,110,0.45);
}

/* ── OUTLINE BUTTON ─────────────────────────── */
.btn-outline {
  display: inline-flex; align-items: center; gap: var(--space-2);
  padding: var(--space-3) var(--space-8);
  background-color: transparent;
  color: var(--color-white);
  border: 2px solid rgba(255,255,255,0.5);
  font-size: var(--text-sm); font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-wide); text-transform: uppercase;
  border-radius: var(--radius-sm);
  transition: all var(--duration-normal) var(--ease-out);
}
.btn-outline:hover {
  border-color: var(--color-accent-500);
  color: var(--color-accent-500);
}

/* ── GHOST BUTTON (dark bg) ─────────────────── */
.btn-ghost {
  /* Same as outline but on light background */
  color: var(--color-primary-700);
  border-color: var(--color-primary-700);
}
.btn-ghost:hover {
  background-color: var(--color-primary-700);
  color: var(--color-white);
}
```

---

## 🌐 Language & Locale

- **Language:** English (Canadian English — "colour", "centre", "labour")
- **Currency:** CAD ($)
- **Phone format:** (XXX) XXX-XXXX
- **Address format:** Street, City, Province, Postal Code
- **Date format:** Month DD, YYYY

---

## 🏗️ Tech Stack

| Component | Choice | Reason |
|-----------|--------|--------|
| Framework | **Astro 4** (SSG) | Zero-JS by default, SEO-native, fast builds |
| Styling | **Tailwind CSS 3** + custom tokens | Rapid responsive development |
| 3D/WebGL | **Three.js** (hero only, optional) | Lightweight 3D accent — graceful fallback |
| Animations | **CSS + IntersectionObserver** | No heavy library needed |
| Icons | **Lucide Icons** (SVG sprite) | Lightweight, consistent |
| Forms | **Formspree** | Free, no backend, redirect support |
| Hosting | **Vercel** | Free, HTTPS, CDN, instant deploys |
| Domain | **.ca** (Namecheap or Porkbun) | Local Canada SEO boost |
| Analytics | **GA4 + Search Console** | Free, full tracking |
| Images | **Astro Image + WebP + srcset** | Auto-optimized, lazy loading |
| Fonts | **Google Fonts** (preloaded) | Cormorant Garamond + DM Sans |

---

## 🌟 3D STRATEGY — Strategic, Not Showy

> **Core principle:** 3D should serve conversion, not just impress. One well-executed 3D moment beats scattered effects everywhere. Always provide a static fallback for mobile and low-end devices.

### Where 3D Is Used

#### 1. Homepage Hero — Three.js Particle Field (Desktop Only)
A subtle animated geometric particle system behind the hero image creates depth and premium feel.

```javascript
// src/components/HeroParticles.astro (client:only="three")
// Lazy-loaded Three.js — ~35KB gzipped
// Renders: floating geometric particles (icosahedra) that slowly rotate
// Color: var(--color-accent-500) with 0.4 opacity
// On mobile: falls back to CSS gradient background
// Performance budget: < 5ms frame time, < 40MB GPU memory
```

**Implementation pattern:**
```javascript
import * as THREE from 'three';

// Load only after LCP image is rendered
window.addEventListener('load', () => {
  if (window.innerWidth < 768) return; // No 3D on mobile

  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Cap for perf

  // 80 low-poly icosahedra floating slowly
  const geometry = new THREE.IcosahedronGeometry(0.3, 0);
  const material = new THREE.MeshBasicMaterial({
    color: 0xC8A96E, wireframe: true, transparent: true, opacity: 0.25
  });

  for (let i = 0; i < 80; i++) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 6
    );
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    scene.add(mesh);
  }

  // Scroll-driven camera movement
  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; });

  function animate() {
    requestAnimationFrame(animate);
    scene.children.forEach((mesh, i) => {
      mesh.rotation.y += 0.002 + i * 0.00005;
      mesh.rotation.x += 0.001;
    });
    camera.position.y = -scrollY * 0.003; // Parallax on scroll
    renderer.render(scene, camera);
  }
  animate();
});
```

**Mobile fallback (CSS):**
```css
.hero-bg--no-webgl {
  background:
    radial-gradient(ellipse at 30% 50%, rgba(45,95,124,0.6) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(200,169,110,0.15) 0%, transparent 50%),
    var(--color-primary-900);
}
```

#### 2. Stats Section — Animated Counters (CSS + JS Only)
No 3D needed here. Use `IntersectionObserver` + RAF counter animation for the numbers (10+ years, 200+ projects, 4.9★, etc.). The numbers animate up from 0 when scrolled into view.

#### 3. Service Cards — CSS 3D Perspective Hover (No Three.js)
```css
.service-card-wrapper {
  perspective: 1000px;
}
.service-card {
  transform-style: preserve-3d;
  transition: transform 0.4s var(--ease-out);
}
.service-card-wrapper:hover .service-card {
  transform: rotateY(-5deg) rotateX(2deg) translateZ(8px);
}
```

#### 4. Nothing Else Uses 3D
Inspiration pages, blog, contact, about — pure CSS animations only. Keeping the 3D precious ensures it retains impact.

---

## 🗺️ Site Architecture

### Navigation Structure
```
TOP BAR (hidden on mobile / visible on tablet+)
├── Left:  Phone: (XXX) XXX-XXXX  ·  Email: info@[domain].ca
└── Right: Facebook icon · Instagram icon

HEADER (sticky — transparent → solid on scroll)
├── Logo (left, 160px wide)
├── Main Nav (center)
│   ├── Home
│   ├── Services ▼ (mega dropdown, 2 columns)
│   │   ├── Col 1 — RENOVATION
│   │   │   ├── Kitchen Renovation
│   │   │   ├── Bathroom Renovation
│   │   │   ├── Basement Renovation
│   │   │   ├── Interior & Exterior Painting
│   │   │   ├── Home Additions
│   │   │   ├── Custom Homes
│   │   │   └── Exterior Renovations
│   │   └── Col 2 — ROOFING & EXTERIORS
│   │       ├── Roof Replacement
│   │       ├── Roof Repairs
│   │       ├── Metal Roofing
│   │       ├── Exterior Siding
│   │       ├── Soffit & Fascia
│   │       ├── Eavestrough & Gutters
│   │       ├── Venting Upgrades
│   │       ├── Roof Inspections
│   │       └── Snow Removal
│   ├── Our Work
│   ├── Inspiration ▼
│   │   ├── Kitchen · Bathroom · Basement · Living Room · Design
│   ├── Resources ▼
│   │   ├── Blog · FAQ · Products & Materials · Service Areas
│   └── About ▼
│       ├── Our Story · Testimonials · Financing
└── Right: [Get a Free Estimate] — gold CTA button

MOBILE (< 768px)
└── Hamburger → full-screen slide-in overlay
    ├── Accordion-style expandable nav sections
    ├── Phone number (click-to-call)
    └── [Get a Free Estimate] — full-width gold button
```

---

## 📄 All Pages (36 total)

### Main Pages (6)
| URL | Page Name |
|-----|-----------|
| `/` | Homepage |
| `/about` | About Us |
| `/our-work` | Our Work (Gallery) |
| `/testimonials` | Testimonials |
| `/contact` | Contact |
| `/free-estimate` | Get a Free Estimate |

### Service Pages (17)
| URL | Service |
|-----|---------|
| `/services` | Services Overview |
| `/services/kitchen-renovation` | Kitchen Renovation |
| `/services/bathroom-renovation` | Bathroom Renovation |
| `/services/basement-renovation` | Basement Renovation |
| `/services/painting` | Interior & Exterior Painting |
| `/services/home-additions` | Home Additions |
| `/services/custom-homes` | Custom Homes |
| `/services/exterior-renovations` | Exterior Renovations |
| `/services/roof-replacement` | Roof Replacement |
| `/services/roof-repairs` | Roof Repairs |
| `/services/metal-roofing` | Metal Roofing |
| `/services/siding` | Exterior Siding |
| `/services/soffit-fascia` | Soffit & Fascia |
| `/services/eavestrough` | Eavestrough & Gutter Guards |
| `/services/venting` | Venting Upgrades |
| `/services/roof-inspection` | Roof Inspections |
| `/services/snow-removal` | Roof Snow Removal |

### Inspiration Pages (5)
| URL | Page |
|-----|------|
| `/inspiration/kitchen` | Kitchen Inspiration |
| `/inspiration/bathroom` | Bathroom Inspiration |
| `/inspiration/basement` | Basement Inspiration |
| `/inspiration/living-room` | Living Room Inspiration |
| `/inspiration/design` | Design Trends |

### Resource Pages (7)
| URL | Page |
|-----|------|
| `/blog` | Blog Index |
| `/blog/basement-renovation-guide` | Blog Article 1 |
| `/blog/painting-trends-2026` | Blog Article 2 |
| `/blog/choosing-renovation-contractor` | Blog Article 3 |
| `/faq` | FAQ |
| `/products` | Products & Materials |
| `/service-areas` | Service Areas |

### Utility Pages (3)
| URL | Page |
|-----|------|
| `/thank-you` | Thank You |
| `/404` | Not Found |
| `/sitemap.xml` | Auto-generated by Astro |

---

## 📐 Page-by-Page Design Specs

### Homepage `/`

```
┌─────────────────────────────────────────────────────────────┐
│ HERO — Full viewport height (100vh)                         │
│                                                             │
│ Background: full-bleed image + dark overlay (85% left,      │
│             fading to 20% right) + Three.js particles       │
│             (desktop only — fallback CSS gradient on mobile) │
│                                                             │
│ Content (left-aligned, max 600px):                          │
│   [eyebrow text: "Trusted Renovation & Roofing in [City]"]  │
│   H1: "We Build Homes.                                      │
│        We Restore Roofs.                                    │
│        We Craft Spaces."                                    │
│   Subtext: "Quality renovation, construction, painting &    │
│   roofing services across [City], [Province]."              │
│                                                             │
│   [CTA Primary: "Get a Free Estimate →"]                    │
│   [CTA Secondary: "View Our Work ↓"]                        │
│                                                             │
│ Scroll indicator: animated chevron at bottom center         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ STATS STRIP — Dark background (--color-primary-900)         │
│ 4 columns: [15+ Years] [300+ Projects] [★ 4.9] [100% Licensed]│
│ Numbers animate up from 0 on scroll                         │
│ Separated by subtle gold vertical rules                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ SERVICES GRID                                               │
│ Eyebrow: "Our Services"                                     │
│ H2: "Everything Your Home Needs"                            │
│                                                             │
│ Desktop: 4 columns; Tablet: 2; Mobile: 1                   │
│ 8 featured service cards (4 renovation + 4 roofing)         │
│ Card: square image (aspect-ratio: 1) + overlay + title      │
│ CSS 3D perspective tilt on hover                            │
│                                                             │
│ [Button: "View All 16 Services →"]                         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ ABOUT TEASER — 2 columns (image left, text right)           │
│ Left: Large photo (team or founder), slight gold border     │
│       accent, overlapping decorative element                │
│ Right:                                                      │
│   Eyebrow: "About Us"                                       │
│   H2: "Quality Craftsmanship,                               │
│        Built on Trust"                                      │
│   2 paragraphs                                              │
│   3 value pills: ✓ Licensed & Insured · ✓ Free Estimates   │
│   ✓ 5-Year Workmanship Warranty                             │
│   [Button: "Our Story →"]                                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ RECENT WORK — Dark section                                  │
│ H2: "Recent Projects"                                       │
│ Asymmetric grid: 1 large (col-span-2) + 4 small images      │
│ Each: hover overlay with project name + category            │
│ [Button: "See All Our Work →"]                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ TESTIMONIALS — Off-white section                            │
│ H2: "What Our Clients Say"                                  │
│ Auto-sliding carousel (3 cards visible on desktop)          │
│ Each card: "★★★★★" + quote + name + project type           │
│ Badge: "Google Verified" or "Google Review"                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CTA BANNER — Full-bleed dark image + overlay                │
│ H2: "Ready to Transform Your Space?"                        │
│ Subtext: "Get your free estimate today. No obligation."     │
│ [CTA: "Get a Free Estimate →"]                              │
│ [Secondary: "Call (XXX) XXX-XXXX"]                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ FOOTER — 4 columns                                          │
│ Col 1: Logo + 1-line description + social icons             │
│ Col 2: Services (quicklinks to 8 main services)             │
│ Col 3: Company (About, Our Work, Blog, FAQ, Contact)        │
│ Col 4: Contact info (address, phone, email, hours)          │
│ Bottom bar: © 2026 [Company Name] · Privacy Policy · Terms  │
└─────────────────────────────────────────────────────────────┘
```

---

### Service Pages `/services/[slug]` (same template, `ServiceLayout.astro`)

```
[1] HERO
    Full-bleed image + overlay
    Breadcrumb: Home > Services > [Service Name]
    H1: "[Service Name] in [City]"
    Subtext: 1 compelling sentence
    [CTA: "Get a Free Estimate"]

[2] INTRO — 2-column
    Left: 2 descriptive paragraphs (service value prop + process overview)
    Right: "Why Choose Us" card with 4 bullet checkmarks

[3] BENEFITS — 3 icon cards
    Each: Lucide icon + H3 benefit title + 2-sentence description
    Background: off-white

[4] PROJECT GALLERY — 2×3 grid (desktop), 2×2 (mobile)
    Images: hover overlay with "View Project"
    Lightbox on click

[5] MATERIALS & BRANDS (if roofing/exterior service)
    Row of manufacturer logos/badges
    E.g.: GAF Certified, CertainTeed, Owens Corning

[6] FAQ ACCORDION — 3–5 questions
    Smooth expand/collapse, gold active indicator
    Uses FAQ Schema (JSON-LD)

[7] RELATED TESTIMONIAL
    1 featured review card (matching service type)

[8] CONTACT FORM SECTION
    Split: left = form, right = contact info + phone + map

[9] RELATED SERVICES (3 cards)
    "You May Also Be Interested In"

[10] CTA BANNER
    "Ready to Get Started? Book Your Free Consultation Today."
    [Button: "Get a Free Estimate"] + phone number
```

---

### Inspiration Pages `/inspiration/[slug]` (same template, `InspirationLayout.astro`)

```
[1] HERO — H1: "[Category] Inspiration & Ideas"
[2] Intro paragraph (100 words) + gold rule
[3] Layout: sidebar (left) + main content (right)
    Sidebar: links to all 5 inspiration categories (sticky on desktop)
    Main:
      [3a] PROJECT GALLERY — 6-image grid
      [3b] IDEAS SECTION — 4–5 idea cards
           Each: image + H3 title + 1-para description
           (e.g. "Open Concept Kitchen", "Spa-Style Bathroom", etc.)
      [3c] EXPERTISE SECTION — H2 + 3 benefit columns
      [3d] FAQ ACCORDION (3 questions)
      [3e] CTA + inline contact form
```

---

### Homepage Hero — 3D Specs

The hero 3D setup (desktop only):

```
Three.js canvas: position absolute, inset 0, z-index -1
80 wireframe icosahedra, color: #C8A96E, opacity 0.25
Slow rotation: 0.002 rad/frame per mesh
Scroll parallax: camera.position.y -= scrollY * 0.003
Load: defer until window.onload (after LCP image)
Mobile breakpoint: < 768px → skip init entirely
Reduced motion: prefers-reduced-motion → skip init
GPU budget: < 40MB
Frame time: < 5ms (60fps target)
Bundle size: Three.js r128 core only, ~37KB gzipped
```

---

## 📁 File Structure

```
/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── og-image.jpg              ← 1200×630, branded
│   ├── robots.txt
│   └── images/
│       ├── hero/                 ← full-bleed images (1920×1080 WebP)
│       ├── services/             ← service cards + service page images
│       ├── gallery/              ← project photos (800×600 WebP)
│       ├── inspiration/          ← inspiration gallery images
│       ├── blog/                 ← article header images
│       ├── team/                 ← founder / team photo
│       ├── logos/                ← manufacturer certifications
│       └── textures/             ← noise.svg for grain overlay
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro              ← sticky, transparent→solid
│   │   │   ├── HeaderTopBar.astro        ← phone + social strip
│   │   │   ├── MegaMenu.astro            ← 2-col services dropdown
│   │   │   ├── MobileMenu.astro          ← full-screen slide-in
│   │   │   └── Footer.astro              ← 4-col + bottom bar
│   │   ├── sections/
│   │   │   ├── Hero.astro                ← reusable: title, sub, CTA, bg
│   │   │   ├── HeroHome.astro            ← homepage hero + 3D canvas
│   │   │   ├── Stats.astro               ← animated counters strip
│   │   │   ├── ServicesGrid.astro        ← 4-col service cards
│   │   │   ├── AboutTeaser.astro         ← 2-col about section
│   │   │   ├── TestimonialSlider.astro   ← carousel with stars
│   │   │   ├── RecentWork.astro          ← asymmetric gallery grid
│   │   │   ├── CtaBanner.astro           ← full-bleed CTA section
│   │   │   ├── InspirationSidebar.astro  ← sticky category nav
│   │   │   └── BreadcrumbNav.astro       ← breadcrumb trail
│   │   ├── cards/
│   │   │   ├── ServiceCard.astro         ← image + overlay + title
│   │   │   ├── BlogCard.astro            ← image + meta + excerpt
│   │   │   ├── TestimonialCard.astro     ← stars + quote + name
│   │   │   └── InspirationCard.astro     ← idea card with image
│   │   ├── ui/
│   │   │   ├── FAQ.astro                 ← accordion component
│   │   │   ├── GalleryGrid.astro         ← masonry + lightbox + filter
│   │   │   ├── ContactForm.astro         ← Formspree form
│   │   │   ├── EstimateForm.astro        ← full estimate form
│   │   │   ├── FloatingCTA.astro         ← mobile phone/WA button
│   │   │   ├── GoogleMap.astro           ← responsive embed
│   │   │   ├── GoldRule.astro            ← decorative gold divider
│   │   │   └── SchemaScript.astro        ← JSON-LD injector
│   │   └── three/
│   │       └── HeroParticles.astro       ← Three.js particle scene
│   ├── layouts/
│   │   ├── BaseLayout.astro              ← <head> + header + footer + analytics
│   │   ├── ServiceLayout.astro           ← all 16 service page template
│   │   ├── InspirationLayout.astro       ← all 5 inspiration page template
│   │   └── BlogLayout.astro             ← article template
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── our-work.astro
│   │   ├── testimonials.astro
│   │   ├── contact.astro
│   │   ├── free-estimate.astro
│   │   ├── products.astro
│   │   ├── service-areas.astro
│   │   ├── thank-you.astro
│   │   ├── 404.astro
│   │   ├── services/
│   │   │   ├── index.astro
│   │   │   ├── kitchen-renovation.astro
│   │   │   ├── bathroom-renovation.astro
│   │   │   ├── basement-renovation.astro
│   │   │   ├── painting.astro
│   │   │   ├── home-additions.astro
│   │   │   ├── custom-homes.astro
│   │   │   ├── exterior-renovations.astro
│   │   │   ├── roof-replacement.astro
│   │   │   ├── roof-repairs.astro
│   │   │   ├── metal-roofing.astro
│   │   │   ├── siding.astro
│   │   │   ├── soffit-fascia.astro
│   │   │   ├── eavestrough.astro
│   │   │   ├── venting.astro
│   │   │   ├── roof-inspection.astro
│   │   │   └── snow-removal.astro
│   │   ├── inspiration/
│   │   │   ├── kitchen.astro
│   │   │   ├── bathroom.astro
│   │   │   ├── basement.astro
│   │   │   ├── living-room.astro
│   │   │   └── design.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       ├── basement-renovation-guide.astro
│   │       ├── painting-trends-2026.astro
│   │       └── choosing-renovation-contractor.astro
│   ├── styles/
│   │   └── global.css                    ← all design tokens + base styles
│   └── data/
│       ├── services.json                 ← all 16 services
│       ├── testimonials.json
│       ├── faq.json
│       ├── inspiration.json
│       ├── service-areas.json
│       └── products.json
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

---

## 🔍 SEO Architecture (Per Page Type)

### URL Rules (from seo-meta-optimizer)
```
✅ DO:     /services/kitchen-renovation
✅ DO:     /blog/basement-renovation-guide-2026
✅ DO:     /service-areas/ottawa-renovation
❌ AVOID:  /services/kitchen_renovation
❌ AVOID:  /services/KitchenRenovation
❌ AVOID:  /services/renovation-of-kitchens-in-your-home  (too long)
```
- Hyphens only, lowercase, primary keyword first, under 60 chars total URL

---

### Meta Tag Templates (with character counts)

#### Homepage
```
Title:    [Company Name] | Renovation & Roofing in [City], Canada
          e.g. "ProReno | Renovation & Roofing in Ottawa, Canada"  ← 52 chars ✅
Desc:     Expert renovation, roofing & construction in [City]. Free estimates.
          Kitchen, bathroom, basement, painting & more. Call (XXX) XXX-XXXX.
          ← 154 chars ✅
```

#### Service Page
```
Title:    Kitchen Renovation [City] | [Company Name] — Free Estimate
          ← 56 chars ✅ (primary KW first, brand last)
Desc:     Professional kitchen renovation in [City]. Custom designs, quality
          materials & skilled tradespeople. Get your free estimate today ✓
          ← 153 chars ✅
```

#### Blog Article
```
Title:    Basement Renovation Guide 2026 | [Company Name] Blog
Desc:     Complete guide to basement renovation in Canada: costs, timelines,
          permits & top design ideas. Expert advice from [City] contractors.
```

#### FAQ Page
```
Title:    Renovation FAQs | [Company Name] — Common Questions Answered
Desc:     Find answers to frequently asked questions about renovation costs,
          timelines, permits, and warranties. Expert answers from [City] pros.
```

---

### H1–H6 Header Hierarchy Per Page Type

#### Homepage
```
H1: "[Company Name] — Renovation & Roofing in [City], Canada"
  H2: "Our Services"
    H3: "Kitchen Renovation" (×8 service cards)
  H2: "Quality Craftsmanship, Built on Trust"
    H3: "Licensed & Insured"
    H3: "Free Estimates"
  H2: "Recent Projects"
  H2: "What Our Clients Say"
  H2: "Ready to Transform Your Space?"
```

#### Service Page
```
H1: "Kitchen Renovation in [City] — Custom Designs & Expert Installation"
  H2: "About Our Kitchen Renovation Services"
  H2: "Why Choose [Company Name]?"
    H3: "Quality Materials & Craftsmanship"
    H3: "Transparent Pricing"
    H3: "On-Time Delivery"
  H2: "Our Recent Kitchen Projects in [City]"
  H2: "Kitchen Renovation FAQ"
    H3: "How much does a kitchen renovation cost in [City]?" (×3–5)
  H2: "Get a Free Kitchen Renovation Estimate"
```

#### Blog Article
```
H1: "Complete Guide to Basement Renovation in Canada (2026)"
  H2: "Why Renovate Your Basement?"
    H3: "Increase Your Home's Value"
    H3: "Add Livable Square Footage"
  H2: "How Much Does a Basement Renovation Cost in [City]?"
    H3: "Basic Basement Finishing: $X–$X"
    H3: "Full Basement Renovation: $X–$X"
  H2: "Step-by-Step Basement Renovation Process"
  H2: "Permits Required in [Province]"
  H2: "Frequently Asked Questions"
```

---

### Schema.org JSON-LD (Per Page Type)

#### All Pages — Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "[Company Name]",
  "url": "https://[domain].ca",
  "logo": "https://[domain].ca/images/logo.png",
  "telephone": "[Phone]",
  "email": "info@[domain].ca",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Address]",
    "addressLocality": "[City]",
    "addressRegion": "[Province Code]",
    "postalCode": "[Postal Code]",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "XX.XXXX",
    "longitude": "-XX.XXXX"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "areaServed": { "@type": "City", "name": "[City]" },
  "sameAs": [
    "https://www.facebook.com/[handle]",
    "https://www.instagram.com/[handle]"
  ]
}
```

#### Service Pages — Service Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Kitchen Renovation",
  "provider": { "@type": "HomeAndConstructionBusiness", "name": "[Company Name]" },
  "areaServed": { "@type": "City", "name": "[City]" },
  "description": "Professional kitchen renovation services in [City]...",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "CAD",
    "description": "Free estimate for kitchen renovation projects"
  }
}
```

#### FAQ Pages/Sections — FAQ Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a kitchen renovation cost in [City]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kitchen renovations in [City] typically range from $15,000 to $60,000..."
      }
    }
  ]
}
```

#### Blog Articles — Article Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Complete Guide to Basement Renovation in Canada (2026)",
  "author": { "@type": "Organization", "name": "[Company Name]" },
  "publisher": {
    "@type": "Organization",
    "name": "[Company Name]",
    "logo": { "@type": "ImageObject", "url": "https://[domain].ca/logo.png" }
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-04-25",
  "image": "https://[domain].ca/images/blog/basement-guide.webp",
  "url": "https://[domain].ca/blog/basement-renovation-guide"
}
```

#### Breadcrumb Schema (all pages except homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://[domain].ca" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://[domain].ca/services" },
    { "@type": "ListItem", "position": 3, "name": "Kitchen Renovation" }
  ]
}
```

---

### Internal Linking Silo Strategy

```
SILO 1 — RENOVATION
  Hub: /services (links to all renovation services)
  Spokes: /services/kitchen-renovation ← → /services/bathroom-renovation
  Support: /inspiration/kitchen → links to → /services/kitchen-renovation
  Blog: /blog/basement-renovation-guide → links to → /services/basement-renovation

SILO 2 — ROOFING & EXTERIORS
  Hub: /services (links to all roofing services)
  Spokes: /services/roof-replacement ← → /services/roof-repairs
  Support: /products → links to → /services/roof-replacement, /services/metal-roofing
  Areas: /service-areas → links to → all service pages

SILO 3 — LOCAL SEO
  /service-areas → /service-areas/[city-name] (if sub-pages added)
  Each service page: "Serving [City], [Neighborhood], [Neighborhood2]"
  Footer: links to top 5 service pages + contact
```

---

## 📱 Responsive Design

### Breakpoints (Tailwind)
```css
/* Mobile-first */
sm:  640px   /* small tablets */
md:  768px   /* tablets */
lg:  1024px  /* small laptops */
xl:  1280px  /* desktops */
2xl: 1536px  /* large screens */
```

### Mobile (< 768px)
- Header: hamburger → full-screen slide-in overlay
- Hero: single column, H1 at `--text-4xl`, CTAs stacked
- Three.js: **disabled entirely** (CSS gradient fallback)
- Services grid: 1 column, full-width cards
- Gallery: 1–2 columns, swipeable
- Testimonials: 1 card visible, swipe navigation
- Footer: single column, link groups in accordion
- Floating CTA: fixed bottom-right, phone icon + "Call Now"
- All phones: `<a href="tel:...">` tags
- Touch targets: minimum 44×44px
- Forms: full-width inputs, no side-by-side fields

### Tablet (768px – 1024px)
- Header: condensed nav or hamburger
- Services grid: 2 columns
- Gallery: 2–3 columns masonry
- Testimonials: 2 cards visible
- Footer: 2–3 column grid
- Three.js: **disabled** (performance + battery)

### Desktop (1024px+)
- Full mega menu with hover dropdowns
- Services grid: 4 columns
- Gallery: 3–4 columns masonry with lightbox
- Testimonials: 3 cards with auto-slide (5s)
- Footer: 4-column grid
- Hero: Three.js particles active
- Max content width: 1280px centered

### Non-Negotiable Rules
1. NO horizontal scroll — test at 320px width
2. Images never overflow containers
3. Body text: minimum 16px (1rem)
4. Mega menu → accordion on mobile (never hover-only)
5. Google Maps: responsive with `padding-bottom: 56.25%` trick
6. Lightbox: swipe-to-close on touch devices
7. Video embeds: `aspect-video` wrapper class
8. Tables: horizontal scroll or reflow to cards on mobile

---

## ⚡ Performance Targets & Implementation

### Targets
| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 92 |
| Lighthouse SEO | > 97 |
| Lighthouse Accessibility | > 92 |
| LCP (Largest Contentful Paint) | < 2.2s |
| CLS (Cumulative Layout Shift) | < 0.05 |
| INP (Interaction to Next Paint) | < 150ms |
| TTFB (Time to First Byte) | < 400ms |
| Total page weight (compressed) | < 400KB |

### Implementation

#### Images
```astro
---
import { Image } from 'astro:assets';
---
<!-- Hero image: eager + fetchpriority high -->
<Image
  src={heroImage}
  alt="Kitchen renovation in [City] by [Company Name]"
  width={1920} height={1080}
  format="webp"
  quality={80}
  loading="eager"
  fetchpriority="high"
/>

<!-- Below-fold images: lazy -->
<Image
  src={serviceImage}
  alt="Bathroom renovation [City]"
  width={800} height={600}
  format="webp"
  quality={75}
  loading="lazy"
  widths={[400, 800, 1200]}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

#### Fonts (preload critical)
```html
<!-- In BaseLayout.astro <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- Preload only the fonts needed for above-fold text -->
<link rel="preload" as="font" type="font/woff2"
  href="https://fonts.gstatic.com/s/cormorantgaramond/v21/..."
  crossorigin>
```

#### Three.js (code-split + deferred)
```astro
<!-- Only load Three.js after page is fully interactive -->
<script>
  if (window.innerWidth >= 768 &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Dynamic import — Three.js only loaded when needed
    import('/src/three/hero-particles.js').then(({ init }) => init());
  }
</script>
```

#### Critical CSS
```astro
<!-- Inline critical CSS in <head> via Astro's style inlining -->
<!-- Astro automatically inlines styles used above the fold -->
```

#### No jQuery, no Lodash, no Bootstrap
- Use Astro's native JS + vanilla CSS
- Animations via CSS transitions + IntersectionObserver
- Carousel via CSS scroll-snap (no library)

---

## ♿ Accessibility (WCAG 2.1 AA)

### Required on every page
- `<html lang="en-CA">` on all pages
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Skip-to-content link: `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>`
- Logical heading hierarchy (one H1 per page — no skipping levels)
- All images: descriptive `alt` text (empty alt for decorative images)
- All form inputs: associated `<label>` elements
- Focus indicators: visible on all interactive elements
- Color contrast: minimum 4.5:1 for text (7:1 for critical CTAs)
- Touch targets: minimum 44×44px
- No content conveyed by color alone
- ARIA landmarks: `<header>`, `<main id="main-content">`, `<footer>`, `<nav aria-label="Main">`

### Color Contrast Check
```
--color-accent-500 (#C8A96E) on --color-primary-900 (#0A1E2A): ratio 7.4:1 ✅ AAA
--color-white (#FFF) on --color-primary-700 (#1B3A4B): ratio 8.2:1 ✅ AAA
--color-text (#1A1A1A) on --color-off-white (#F7F5F0): ratio 16.5:1 ✅ AAA
--color-gray-600 (#8B8680) on --color-white (#FFF): ratio 3.9:1 ⚠️ AA large only
→ Use --color-gray-800 (#4A4642) for body text on white backgrounds
```

### Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  /* Three.js init check already handles this in JS */
}
```

---

## 🖼️ Image Strategy

### Sources (in order of preference)
1. **Client's real photos** (add progressively post-launch)
2. **Stock photos:** Unsplash / Pexels — specific searches below
3. **AI-generated:** Midjourney/DALL-E — hero backgrounds and abstract mood only

### Search keywords per service
| Service | Unsplash/Pexels search terms |
|---------|------------------------------|
| Kitchen | "kitchen renovation", "modern kitchen remodel", "white kitchen before after" |
| Bathroom | "bathroom renovation", "spa bathroom", "tile bathroom modern" |
| Basement | "finished basement", "basement living room", "basement renovation" |
| Painting | "interior painting", "house painting professional", "freshly painted room" |
| Additions | "home addition", "house extension construction", "sunroom addition" |
| Custom Homes | "new home construction", "custom home building", "framing house" |
| Exteriors | "exterior renovation", "curb appeal", "house exterior makeover" |
| Roofing | "roof replacement", "roofing contractor", "new roof installation" |
| Metal Roofing | "metal roof", "standing seam metal roofing", "metal roof residential" |
| Siding | "house siding", "vinyl siding installation", "fiber cement siding" |

### Image sizing specs
| Usage | Size | Format | Quality |
|-------|------|--------|---------|
| Hero (full-bleed) | 1920×1080 | WebP | 80 |
| Service card | 800×800 | WebP | 75 |
| Gallery thumbnail | 800×600 | WebP | 75 |
| Blog header | 1200×630 | WebP | 80 |
| OG image | 1200×630 | JPG | 85 |
| Team/founder | 800×1000 | WebP | 80 |
| Logo (PNG) | 320×80 | PNG | — |

---

## 📋 Forms

### Contact Form (`ContactForm.astro`)
```
Name (required) | Email (required)
Phone (required) | Postal Code
How did you hear about us? (dropdown):
  - Google Search, Google Maps, Facebook, Instagram,
    Referral from friend, Saw your truck/sign, Other
Tell us about your project (textarea, 5 rows)
[Send Message] button (gold, full-width on mobile)
→ Redirects to /thank-you
```

### Free Estimate Form (`EstimateForm.astro`)
```
Service needed (required, dropdown):
  Kitchen Renovation, Bathroom Renovation, Basement Renovation,
  Interior Painting, Exterior Painting, Home Addition, Custom Home,
  Exterior Renovation, Roof Replacement, Roof Repair, Metal Roofing,
  Siding, Soffit & Fascia, Eavestrough, Venting, Roof Inspection,
  Snow Removal, Other
Property type: Residential / Commercial
Estimated budget:
  Under $10,000 / $10,000–$25,000 / $25,000–$50,000 /
  $50,000–$100,000 / $100,000+
Timeline:
  As soon as possible / 1–3 months / 3–6 months / Just exploring
Full Name (required) | Email (required)
Phone (required)     | Street Address
City                 | Postal Code
Source (dropdown — same as contact form)
Tell us about your project (textarea, 6 rows)
[Get My Free Estimate] button (gold, full-width)
→ Redirects to /thank-you
```

### Formspree Setup
```html
<form action="https://formspree.io/f/[FORM_ID]" method="POST">
  <input type="hidden" name="_subject" value="New [City] Renovation Lead">
  <input type="hidden" name="_next" value="https://[domain].ca/thank-you">
  <!-- form fields here -->
</form>
```

---

## 🚀 Deployment

### Vercel Setup
1. `git push` to GitHub (main branch)
2. Connect repo to Vercel (auto-detects Astro)
3. Build: `npm run build` → Output: `dist/`
4. Custom domain: add `[domain].ca` in Vercel
5. DNS: `CNAME @ cname.vercel-dns.com` at registrar
6. HTTPS: automatic via Vercel

### Environment Variables
```
FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxx
GA_TRACKING_ID=G-XXXXXXXXXX
SITE_URL=https://[domain].ca
COMPANY_NAME=[Company Name]
COMPANY_PHONE=[Phone]
COMPANY_EMAIL=info@[domain].ca
COMPANY_CITY=[City]
```

---

## 🔧 Development Order

Work in this sequence — each step builds on the last:

```
PHASE 1 — Foundation (Day 1)
  ✅ 1. npm create astro@latest + add Tailwind
  ✅ 2. global.css — all design tokens (copy from this spec)
  ✅ 3. BaseLayout.astro — <head>, SEO, analytics, skip link
  ✅ 4. Header.astro + MobileMenu.astro + Footer.astro
  ✅ 5. Test at 320px, 768px, 1280px before proceeding

PHASE 2 — Homepage (Day 1–2)
  ✅ 6. HeroHome.astro (with static fallback first, add 3D last)
  ✅ 7. Stats.astro (animated counters)
  ✅ 8. ServicesGrid.astro (8 cards)
  ✅ 9. AboutTeaser.astro
  ✅ 10. TestimonialSlider.astro
  ✅ 11. RecentWork.astro
  ✅ 12. CtaBanner.astro
  ✅ 13. HeroParticles.astro (Three.js) — add after all static content works

PHASE 3 — Service Template (Day 2)
  ✅ 14. services.json — all 16 services with full data
  ✅ 15. ServiceLayout.astro — generic template
  ✅ 16. Generate all 16 service pages (use template data)
  ✅ 17. FAQ.astro accordion component

PHASE 4 — Inspiration Template (Day 3)
  ✅ 18. inspiration.json data
  ✅ 19. InspirationLayout.astro + InspirationSidebar.astro
  ✅ 20. Generate all 5 inspiration pages

PHASE 5 — Static Pages (Day 3–4)
  ✅ 21. /about, /testimonials, /our-work (gallery + lightbox)
  ✅ 22. /contact + /free-estimate forms (Formspree)
  ✅ 23. /faq, /products, /service-areas
  ✅ 24. /thank-you, /404

PHASE 6 — Blog (Day 4)
  ✅ 25. BlogLayout.astro
  ✅ 26. 3 articles with proper H1–H6 hierarchy + schema

PHASE 7 — SEO & Performance (Day 5)
  ✅ 27. Meta tags on all pages
  ✅ 28. JSON-LD schema on all pages
  ✅ 29. sitemap.xml (astro-sitemap integration)
  ✅ 30. robots.txt
  ✅ 31. OG image + Open Graph tags
  ✅ 32. Lighthouse audit → fix issues

PHASE 8 — Polish & Launch (Day 5–7)
  ✅ 33. FloatingCTA.astro (mobile phone button)
  ✅ 34. Responsive testing on real devices (320px, 375px, 768px, 1280px)
  ✅ 35. Form testing (submit + email received)
  ✅ 36. All links working (no 404s)
  ✅ 37. Accessibility check (axe DevTools)
  ✅ 38. DNS + Vercel deploy
  ✅ 39. GA4 + Search Console setup
  ✅ 40. Client walkthrough
```

---

## 🔄 Placeholder Values

Find-replace across all files before launch:

| Placeholder | Replace With |
|-------------|-------------|
| `[Company Name]` | Client's company name |
| `[CITY]` or `[City]` | Client's city |
| `[Province]` | Province (e.g., Ontario) |
| `[Province Code]` | ON, QC, BC, AB, etc. |
| `[Postal Code]` | Client's postal code |
| `[Phone]` | (XXX) XXX-XXXX |
| `[Email]` | info@[domain].ca |
| `[Address]` | Full street address |
| `[domain]` | Actual .ca domain |
| `[FORM_ID]` | Formspree form ID |
| `G-XXXXXXXXXX` | GA4 tracking ID |
| `XX.XXXX` | GPS latitude |
| `-XX.XXXX` | GPS longitude |

---

## ✅ Delivery Checklist

### Code Quality
- [ ] All design tokens defined in global.css, no magic numbers
- [ ] Three.js disabled on mobile/tablet + prefers-reduced-motion
- [ ] All images: `alt` text, `width`, `height`, `loading`, `format="webp"`
- [ ] All phone numbers: `<a href="tel:...">` links
- [ ] Formspree form: tested with real submission
- [ ] /thank-you redirect works
- [ ] No console errors in browser DevTools
- [ ] Code commented for client handover

### SEO
- [ ] One H1 per page, correct H2–H6 hierarchy
- [ ] Meta title + description on every page (within character limits)
- [ ] `<link rel="canonical">` on every page
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`) on every page
- [ ] JSON-LD schema on every page (correct type per page)
- [ ] Breadcrumb nav + BreadcrumbList schema on interior pages
- [ ] `/sitemap.xml` generated and accessible
- [ ] `/robots.txt` — Allow all
- [ ] All URL slugs: lowercase, hyphens, keyword-first

### Performance
- [ ] Lighthouse Performance > 92 (test on Chrome, incognito)
- [ ] Lighthouse SEO > 97
- [ ] Lighthouse Accessibility > 92
- [ ] LCP < 2.2s (hero image preloaded)
- [ ] CLS < 0.05 (all images have width/height)
- [ ] No render-blocking resources
- [ ] Three.js: < 5ms frame time on mid-range laptop

### Responsive
- [ ] No horizontal scroll at 320px
- [ ] Hamburger menu works on mobile
- [ ] Floating CTA visible on mobile, hidden on desktop
- [ ] Forms: full-width on mobile, no side-by-side fields
- [ ] Gallery lightbox: swipe works on iOS/Android
- [ ] Google Maps embed: responsive

### Accessibility
- [ ] Skip-to-content link present
- [ ] All images have alt text
- [ ] All inputs have associated labels
- [ ] Color contrast ratios pass AA (checked with axe DevTools)
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators visible
- [ ] `lang="en-CA"` on `<html>`

### Launch
- [ ] All `[placeholder]` values replaced
- [ ] .ca domain configured + pointing to Vercel
- [ ] HTTPS active
- [ ] GA4 tracking firing
- [ ] Search Console connected + sitemap submitted
- [ ] Client email verified in Formspree
- [ ] GitHub repo delivered to client
- [ ] README.md with instructions for future edits
