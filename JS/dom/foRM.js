function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  console.log(x);
  
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}