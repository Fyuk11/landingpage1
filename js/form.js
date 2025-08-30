/* ===============================
   Contact Form Validation
   =============================== */

function initForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if(!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';

    const data = Object.fromEntries(new FormData(form));
    if(!data.name || !data.email || !data.message){
      status.textContent = 'Completá todos los campos.';
      return;
    }

    // TODO: integra tu endpoint (Web3Forms, Netlify Forms, Formspree…)
    // Ejemplo de éxito simulado:
    await new Promise(r => setTimeout(r, 600));
    form.reset();
    status.textContent = '¡Mensaje enviado! Te responderé a la brevedad.';
  });
};

