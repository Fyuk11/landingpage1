/* ===============================
   FAQ Accordion
   =============================== */

function initFAQ() {

  const items = document.querySelectorAll('.faq__item');
  items.forEach(item => {
    const btn = item.querySelector('.faq__question');
    const panel = item.querySelector('.faq__answer');
    if(!btn || !panel) return;

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      item.classList.toggle('active');
      if(panel.hasAttribute('hidden')) panel.removeAttribute('hidden');
      const contentHeight = panel.scrollHeight;
      panel.style.maxHeight = item.classList.contains('active') ? contentHeight + 'px' : 0;
    });
  });
};
