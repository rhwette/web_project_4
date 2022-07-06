import Popup from "./Popup";
import { selectors } from "../components/Constants";
const buttonPencil = document.querySelector(".intro__button-pencil");
const buttonPlus = document.querySelector(".intro__button-plus");

const popupEditProfileName = document.querySelector('input[name ="name"]');
const popupEditProfileAboutMe = document.querySelector(
  'input[name = "aboutme"]'
);
const nameElement = document.querySelector(".intro__name");
const aboutMeElement = document.querySelector(".intro__occupation");

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this.popupSelector = popupSelector;
    this.popupEditProfileName = document.querySelector('input[name ="name"]');
    this.popupEditProfileAboutMe = document.querySelector(
      'input[name = "aboutme"]'
    );
    this._form = document.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  // _getInputValues() {
  //   const inputs = this._form.querySelectorAll(".popup__container-input");
  //   console.log( inputs);

  //   const inputObjects = {};

  //   inputs.forEach(input() => {
  //     console.log("0000f PopupWithForm input.name =", input.name);
  //     console.log("0000g PopupWithForm input.value =", input.value);
  //     inputObjects[input.name] = input.value;
  //   }
  //   );
  //   return inputObjects;
  // }

  open() {
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this.popupEditProfileName.value = nameElement.textContent;
    this.popupEditProfileAboutMe.value = aboutMeElement.textContent;
    super.open();
  }

  setEventListeners() {
    if (this.popupSelector === selectors.profilePopup) {
      buttonPencil.addEventListener("click", this.open.bind(this));
      //add the listener for the save button here
    } else {
      buttonPlus.addEventListener("click", this.open.bind(this));
    }
  }

  close() {
    this._popupForm.reset();
    buttonPencil.removeEventListener("click", this.open.bind(this));

    buttonPlus.removeEventListener("click", this.open.bind(this));
    super.close();
  }
}
