let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById('nav')

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    prevScrollpos > currentScrollPos ?
        navbar.style.top = '0' :
        navbar.style.top = '-86px'
    prevScrollpos = currentScrollPos;
}