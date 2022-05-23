import Utils from "./Utils.js";

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._utilities = new Utils();
    this._containerElementImage = document.querySelector(
      "#image-popup-container"
    );
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card-grid__style")
      .cloneNode(true);
    return cardElement;
  }

  _handleCan() {
    this.parentElement.remove();
  }

  _handleZoom() {
    document.getElementById("image-zoom").src = this._link;
    document.getElementById("image-zoom").alt = this._name;
    document.querySelector(".image-popup__picture-text").textContent =
      this._name;
    this._utilities.openPopup(this._containerElementImage);
  }

  _handleHeart() {
    this.classList.toggle("card-grid__icon_active");
  }

  _handleClosePopupZoom() {
    this._utilities.closePopup(this._containerElementImage);
  }

  _setEventListeners() {
    // set listener for Heart
    this._element
      .querySelector(".card-grid__icon")
      .addEventListener("click", this._handleHeart);

    // set listener for Garbage Can
    this._element
      .querySelector(".card-grid__garbage")
      .addEventListener("click", this._handleCan);

    // add EventListener for zoomPic
    this._element
      .querySelector("img")
      .addEventListener("click", this._handleZoom.bind(this));

    //  add EventListener for click on big X zoomPic
    this._containerElementImage
      .querySelector("#buttonZoomPicClose")
      .addEventListener("click", this._handleClosePopupZoom.bind(this));
  }

  createCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card-grid__picture").src = this._link;
    this._element.querySelector(".card-grid__text").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}

export default Card;
