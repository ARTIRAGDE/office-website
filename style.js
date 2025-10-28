// Animated subtle parallax glow effect on mouse move
document.addEventListener('mousemove', (e) => {
  const hero = document.querySelector('.hero');
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  hero.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
});

// Optional glow intensity flicker
setInterval(() => {
  const rings = document.querySelectorAll('.hero-bg::before, .hero-bg::after');
}, 3000);

