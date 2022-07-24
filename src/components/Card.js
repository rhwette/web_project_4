// //  FEEDBACK CARDS.JS (line1) - files which contain class declarations should not import anything
//    also, not that the import below wasnt being used anyway
// import { openPopup, closePopup } from "./Utils.js";
const containerElementImage = document.querySelector("#image-popup-container");
// these two are not used
// const imageZoom = document.getElementById("image-zoom");
// const imageZoomText = document.querySelector(".image-popup__picture-text");

class Card {
  constructor({ data, handleZoom }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._containerElementImage = containerElementImage;
    // FEEDBACK CARDS.JS (line13) - good....passing the handler with the arguments (of the contstructor)
    //  is the right way....that way the Card is only responsible for card rendering

    // FEEDBACK CARDS.JS (line 25) -  add this._handleCan in the constructor
    this._handleCan = this._handleCan.bind(this);

    // FEEDBACK CARDS.JS (line 46) - better to bind methods in the constructor,
    // FEEDBACK - instead of down below where the method is called
    // FEEDBACK - also note, right side has no 'this._'
    this._handleZoom = handleZoom.bind(this);
    // this._handleZoom = handleZoom;

    this._handleZoom = handleZoom;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(`#${this._cardSelector}`)
      .content.querySelector(".card-grid__style")
      .cloneNode(true);
    return cardElement;
  }

  _handleCan() {
    // FEEDBACK CARDS.JS (line 25) - we want to remove 'this._element.remove()'
    // FEEDBACK -  not the parentElement
    // FEEDBACK -  so include 'this._handleCan = this._handleCan.bind(this);'
    // FEEDBACK -  in the class constructor

    // this.parentElement.remove();
    this._element.remove();
  }

  //  FEEDBACK CARDS.JS (line 28) - good - each callback is a separate method
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
    // FEEDBACK CARDS.JS (line 46) - better to bind methods in the constructor,
    // FEEDBACK    not in the spot where the method is used
    // .addEventListener("click", this._handleZoom.bind(this));
    this._element
      .querySelector("img")
      .addEventListener("click", this._handleZoom);
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
