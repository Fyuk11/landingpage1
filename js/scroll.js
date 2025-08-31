/* ===============================
   Scroll Functions
   =============================== */

function initScroll() {
  // 1️⃣ Scroll suave para links internos
  const toTop = document.querySelector('.btn-scroll-top');
  const onScroll = () => {
    if(!toTop) return;
    const show = window.scrollY > 400;
    toTop.style.display = show ? 'flex' : 'none';
  };
  window.addEventListener('scroll', onScroll);
  if(toTop) toTop.addEventListener('click', ()=> window.scrollTo({ top: 0, behavior: 'smooth' }));

  // anclas internas (mejora)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if(el){ e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
};


// scroll.js
document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
