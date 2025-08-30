/* ===============================
   Navigation
   =============================== */
function initNavigation() {
  const burger = document.querySelector(".nav__burger");
  const nav = document.querySelector(".nav");
  const links = nav?.querySelectorAll("a");

  if (!burger || !nav) return;

  function toggleMenu(force) {
    const isActive = nav.classList.contains("active");

    if (force === "open" || (!isActive && force !== "close")) {
      nav.classList.add("active");
      burger.classList.add("active");
      burger.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    } else {
      nav.classList.remove("active");
      burger.classList.remove("active");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  }

  burger.addEventListener("click", () => toggleMenu());

  links.forEach((link) => {
    link.addEventListener("click", () => toggleMenu("close"));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggleMenu("close");
  });

  document.addEventListener("click", (e) => {
    if (
      nav.classList.contains("active") &&
      !nav.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      toggleMenu("close");
    }
  });
}

const overlay = document.querySelector(".nav__overlay");
overlay?.addEventListener("click", () => toggleMenu("close"));
