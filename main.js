/* abre e fecha hamburger e x */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}
/* ao cllicar no link fecha menu*/
const links = document.querySelectorAll("nav ul li a");
for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* mudar header no scroll */
function changeHeaderWhenScroll() {
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight;
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

/* Carrossel de Depoimentos */
const swiper = new Swiper(".swiper", {
  slidesPerview: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewhell: true,
  keyboard: true,
});

/* ScrolReview - mostra itemns ao rolar a pagina */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: "640",
  reset: "true",
});

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .links,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
);

/* Arrow Up */
function backToTop() {
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

/* When Scroll */
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
  backToTop();
});
