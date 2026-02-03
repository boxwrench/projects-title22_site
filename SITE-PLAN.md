# Title22 Projects Site - Planning Document

## Overview
A portfolio/laboratory site for water-related projects, tools, and writing.
Subdomain of [www.title22.org](https://www.title22.org) (Substack blog).

---

## Site Sections

| Section | Purpose | Content Type |
|---------|---------|--------------|
| **Projects** | Bigger builds, simulators, case studies | Header Card + List |
| **Tools** | Calculators, checklists, templates | Header Card + List |
| **Research** | Regs, papers, "what it means in the field" | Header Card + List |
| **Writing** | Creative water writing (Essays/Fiction) | Header Card + List |
| **Resume** | Professional background + "Now" block | Grid Layout |
| **Finds & Fun** | Interesting links + commentary | Simple Lists |

---

## Visual Direction: "Clean & Intentional"

### Design Philosophy
- **Less is More:** Removed complex parallax and 3D effects in favor of clean static design.
- **Art as Anchors:** Use high-quality, stylized painted landscapes as "Section Headers" to define categories.
- **Skimmability:** Content items are listed as clean text blocks below the visual headers, allowing users to find tools/simulators quickly.

### Header Cards
- **Style:** Wide landscape aspect ratio (approx 3:1 or 4:1)
- **Overlay:** Dark gradient overlay (bottom-up) for white text legibility.
- **Typography:** Serif (Outfit) for Section Titles, Sans (Inter) for body/lists.

### Colors
```css
:root {
  --ink: #1a1f36;      /* Text, headings (deep navy) */
  --ink-light: #4a5568; /* Body text */
  --paper: #f8f9fc;    /* Main background */
  --white: #ffffff;    /* Card background */
  --accent: #2b6cb0;   /* Links/Buttons */
}
```

---

## Tech Stack

| Component | Choice | Notes |
|-----------|--------|-------|
| Structure | HTML + CSS | Static semantic HTML. |
| Styling | CSS3 | Flexbox/Grid, Variables. No Tailwind. |
| Scripts | Minimal JS | Only for smooth scroll or simple interactions. |
| Hosting | GitHub Pages | Free, auto-deploy on push. |

---

## Assets Strategy

### Section Headers
We repurpose the "Card" assets as large Section Headers:
- **Projects:** Simulator/Landscape art
- **Tools:** Technical/Calculator art
- **Research:** Lab/Analytical art
- **Writing:** Nature/Reservoir art

### Content
- Content is currently hardcoded in `index.html` for the static build.
- Future state: Can fetch from JSON if complexity grows, but static is fine for <50 items.

---

## Folder Structure

```
projects-title22_site/
├── index.html          # Main entry point (Static Layout)
├── css/
│   └── static.css      # Main stylesheet (Clean design)
├── assets/
│   ├── brand/
│   │   └── favicon/    # Logo assets
│   ├── cards/
│   │   └── full/       # High-res art for Headers
│   └── icons/
└── ...
```

---

## Next Steps

1. **Refine Content:** Replace placeholder text with real project descriptions.
2. **Link Logic:** Build the actual pages/tools the items link to.
3. **Deploy:** Push to GitHub Pages and verify domain resolution.
