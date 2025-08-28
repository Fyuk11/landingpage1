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
