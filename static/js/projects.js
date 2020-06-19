// center prevNext controls
const controls = document.querySelector('#page-controls')
const numOfChildren = controls.childElementCount
if (numOfChildren == 2) {
    controls.style.justifyContent = 'space-between'
} else {
    controls.style.justifyContent = 'center'
}