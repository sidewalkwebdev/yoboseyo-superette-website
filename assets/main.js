document.addEventListener('DOMContentLoaded', function() {
  const slides = Array.from(document.querySelectorAll('.slide'));
  let index = 0;

  function show(i) {
    slides.forEach((s, n) => s.classList.toggle('active', n === i));
  }
  show(index);

  setInterval(() => {
    index = (index + 1) % slides.length;
    show(index);
  }, 5000);

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const nav = document.querySelector('.bottom-nav');
  if (nav) {
    const links = nav.querySelectorAll('a');
    function setActive() {
      const hash = location.hash || '#home';
      links.forEach(a => {
        const key = a.dataset.key;
        const isActive = (hash.includes(key)) || (key === 'home' && location.pathname.endsWith('index.html'));
        a.classList.toggle('active', isActive);
      });
    }
    setActive();
    window.addEventListener('hashchange', setActive);
  }
});
