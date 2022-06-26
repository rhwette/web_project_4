import Popup from "./Popup";
const buttonPencil = document.querySelector(".intro__button-pencil");
console.log("4444a POPUPWITHFORM.JS ");
export default class PopupWithForm extends Popup {
  // constructor({ popupSelector, handleFormSubmit }) {
  constructor(popupSelector) {
    super(popupSelector);
    console.log("4444b POPUPWITHFORM buttonPencil = ", buttonPencil);
    // console.log("2222b POPUPWITHFORM.JS popupSelector=", popupSelector);
    // console.log("2222c POPUPWITHFORM this._popupForm =", this._popupForm);
    // this._handleFormSubmit = handleFormSubmit;
  }

  open() {
    console.log("4444c POPUPWITHFORM open");
    this._popupForm = this._popupElement.querySelector(".popup__form");
    super.open();
  }

  _getInputValues() {}

  setEventListeners() {
    console.log("4444d open", this.open);
    buttonPencil.addEventListener("click", this.open.bind(this));
    // function openPopupEditProfile() {
    //   fillPopupEditProfile();
    //   formValidators["formEditProfile"].resetValidation();
    //   openPopup(containerElementPerson);

    //   function fillPopupEditProfile() {
    //     popupEditProfileName.value = nameElement.textContent;
    //     popupEditProfileAboutMe.value = aboutMeElement.textContent;
    //   }
    // }
  }

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
