import Popup from "./Popup";
import { selectors } from "../utils/constants";
import UserInfo from "../components/UserInfo";

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
    this._handleFormSubmit = handleFormSubmit.bind(this);
  }

  _getInputValues() {
    const inputs = this._popupForm.querySelectorAll(".popup__container-input");
    const inputObject = {};
    inputs.forEach((input) => {
      inputObject[input.name] = input.value;
    });
    return inputObject;
  }

  open(evt) {
    evt.preventDefault();
    super.open();
    if (this.popupSelector === selectors.profilePopup) {
      popupEditProfile.addEventListener("submit", this._handleFormSubmit);
    } else {
      popupNewPlace.addEventListener("submit", this._handleFormSubmit);
    }
  }

  close() {
    super.close();
    popupEditProfile.removeEventListener("submit", this._handleFormSubmit);
    popupNewPlace.removeEventListener("submit", this._handleFormSubmit);
    this._popupForm.reset();
  }
}
