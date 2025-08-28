/* ===============================
   Navigation
   =============================== */

/* ===============================
   Navigation
   =============================== */
function initNavigation() {
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".nav__burger");
  const links = document.querySelectorAll(".nav__links a");

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
}
