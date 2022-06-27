import Popup from "./Popup";
import { selectors } from "../components/Constants";
const buttonPencil = document.querySelector(".intro__button-pencil");
const buttonPlus = document.querySelector(".intro__button-plus");

console.log("4444a POPUPWITHFORM.JS ");
export default class PopupWithForm extends Popup {
  // constructor({ popupSelector, handleFormSubmit }) {
  constructor(popupSelector) {
    super(popupSelector);
    this.popupSelector = popupSelector;
    console.log("4444b POPUPWITHFORM buttonPencil = ", buttonPencil);
    console.log("4444b POPUPWITHFORM buttonPlus = ", buttonPlus);
    console.log("4444bb POPUPWITHFORM.JS popupSelector = ", popupSelector);
    // this._handleFormSubmit = handleFormSubmit;
  }

  open() {
    console.log("4444c POPUPWITHFORM open");
    console.log(
      "4444yyyy POPUPWITHFORM.JS this._popupElement = ",
      this._popupElement
    );
    this._popupForm = this._popupElement.querySelector(".popup__form");
    console.log("4444xxx POPUPWITHFORM this._popupForm =", this._popupForm);
    super.open();
  }

  _getInputValues() {}

  setEventListeners() {
    console.log("4444d open", this.open);
    console.log(
      "4444e POPUPWITHFORM.JS this._popupElement=",
      this._popupElement
    );
    console.log(
      "4444ee POPUPWITHFORM.JS selectors.profilePopup=",
      selectors.profilePopup
    );
    console.log(
      "4444eee POPUPWITHFORM.JS this.popupSelector=",
      this.popupSelector
    );

    if (this._popupSelector === selectors.profilePopup) {
      buttonPencil.addEventListener("click", this.open.bind(this));
    } else if (this._popupSelector === selectors.placePopup) {
      buttonPlus.addEventListener("click", this.open.bind(this));
    }
  }

  // function openPopupEditProfile() {
  //   fillPopupEditProfile();
  //   formValidators["formEditProfile"].resetValidation();
  //   openPopup(containerElementPerson);

  //   function fillPopupEditProfile() {
  //     popupEditProfileName.value = nameElement.textContent;
  //     popupEditProfileAboutMe.value = aboutMeElement.textContent;
  //   }
  // }

  close() {
    this._popupForm.reset();

    super.close();
  }

  // submitPopupEditProfile(evtSave) {
  //   evtSave.preventDefault();
  //   nameElement.textContent = popupEditProfileName.value;
  //   aboutMeElement.textContent = popupEditProfileAboutMe.value;
  //   closePopup(containerElementPerson);
  // }
}

// export default PopupWithForm;

//-----------------------------------------------
//  FUNCTION 'openPopupEditProfile'
//-----------------------------------------------
// function openPopupEditProfile() {
//   fillPopupEditProfile();
//   formValidators["formEditProfile"].resetValidation();
//   openPopup(containerElementPerson);
// }

//-----------------------------------------------
//  FUNCTION 'fillPopupEditProfile'
//-----------------------------------------------
// function fillPopupEditProfile() {
//   popupEditProfileName.value = nameElement.textContent;
//   popupEditProfileAboutMe.value = aboutMeElement.textContent;
// }

//-----------------------------------------------
//  FUNCTION 'submitPopupEditProfile'
//-----------------------------------------------
// function submitPopupEditProfile(evtSave) {
//   evtSave.preventDefault();
//   nameElement.textContent = popupEditProfileName.value;
//   aboutMeElement.textContent = popupEditProfileAboutMe.value;
//   closePopup(containerElementPerson);
// }
