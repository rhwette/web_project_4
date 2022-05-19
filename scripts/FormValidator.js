class FormValidator {
  constructor(settings, formElement) {
    console.log("5555 this", this);
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    console.log("6666 settings.inputErrorClass", settings.inputErrorClass);
    console.log("7777 settings.errorClass", settings.errorClass);
    console.log("1111 inside");
    console.log("9999 this._form", this._form);
    this._form = formElement;
    console.log("9999a this._form", this._form);
    console.log("2222 inside");
  }

  _showInputError(inputElement, errorMessage) {
    console.log("ffff errorMessage", errorMessage);
    console.log(inputElement);
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    console.log("gggg errorElement", errorElement);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    console.log("gggg errorMessage", errorMessage);
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(errorClass);
  }

  _toggleButtonState() {
    if (hasValidInputs(this._inputList)) {
      this._buttonElement.classList.add(inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _hasValidInputs(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  setEventListeners() {
    this._inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    console.log("8888 this._button", this._buttonElement);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(this._form, inputElement);
        toggleButtonState(this.inputList, buttonElement, inactiveButtonClass);
      });
    });
  }

  enableValidation() {
    console.log("5555 this._form", this._form);
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    console.log("3333 enter enableValidation");
    console.log("4444 formElement", this._form);
    this.setEventListeners();
    // setEventListeners(this._form, rest);
  }
}

// export default FormValidator;
