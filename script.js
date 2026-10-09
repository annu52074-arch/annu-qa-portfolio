const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('copyEmail').addEventListener('click', async () => {
  const email = document.getElementById('copyEmail').dataset.email;
  const feedback = document.getElementById('copyFeedback');
  try {
    await navigator.clipboard.writeText(email);
    feedback.textContent = 'Email copied!';
  } catch {
    feedback.textContent = 'Please copy: ' + email;
  }
});
