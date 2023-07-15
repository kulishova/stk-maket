const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
  },
})
