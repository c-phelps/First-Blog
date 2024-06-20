const inputName = document.getElementById("userName");
const inputTitle = document.getElementById("title");
const inputContent = document.getElementById("content");
const eleBody = document.querySelector("body");
const eleForm = document.getElementById("submissionForm");

function submissionHandler(event) {
  event.preventDefault();
  localStorage.setItem("UserName", inputName.value.trim());
  localStorage.setItem("Title", inputTitle.value.trim());
  localStorage.setItem("Conent", inputContent.value.trim());
  inputName.value = "";
  inputTitle.value = "";
  inputContent.value = "";
}
// eleSubmit.addEventListener("click", function () {});
eleForm.addEventListener("submit", function (event) {
  submissionHandler(event);
});
