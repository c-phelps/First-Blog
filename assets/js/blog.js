// back button
const btnBack = document.getElementById("btnBack");
// man content
const eleMain = document.getElementById("blogContent");
// our array of values passed via localstorage
const arrMessages = JSON.parse(localStorage.getItem("messageInfo"));
// variables for formatting the section height
// total margin = message.length * margin value, total padding = message.legth * padding value
// then they are added, or in this case multiplied since it is the same number (.length * 1 for padding and value)
const totalSpacing = arrMessages.length * 2;
// section height is equal to 100 minus totalspacing divided by the length of the array
const sectionHeight = (100 - totalSpacing) / arrMessages.length;
// variables for formatting the window height - 100px for the header and - 100px footer
// this way is dynamic in case that the footer or header heights are adjusted
const headerHeight = document.getElementById("pageHeader").style.offsetHeight; //return numeric values for header and footer heights
const footerHeight = document.getElementById("pageFooter").style.offsetHeight;
const windowHeight = window.innerHeight;
// content for blogHeight = window - header - footer
const blogContentHeight = windowHeight - headerHeight - footerHeight;

//set height and min height
eleMain.style.height = blogContentHeight + "px";
// minmum height so that the 150 min height of the messages is applied per each message
// for cases when there are more messages on the screen than the default height above
eleMain.style.minHeight = 150 * arrMessages.length + "px";

// function that will create an element based on the tag, text, attrVal and parent that are passed to it
function createAndAppend(tag, text, attrVal, parent) {
  // define the spawn element and create it with the tag that was sent to us
  const eleSpawn = document.createElement(tag);
  // special css instructions for when creating the section element
  if (tag === "section") {
    eleSpawn.style.height = sectionHeight + "vh";
    eleSpawn.style.minHeight = 150 + "px";
  // special css instructions for the paragraph element
  } else if (tag === "p") {
    eleSpawn.setAttribute("bottom", "0");
  }
  // fill the textContent
  eleSpawn.textContent = text;
  // set the element's class where there is one
  eleSpawn.setAttribute("class", attrVal);
  // append the element to the parent element passed into the function
  parent.appendChild(eleSpawn);
  // return our created element
  return eleSpawn;
}

// for each message object in the array of messages do the following
for (const message of arrMessages) {
  // variables for storing the values in the array
  const messageTitle = message.Title; // retrieve the current title
  const messageContent = message.Conent; // retrieve the blog's content
  const messageName = "Posted by: " + message.UserName; // retrieve message name with the additional string of Posted by:
  const eleSection = createAndAppend("section", "", "dynamicSection", eleMain);
  // function createAndAppend(tag, text, className, parent)
  createAndAppend("h3", messageTitle, "dynamicTitle", eleSection); // createAndAppend the h3
  createAndAppend("article", messageContent, "dynamicContent", eleSection); // same for artcle
  createAndAppend("p", messageName, "dynamicFooter", eleSection); // same for paragraph
}

// return the user to the previous page when they click the back button
btnBack.addEventListener("click", function () {
  window.location.href = "./index.html";
});