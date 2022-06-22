import { openPopup, closePopup } from "./Utils.js";
// import { openPopup } from "./Utils.js";
const containerElementImage = document.querySelector("#image-popup-container");
const imageZoom = document.getElementById("image-zoom");
const imageZoomText = document.querySelector(".image-popup__picture-text");

class Card {
  constructor({ data, handleZoom }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._containerElementImage = containerElementImage;
    // this._handleImageClick = handleImageClick;
    this._handleZoom = handleZoom;
  }

  _getTemplate() {
    console.log("ZZZZ ", this._cardSelector);
    const cardElement = document
      .querySelector(`#${this._cardSelector}`)

      .content.querySelector(".card-grid__style")
      .cloneNode(true);
    console.log("ffff codument =", document);
    console.log("ZZZZ card Element=", cardElement);
    return cardElement;
  }

  _handleCan() {
    this.parentElement.remove();
  }

  // _handleZoom() {
  //   imageZoom.src = this._link;
  //   imageZoom.alt = this._name;
  //   imageZoomText.textContent = this._name;
  //   openPopup(this._containerElementImage);
  // }

  _handleHeart(event) {
    event.target.classList.toggle("card-grid__icon_active");
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
  }

  createCard() {
    this._element = this._getTemplate();
    const cardGridPicture = this._element.querySelector(".card-grid__picture");
    const cardGridText = this._element.querySelector(".card-grid__text");
    cardGridPicture.src = this._link;
    cardGridPicture.alt = this._name;
    cardGridText.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}

export default Card;
