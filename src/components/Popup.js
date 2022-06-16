import { ESC_KEYCODE } from "./constants";

class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(`.${popupSelector}`);
    this._closePopupWithEscape = this._closePopupWithEscape.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    this._popupElement.addEventListener(
      "mousedown",
      this._closePopupWithRemoteClick
    );
    this._document.addEventListener("keydown", this._closePopupWithEscape);
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
    event.preventDefault();

    if (event.which === ESC_KEYCODE) {
      this.close();
    }
  }

  setEventListeners() {
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
