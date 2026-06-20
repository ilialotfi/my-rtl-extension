// Improved RTL Extension with MutationObserver for dynamic sites
const applyRTL = () => {
  const root = document.documentElement;
  const body = document.body;

  if (root) root.style.direction = 'rtl';
  if (body) body.style.textAlign = 'right';

  // Better handling for mixed content
  document.querySelectorAll('textarea, input, [contenteditable]').forEach(el => {
    el.style.direction = 'rtl';
    el.style.textAlign = 'right';
  });
};

// Run immediately
applyRTL();

// Watch for dynamic changes (important for SPA like ChatGPT)
const observer = new MutationObserver(() => {
  applyRTL();
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
  attributes: true
});

// Also listen for load
window.addEventListener('load', applyRTL);