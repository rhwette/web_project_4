import Popup from "./Popup";
import { selectors } from "../components/Constants";
import UserInfo from "../components/UserInfo";
const buttonPencil = document.querySelector(".intro__button-pencil");
const buttonPlus = document.querySelector(".intro__button-plus");

const popupEditProfile = document.querySelector("#editProfileForm");
// these are not used
// const popupEditProfileName = document.querySelector('input[name ="name"]');
// const popupEditProfileAboutMe = document.querySelector(
//   'input[name = "aboutme"]'
// );

const nameElement = document.querySelector(".intro__name");
const aboutMeElement = document.querySelector(".intro__occupation");

const popupNewPlace = document.querySelector("#newPlaceForm");

// these are not used
// const popupNewPlaceLink = document.querySelector("#link-input");
// const popupNewPlaceTitle = document.querySelector("#place-input");

// const containerElementPerson = document.querySelector(
//   "#person-popup-container"
// );
// const containerElementPicture = document.querySelector(
//   "#picture-popup-container"
// );

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this.popupSelector = popupSelector;

    this.popupEditProfile = document.querySelector("#editProfileForm");
    this.popupEditProfileName = document.querySelector('input[name ="name"]');
    this.popupEditProfileAboutMe = document.querySelector(
      'input[name = "aboutme"]'
    );
    this.popupNewPlaceLink = document.querySelector("#link-input");
    this.popupNewPlaceTitle = document.querySelector("#place-input");
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this.newInfo = new UserInfo(
      this.popupEditProfileName,
      this.popupEditProfileAboutMe
    );
    console.log("this.newInfo=", this.newInfo);
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
    console.log("AAAAA enter open pencil");
    console.log("1");
    const saveVariableOriginal = this.newInfo.getUserInfo();
    console.log("2");
    console.log("saveVariableOriginal=", saveVariableOriginal);
    console.log(
      "saveVariableOriginal.userName=",
      saveVariableOriginal.userName
    );
    this.popupEditProfileName.value = saveVariableOriginal.userName;
    console.log(
      "this.popupEditProfileName.value=",
      this.popupEditProfileName.value
    );
    this.popupEditProfileAboutMe.value = saveVariableOriginal.userJob;
    console.log("BBBB leave open pencil");

    super.open();
  }

  setEventListeners() {
    if (this.popupSelector === selectors.profilePopup) {
      buttonPencil.addEventListener("click", this.open.bind(this));
    } else {
      buttonPlus.addEventListener("click", this.open.bind(this));
    }

    if (this.popupSelector === selectors.profilePopup) {
      popupEditProfile.addEventListener(
        "submit",
        this._handleFormSubmit.bind(this)
      );
    } else {
      popupNewPlace.addEventListener(
        "submit",
        this._handleFormSubmit.bind(this)
      );
    }
  }

  close() {
    console.log("enter popupwithform close");

    console.log("3");
    //  note the reset below wipes the original entries from the form
    // this._popupForm.reset();
    const saveVariableNew = this.newInfo.setUserInfo();
    console.log("4");
    console.log("saveVariableNew=", saveVariableNew);

    // these are inserted into the DOM
    nameElement.textContent = saveVariableNew.userNameNew;
    aboutMeElement.textContent = saveVariableNew.userJobNew;

    console.log("this.popupEditProfileName=", this.popupEditProfileName);
    console.log("this.popupEditProfileAboutMe=", this.popupEditProfileAboutMe);

    buttonPencil.removeEventListener("click", this.open.bind(this));
    buttonPlus.removeEventListener("click", this.open.bind(this));
    popupEditProfile.removeEventListener(
      "submit",
      this._handleFormSubmit.bind(this)
    );
    super.close();
  }
}
