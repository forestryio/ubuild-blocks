import './css/style.scss'

// Add css file to html document in production
if (process.env.NODE_ENV === 'production') {
  const link = document.createElement('link')
  link.href='main.css'
  link.rel='stylesheet'
  document.getElementsByTagName('head')[0].appendChild(link);
}

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