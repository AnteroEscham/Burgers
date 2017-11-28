$(function () {
  const burger = document.getElementById('menu-burger');
  const burgerClosed = document.getElementById('burger-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLink = document.getElementsByClassName('mobile-menu__link');
  const body = document.body;
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
});
