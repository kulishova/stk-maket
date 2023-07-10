let details = document.querySelectorAll('details')
for (i = 0; i < details.length; i++) {
  details[i].addEventListener('toggle', accordion)
}
function accordion(event) {
  if (!event.target.open) return
  let details = event.target.parentNode.children
  for (i = 0; i < details.length; i++) {
    if (
      details[i].tagName != 'DETAILS' ||
      !details[i].hasAttribute('open') ||
      event.target == details[i]
    )
      continue
    details[i].removeAttribute('open')
  }
}

const summary = document.querySelectorAll('summary')
console.log(summary)
summary.addEventListener('click')
