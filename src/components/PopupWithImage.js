import Popup from "./Popup";
console.log("3333a POPUPWITHIMAGE.JS ");
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open({ link, name }) {
    this._popupElement.querySelector(".image-popup__picture-text").textContent =
      name;
    console.log(
      "3333b POPUPWITHIMAGE.JS this._popupElement =",
      this._popupElement
    );
    const image = this._popupElement.querySelector(
      ".image-popup__picture-zoom"
    );
    console.log(
      "3333c POPUPWITHIMAGE.JS this._popupElement =",
      this._popupElement
    );
    image.src = link;
    image.alt = ` ${name}`;
    super.open();
  }
}
