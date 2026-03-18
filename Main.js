/* JP's Garage – Shared Scripts */

/* --- Hamburger Mobile Menu --- */
(function () {
  const btn = document.getElementById('hamburger');
  const drawer = document.getElementById('mobile-nav');
  if (!btn || !drawer) return;

  btn.addEventListener('click', function () {
    const isOpen = drawer.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!btn.contains(e.target) && !drawer.contains(e.target)) {
      drawer.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open navigation menu');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open navigation menu');
      btn.focus();
    }
  });
})();

/* --- Newsletter Subscribe --- */
function subscribe(event) {
  event.preventDefault();
  const input = document.getElementById('subscribeEmail');
  const msg = document.getElementById('subscriptionMessage');
  if (!input || !msg) return;

  const email = input.value.trim();
  const valid = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (valid) {
    msg.textContent = 'Thank you for subscribing! Check your email for exclusive perks.';
    msg.style.color = '#28a745';
    input.value = '';
  } else {
    msg.textContent = 'Please enter a valid email address.';
    msg.style.color = '#cc0000';
  }
}
