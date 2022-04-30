const showInputError = (input, formEl, { errorClass }) => {
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
  // add error message / class
  console.log(input.validationMessage);
  errorSpan.textContent = input.validationMessage;
  errorSpan.classList.add(errorClass);
};

const hideInputError = (input, formEl, { errorClass }) => {
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
  // add error message / class
  errorSpan.textContent = "";
  errorSpan.classList.remove(errorClass);
};

const checkInputValidity = (formEl, input, settings) => {
  if (input.validity.valid) {
    hideInputError();
  } else {
    showInputError(input, formEl, settings);
  }
};

const setEventListeners = (formEl, settings) => {
  const inputs = [...formEl.querySelectorAll(settings.inputSelector)];
  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      // check validity
      checkInputValidity(formEl, input, settings);

      //   RESTRICTIONS
      //    name  maxlength =40   minlength = 2

      // toggle the button
    });
  });
};

const enableValidation = (settings) => {
  const formElements = [...document.querySelectorAll(settings.formSelector)];
  //  use the spread function... to make the result of doc.qsAll look like an array
  //  that way can use the forEach method
  formElements.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => e.preventDefault());
    setEventListeners(formEl, settings);
    //now grab each input from each form
    // const inputs = formEl.querySelectorAll(settings.inputSelector);
    // inputs.forEach;
  });
};

enableValidation({
  formSelector: ".popup__form",
  //need to update the classes for inputs
  // inputSelector: ".popup__input",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
