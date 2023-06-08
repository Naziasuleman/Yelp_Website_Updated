// email does not include @gmail error
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

// rules implementation in password
function checkPasswordStrength() {
  var password = document.getElementById("passwordInput").value;

  // Check if the password meets all three rules
  var hasCapitalLetter = /[A-Z]/.test(password);
  var hasNonAlphanumericSymbol = /[^a-zA-Z0-9]/.test(password);
  var hasMinimumLength = password.length >= 8;

  var strengthImg = document.getElementById("strengthImg");
  var strengthText = document.getElementById("strengthText");
  var signupButton = document.getElementById("signupButton");

  if (hasCapitalLetter && hasNonAlphanumericSymbol && hasMinimumLength) {
    // Strong password
    strengthImg.src = "images/strong.PNG";
    strengthText.textContent = "Password Strength: Great";
    signupButton.disabled = false;
    signupButton.style.backgroundColor = "#dc0a0a";
  } else if (hasCapitalLetter || hasNonAlphanumericSymbol || hasMinimumLength) {
    // Weak password
    strengthImg.src = "images/weak.PNG";
    strengthText.textContent = "Password Strength: Weak";
    signupButton.disabled = true;
    signupButton.style.backgroundColor = "gray";
  } else {
    strengthImg.src = "images/empty.PNG";
    strengthText.textContent =
      "Password must be at least 8 characters in length";
    signupButton.disabled = true;
    signupButton.style.backgroundColor = "gray";
  }
}

//validate form - if any doesn't met - disabled the buttton and change color
function validateForm() {
  var firstNameInput = document.querySelector('input[placeholder="FirstName"]');
  var lastNameInput = document.querySelector('input[placeholder="LastName"]');
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("passwordInput");
  var confirmPasswordInput = document.getElementById("confirmPasswordInput");
  var zipCodeInput = document.querySelector('input[type="number"]');
  var signupButton = document.getElementById("signupButton");

  var isFirstNameValid = firstNameInput.value.trim() !== "";
  var isLastNameValid = lastNameInput.value.trim() !== "";
  var isEmailValid = emailInput.value.includes("@gmail");
  var isPasswordValid =
    confirmPasswordInput.value === passwordInput.value &&
    passwordInput.value !== "" &&
    confirmPasswordInput.value !== "";
  var isZipCodeValid = zipCodeInput.value.trim() !== "";

  if (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isZipCodeValid
  ) {
    signupButton.disabled = false;
    signupButton.style.backgroundColor = "#dc0a0a";
  } else {
    signupButton.disabled = true;
    signupButton.style.backgroundColor = "#9c9c9c";
  }
}

passwordInput.addEventListener("input", validateForm);
confirmPasswordInput.addEventListener("input", validateForm);
