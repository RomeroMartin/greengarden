// ==== NAV MOBILE ==== //
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// cerrar el menú cuando se hace clic en un enlace
const mobileLinks = document.querySelectorAll(".mobile-menu a");
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// ==== BANNER ==== //
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");

function showSlide(n) {
  slideIndex = (n + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === slideIndex);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === slideIndex);
  });
}

// Cambiar slide con puntos
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
  });
});

// Cambiar slide con flechas
prevArrow.addEventListener("click", () => {
  showSlide(slideIndex - 1);
});
nextArrow.addEventListener("click", () => {
  showSlide(slideIndex + 1);
});

// Cambio automático cada 5 segundos
setInterval(() => {
  showSlide(slideIndex + 1);
}, 5000);

// Inicializar
showSlide(slideIndex);
