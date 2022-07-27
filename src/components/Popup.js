//import { ESC_KEYCODE } from "./Constants";
import { ESC_KEYCODE } from "../utils/constants";
// the line below is not used
// import { initialCards, selectors } from "../utils/constants";

//FEEDBACK POPUP (line 4) .. remove 3 unused declarations below
//  POPUP is a 'general' class and should not use specific elements
// const buttonPencil = document.querySelector(".intro__button-pencil");
// const buttonPlus = document.querySelector(".intro__button-plus");
// const popupElement = document.querySelector(".popup__container");
class Popup {
  constructor(popupSelector) {
    // FEEDBACK POPUP line 9.. best to not use templated strings without a reason
    this._popupElement = document.querySelector(popupSelector);
    // this._popupElement = document.querySelector(`${popupSelector}`);
    console.log("popupSelector=", popupSelector);
    console.log("this._popupElement inside of popup class", this._popupElement);
    this.buttonClose = this._popupElement.querySelector(
      ".popup__container-button-close"
    );
    //FEEDBACK POPUP (line 17)...add and remove EventListeners should be called
    //  with the same arguments compared by reference.
    //  bind the methods in the constructor and reuse them in both open() and close()
    this.close = this.close.bind(this);
    this._closePopupWithRemoteClick =
      //5555555555555555555
      this._closePopupWithRemoteClick.bind(this);
    //55555555555555555555555
    this._closePopupWithEscape = this._closePopupWithEscape.bind(this);
  }

  open() {
    console.log("open in popup");
    this._popupElement.classList.add("popup_visible");
    // FEEDBACK POPUP.js ..line 14  use a better name,
    //    try buttonClose instead of buttonx
    //    also save elements in the constructor
    // this.buttonX = this._popupElement.querySelector(
    //   ".popup__container-button-close"
    // );
    // this.buttonX.addEventListener("click", this.close.bind(this));

    //FEEDBACK POPUP (line 17)..see constructor above
    // this.buttonClose.addEventListener("click", this.close.bind(this));
    this.buttonClose.addEventListener("click", this.close);
    // this._popupElement.addEventListener(
    //   "mousedown",
    //   this._closePopupWithRemoteClick.bind(this)
    // );
    this._popupElement.addEventListener(
      "mousedown",
      this._closePopupWithRemoteClick
    );
    document.addEventListener("keydown", this._closePopupWithEscape);
  }

  //   this._popupElement.addEventListener(
  //     "mousedown",
  //     this._closePopupWithRemoteClick.bind(this)
  //   );
  //   document.addEventListener("keydown", this._closePopupWithEscape.bind(this));
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

  // setEventListeners() {
  //   this._popupElement.addEventListener("click", (event) => {
  //     if (
  //       event.target.classList.contains("popup") ||
  //       event.target.classList.contains("popup_visible") ||
  //       this._popupElement.querySelector(".popup__container-button-close")
  //     ) {
  //       this.close();
  //     }
  //   });
  // }
}

export default Popup;
