// Seleccionamos elementos
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

// Abrir menú
hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

// Cerrar menú
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// Slider automático + manual
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

// Automático
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Manual con flechas
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
  resetInterval();
});

// Manual con puntos
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    resetInterval();
  });
});

// Reset intervalo al tocar flechas o puntos
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}
