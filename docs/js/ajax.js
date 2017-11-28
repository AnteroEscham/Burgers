$(function () {

  function fadeBox(text) {
    $('.delivery__show-message').prepend('<p class="delivery__show-text">' + text + '</p>').fadeIn(200);
    $('.delivery__overlay').fadeIn(200);
  }






  $('#form-delivery').on('submit', e => {
    e.preventDefault();

    const
          form = $(e.target),
          data = form.serialize(),
          url = form.attr('action')


    const request = $.ajax({
      type: 'POST',
      url: url,
      data: data,
      dataType: 'JSON'
    })

    request.done(function(msg) {
        if($('#form-delivery').valid()) {
          var mes = msg.mes,
              status = msg.status;
          if (status === 'OK') {

            fadeBox('Сообщение отправлено');
            $('#form-delivery')[0].reset();
          } else {

            fadeBox('Не удалось отправить сообщение. Попробуйте позже');

          }
        }
    });

    request.fail ((jqXHL, textstatus) => {

      if($('#form-delivery').valid()) {
        fadeBox('Соединение прервано');
      }
    })

  })


  $('.delivery__overlay').on('click', () => {
    $('.delivery__overlay').fadeOut(0);
    $('.delivery__show-message').fadeOut(0);
    $('.delivery__show-text').empty();
  })

  $('.btn--delivery-show').on('click', (e) => {
    e.preventDefault();
    $('.delivery__overlay').fadeOut(0);
    $('.delivery__show-message').fadeOut(0);
    $('.delivery__show-text').empty();
  })

})
