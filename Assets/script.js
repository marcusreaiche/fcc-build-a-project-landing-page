// main element
var main = document.querySelector("main");
// footer element
var footer = document.querySelector("footer");

// Change the positions of the main and footer elements when the window is resized
function changePosition() {
  var navbarOffset = document.querySelector("#nav-bar").scrollHeight;
  console.log(navbarOffset);
  // Change the position of the main element
  main.style.position = "relative";
  main.style.top = navbarOffset + "px";
  // Change the position of the footer element
  footer.style.position = "relative";
  footer.style.top = navbarOffset + "px";
}

// Add resize event
window.addEventListener("resize", changePosition);

// Set the initial position after the DOM Content is loaded
document.addEventListener("DOMContentLoaded", function () {
  changePosition();
});
