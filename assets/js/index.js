const inputName = document.getElementById("userName");
const inputTitle = document.getElementById("title");
const inputContent = document.getElementById("content");
const eleForm = document.getElementById("submissionForm");

// validate the form before passing it to local storage
function validationHandler(user, title, content) {
  // if no value in user, display alert and return the exit command
  if (!user) {
    alert("Please enter a value for User Name!");
    return "exit";
  }
  // if no value in title, display alert and return the exit command
  if (!title) {
    alert("Please enter a value for Title!");
    return "exit";
  }
  // if no value in content, display alert and return the exit command
  if (!content) {
    alert("Please enter a value for Content!");
    return "exit";
  }
  // return an empty string, allowing the code to continue - this can technically be any string value other than 'exit'
  return "";
}

// trigger this function on submit click for the blog form
function submissionHandler(event) {
  event.preventDefault();
  // create array of messages by parsing the item messageInfo from a string back to an object (ie array)
  let arrMessages = JSON.parse(localStorage.getItem("messageInfo"));
  // store the values from the current values in the form into variables
  const userName = inputName.value.trim();
  const title = inputTitle.value.trim();
  const content = inputContent.value.trim();
  // strReturn will be our call to validationHandler and exit out of our function if 'exit' was returned
  let strRetun = validationHandler(userName, title, content);

  // if our validationHandler returned exit then exit the function
  if (strRetun === "exit") {
    return;
  }
  // our holder object for *current* userName, title and content
  const objMessage = {
    UserName: userName,
    Title: title,
    Conent: content,
  };
  // if arrMessages is not an array (ie no values currently in the array) then initialize the variable as an empty array
  if (!Array.isArray(arrMessages)) {
    arrMessages = [];
  }
  // push the objMessage for this form to the end of the arrMessages array
  arrMessages.push(objMessage);
  // set the message info as the stringified verson of the array by using JSON
  localStorage.setItem("messageInfo", JSON.stringify(arrMessages));
  // clear out the input form
  inputName.value = "";
  inputTitle.value = "";
  inputContent.value = "";
  // redirect user to the next page
  window.location.href = "./blog.html";
}

// on click for the form's submit button, pass the event to our submissionHandler function
eleForm.addEventListener("submit", function (event) {
  submissionHandler(event);
});
