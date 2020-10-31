let form = document.querySelector("form");
let container = document.querySelector(".container");
const firstName = form.elements["fname"];
const lastName = form.elements["lname"];
const email = form.elements["email"];
const password = form.elements["password"];
const password2 = form.elements["password2"];
const button = document.querySelector("button");
const loader = document.querySelector(".loader");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const fName = firstName.value.trim();
  const lName = lastName.value.trim();
  const emailValue = email.value;
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (fName === "") {
    setErrorFor(firstName, "First Name cannot be blank");
  } else if (!isAlpha(fName)) {
    setErrorFor(firstName, "Input Only Letters");
  } else {
    setSuccessFor(firstName);
  }

  if (lName === "") {
    setErrorFor(lastName, "Last Name cannot be blank");
  } else if (!isAlpha(lName)) {
    setErrorFor(lastName, "Input Only Letters");
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Enter Valid Email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password should be 8 characters long");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Confirm Password Cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Password does not Match");
  } else {
    setSuccessFor(password2);
  }

  if (
    fName &&
    lName &&
    emailValue &&
    passwordValue &&
    password2Value !== "" &&
    passwordValue === password2Value
  ) {
    loader.classList.add("show");
    button.disabled = true;

    window.setTimeout(function () {
      loader.classList.remove("show");
      button.disabled = false;
    }, 2000);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isAlpha(name) {
  return name.match(/^[A-Za-z]+$/);
}

function isEmail(email) {
  return email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
}
