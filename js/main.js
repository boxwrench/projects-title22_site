// Title 22 Projects Site - Main JavaScript

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  console.log('Title 22 Projects - Initializing...');

  // Parallax effect for hero layers
  const layers = document.querySelectorAll('.parallax-layer');

  layers.forEach((layer) => {
    const speed = parseFloat(layer.getAttribute('data-speed'));
    const img = layer.querySelector('img');

    gsap.to(layer, {
      y: () => {
        return -(ScrollTrigger.maxScroll(window) * speed * 0.3);
      },
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  });

  // Fade in treatment plant layer
  const plantLayer = document.querySelector('.plant-layer');
  gsap.to(plantLayer, {
    opacity: 1,
    scrollTrigger: {
      trigger: '.parallax-hero',
      start: 'top top',
      end: '50% top',
      scrub: true,
    },
  });

  // Fade out hero text on scroll
  gsap.to('.hero-text', {
    opacity: 0,
    y: -50,
    scrollTrigger: {
      trigger: '.parallax-hero',
      start: 'top top',
      end: '30% top',
      scrub: true,
    },
  });

  // Fade out intro section
  gsap.to('.intro-section', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.parallax-hero',
      start: 'top bottom',
      end: 'top 50%',
      scrub: true,
    },
  });

  // Card hover effects (subtle tilt)
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', (e) => {
      gsap.to(card, {
        rotateY: 2,
        rotateX: 2,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    card.addEventListener('mouseleave', (e) => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });

  console.log('Title 22 Projects - Ready!');
});
