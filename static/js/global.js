// onscroll navbar
let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById('nav')

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    prevScrollpos > currentScrollPos ?
        navbar.style.top = '0' :
        navbar.style.top = '-86px'
    prevScrollpos = currentScrollPos;
}

// center prevNext controls
const controls = document.querySelector('#page-controls')
const numOfChildren = controls.childElementCount
if (numOfChildren == 2) {
    controls.style.justifyContent = 'space-between'
} else {
    controls.style.justifyContent = 'center'
}