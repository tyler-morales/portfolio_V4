function openTab(e, cityName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (const el of tabcontent) {
        el.style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tabs--tab");
    for (const el of tablinks) {
        el.className = el.className.replace(" active", "");
    }

    const name = document.getElementById(cityName);
    name.style.display = "block";
    e.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
const defaultEl = document.getElementById("speed");
window.addEventListener("load", () => {
    defaultEl.click();
});

// add event listeners
const speedEl = document.querySelector("#speed");
speedEl.addEventListener("click", () => {
    openTab(event, "Speed");
});

const performanceEl = document.querySelector("#performance");
performanceEl.addEventListener("click", () => {
    openTab(event, "Performance");
});

const accessibilityEl = document.querySelector("#accessibility");
accessibilityEl.addEventListener("click", () => {
    openTab(event, "Accessibility");
});