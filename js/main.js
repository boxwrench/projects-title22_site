// Title 22 Projects Site - V2 Main JavaScript

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Fallback Data (for local file:// previews where fetch is blocked)
const FALLBACK_DATA = {
  projects: [
    {
      "id": "water-treatment-sim",
      "title": "Water Treatment Plant Simulator",
      "description": "Interactive simulation of a conventional surface water treatment plant. Practice process control decisions without the consequences.",
      "tags": ["simulation", "treatment", "training"],
      "status": "active",
      "url": "#",
      "image": "20260201_2221_Stylized Landscape Illustration_remix_01kgeg67qmfq6bxw3bdggezjss.png"
    },
    {
      "id": "analytical-lab-notes",
      "title": "Analytical Laboratory Bench",
      "description": "Quick-reference guides for common water quality tests (Alkalinity, Turbidity, Color).",
      "tags": ["lab", "quality", "technical"],
      "status": "active",
      "url": "#",
      "image": "20260202_0858_Image Generation_remix_01kgfmj3wjfg9bqtm91tfc2pxt.png"
    }
  ],
  tools: [
    {
      "id": "chlorine-decay",
      "title": "Chlorine Decay Calculator",
      "description": "Estimate residual chlorine at distribution system endpoints based on contact time and decay rate.",
      "tags": ["disinfection", "calc"],
      "status": "planned",
      "url": "#",
      "image": "20260201_2327_Image Generation_remix_01kgekyve4edqbf2rjr12fwh77.png"
    },
    {
      "id": "ct-calculator",
      "title": "CT Compliance Calculator",
      "description": "Calculate disinfection CT values for compliance with Surface Water Treatment Rule.",
      "tags": ["disinfection", "compliance"],
      "status": "planned",
      "url": "#",
      "image": "20260201_2329_Image Generation_remix_01kgem2enyff69d7d80waberze.png"
    }
  ]
};

// Configuration
const CONFIG = {
  parallaxScrub: 2.5, // Slightly faster catch-up
  parallaxAmount: 0.35,
  foldAngle: 90,
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('Title 22 V2 - Initializing...');

  initScrollEntrance();
  init3DReveal();
  initCinematicParallax();
  initDynamicContent();
  
  console.log('Title 22 V2 - Ready!');
});

/**
 * "Keep Scrolling" Text Reveal Entrance
 */
function initScrollEntrance() {
  const scrollTexts = document.querySelectorAll('.scroll-text');
  
  // Initial state - scale up and fade
  gsap.set(scrollTexts, { scale: 1.2, opacity: 1 });
  
  // Animate on scroll
  gsap.to(scrollTexts, {
    scale: 0.8,
    opacity: 0,
    y: -100,
    stagger: 0.1,
    ease: 'power2.in',
    scrollTrigger: {
      trigger: '.scroll-entrance',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    }
  });
  
  // Also fade out the entire section
  gsap.to('.scroll-entrance', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.scroll-entrance',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    }
  });
}

/**
 * 3D Accordion Fold Reveal
 */
function init3DReveal() {
  const foldTop = document.querySelector('.fold-top');
  const foldBottom = document.querySelector('.fold-bottom');
  const marqueeTracks = document.querySelectorAll('.marquee-track');

  // Timeline for the intro reveal
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#parallax-hero',
      start: 'top top',
      end: '+=100%', // Reduced for tighter transition
      scrub: 1,
      pin: '#intro-reveal',
      pinSpacing: false,
    }
  });

  // Rotate folds away
  tl.to(foldTop, { rotateX: 90, opacity: 0, duration: 1, ease: 'power1.in' }, 0);
  tl.to(foldBottom, { rotateX: -90, opacity: 0, duration: 1, ease: 'power1.in' }, 0);
  
  // Fade out shadows/content
  tl.to('.marquee', { opacity: 0, scale: 0.8, duration: 0.5 }, 0.2);

  // Marquee horizontal scroll
  marqueeTracks.forEach((track, i) => {
    const direction = i % 2 === 0 ? -1 : 1;
    gsap.to(track, {
      x: () => direction * (window.innerWidth * 0.1),
      scrollTrigger: {
        trigger: '#parallax-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
      }
    });
  });
}

/**
 * Cinematic Parallax with Lag Interpolation
 */
function initCinematicParallax() {
  const layers = document.querySelectorAll('.parallax-layer');

  layers.forEach((layer) => {
    const speed = parseFloat(layer.getAttribute('data-speed'));
    
    gsap.to(layer, {
      y: (i, target) => {
        return -(window.innerHeight * speed * CONFIG.parallaxAmount);
      },
      ease: 'none',
      scrollTrigger: {
        trigger: '#parallax-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: CONFIG.parallaxScrub,
        invalidateOnRefresh: true,
      },
    });
  });

  // Hero Text Animation - Fixed overlap by making it stay visible longer
  gsap.from('.hero-text-content', {
    y: 150,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#parallax-hero',
      start: 'top 30%', 
      toggleActions: 'play none none reverse'
    }
  });
  
  // Fade out hero content as we reach the main content
  gsap.to('.hero-text-content', {
    opacity: 0,
    y: -100,
    scrollTrigger: {
      trigger: '#parallax-hero',
      start: '70% top',
      end: 'bottom top',
      scrub: true
    }
  });
}

/**
 * Dynamic Content Engine
 */
async function initDynamicContent() {
  const sections = ['projects', 'tools'];
  
  for (const section of sections) {
    try {
      const response = await fetch(`content/${section}.json`);
      if (!response.ok) throw new Error('CORS or file access error');
      const data = await response.json();
      renderGrid(section, data[section]);
    } catch (err) {
      console.warn(`Fetch failed for ${section}, using fallback data.`, err);
      renderGrid(section, FALLBACK_DATA[section]);
    }
  }
}

function renderGrid(section, items) {
  const grid = document.getElementById(`${section}-grid`);
  if (!grid || !items) return;

  grid.innerHTML = items.map(item => `
    <a href="${item.url}" class="card">
      <div class="card-img-wrapper">
        <img src="assets/cards/full/${item.image}" alt="${item.title}" onerror="this.src='https://placehold.co/600x400?text=${section}'">
      </div>
      <div class="card-content">
        <div class="card-tags">
          ${(item.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('')}
          <span class="tag status-${item.status}">${item.status}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </a>
  `).join('');

  // Reveal cards on scroll
  gsap.from(grid.children, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    scrollTrigger: {
      trigger: grid,
      start: 'top 90%',
      toggleActions: 'play none none reverse'
    }
  });
}
