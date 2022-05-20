class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formElement;
  }
  _showInputError(formElement, inputElement, errorMessage) {
    console.log("3333a formElement", formElement);
    console.log("3333b inputElement", inputElement);
    console.log("3333c errorMessage", errorMessage);
    console.log("3333d errorclass", this._errorClass);
    console.log("3333e inputErrorClass", this._inputErrorClass);

    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(formElement, inputElement, errorMessage) {
    console.log("4444a formElement", formElement);
    console.log("4444b inputElement", inputElement);
    console.log("4444c errorMessage", errorMessage);
    console.log("4444d errorclass", this._errorClass);
    console.log("4444e inputErrorClass", this._inputErrorClass);
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }

  _toggleButtonState() {
    if (this._hasValidInputs(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _hasValidInputs(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(formElement, inputElement) {
    console.log("2222a formElement", formElement);
    console.log("2222b inputElement", inputElement);
    // console.log("2222c enums", enums);

    if (!inputElement.validity.valid) {
      console.log("2222d formElement", formElement);
      console.log("2222e inputElement", inputElement);
      console.log("2222ee inputElement.validity", inputElement.validity);
      // console.log("2222f enums", enums);
      console.log("2222g message", inputElement.validationMessage);

      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    console.log("1111c inputList", this._inputList);
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    console.log("1111d buttonElement", this._buttonElement);
    this._inputList.forEach((inputElement) => {
      console.log("1111e inputElement", inputElement);
      console.log("1111f formElement", this._form);
      // console.log("1111g rest", rest);

      inputElement.addEventListener("input", () => {
        this._checkInputValidity(this._form, inputElement);
        this._toggleButtonState(
          this.inputList,
          this._buttonElement,
          this._inactiveButtonClass
        );
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    console.log("AAAA this = ", this);
    // this.setEventListeners();
    this._setEventListeners();
    // setEventListeners(this._form, rest);
  }
}

export default FormValidator;
