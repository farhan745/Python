//API=>Application Programming Interface
function validation() {
  const inputObj = document.getElementById("id1");
  if (inputObj.validity.rangeOverflow) {
    inputObj.setCustomValidity("You have made range over flow");
  }
  if (!inputObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inputObj.validationMessage;
  }
}
