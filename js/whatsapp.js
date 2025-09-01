/* =========================
   Botón flotante de WhatsApp
   ========================= */
function initWhatsapp() {
  const btn = document.getElementById("whatsappBtn");
  if (!btn) return;

  const link = `https://wa.me/${CONFIG.phoneNumber}?text=Hola! Quiero más información 🚀`;

  btn.innerHTML = `
    <a href="${link}" target="_blank" rel="noopener" class="whatsapp-float">
      <img src="/assets/icons/whatsapp.svg" alt="WhatsApp" />
    </a>
  `;
}
