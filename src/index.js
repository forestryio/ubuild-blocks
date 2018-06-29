import './css/style.scss'

const root = document.createElement("div")
root.innerHTML = `
  <h1 class="title is-1 has-text-primary">Title</h1>
  <h2 class="subtitle">Subtitle</h2>
  <p>The line height is ok I guess<br/>but what if we change it?!</p>
`
document.body.appendChild(root)

const dropdown = document.querySelector('.dropdown')
document.addEventListener('click', function(event) {
  var isClickInside = dropdown.contains(event.target)
  dropdown.classList.toggle('is-active')
  if (!isClickInside) {
    dropdown.classList.remove('is-active')
  }
})

console.info('Built with uBuild blocks theme (https://github.com/forestryio/ubuild-blocks)')