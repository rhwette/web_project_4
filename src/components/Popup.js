import { ESC_KEYCODE } from "./Constants";
const buttonPencil = document.querySelector(".intro__button-pencil");
const buttonPlus = document.querySelector(".intro__button-plus");

class Popup {
  constructor(popupSelector) {
    console.log("2222a POPUP popupSelector = ", popupSelector);
    this._popupElement = document.querySelector(`${popupSelector}`);
    console.log("2222b POPUP this._popupElement = ", this._popupElement);
    // this._closePopupWithEscape = this._closePopupWithEscape.bind(this);
  }

  open() {
    console.log("2222c POPUP.JS this._popupElement = ", this._popupElement);
    this._popupElement.classList.add("popup_visible");
    this.buttonX = this._popupElement.querySelector(
      ".popup__container-button-close"
    );
    console.log("2222xxxx POPUP.JS buttonX", this.buttonX);
    this.buttonX.addEventListener("click", this.close.bind(this));
    this._popupElement.addEventListener(
      "mousedown",
      this._closePopupWithRemoteClick.bind(this)
    );
    document.addEventListener("keydown", this._closePopupWithEscape.bind(this));
  }

  close() {
    console.log("2222d POPUP.JS close", close);
    this._popupElement.classList.remove("popup_visible");
    console.log(
      "2222e POPUP.JS remove classList from this._popupElement = ",
      this._popupElement
    );
    this.buttonX.removeEventListener("click", this.close.bind(this));
    this._popupElement.removeEventListener(
      "mousedown",
      this._closePopupWithRemoteClick
    );
    document.removeEventListener("keydown", this._closePopupWithEscape);
    buttonPencil.removeEventListener("click", this.open.bind(this));

    buttonPlus.removeEventListener("click", this.open.bind(this));
  }

  _closePopupWithEscape(event) {
    console.log("esc");
    event.preventDefault();

    if (event.which === ESC_KEYCODE) {
      this.close();
    }
  }

  _closePopupWithRemoteClick(event) {
    // console.log("click");
    if (event.target === event.currentTarget) {
      // this.close();
      this.close(event.target);
    }
  }

  setEventListeners() {
    console.log("2222f POPUP.JS enter EVL");
    console.log("2222ffff POPUP.JS this._popupElement = ", this._popupElement);
    this._popupElement.addEventListener("click", (event) => {
      console.log("2222G event.target", event.target);
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
