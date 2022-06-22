import Popup from "./Popup";

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
