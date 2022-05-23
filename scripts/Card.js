//-----------------------------------------------
//  set CONST's
//-----------------------------------------------
// const containerForImages = document.querySelector(".card-grid__format");
const containerElementImage = document.querySelector("#image-popup-container");
// const containerElementImage = document.querySelector("#popupImageZoom");
console.log("1111 containerElementImage =", containerElementImage);
// const imageElement = cardTemplate.content.querySelector("img");
// console.log("BBBB imageElement", imageElement);
// const zoomElement = document.querySelector("#image-zoom");
const buttonZoomPicClose = document.querySelector("#buttonZoomPicClose");

//-----------------------------------------------
//  FUNCTION 'openPopup'
//-----------------------------------------------
// function openPopup(containerElement) {
//   containerElement.classList.add("popup-container_visible");
//   containerElement.addEventListener("mousedown", closePopupWithRemoteClick);
//   document.addEventListener("keydown", closePopupWithEscape);
// }

//-----------------------------------------------
//  FUNCTION 'closePopup'
//-----------------------------------------------
// function closePopup(containerElement) {
//   containerElement.classList.remove("popup-container_visible");
//   containerElement.removeEventListener("mousedown", closePopupWithRemoteClick);
//   document.removeEventListener("keydown", closePopupWithEscape);
// }

//-----------------------------------------------
//  FUNCTION 'closePopupWithEscape'
//-----------------------------------------------
// function closePopupWithEscape(event) {
//   if (event.key === "Escape") {
//     const openedPopup = document.querySelector(".popup-container_visible");
//     closePopup(openedPopup);
//   }
// }

//-----------------------------------------------
//  FUNCTION 'closePopupWithRemoteClick'
//-----------------------------------------------
// function closePopupWithRemoteClick(event) {
//   if (event.target === event.currentTarget) {
//     closePopup(event.target);
//   }
// }

import Utils from "./Utils.js";

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._utilities = new Utils();
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card-grid__style")
      .cloneNode(true);
    console.log("2222 FUNCTIONgetTemplate -- cardElement =", cardElement);
    return cardElement;
  }

  _handleCan() {
    this.parentElement.remove();
  }

  _handleZoom() {
    console.log("aaaaHANDLEZOOM this", this);
    console.log("bbbbHANDLEZOOM this.link", this._link);
    console.log("ccccHANDLEZOOM this.link", this._name);
    // console.log("dddd1HANDLEZOOM containerElementImage", containerElementImage);
    document.getElementById("image-zoom").src = this._link;
    document.getElementById("image-zoom").alt = this._name;
    document.querySelector(".image-popup__picture-text").textContent =
      this._name;
    console.log("dddd2HANDLEZOOM containerElementImage", containerElementImage);
    this._utilities.openPopup(containerElementImage);
  }

  _handleHeart() {
    this.classList.toggle("card-grid__icon_active");
  }

  _handleClosePopupZoom() {
    console.log("UTIL JS FUNCTION CLOSEPOPUPZOOM");
    // this._utilities.closePopup(containerElementImage);
    // this._closePopup(containerElementImage);
    this._utilities.closePopup(containerElementImage);
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
    console.log("3333aLISTENER this._element", this._element);
    this._element
      .querySelector("img")
      .addEventListener("click", this._handleZoom.bind(this));
    console.log("3333bLISTENER this", this);
    console.log("3333cLISTENER this.link", this._link);
    console.log("3333dLISTENER this.link", this._name);
    console.log("3333eLISTENER this._element", this._element);

    //  add EventListener for click on big X zoomPic
    //  note: both work
    // document
    //   .getElementById("buttonZoomPicClose")
    //   .addEventListener("click", this._handleClosePopupZoom.bind(this));
    containerElementImage
      .querySelector("#buttonZoomPicClose")
      .addEventListener("click", this._handleClosePopupZoom.bind(this));
  }

  createCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card-grid__picture").src = this._link;
    this._element.querySelector(".card-grid__text").textContent = this._name;
    this._setEventListeners();
    console.log("4444a FUNCTIONcreateCard -- this.element", this._element);
    console.log("4444b FUNCTIONcreateCard -- this._link", this._link);
    console.log("4444c FUNCTIONcreateCard -- this._name", this._name);
    return this._element;
  }
}

export default Card;
