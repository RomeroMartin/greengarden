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
const dotsContainer = document.querySelector(".indicators");
let dots = [];

// Generar puntitos según la cantidad de slides
function createDots() {
  dotsContainer.innerHTML = "";
  dots = [];
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      showSlide(i);
    });
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });
}

function showSlide(n) {
  slideIndex = (n + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === slideIndex);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === slideIndex);
  });
}

// Flechas
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");

prevArrow.addEventListener("click", () => {
  showSlide(slideIndex - 1);
});
nextArrow.addEventListener("click", () => {
  showSlide(slideIndex + 1);
});

// Cambio automático cada 5s
setInterval(() => {
  showSlide(slideIndex + 1);
}, 5000);

// Inicializar
createDots();
showSlide(slideIndex);
