const details = document.querySelectorAll('details')

for (let i = 0; i < details.length; i++) {
  details[i].addEventListener('toggle', accordion)
}

function accordion(event) {
  if (!event.target.open) return
  const details = event.target.parentNode.children
  for (let i = 0; i < details.length; i++) {
    if (
      details[i].tagName !== 'DETAILS' ||
      !details[i].hasAttribute('open') ||
      event.target === details[i]
    ) {
      continue
    }
    details[i].removeAttribute('open')
  }
}

details.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active')
    } else {
      details.forEach((item) => item.classList.remove('active'))
      item.classList.add('active')
    }
  })
})
