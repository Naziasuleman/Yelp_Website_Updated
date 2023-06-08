window.onload = function () {
  document.getElementById("popup").style.display = "block";
};

function validateEmail() {
  var emailInput = document.getElementById("email");
  var errorDiv = document.getElementsByClassName("error")[0];

  if (!emailInput.value.includes("@gmail")) {
    emailInput.style.border = "2px solid red";
    errorDiv.style.display = "block";
  } else {
    emailInput.style.border = "";
    errorDiv.style.display = "none";
  }
}
