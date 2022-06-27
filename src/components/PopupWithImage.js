import Popup from "./Popup";
const buttonPencil = document.querySelector(".intro__button-pencil");
const buttonPlus = document.querySelector(".intro__button-plus");
console.log("3333a POPUPWITHIMAGE.JS ");
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    console.log("3333b POPUPWITHFORM buttonPencil = ", buttonPencil);
    console.log("3333b POPUPWITHFORM buttonPlus = ", buttonPlus);
    console.log("3333bb POPUPWITHFORM.JS popupSelector = ", popupSelector);
  }
  open({ link, name }) {
    this._popupElement.querySelector(".image-popup__picture-text").textContent =
      name;
    console.log(
      "3333c POPUPWITHIMAGE.JS this._popupElement =",
      this._popupElement
    );
    const image = this._popupElement.querySelector(
      ".image-popup__picture-zoom"
    );
    console.log(
      "3333d POPUPWITHIMAGE.JS this._popupElement =",
      this._popupElement
    );
    image.src = link;
    image.alt = ` ${name}`;
    super.open();
  }
}
