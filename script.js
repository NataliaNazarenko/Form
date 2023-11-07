const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const error = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-message");

function removeErrors() {
  inputs.forEach((input) => input.classList.remove("error"));
  error.classList.remove("show");
}

function validateInput(input) {
  if (
    input.value === "" ||
    (input.type === "email" && !input.checkValidity())
  ) {
    input.classList.add("error");
    return false;
  } else {
    input.classList.remove("error");
    return true;
  }
}

function handleFormSubmission() {
  const isValid = Array.from(inputs).every(validateInput);

  if (!form.checkValidity()) {
    error.classList.add("show");
    return false;
  }

  return isValid;
}

inputs.forEach((input) => {
  input.addEventListener("input", () => input.classList.remove("error"));
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  removeErrors();

  if (handleFormSubmission()) {
    this.reset();
    successMessage.style.display = "block";

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  }
});
