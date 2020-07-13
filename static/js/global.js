// onscroll navbar
let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById('nav')

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    prevScrollpos > currentScrollPos ?
        navbar.style.top = '0' :
        navbar.style.top = '-86px'
    prevScrollpos = currentScrollPos;
})

// fixed position transparent bar
const transparentbar = document.getElementById('transparent-bar')

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= sticky) {
        transparentbar.classList.add("sticky")
    } else {
        transparentbar.classList.remove("sticky");
    }
})

let sticky = transparentbar.offsetTop;