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
const slides = document.querySelectorAll(".slides img");
const dotsContainer = document.querySelector(".dots");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function showSlide(n) {
  slideIndex = (n + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex ? "block" : "none";
  });
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === slideIndex);
  });
}

function currentSlide(n) {
  showSlide(n);
}

function plusSlides(n) {
  showSlide(slideIndex + n);
}

// Crear dots dinámicos
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => currentSlide(i));
  dotsContainer.appendChild(dot);
});

prev.addEventListener("click", () => plusSlides(-1));
next.addEventListener("click", () => plusSlides(1));

// Inicializar
showSlide(slideIndex);
