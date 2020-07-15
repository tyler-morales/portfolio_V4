// CENTER PREV/NEXT BUTTONS
const controls = document.querySelector('#page-controls')
const numOfChildren = controls.childElementCount
if (numOfChildren == 2) {
  controls.style.justifyContent = 'space-between'
} else {
  controls.style.justifyContent = 'center'
}

// HORIZONTAL SCROLL CONTROLS
const el = document.querySelector(".hs-container");
const img = document.querySelectorAll("img");

// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
el.addEventListener(
  "scroll",
  function (e) {
    console.log("scrolling");

    for (const element of img) {
      element.style.transform = "rotateY(-25deg)";
    }

    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
      // Run the callback
      console.log("Scrolling has stopped.");
      for (let i = 0; i < img.length; i++) {
        img[i].style.transform = "scale(1)";
      }
    }, 500);
  },
  false
);

// ease scrolling
const scrollRightBtn = document.getElementById("scrollRight");
const scrollLeftBtn = document.getElementById("scrollLeft");

// BUTTON CONTROLS
scrollRightBtn.addEventListener("click", () => {
  el.scrollBy(900, 0);
});

scrollLeftBtn.addEventListener("click", () => {
  el.scrollBy(-900, 0);
});