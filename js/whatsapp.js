/* ===============================
   WhatsApp Floating Button
   =============================== */

function initWhatsApp() {
  const waBtn = document.querySelector(".btn-whatsapp");

  if (!waBtn) return;

  // Número editable (solo cambia aquí)
  const phoneNumber = "549XXXXXXXXXX"; // +54 9 XXX XXX XXXX
  const message = encodeURIComponent("Hola! Quiero más información sobre sus landing pages.");

  waBtn.href = `https://wa.me/${phoneNumber}?text=${message}`;
}
