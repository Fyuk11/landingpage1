/* =========================
   Menú de navegación
   ========================= */
function initNav() {
  const header = document.querySelector("header");
  const navToggle = document.getElementById("burger");
  const navMenu = document.getElementById("mobileMenu");

  // Sticky al hacer scroll
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 10);
  });

  // Función para cerrar menú
  function closeMenu() {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  }

  // Abrir / cerrar menú
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isActive = navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
      navToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
    });

    // Cerrar al hacer clic en un enlace
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Cerrar al hacer clic fuera del menú
    document.addEventListener("click", (e) => {
      if (
        navMenu.classList.contains("active") &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        closeMenu();
      }
    });

    // Cerrar con ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("active")) {
        closeMenu();
      }
    });
  }
}
