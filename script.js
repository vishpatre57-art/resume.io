// Theme toggle & utilities
(function(){
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const yearEl = document.getElementById('year');
  const saved = localStorage.getItem('theme');
  if(saved === 'light') document.body.classList.add('light');

  toggle && toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if(target){
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Set current year
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Accessibility: trap focus in nav when using keyboard on small screens - demo
})();
