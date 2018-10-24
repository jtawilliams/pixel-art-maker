const grid = document.querySelector('#grid')
let currentColor

for (let i= 0; i < 532; i++) {
  const cell = document.createElement('div')
  cell.classList.add('cell')

  cell.addEventListener('click', (event) => {
    event.target.style.backgroundColor = currentColor
  })

  grid.appendChild(cell)
}

const colorPalette = document.querySelector('.colorPalette')
const colors = ['firebrick', 'dodgerblue', 'goldenrod', 'wheat', 'chartreuse', 'black']

colors.forEach(color => {
  const brush = document.createElement('span')
  brush.classList.add('brush')
  brush.style.backgroundColor = color
  brush.dataset.color = color

  brush.addEventListener('click', (event) => {
    currentColor = event.target.dataset.color
    console.log(currentColor)
  })

  colorPalette.appendChild(brush)
})

function fill() {
   event.target.style.backgroundColor = pen;
}
