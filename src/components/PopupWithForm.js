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

// these two consts below are not being used
const containerElementPerson = document.querySelector(
  "#person-popup-container"
);
const containerElementPicture = document.querySelector(
  "#picture-popup-container"
);

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);

    this.popupSelector = popupSelector;

    this.popupEditProfileName = document.querySelector('input[name ="name"]');

    this.popupEditProfileAboutMe = document.querySelector(
      'input[name = "aboutme"]'
    );

    // this._form = document.querySelector(".popup__form");
    this._popupForm = this._popupElement.querySelector(".popup__form");

    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const inputs = this._popupForm.querySelectorAll(".popup__container-input");

    const inputObject = {};

    inputs.forEach((input) => {
      inputObject[input.name] = input.value;
    });

    return inputObject;
  }

  open() {
    console.log("EEEE1 OPEN entering open");

    // this._popupForm = this._popupElement.querySelector(".popup__form");
    // const popupForm = this._popupElement.querySelector(".popup__form");

    console.log("EEEE2 OPEN this._popupForm=", this._popupForm);

    //the two lines below allow Jacques and Explorer to be displayed on the
    // editProfile Form
    this.popupEditProfileName.value = nameElement.textContent;
    this.popupEditProfileAboutMe.value = aboutMeElement.textContent;
    console.log(
      "EEEE3 OPEN this.popupEditProfileName.value=",
      this.popupEditProfileName.value
    );
    console.log(
      "EEEE3 OPEN this.popupEditProfileAboutMe.value=",
      this.popupEditProfileAboutMe.value
    );

    super.open();
  }
  //move this function to index.js
  // handleFormSubmit(evtSave) {
  //   console.log("DDDD1111 SUBMITPOPUPEDITPROFILE enter");
  //   evtSave.preventDefault();
  //   nameElement.textContent = popupEditProfileName.value;
  //   aboutMeElement.textContent = popupEditProfileAboutMe.value;
  //   this.close();
  // }
  //move this function to index.js
  _submitPopupNewPlace(evtCreate) {
    evtCreate.preventDefault();
    const newCardInfo = {};
    newCardInfo.name = popupNewPlaceTitle.value;
    newCardInfo.link = popupNewPlaceLink.value;
    this.close();
  }

  setEventListeners() {
    if (this.popupSelector === selectors.profilePopup) {
      console.log(
        "GGGG1 SETEVENTLISTENERS this.popupSelector= ",
        this.popupSelector
      );
      buttonPencil.addEventListener("click", this.open.bind(this));
      //add the listener for the save button here
    } else {
      buttonPlus.addEventListener("click", this.open.bind(this));
    }
    // popupEditProfile.addEventListener("submit", submitPopupEditProfile);

    popupEditProfile.addEventListener(
      "submit",
      this._handleFormSubmit.bind(this)
    );

    // this.close();
    // popupNewPlace.addEventListener("submit", submitPopupNewPlace);
  }

  close() {
    this._popupForm.reset();
    buttonPencil.removeEventListener("click", this.open.bind(this));

    buttonPlus.removeEventListener("click", this.open.bind(this));
    popupEditProfile.removeEventListener(
      "submit",
      this._handleFormSubmit.bind(this)
    );
    super.close();
  }
}
