(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!motion.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.hero-copy, .hero-mark, .signal-strip > div, .section-heading, .project, .timeline li, .about-statement, .about-copy, .contact').forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
    motion.addEventListener('change', () => {
      if (motion.matches) {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
        observer.disconnect();
      }
    });
  }
  if ('IntersectionObserver' in window) {
    const nav = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('nav a').forEach(link => {
            if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
          });
        }
      });
    }, { rootMargin: '-15% 0px -55% 0px' });
    document.querySelectorAll('#top, #work, #experience, #about, .contact').forEach(el => nav.observe(el));
  }
})();
