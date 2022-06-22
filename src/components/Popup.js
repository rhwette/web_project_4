import { ESC_KEYCODE } from "./Constants";

class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(`${popupSelector}`);
    this._closePopupWithEscape = this._closePopupWithEscape.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_visible");
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
    event.preventDefault();

    if (event.which === ESC_KEYCODE) {
      this.close();
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
        event.target.classList.contains("popup_visible")
      ) {
        this.close();
      }
    });
  }
}

export default Popup;
