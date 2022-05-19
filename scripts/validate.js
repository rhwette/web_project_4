const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  { errorClass, inputErrorClass }
) => {
  console.log("3333a formElement", formElement);
  console.log("3333b inputElement", inputElement);
  console.log("3333c errorMessage", errorMessage);
  console.log("3333d errorclass", errorClass);
  console.log("3333e inputErrorClass", inputErrorClass);
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
  console.log("3333f errorElement", errorElement);
};

const hideInputError = (
  formElement,
  inputElement,
  { errorClass, inputErrorClass }
) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, enums) => {
  console.log("2222a formElement", formElement);
  console.log("2222b inputElement", inputElement);
  console.log("2222c enums", enums);
  if (!inputElement.validity.valid) {
    console.log("2222d formElement", formElement);
    console.log("2222e inputElement", inputElement);
    console.log("2222ee inputElement.validity", inputElement.validity);
    console.log("2222f enums", enums);
    console.log("2222g message", inputElement.validationMessage);
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      enums
    );
  } else {
    hideInputError(formElement, inputElement, enums);
  }
};

const hasValidInputs = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasValidInputs(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (
  formElement,
  { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }
) => {
  console.log("1111a formElement", formElement);
  console.log("1111b inputSelector", inputSelector);
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  console.log("1111c inputList", inputList);
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    console.log("1111d inputElement", inputElement);
    console.log("1111e formElement", formElement);
    console.log("1111f rest", rest);
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, rest);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

const enableValidation = ({ formSelector, ...rest }) => {
  const getFormList = Array.from(document.querySelectorAll(formSelector));
  getFormList.forEach((formElement) => {
    console.log("0000a rest", rest);
    console.log("0000b formSelector", formSelector);
    console.log("0000c formElement", formElement);

    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, rest);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
