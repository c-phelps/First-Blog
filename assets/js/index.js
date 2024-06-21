const inputName = document.getElementById("userName");
const inputTitle = document.getElementById("title");
const inputContent = document.getElementById("content");
const eleForm = document.getElementById("submissionForm");

function validationHandler(user, title, content) {
  if (!user) {
    alert("Please enter a value for User Name!");
    return "exit";
  }
  if (!title) {
    alert("Please enter a value for Title!");
    return "exit";
  }
  if (!content) {
    alert("Please enter a value for Content!");
    return "exit";
  }
  return "";
}

function submissionHandler(event) {
  event.preventDefault();
  // create array of messages by parsing the item messageInfo from a string back to an object (ie array)
  let arrMessages = JSON.parse(localStorage.getItem("messageInfo"));
  const userName = inputName.value.trim();
  const title = inputTitle.value.trim();
  const content = inputContent.value.trim();
  let strRetun = validationHandler(userName, title, content);
  console.log(strRetun);

  // declare our objMessage variable object with the UserName, Title and Content property/values from the input form
  if (strRetun === "exit") {
    return;
  }
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
  // empty out the input form
  inputName.value = "";
  inputTitle.value = "";
  inputContent.value = "";
  // redirect user to the next page
  window.location.href = "./blog.html";
}

eleForm.addEventListener("submit", function (event) {
  submissionHandler(event);
});
