# Session Notes - Context for Next Instance

## Project Vision

User (Keith Wilkinson) wants to build a subdomain site at `projects.title22.org` that serves as:
- Resume/portfolio
- Intellectual repository
- Laboratory/experimental space
- Always a work-in-progress

The site complements his main blog at www.title22.org (Substack) which covers water infrastructure, utilities, and technology with technical expertise and accessible writing.

## Key Planning Conversation

User had a detailed planning conversation with another AI (likely Perplexity) that established:

### Visual Direction
- **Hero effect:** "Keep Scrollin'" codepen-style intro with scroll-driven 3D fold/marquee
- **Parallax scene:** Sierra mountain reservoir → treatment plant
  - Cell/spot/clipart-ish illustration style
  - "Stained-glass" overlay aesthetic
  - 7 layers: sky, far mountains, mid mountains, trees, water, shore, treatment plant
- **Color palette:** White-blue-light-blue (from logo)
  - Deep navy #0e103e (ink)
  - Strong blue #2781bb (links/accents)
  - Light water blue #aad3f1 (backgrounds)
  - White #ffffff (paper)
  - Mist gray #acb8c6 (borders)

### Tech Stack Decision
- Plain HTML + CSS + vanilla JS (no build step, easy iteration)
- GSAP ScrollTrigger for scroll effects
- GitHub Pages hosting
- Single-page with scroll sections initially

### Content Structure
**Sections:** Projects, Tools, Research Notes, Literary, Experiments, Resume, Finds

**Tone keywords:** "curious water professionals," "systemic not just technical," "frameworks and thought process," "learning in public"

## Assets Generated

User generated parallax layers and card images using "nanobanana" (AI image generation):
- 7 parallax layers with magenta backgrounds (we removed via Python script)
- 7 card images with cell/stained-glass style
- Logo files (Title22final.png)
- All assets use consistent visual language

## First Draft - What Didn't Work

Built a straightforward implementation with:
- Simple intro section with logo
- GSAP parallax with 7 layers at different speeds
- Card grid below

User response: "haha ok no" - meaning it didn't hit the mark, but that's okay for a draft.

## What Might Need Different Approach

Based on the planning conversation, the user wanted:
1. **More dramatic intro:** "Keep Scrollin'" style 3D fold with marquee text (Title/22/Projects) and rAF scroll interpolation - not just a static logo
2. **Reservoir parallax section:** Should be its own distinct section after the intro, with "travel toward treatment plant" feeling
3. **More intentional scroll storytelling:** Not just parallax for its own sake, but a narrative journey

The first draft was too conventional - user wanted something more experimental and visually striking based on their references.

## References User Mentioned

- **"Keep Scrollin'" codepen:** 3D fold intro with marquee rows, fixed full-screen, scroll-scrubbed animation
- **GSAP ScrollTrigger:** For scroll-linked animations and pinned sections
- **Three.js Water (optional):** For hero water surface effect (but keep it confined to header for performance)

## Technical Notes

- User is on Windows (Git Bash)
- Python/PIL available for image processing
- Generated images had magenta (#FF00FF) backgrounds that needed removal
- User comfortable with "vibe coding" with AI - iterative, experimental approach

## User's Working Style

- Measured and documented approach
- Wants to "get something up" but iterate
- Values clear planning but comfortable with failed drafts
- Water industry professional (Livermore, CA) with technical background
- Wants site to be technically simple but visually/stylistically interesting

## Next Steps for Next Instance

1. **Review the "Keep Scrollin'" effect more carefully** - this is the key reference
2. **Build more dramatic intro** with text marquee/3D fold effect
3. **Separate the parallax reservoir into distinct "travel" section**
4. **Consider the scroll narrative:** intro → reservoir journey → treatment plant arrival → content sections
5. **Don't be conventional** - user wants experimental/interesting over safe/standard

## Helpful Context

- Title 22 = California Code of Regulations Title 22 (water regs)
- User's blog covers water treatment, infrastructure, cybersecurity, workforce development
- Site should extend brand from title22.org (professional but curious/experimental)
- User values process documentation (hence this file!)

## Current Repo State

- Structure and planning docs complete
- Assets ready (logo, parallax layers, cards)
- Content templates seeded
- First draft HTML/CSS/JS exists but needs rework
- Everything committed and pushed to GitHub

## Questions to Ask When Resuming

1. What specifically didn't work about the first draft?
2. Should we focus on nailing the intro effect first, then add parallax?
3. Does user want to see examples/references before building v2?
4. How "experimental" can we go while keeping it professional?
