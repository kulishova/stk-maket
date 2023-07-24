'use strict'

const animItems = document.querySelectorAll('._anim-items')

// Проверяем есть ли класс
if (animItems.length > 0) {
  function animOnSkroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index]
      const animItemHeight = animItem.offsetHeight
      // Получаем позицию объекта относительно верха
      const animItemOffset = offset(animItem).top
      const animStart = 4

      let animItemPoint = window.innerHeight - animItemHeight / animStart
      // Если элемент выше окна браузера
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - animItemHeight / animStart
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}
