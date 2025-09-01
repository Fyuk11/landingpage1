/* =========================
   Configuración global
   ========================= */
const CONFIG = {
  phoneNumber: "5491122334455", // <-- cámbialo por tu número real
  ctaMode: "whatsapp", // opciones: "whatsapp" | "form"
};

/* =========================
   Inicialización
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  console.log("Landing inicializada ✅");

  // Inicializaciones de módulos
  if (typeof initNav === "function") initNav();
    if (typeof initReveal === "function") initReveal();
  if (typeof initScroll === "function") initScroll();
  if (typeof initFAQ === "function") initFAQ();
  if (typeof initForm === "function") initForm();
  if (typeof initWhatsapp === "function") initWhatsapp();
});
