
/* =========================
   Animación Reveal con variantes
   ========================= */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animation = entry.target.dataset.reveal || "up";
        entry.target.classList.add("reveal-" + animation);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
}
