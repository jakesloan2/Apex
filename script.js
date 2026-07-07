// ============================================================
// APEX. — shared script (nav toggle + scroll reveal)
// ============================================================

// Scroll-reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Mobile nav
function toggleNav(btn) {
  const nav = document.getElementById('nav');
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
}
document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => {
  document.getElementById('nav').classList.remove('open');
  const t = document.querySelector('.nav-toggle');
  if (t) t.setAttribute('aria-expanded', 'false');
}));
