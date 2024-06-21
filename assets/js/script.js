// CPhelps this script file effects both pages for the light/dark toggle and the button styling

// grab our on page elements
const eleToggle = document.getElementById("imgToggle");
const eleBody = document.querySelector("body");
const eleBlogImg = document.getElementById("blogImg");
// grab the current mode from local storage
const currentMode = localStorage.getItem("Mode");
// grab the btn to style it
const btnStyle = document.querySelector("input[name='btn']");

function setDarkMode() {
  // if light then set the src for the img to sun
  eleToggle.setAttribute("src", "./assets/css/img/sun.png");
  // set the body element class to dark
  eleBody.setAttribute("class", "dark");
  // set the blog image to react to light/dark mode, verify it exists before attempting to change attributes
  if (eleBlogImg) {
    eleBlogImg.setAttribute("src", "./assets/css/img/first-blog-dark.png");
  }
  // set the button class to dark
  btnStyle.setAttribute("class", "dark");
  // store the value of the current mode in the Mode local storage
  localStorage.setItem("Mode", eleBody.getAttribute("class"));
}

function setLightMode() {
  // if dark is the class then do the inverse of the code above
  // set the src to the moon
  eleToggle.setAttribute("src", "./assets/css/img/moon.png");
  // change the class attribute to light
  eleBody.setAttribute("class", "light");
  // set the blog image to react to light/dark mode, verify it exists before attempting to change attributes
  if (eleBlogImg) {
    eleBlogImg.setAttribute("src", "./assets/css/img/first-blog-light.png");
  }
  // set the button class to light
  btnStyle.setAttribute("class", "light");
  // store the value of the current mode in the Mode local storage
  localStorage.setItem("Mode", eleBody.getAttribute("class"));
}

// function for changing the display based on toggle
function toggleLightDark() {
  // grab the body's class and store it
  var bodyClass = eleBody.getAttribute("class");
  // check if bodyClass is light then set to dark else set to light
  if (bodyClass === "light") {
    setDarkMode();
  } else {
    setLightMode();
  }
}

// when the image "imgToggle" is clicked run the lightDarkToggle function
eleToggle.addEventListener("click", function () {
  //pass the event object to the temp function then to the lightDarkToggle function
  toggleLightDark();
});

// if the page loads with dark in local storage, apply the dark theme
if (currentMode === "dark") {
  setDarkMode();
}