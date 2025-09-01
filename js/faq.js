/* =========================
   Acordeón FAQ
   ========================= */
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-question");
    header.addEventListener("click", () => {
      // Cierra los demás
      faqItems.forEach((i) => {
        if (i !== item) i.classList.remove("active");
      });
      // Alterna el clickeado
      item.classList.toggle("active");
    });
  });
}
