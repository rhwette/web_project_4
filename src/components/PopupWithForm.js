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
    console.log("AAAA1 CONSTRUCTOR this.popupSelector=", this.popupSelector);

    this.popupEditProfileName = document.querySelector('input[name ="name"]');
    console.log(
      "AAAA2 CONSTRUCTOR this.popupEditProfileName=",
      this.popupEditProfileName
    );

    this.popupEditProfileAboutMe = document.querySelector(
      'input[name = "aboutme"]'
    );
    console.log(
      "AAAA3 CONSTRUCTOR this.popupEditProfileAboutMe=",
      this.popupEditProfileAboutMe
    );

    this._form = document.querySelector(".popup__form");
    console.log("AAAA4 CONSTRUCTOR this._form=", this._form);

    this._handleFormSubmit = handleFormSubmit;
    console.log(
      "AAAA5 CONSTRUCTOR this._handleFormSubmit=",
      this._handleFormSubmit
    );
  }

  _getInputValues() {
    const inputs = this._form.querySelectorAll(".popup__container-input");
    console.log("BBBB1 GETINPUTVALUES inputs =", inputs);

    const inputObject = {};
    console.log("BBBB2 GETINPUTVALUES inputObject =", inputObject);

    inputs.forEach((input) => {
      console.log("BBBB3 GETINPUTVALUES input.name =", input.name);
      console.log("BBBB4 GETINPUTVALUES input.value =", input.value);
      inputObject[input.name] = input.value;
      console.log(
        "BBBB5 GETINPUTVALUES inputObject[input.name] =",
        inputObject[input.name]
      );
    });

    console.log("BBBB6 GETINPUTVALUES inputObject =", inputObject);
    return inputObject;
  }

  open() {
    console.log("EEEE1 OPEN entering open");

    this._popupForm = this._popupElement.querySelector(".popup__form");
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

  // submitPopupEditProfile(evtSave) {
  // console.log("DDDD1 SUBMITPOPUPEDITPROFILE enter");
  // evtSave.preventDefault();
  //the two lines below should cause new name and occupation to be displayed
  //  on the page after editProfileForm is saved
  // nameElement.textContent = popupEditProfileName.value;
  // aboutMeElement.textContent = popupEditProfileAboutMe.value;
  //something wrong with the close....error message says
  //  scripts may close only the windows that were opened by them
  //  what's that supposed to mean??
  // close();
  // }

  handleFormSubmit(evtSave) {
    console.log("DDDD1111 SUBMITPOPUPEDITPROFILE enter");
    evtSave.preventDefault();
    nameElement.textContent = popupEditProfileName.value;
    aboutMeElement.textContent = popupEditProfileAboutMe.value;
    close();
  }

  _submitPopupNewPlace(evtCreate) {
    evtCreate.preventDefault();
    const newCardInfo = {};
    newCardInfo.name = popupNewPlaceTitle.value;
    newCardInfo.link = popupNewPlaceLink.value;
    // renderCard(newCardInfo, containerForImages);
    // closePopupAddCard();
    this.close();
  }

  setEventListeners() {
    if (this.popupSelector === selectors.profilePopup) {
      buttonPencil.addEventListener("click", this.open.bind(this));
      //add the listener for the save button here
    } else {
      buttonPlus.addEventListener("click", this.open.bind(this));
    }

    // this._popupElement.addEventListener("submit", () => {
    //   this._handleFormSubmit(this._getInputValues());
    //   this.close();
    // });
    // super.setEventListeners();
  }

  close() {
    this._popupForm.reset();
    buttonPencil.removeEventListener("click", this.open.bind(this));

    buttonPlus.removeEventListener("click", this.open.bind(this));
    super.close();
  }
}
