$(function() {
  let
  screen = 0,
  container = $('.main-content'),
  pages = $('.section'),
  inscroll = false;

  $('.section:first-child').addClass('active');

$('body').on('wheel', (e) => {
  let deltaY = e.originalEvent.deltaY;

  let activePage = pages.filter('.active')
    if(!inscroll) {
      inscroll = true;

      if(deltaY < 0) {

        if(activePage.prev().length) {
          screen--;
        }
    } else {

      if(activePage.next().length) {
          screen++;
        }
    }
    }

    setTimeout(() => {
      inscroll = false;
    }, 1300)

    let position = (-screen*100) + '%';
    container.css('top', position);
    pages.eq(screen).addClass('active').siblings().removeClass('active');

})







})
