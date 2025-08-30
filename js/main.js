/* ===============================
   Main Initialization
   =============================== */

// Espera a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Sitio cargado correctamente");

  // Inicializar módulos
  if (typeof initNavigation === "function") initNavigation();
  if (typeof initFAQ === "function") initFAQ();
  if (typeof initScroll === "function") initScroll();
  if (typeof initWhatsApp === "function") initWhatsApp();
  if (typeof initForm === "function") initForm();
});

  // año dinámico en footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // siempre cargar en el hero al refrescar
  if(location.hash){
    const hero = document.getElementById('hero');
    if(hero) hero.scrollIntoView({ behavior: 'instant', block: 'start' });
    history.replaceState(null, '', location.pathname + location.search);
  };
