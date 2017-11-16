$(document).ready(() => {
  $('.team__about-name').slideUp(0);
  $('.team__name').on('click', (e) => {
    let thisElem = e.currentTarget;
   $(thisElem).siblings('.team__about-name').slideToggle(300);
   $('.team__about-name').not($(thisElem).next()).slideUp(300).parent().removeClass('team__item--active');
   $(thisElem).parent().toggleClass('team__item--active');
  })
})
