/* ===============================
   Contact Form Validation
   =============================== */

function initForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Validaciones simples
    if (!name || !email || !message) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Validar email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un email válido.");
      return;
    }

    // Simulación de envío
    alert("¡Formulario enviado con éxito! Te responderemos pronto.");

    // Limpiar formulario
    form.reset();
  });
}
