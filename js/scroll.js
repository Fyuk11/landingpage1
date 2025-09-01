/* =========================
   Scroll suave + ScrollToTop
   ========================= */
function initScroll() {
  const scrollBtn = document.getElementById("scrollTopBtn");

  // Volver al hero al recargar
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  // Mostrar botón al scrollear
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });

  // Click = subir
  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
