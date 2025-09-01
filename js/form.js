/* =========================
   Formulario de contacto
   ========================= */
function initForm() {
  const form = document.querySelector("form");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();

    // Validaciones simples
    if (!name || !email || !message) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Ingresa un email válido.");
      return;
    }

    // Aquí podrías usar fetch() hacia backend o servicio externo
    console.log("Formulario enviado ✅", { name, email, message });
    alert("¡Gracias por tu mensaje!");
    form.reset();
  });
}
