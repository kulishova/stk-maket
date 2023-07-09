const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 4000, // Интервал между сменой слайдов (в миллисекундах)
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
