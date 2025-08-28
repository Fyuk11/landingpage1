/* ===============================
   FAQ Accordion
   =============================== */

function initFAQ() {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq__question");
    question.addEventListener("click", () => {
      // Toggle activo
      const isActive = item.classList.contains("active");

      // Cierra todos los items
      faqItems.forEach(i => i.classList.remove("active"));

      // Si no estaba activo, abrir
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}
