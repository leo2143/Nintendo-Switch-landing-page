const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Función para abrir/cerrar el menú
hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburgerMenu.classList.toggle('open');
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
  const isClickInside = navLinks.contains(event.target) || hamburgerMenu.contains(event.target);

  if (!isClickInside) {
    navLinks.classList.remove('open');
    hamburgerMenu.classList.remove('open');

  }
});