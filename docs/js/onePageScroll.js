$(function () {
  const display = $('.main-content');
  const sections =  $('.section');
  let inScroll = false;

  const mobileDetect = new MobileDetect(window.navigator.userAgent);
  const isMobile = mobileDetect.mobile();

  const switchMenuActiveClass = sectionEq => {
    $('.fix-nav__item').eq(sectionEq).addClass('fix-nav__item--active')
    .siblings().removeClass('fix-nav__item--active');
  }

  const moveTo = sectionEq => {
    const position = (sectionEq * -100) + '%';
    if (inScroll == false) {
      inScroll = true;
      display.css({
        'top': position
      })

      sections.eq(sectionEq).addClass('active').siblings().removeClass('active');

      setTimeout(() => {
        inScroll = false;
        switchMenuActiveClass(sectionEq);
      }, 1300);
    }

  }

  const defineSection = sections => {
    const sectionActive = sections.filter('.active');
    return {
      sectionActive: sectionActive,
      nextSection: sectionActive.next(),
      prevSection: sectionActive.prev()
    }
  }

  const scrollToSection = direction => {
    const section = defineSection(sections);

    if (inScroll) return;

    if (direction == 'up' && section.nextSection.length) {
      moveTo(section.nextSection.index());
    }

    if (direction == 'down' && section.prevSection.length) {
      moveTo(section.prevSection.index());
    }



  }

  $('.wrapper').on({
    wheel: (e) => {
      const deltaY = e.originalEvent.deltaY;
      let direction = (deltaY > 0) ? 'up' : 'down';

      scrollToSection(direction);

    touchmove: e => {
      e.preventDefault();
    }
  }

})

  $(document).on('keydown touchstart', e => {
    const section = defineSection(sections);

    if(inScroll) return

    switch (e.keyCode) {
      case 40:
        if(!section.nextSection.length) return
        moveTo(section.nextSection.index());
        break;

      case 38:
      if(!section.prevSection.length) return
      moveTo(section.prevSection.index());
        break;

    }
  })

  if (isMobile) {
    $(window).swipe( {
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      scrollToSection(direction);
    }
  });
  }

  $('[data-scroll-to]').on('click', e => {
    e.preventDefault();
    const thisElem = $(e.currentTarget);
    const sectionIndex = parseInt(thisElem.attr('data-scroll-to'));
    moveTo(sectionIndex);
  })















})













































// $(function() {
//   let
//   screen = 0,
//   container = $('.main-content'),
//   pages = $('.section'),
//   inscroll = false;
//
//   $('.section:first-child').addClass('active');
//
// $('body').on({
//   wheel: (e) => {
//     let deltaY = e.originalEvent.deltaY;
//
//     let activePage = pages.filter('.active')
//       if(!inscroll) {
//         inscroll = true;
//
//         if(deltaY < 0) {
//
//           if(activePage.prev().length) {
//             screen--;
//           }
//       } else {
//
//         if(activePage.next().length) {
//             screen++;
//           }
//       }
//       }
//
//       setTimeout(() => {
//         inscroll = false;
//       }, 1300)
//
//       let position = (-screen*100) + '%';
//       container.css('top', position);
//       pages.eq(screen).addClass('active').siblings().removeClass('active');
//
//   }
// })
//
//
//
//
//
//
//
//
// })
