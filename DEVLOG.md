# Development Log - projects.title22.org

## 2026-02-03

### Session 2: Pivot & Refine (The "Clean" Update)

**Major Pivot:**
- **Decision:** The initial "Agency/Portfolio" direction (parallax, 3D folds, scrolljacking) felt too heavy and distracted from the content.
- **New Direction:** "Clean & Intentional". Static HTML/CSS focus. High-quality art assets used as Section Heroes rather than small cards.
- **Goal:** A professional, skimmable resource for water operators.

### Session 3: Footer Polish & Brand Consistency

**Completed:**
- ✓ **Footer Cleanup:**
  - Removed "white square" filter from the footer logo to reveal original brand colors.
  - Removed "watermark cover" hack; adjusted layout to respect the clean background image.
  - Verified removal of stray watermarks and correct logo scaling (32px).
- ✓ **Visual Verification:**
  - Confirmed footer looks professional and aligned with the "Clean & Intentional" design direction.
  - No more "hacks" or cover-ups; site code is cleaner.

**Completed:**
- ✓ **Redesigned Information Architecture:**
  - New Sections: Projects, Tools, Research, Writing, Resume (with "Now" block), Finds/Fun.
- ✓ **Implemented Static Layout:**
  - Built `index.html` with semantic structure.
  - Created `css/static.css` for clean, professional typography and spacing.
  - Removed all GSAP/ScrollTrigger dependencies for now.
- ✓ **Asset Integration:**
  - Repurposed high-res painted landscape assets as **Section Header Cards**.
  - Verified image loading and responsive scaling.
- ✓ **Visual Verification:**
  - Confirmed "Header Card" layout works visually (verified via browser screenshots).
  - Confirmed skimmable text lists below headers.

**Current Status:**
- Site is now a single static page with anchor navigation.
- "Projects", "Tools", "Research", and "Writing" have distinct visual identities via the art headers.
- "Resume" section is clear and professional.

**Next Steps:**
- [ ] Connect actual content links (currently `#`).
- [ ] Add subtle polish (fade-ins, smooth scroll behavior adjustments).
- [ ] Build out individual detail pages for Simulators/Tools.

---

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

### Session 1 (continued): First Draft Attempt

**Built:**
- ✓ index.html with intro, parallax hero, card grid
- ✓ css/styles.css with brand colors and responsive layout
- ✓ js/main.js with GSAP ScrollTrigger parallax effects

**Result:**
- ✗ First draft didn't hit the mark visually/functionally
- Need to revise approach

**Lessons:**
- Parallax implementation needs refinement
- May need different structure/effects than initially planned
- Good to test early - draft phase working as intended

**Next Iteration:**
- [ ] Review what didn't work about first draft
- [ ] Revise approach based on feedback
- [ ] Build v2 with adjusted direction

---

## How to Pick Up

1. Review SITE-PLAN.md for updated "Clean & Intentional" direction.
2. `index.html` is now the single source of truth for structure.
3. `css/static.css` handles the styling (no complex JS).
4. Assets are in `assets/cards/full` used as headers.
