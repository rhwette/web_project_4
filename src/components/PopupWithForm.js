import Popup from "./Popup";
import { selectors } from "../components/Constants";
import UserInfo from "../components/UserInfo";
const buttonPencil = document.querySelector(".intro__button-pencil");
const buttonPlus = document.querySelector(".intro__button-plus");
const popupEditProfile = document.querySelector("#editProfileForm");
const nameElement = document.querySelector(".intro__name");
const aboutMeElement = document.querySelector(".intro__occupation");
const popupNewPlace = document.querySelector("#newPlaceForm");

// handleFormSubmit: () => {
//   const newCardInfo = {};
//   formValidators["formNewPlace"].resetValidation();
//   newCardInfo.name = popupNewPlaceTitle.value;
//   newCardInfo.link = popupNewPlaceLink.value;
//   renderCard(newCardInfo, containerForImages);
//   newPlacePopup.close();
// },

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
  }

  _getInputValues() {
    const inputs = this._popupForm.querySelectorAll(".popup__container-input");
    const inputObject = {};
    console.log("inputs", inputs);
    inputs.forEach((input) => {
      inputObject[input.name] = input.value;
    });
    return inputObject;
  }

  open(evt) {
    console.log("evt", evt);
    evt.preventDefault();
    // formValidators["formNewPlace"].resetValidation();
    const saveVariableOriginal = this.newInfo.getUserInfo();
    this.popupEditProfileName.value = saveVariableOriginal.userName;
    this.popupEditProfileAboutMe.value = saveVariableOriginal.userJob;
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
    const saveVariableNew = this.newInfo.setUserInfo();
    nameElement.textContent = saveVariableNew.userNameNew;
    aboutMeElement.textContent = saveVariableNew.userJobNew;

    buttonPencil.removeEventListener("click", this.open.bind(this));
    buttonPlus.removeEventListener("click", this.open.bind(this));
    popupEditProfile.removeEventListener(
      "submit",
      this._handleFormSubmit.bind(this)
    );
    super.close();
  }
}
