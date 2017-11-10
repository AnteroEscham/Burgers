let burger = document.getElementById('menu-burger');
let burgerClosed = document.getElementById('burger-close');
let mobileMenu = document.getElementById('mobile-menu');
let navLink = document.getElementsByClassName('mobile-menu__link');
console.log(navLink);
burger.addEventListener('click', function () {
  mobileMenu.style.display = 'block';
});

burgerClosed.addEventListener('click', function () {
  mobileMenu.style.display = 'none';
});

for(i=0; i<navLink.length; i++) {
  navLink[i].addEventListener('click', function () {
    mobileMenu.style.display = 'none';
  });
}
