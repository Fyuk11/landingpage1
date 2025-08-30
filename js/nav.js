/* ===============================
   Navigation
   =============================== */

/* ===============================
   Navigation
   =============================== */
function initNavigation() {

  const burger = document.querySelector('.nav__burger');
  const nav = document.querySelector('.nav');
  if(!burger || !nav) return;

  const toggle = () => {
    const active = nav.classList.toggle('active');
    burger.classList.toggle('active', active);
    burger.setAttribute('aria-expanded', active ? 'true' : 'false');
    document.body.style.overflow = active ? 'hidden' : '';
  };

  burger.addEventListener('click', toggle);
  nav.addEventListener('click', (e)=>{ if(e.target.tagName === 'A') toggle(); });
};

  if (!nav || !burger) return;

  function closeMenu() {
    nav.classList.remove("active");
    burger.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  function toggleMenu() {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  }

  // Abrir/cerrar menú
  burger.addEventListener("click", toggleMenu);

  // Cerrar al hacer click en link
  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Cerrar con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });

  // Cerrar con click fuera
  document.addEventListener("click", (e) => {
    if (
      nav.classList.contains("active") &&
      !nav.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      closeMenu();
    }
  });
