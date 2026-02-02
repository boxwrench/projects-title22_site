# Title22 Projects Site - Planning Document

## Overview
A portfolio/laboratory site for water-related projects, tools, and writing.
Subdomain of [www.title22.org](https://www.title22.org) (Substack blog).

---

## Site Sections

| Section | Purpose | Content Type |
|---------|---------|--------------|
| **Projects** | Bigger builds, simulators, case studies | Cards with writeups |
| **Tools** | Calculators, checklists, templates | Interactive utilities |
| **Research Notes** | Regs, papers, "what it means in the field" | Articles/notes |
| **Literary** | Creative water writing | Essays/stories |
| **Experiments** | Small prototypes, UI tests | WIP demos |
| **Resume** | Professional background | Simple, skimmable |
| **Finds** | Interesting links + commentary | Link feed |

---

## Visual Direction

### Hero Parallax
- **Style:** Cell/spot/clipart-ish illustration
- **Scene:** Sierra mountain reservoir → treatment plant
- **Behavior:**
  - 1-2 screens of "Title 22" intro with scroll effect
  - Transition to parallax reservoir scene
  - Camera "travels" toward treatment plant silhouette as user scrolls
- **Layers (back to front):**
  1. Sky (0.15x speed)
  2. Far mountains (0.25x)
  3. Mid mountains (0.4x)
  4. Near trees/foliage (0.65x)
  5. Water surface (0.55x + subtle horizontal drift)
  6. Foreground rocks/shore (0.85x)
  7. Treatment plant endcap (0.95x, fades in late)

### Cards
- Use AI-generated art from your photos
- Consistent "cell/stained-glass" style matching the hero
- Size: 1200×800 full, 600×400 thumbs

---

## Color Palette

```css
:root {
  --ink: #0e103e;      /* Text, headings (deep navy) */
  --blue: #2781bb;     /* Links, highlights, accents */
  --water: #aad3f1;    /* Background wash, subtle panels */
  --paper: #ffffff;    /* Main background */
  --mist: #acb8c6;     /* Borders, dividers, muted text */
}
```

---

## Typography
- System fonts (fast, reliable)
- Or: 1-2 Google fonts if you want more personality (TBD)

---

## Tech Stack

| Component | Choice | Notes |
|-----------|--------|-------|
| Structure | HTML + CSS + vanilla JS | No build step, easy to iterate |
| Scroll effects | GSAP + ScrollTrigger | Industry standard for scroll animations |
| Parallax | CSS transforms + ScrollTrigger | Performant, smooth |
| Hosting | GitHub Pages | Free, auto-deploy on push |

---

## Assets Checklist

### Brand (Required)
- [ ] `logo.svg` - Vector logo (preferred for animation)
- [ ] `logo.png` - Fallback, transparent background
- [ ] Favicon set (32px, 180px, 192px, 512px)

### Hero Parallax Layers (Required)
- [ ] `01_sky.webp` - Sky background
- [ ] `02_far_mtn.webp` - Distant mountains
- [ ] `03_mid_mtn.webp` - Mid-range mountains
- [ ] `04_trees.webp` - Near foliage/trees
- [ ] `05_water.webp` - Water surface
- [ ] `06_shore.webp` - Foreground rocks/shore
- [ ] `07_plant.webp` - Treatment plant silhouette

### Card Images (8-16 recommended)
- [ ] Project cards (your AI-generated art)
- [ ] Tool cards
- [ ] Section headers

### Optional
- [ ] Water-themed icons (SVG): drop, pipe, valve, wrench, beaker, book
- [ ] Headshot/avatar for Resume section

---

## Content Seed Files

Create these JSON files so the site can render cards automatically:

- `content/projects.json` - 6-10 project cards
- `content/tools.json` - 5+ tool entries
- `content/writing.json` - 3+ literary pieces
- `content/finds.json` - 10+ interesting links
- `content/resume.json` - Professional info

---

## Folder Structure

```
projects-title22_site/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── brand/
│   │   ├── logo.svg
│   │   ├── logo.png
│   │   └── favicon/
│   ├── hero/
│   │   └── layers/
│   │       ├── 01_sky.webp
│   │       ├── 02_far_mtn.webp
│   │       └── ...
│   ├── cards/
│   │   ├── full/
│   │   └── thumbs/
│   └── icons/
├── content/
│   ├── projects.json
│   ├── tools.json
│   ├── writing.json
│   ├── finds.json
│   └── resume.json
└── pages/
    ├── projects/
    ├── tools/
    └── ...
```

---

## Brand Rules (for AI agent)

1. **Name:** Always "Title 22" or "Title22" - never "Title Twenty-Two"
2. **Tone:** Technical expertise, accessible, strategic - "curious water professionals"
3. **Palette:** Stick to the 5 CSS variables defined above
4. **Motion:** Smooth, purposeful - not flashy or distracting
5. **Links:** Always link back to www.title22.org where relevant

---

## Next Steps

1. **Gather assets** - Logo files, parallax layers, card images
2. **Create content JSONs** - Seed data for each section
3. **Build Phase 1** - Landing page with scroll intro + parallax hero
4. **Build Phase 2** - Card grid sections
5. **Build Phase 3** - Individual section pages
6. **Deploy** - GitHub Pages + subdomain DNS setup
