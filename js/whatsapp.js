/* ===============================
   WhatsApp Floating Button
   =============================== */

function initWhatsApp() {
const link = document.querySelector('.btn-whatsapp');
  if(!link) return;
  const phone = 'XXXXXXXXXXX'; // ← tu número
  const msg = encodeURIComponent('¡Hola! Me interesa una landing page.');
  link.href = `https://wa.me/${phone}?text=${msg}`;
};
