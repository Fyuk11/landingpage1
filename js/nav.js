/* ===============================
   Navigation
   =============================== */

function initNavigation() {
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".nav__burger");
  const menu = document.querySelector(".nav__menu");
  const links = document.querySelectorAll(".nav__menu a");

  if (!nav || !burger || !menu) return;

  // Sticky nav al scrollear
  window.addEventListener("scroll", () => {
    nav.classList.toggle("sticky", window.scrollY > 50);
  });

  // Abrir/cerrar menú en mobile
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
    document.body.classList.toggle("menu-open"); // evita scroll en bg
  });

  // Cerrar menú al hacer click en un link
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      burger.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });
}
