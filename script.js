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

var imageTop = document.createElement('img')
imageTop.src = '/assets/images/illustration-article.svg'
imageTop.width = '250'
imageTop.style.borderRadius = '10px'
imageTop.style.marginBottom = '14px'

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
imageCredits.src = '/assets/images/image-avatar.webp'
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