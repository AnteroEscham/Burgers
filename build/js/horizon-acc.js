$(function () {

  const calcWidth = () => {
    const wWidth = $(window).width();
    const titles = $('.menu-acco__trigger');
    const titleWidth = titles.width();
    const reqWidth = wWidth - (titleWidth * titles.length);

    return (reqWidth > 550) ? 550 : reqWidth;
  }


  $('.menu-acco__trigger').on('click', e => {
    e.preventDefault();
    const thisItem = $(e.currentTarget);
    const itemContent = thisItem.siblings('.menu-acco__content');
    let contentHidden = '0px';
    thisItem.toggleClass('menu-acco__trigger--active')
    if(thisItem.hasClass('menu-acco__trigger--active')) {
      itemContent
      .css({
        width: calcWidth(),
        overflow: 'visible',
        //opacity: '1'
      })

      $('.menu-acco__trigger').not(thisItem).removeClass('menu-acco__trigger--active').siblings('.menu-acco__content')
      .css({
        width: contentHidden,
        overflow: 'hidden',
        //opacity: '0'
      })

    } else {
      itemContent
      .css({
        width: contentHidden,
        overflow: 'hidden',
        //opacity: '0'
      })
    }



  });
});
