import Popup from "./Popup";
import { selectors } from "../components/Constants";
const buttonPencil = document.querySelector(".intro__button-pencil");
const buttonPlus = document.querySelector(".intro__button-plus");

export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.popupSelector = popupSelector;
  }

  open() {
    this._popupForm = this._popupElement.querySelector(".popup__form");
    super.open();
  }

  _getInputValues() {}

  setEventListeners() {
    if (this.popupSelector === selectors.profilePopup) {
      buttonPencil.addEventListener("click", this.open.bind(this));
    } else {
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
