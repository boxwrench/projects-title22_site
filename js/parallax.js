document.addEventListener('DOMContentLoaded', () => {
  const heroBg = document.querySelector('.hero-bg');
  const footerBg = document.querySelector('.footer-bg');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    // Hero Parallax
    if (heroBg) {
      // Move background down as we scroll down
      heroBg.style.transform = `translate3d(0, ${scrolled * 0.2}px, 0)`;
    }

    // Footer Parallax
    if (footerBg) {
      // Calculate distance from bottom of page
      // When at bottom: dist = 0
      // When above bottom: dist is negative
      const totalHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const distFromBottom = (scrolled + windowHeight) - totalHeight;
      
      // Move background based on distance from bottom
      // We want it to be 'higher' (negative Y) when we are not at the bottom,
      // and settle to 0 when we reach the bottom.
      // 0.5 speed factor for visible effect
      footerBg.style.transform = `translate3d(0, ${distFromBottom * 0.5}px, 0)`;
    }
  });
});
