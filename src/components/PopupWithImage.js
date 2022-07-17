import Popup from "./Popup";
const buttonPencil = document.querySelector(".intro__button-pencil");
const buttonPlus = document.querySelector(".intro__button-plus");

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open({ link, name }) {
    this._popupElement.querySelector(".image-popup__picture-text").textContent =
      name;
    const image = this._popupElement.querySelector(
      ".image-popup__picture-zoom"
    );

    image.src = link;
    image.alt = ` ${name}`;
    super.open();
  }
}
