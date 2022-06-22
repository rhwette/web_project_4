import { ESC_KEYCODE } from "./Constants";

class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(`${popupSelector}`);
    this._closePopupWithEscape = this._closePopupWithEscape.bind(this);
    console.log("222a POPUP.JS popupSelector =", popupSelector);
    console.log("222b POPUP.JS this._popupElement =", this._popupElement);
    console.log(
      "222c POPUP.JS this._closePopupWithEscape = ",
      this._closePopupWithEscape
    );
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    this._popupElement.addEventListener(
      "mousedown",
      this._closePopupWithRemoteClick.bind(this)
    );
    document.addEventListener("keydown", this._closePopupWithEscape.bind(this));
    console.log(
      "222d POPUP.JS function open popupElement=",
      this._popupElement
    );
  }

  // from Utils.js
  // export function openPopup(containerElement) {
  //   containerElement.classList.add("popup_visible");
  //   containerElement.addEventListener("mousedown", closePopupWithRemoteClick);
  //   document.addEventListener("keydown", closePopupWithEscape);
  // }

  close() {
    this._popupElement.classList.remove("popup_visible");
    this._popupElement.removeEventListener(
      "mousedown",
      this._closePopupWithRemoteClick
    );
    document.removeEventListener("keydown", this._closePopupWithEscape);
  }

  _closePopupWithEscape(event) {
    event.preventDefault();

    if (event.which === ESC_KEYCODE) {
      this.close();
    }
  }

  _closePopupWithRemoteClick(event) {
    if (event.target === event.currentTarget) {
      // closePopup(event.target);
      this.close(event.target);
    }
  }

  setEventListeners() {
    console.log("AAA POPUP.JS setEVL this._popupElement=", this._popupElement);
    this._popupElement.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("popup") ||
        event.target.classList.contains("popup_visible")
      ) {
        this.close();
      }
    });
  }
}

export default Popup;
