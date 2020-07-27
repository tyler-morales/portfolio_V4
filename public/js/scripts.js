// right arrow movement
const arrow = document.getElementById('arrow-right')
const viewProjectEl = document.getElementById('view-project')

viewProjectEl.addEventListener('mouseenter', () => {
    arrow.style.transform = 'translateX(5px)'
})

viewProjectEl.addEventListener('mouseleave', () => {
    arrow.style.transform = 'translateX(0)'
})