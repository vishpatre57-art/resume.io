// DOM-ready initialization
document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const themeBtn = document.querySelector('.theme-toggle');
  const menuBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Persist theme
  const saved = localStorage.getItem('theme');
  if (saved === 'light') html.classList.add('light');

  // Toggle theme
  function toggleTheme() {
    html.classList.toggle('light');
    localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark');
  }

  // Toggle menu (for mobile)
  function toggleMenu() {
    const willShow = !navLinks.classList.contains('show');
    navLinks.classList.toggle('show', willShow);
    menuBtn.setAttribute('aria-expanded', String(willShow));
  }

  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (menuBtn && navLinks) menuBtn.addEventListener('click', toggleMenu);

  // Reveal on scroll
  const onScroll = () => {
    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) el.classList.add('visible');
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial fire

  // Footer year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
