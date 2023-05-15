let showNav = document.getElementById('show-nav-btn');
let hideNav = document.getElementById('hide-nav-btn');
let mobileMenuLinks = document.getElementById('mobile-menu-links');
let mobileMenu = document.getElementById('mobile-menu');

showNav.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu--show');
});

hideNav.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu--show');
});

mobileMenuLinks.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu--shaw');
});