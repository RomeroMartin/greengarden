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
