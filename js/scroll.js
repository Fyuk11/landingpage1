/* ===============================
   Scroll Functions
   =============================== */

function initScroll() {
  // 1️⃣ Scroll suave para links internos
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // 2️⃣ Botón scroll-to-top
  const scrollBtn = document.querySelector(".btn-scroll-top");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.style.display = "flex";
      } else {
        scrollBtn.style.display = "none";
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 3️⃣ Scroll reveal animations
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 150; // margen de activación
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // inicializa elementos visibles al cargar
}
