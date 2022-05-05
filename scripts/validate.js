const showInputError = (input, formEl, { errorClass, inputErrorClass }) => {
  // const {errorClass, inputErrorClass} = settings;
  console.log("4444a entering showInputError");
  // const id = `#${input.id}-error`;
  // console.log("4444b id=", id);
  // const errorSpan = formEl.querySelector(id);
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
  console.log("4444c errorSpan=", errorSpan);
  // add error message / class
  console.log("4444d validationMessage= ", input.validationMessage);
  errorSpan.textContent = input.validationMessage;
  console.log("4444e errorSpan.textContent=", errorSpan.textContent);
  errorSpan.classList.add(errorClass);
  input.classList.add(inputErrorClass);
  console.log("4444f errorSpan.classList", errorSpan.classList);
  console.log("4444g input.classList=", input.classList);
};

const hideInputError = (input, formEl, { errorClass, inputErrorClass }) => {
  console.log("5555a entering hideInputError");
  // const id = `#${input.id}-error`;
  // console.log("5555b id=", id);
  // const errorSpan = formEl.querySelector(id);
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
  console.log("5555c errorSpan=", errorSpan);
  // add error message / class
  console.log("5555d validationMessage= ", input.validationMessage);
  errorSpan.textContent = "";
  console.log("5555e errorSpan.textContent=", errorSpan.textContent);
  errorSpan.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
  console.log("5555f input.classList=", input.classList);
};

const checkInputValidity = (formEl, input, settings) => {
  console.log("3333a entering checkInputValidity helper function");
  console.log("3333b validity", input.validity.valid);
  console.log("3333c error message", input.validationMessage);
  // see list of attributes
  //  look for validity object and valid property
  //  look for validation message
  //  note: doesnt seem to work when 'formEl' is included in arguments
  if (input.validity.valid) {
    console.log("3333d valid");
    hideInputError(input, formEl, settings);
  } else {
    console.log("3333e invalid");
    showInputError(input, formEl, settings);
  }
};

const hasValidInputs = (inputList) => {
  console.log(" hasValidINputs", hasValidInputs);
  return inputList.every((input) => input.validity.valid === true);
};

//   let isValid = true;
//   inputList.forEach((input) => {
//     if(!input.validity.valid) {
//       isValid = false;
//     }
//   });
//   return isValid;
// };

const toggleButton = (inputList, button, settings) => {
  console.log("6666a entering toggleButton");
  console.log("6666b hasValid", hasValidInputs(inputList));
  console.log("6666c button", button);
  // console.log("6666c button.classList", button.classList);
  if (hasValidInputs(inputList)) {
    button.disabled = false;
    // button.classList.remove(settings.inactiveButtonClass);
  } else {
    console.log("6666d button.classList", button.classList);
    console.log("6666dd button.", button);
    button.disabled = true;
    // submitButton.classList.add(settings.inactiveButtonClass);
    // button.classList.add(settings.inactiveButtonClass);
    console.log("6666e button.classList", button.classList);
    console.log("6666ee button.", button);
  }
};

//helper function to gather form inputs and apply listeners
const setEventListeners = (formEl, settings) => {
  console.log("2222a entering setEventListeners helper function");
  //
  // assign variable 'inputs'
  // use settings.inputSelector to choose .popup__input
  // gather all the inputs using spread function again
  const inputList = [...formEl.querySelectorAll(settings.inputSelector)];
  console.log("2222b inputList", inputList);
  const submitButton = formEl.querySelectorAll(settings.submitButtonSelector);
  console.log("2222c submitButton", submitButton);
  console.log("2222d submitButton.classList", submitButton.classList);
  console.log("2222e submitButtonSelector", settings.submitButtonSelector);
  inputList.forEach((input) => {
    // listen for 'input' (similar to 'click' and 'submit')
    input.addEventListener("input", (evt) => {
      console.log("2222f evt for each input", evt);
      // create helper function 'checkInputValidity'
      //  but first must put in the restrictions on name, url, location, inside HTML
      //   RESTRICTIONS
      //    name  maxlength =40   minlength = 2
      checkInputValidity(formEl, input, settings);
      // toggle the button
      console.log("AAAA inputList", inputList);
      console.log("BBBB submitButton", submitButton);
      console.log("CCCC settings", settings);
      toggleButton(inputList, submitButton, settings);
    });
  });
};

const enableValidation = (settings) => {
  //  assign variable formElements
  //  use the spread function... to make the result of doc.qsAll look like an array
  //  that way can use the forEach method
  const formElements = [...document.querySelectorAll(settings.formSelector)];
  console.log("1111 formElements", formElements);
  //  or use Array.from
  // const formElements = Array.from(document.querySelectorAll(settings.formSelector);
  //
  formElements.forEach((formEl) => {
    //  take care of defaults on each form
    formEl.addEventListener("submit", (evt) => evt.preventDefault());
    //
    //now grab each input from each form and setEventListeners
    //  create a helper function called setEventListeners
    //  and pass formEl and settings
    //  need to pass settings since not available outside of enableValidation
    setEventListeners(formEl, settings);

    // const inputs = formEl.querySelectorAll(settings.inputSelector);
    // inputs.forEach;
  });
};

//need to update the classes for inputs

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
