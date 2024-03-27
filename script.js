var body = document.getElementsByTagName('body')
document.body.style.backgroundColor = '#F4D04E'
document.body.style.fontFamily = '"Figtree", sans-serif'
document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'
document.body.style.margin = '0'
document.body.style.height = '100vh'

var container = document.createElement('div')
container.style.width = '250px'
container.style.padding = '20px 20px 0 20px'
container.style.backgroundColor = 'white'
container.style.border = '1px solid black'
container.style.borderRadius = '20px'
container.style.boxShadow = '6px 6px 0 rgba(0,0,0,1)'
container.style.cursor = 'pointer'
container.style.transition = '0.15s ease-in'

container.addEventListener('mouseenter', () => {
    container.style.boxShadow = '12px 12px 0 rgba(0,0,0,1)'
    title.style.color = '#F4D04E'
})

container.addEventListener('mouseleave', () => {
    container.style.boxShadow = '6px 6px 0 rgba(0,0,0,1)'
    title.style.color = '#000'
    container.style.transition = '0.15s ease-out'
})

var imageTop = document.createElement('div')
imageTop.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" style="border-radius:10px;margin-bottom:10px;" width="250" fill="none" viewBox="0 0 336 201"><g clip-path="url(#a)"><path fill="#F4D04E" d="M0 .5h336v200H0z"/><rect width="139" height="95" x="87.996" y="77.729" fill="#fff" rx="47.5" transform="rotate(-45 87.996 77.729)"/><rect width="139" height="95" x="54.055" y="77.729" fill="#111" rx="47.5" transform="rotate(-45 54.055 77.729)"/><path fill="#111" d="M234.864 209.036 451.4-7.5l67.175 67.175-216.536 216.536z"/><rect width="139" height="95" x="20.114" y="77.729" fill="#fff" rx="47.5" transform="rotate(-45 20.114 77.729)"/><rect width="204.19" height="270.554" fill="#111" rx="102.095" transform="scale(-1 1) rotate(45 -103.887 14.564)"/><path stroke="#fff" stroke-width="3" d="m6.69-357.5 135.583 135.727c12.481 12.494 12.481 32.737 0 45.231L-45.544 11.475c-12.481 12.494-12.481 32.737 0 45.23L107.088 209.5"/><path stroke="#111" stroke-width="3" d="M69.965 71.719v23.334h23.334M136.079 52.273V28.94h-23.334M102.845 38.838v46.67M210.364-37.5l60.873 60.873c12.497 12.496 12.497 32.758 0 45.254l-77.745 77.746c-12.497 12.496-12.497 32.758 0 45.254l69.872 69.873"/><path stroke="#111" stroke-width="3" d="m253.339 149.574-12.144 12.145 14.256 14.257v12.672h12.673l13.729 13.729 12.145-12.145M278.685 124.228l-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145M304.031 98.883l-12.145 12.144 14.257 14.257v12.673h12.673l13.729 13.729 12.144-12.145M329.376 73.537l-12.145 12.145 14.257 14.257v12.672h12.673l13.729 13.729 12.145-12.144"/><path stroke="#fff" stroke-width="5" d="m354.722 48.191-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145"/><mask id="b" width="285" height="285" x="234" y="-8" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#111" d="M234.864 209.036 451.4-7.5l67.175 67.175-216.536 216.536z"/></mask><g stroke="#fff" mask="url(#b)"><path stroke-width="3" d="m253.339 149.574-12.144 12.145 14.256 14.257v12.672h12.673l13.729 13.729 12.145-12.145M278.685 124.228l-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145M304.031 98.883l-12.145 12.144 14.257 14.257v12.673h12.673l13.729 13.729 12.144-12.145M329.376 73.537l-12.145 12.145 14.257 14.257v12.672h12.673l13.729 13.729 12.145-12.145"/><path stroke-width="5" d="m354.722 48.191-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145"/></g></g><defs><clipPath id="a"><path fill="#fff" d="M0 .5h336v200H0z"/></clipPath></defs></svg>
`
imageTop.width = '350'


var smallBtn = document.createElement('span')
smallBtn.textContent = 'Learning'
smallBtn.style.fontSize = '11px'
smallBtn.style.fontWeight = '800'
smallBtn.style.backgroundColor = '#F4D04E'
smallBtn.style.padding = '3px 8px'
smallBtn.style.borderRadius = '3px'
smallBtn.style.display = 'block'
smallBtn.style.width = 'fit-content'
smallBtn.style.marginBottom = '14px'

var smallText = document.createElement('span')
smallText.textContent = 'Published 21 Dec 2023'
smallText.style.fontSize = '12px'

var title = document.createElement('h3')
title.textContent = 'HTML & CSS foundations'

var paraText = document.createElement('span')
paraText.textContent = 'These languages are the backbone of every website, defining structure, content, and presentation.'
paraText.style.fontSize = '13px'

var creditsContainer = document.createElement('div')
creditsContainer.style.display = 'flex'
creditsContainer.style.gap = '10px'
creditsContainer.style.alignItems = 'center'

var imageCredits = document.createElement('img')
imageCredits.src = 'https://randomuser.me/portraits/men/15.jpg'
imageCredits.width = '25'
imageCredits.height = '25'
imageCredits.style.borderRadius = '50%'

var nameCredits = document.createElement('h6')
nameCredits.textContent = 'Greg Hooper'

container.appendChild(imageTop)
container.appendChild(smallBtn)
container.appendChild(smallText)
container.appendChild(title)
container.appendChild(paraText)
container.appendChild(creditsContainer)
creditsContainer.appendChild(imageCredits)
creditsContainer.appendChild(nameCredits)
document.body.appendChild(container)