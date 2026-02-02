# Development Log - projects.title22.org

## 2026-02-02

### Session 1: Foundation & Planning

**Completed:**
- ✓ Repository initialized and pushed to GitHub (boxwrench/projects-title22_site)
- ✓ Created comprehensive site plan (SITE-PLAN.md)
  - Defined 7 sections: Projects, Tools, Research Notes, Literary, Experiments, Resume, Finds
  - Visual direction: Cell-shaded Sierra reservoir → treatment plant parallax
  - Color palette: Deep navy (#0e103e), blue (#2781bb), water (#aad3f1), white, mist gray (#acb8c6)
  - Tech stack: HTML + CSS + vanilla JS, GSAP ScrollTrigger, GitHub Pages
- ✓ Folder structure created (assets, content, pages, css, js)
- ✓ Content JSON templates created with water-ops examples
- ✓ Brand rules document for AI agent consistency

**Assets Added:**
- ✓ Logo files (Title22final.png, favicon)
- ✓ 7 parallax layers generated with AI (nanobanana)
  - Sky, far mountains, mid mountains, trees, water, shore, treatment plant
  - Magenta backgrounds removed via Python script (remove_magenta.py)
  - All layers now transparent PNGs
- ✓ 7 card images with cell/stained-glass style overlay
- ✓ Raw photos for reference

**Decisions Made:**
- Subdomain: `projects.title22.org`
- Visual style: Cell-shaded, clipart-ish, clean and professional
- Scroll effects: GSAP ScrollTrigger for parallax and pinned sections
- Single-page layout with smooth scroll between sections

**Next Steps:**
- [ ] Phase 1: Build landing page with scroll intro + parallax hero
  - Animated "Title 22" intro (inspired by "Keep Scrollin'" effect)
  - Parallax reservoir scene with 7 layers
  - Logo fade-in on scroll
- [ ] Phase 2: Add card grid for main sections
- [ ] Phase 3: Build individual section pages
- [ ] Phase 4: Deploy to GitHub Pages
- [ ] Phase 5: Configure DNS for projects.title22.org subdomain

**Technical Notes:**
- GSAP ScrollTrigger CDN needed for scroll effects
- Parallax layer speeds: sky 0.15x, far mountains 0.25x, mid 0.4x, trees 0.65x, water 0.55x, shore 0.85x, plant 0.95x
- Treatment plant layer fades in late in scroll sequence
- All assets use consistent color palette for brand cohesion

**Content Status:**
- projects.json: 2 entries (1 real, 1 placeholder)
- tools.json: 5 calculator ideas seeded
- writing.json: 1 placeholder
- finds.json: 2 example entries
- resume.json: Name and location prefilled, needs completion

**Open Questions:**
- None currently - ready to build Phase 1

---

## How to Pick Up

1. Review SITE-PLAN.md for full context
2. Check assets/hero/layers/ for parallax images
3. Check content/*.json for data structure
4. Start with index.html + css/styles.css + js/main.js
5. Use GSAP ScrollTrigger from CDN: https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js
