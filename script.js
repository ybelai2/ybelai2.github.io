(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.project, .experience-list article, .section-title, .about-grid, .contact').forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }
})();