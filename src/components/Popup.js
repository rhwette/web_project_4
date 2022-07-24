import { ESC_KEYCODE } from "./Constants";
// the line below is not used
// import { initialCards, selectors } from "../components/Constants";
const buttonPencil = document.querySelector(".intro__button-pencil");
const buttonPlus = document.querySelector(".intro__button-plus");
const popupElement = document.querySelector(".popup__container");
class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(`${popupSelector}`);
    console.log("popupSelector=", popupSelector);
    console.log("this._popupElement inside of popup class", this._popupElement);
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    this.buttonX = this._popupElement.querySelector(
      ".popup__container-button-close"
    );
    this.buttonX.addEventListener("click", this.close.bind(this));
    this._popupElement.addEventListener(
      "mousedown",
      this._closePopupWithRemoteClick.bind(this)
    );
    document.addEventListener("keydown", this._closePopupWithEscape.bind(this));
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    this._popupElement.removeEventListener(
      "mousedown",
      this._closePopupWithRemoteClick
    );
    document.removeEventListener("keydown", this._closePopupWithEscape);
  }

  _closePopupWithEscape(event) {
    //the preventDefault below prevents typing into the forms
    // event.preventDefault();
    if (event.which === ESC_KEYCODE) {
      this.close(event.target);
    }
  }

  _closePopupWithRemoteClick(event) {
    if (event.target === event.currentTarget) {
      this.close(event.target);
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("popup") ||
        event.target.classList.contains("popup_visible") ||
        this._popupElement.querySelector(".popup__container-button-close")
      ) {
        this.close();
      }
    });
  }
}

export default Popup;
