//slick widget

$(function () {


  $('.burger-slider__list').slick({
    prevArrow: $('.burger-slider__left-arrow'),
    nextArrow: $('.burger-slider__right-arrow'),
  });

})

// validate

$(function () {

  $("#form-delivery").validate({
    rules: {
      user_name: {
        required: true
      },
      user_phone: {
        required: true,
        digits: true
      },
      user_street: {
        required: true
      },
      user_home: {
        required: true,
        digits: true
      },
      user_floor: {
        digits: true
      }
    },


    messages:{
      user_name: {
        required: 'Нужно заполнить'
      },
      user_phone: {
        required: 'Нужно заполнить',
        digits: 'Введите корректный номер'
      },
      user_street: {
        required: 'Нужно заполнить'
      },
      user_home: {
        required: 'Нужно заполнить',
        digits: 'Введите номер дома'
      },
      user_floor: {
        digits: 'Введите этаж'
      }
    }
  })


 });
