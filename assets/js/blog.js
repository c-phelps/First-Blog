const btnBack = document.getElementById("btnBack");
const eleMain = document.getElementById("blogContent");
const arrMessages = JSON.parse(localStorage.getItem("messageInfo"));
// variables for formatting the section height
// total margin = message.length * margin value total padding = legth * 1
// then they are added, or in this case multiplied since it is the same number
const totalSpacing = arrMessages.length * 2;
// section height is equal to 100-totalspacing divided by the length of the array
const sectionHeight = (100 - totalSpacing) / arrMessages.length;
// variables for formatting the window height - 200px for the header and footer
// this way is dynamic in case that the footer or header heights are adjusted
const headerHeight = document.getElementById("pageHeader").style.offsetHeight;
const footerHeight = document.getElementById("pageFooter").style.offsetHeight;
const windowHeight = window.innerHeight;
// content for blogHeight = window - header - footer
const blogContentHeight = windowHeight - headerHeight - footerHeight;

//set height and min height
eleMain.style.height = blogContentHeight + "px";
// minmum height so that the 150 min height of the messages is applied per each message
// for cases when there are more messages on the screen than the default height above
eleMain.style.minHeight = 150 * arrMessages.length + "px";

// return the user to the previous page when they click the back button
btnBack.addEventListener("click", function () {
  window.location.href = "./index.html";
});

// got this idea from the learning assistant
function createAndAppend(tag, text, attrVal, parent) {
  const eleSpawn = document.createElement(tag);
  if (tag === "section") {
    // set the style/attributes for section tag
    eleSpawn.style.height = sectionHeight + "vh";
    eleSpawn.style.minHeight = 150 + "px";
  } else if (tag === "p") {
    eleSpawn.setAttribute("bottom", "0");
  }
  eleSpawn.textContent = text;
  eleSpawn.setAttribute("class", attrVal);
  parent.appendChild(eleSpawn);
  return eleSpawn;
}

for (const message of arrMessages) {
  // variables for storing the values in the array
  const messageTitle = message.Title;
  const messageContent = message.Conent;
  const messageName = "Posted by: " + message.UserName;
  const eleSection = createAndAppend("section", "", "dynamicSection", eleMain);
  // function createAndAppend(tag, text, className, parent)
  createAndAppend("h3", messageTitle, "dynamicTitle", eleSection);
  createAndAppend("article", messageContent, "dynamicContent", eleSection);
  createAndAppend("p", messageName, "dynamicFooter", eleSection);
}
