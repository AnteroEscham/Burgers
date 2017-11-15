let burger = document.getElementById('menu-burger');
let burgerClosed = document.getElementById('burger-close');
let mobileMenu = document.getElementById('mobile-menu');
let navLink = document.getElementsByClassName('mobile-menu__link');
let body = document.body;
burger.addEventListener('click', function () {
  mobileMenu.style.display = 'block';
  body.classList.add('lock');
});

burgerClosed.addEventListener('click', function () {
  mobileMenu.style.display = 'none';
  body.classList.remove('lock');
});

for(let i=0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', function () {
    mobileMenu.style.display = 'none';
    body.classList.remove('lock');
  });
}
