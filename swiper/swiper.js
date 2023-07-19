const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 10 /* Добавляем отступ между слайдами для видимости боковых слайдов */,
  loop: true,
  autoplay: {
    delay: 4000,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return (
        '<div class="swiper-pagination-custom">' +
        current +
        ' / ' +
        total +
        '</div>'
      )
    },
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
