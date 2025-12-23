// Theme toggle & mobile menu
const html = document.documentElement;
const themeBtn = document.querySelector('.theme-toggle');
const menuBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Persist theme
const saved = localStorage.getItem('theme');
if (saved === 'light') html.classList.add('light');

function toggleTheme() {
  html.classList.toggle('light');
  localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark');
}

function toggleMenu() {
  navLinks.classList.toggle('show');
}

if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
if (menuBtn) menuBtn.addEventListener('click', toggleMenu);

// Reveal on scroll
const onScroll = () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) el.classList.add('visible');
  });
};
window.addEventListener('scroll', onScroll);
window.addEventListener('load', () => {
  onScroll();
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
``
