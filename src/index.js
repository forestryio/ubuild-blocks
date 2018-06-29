import './css/style.scss'

// Dropdown toggle
const dropdown = document.querySelector('.dropdown')
document.addEventListener('click', function(event) {
  var isClickInside = dropdown.contains(event.target)
  dropdown.classList.toggle('is-active')
  if (!isClickInside) {
    dropdown.classList.remove('is-active')
  }
})

console.info('Built with uBuild blocks theme (https://github.com/forestryio/ubuild-blocks)')