//-----------------------------------------------
//  set CONST's
//-----------------------------------------------
const containerForImages = document.querySelector(".card-grid__format");
const containerElementImage = document.querySelector("#image-popup-container");
const zoomElement = document.querySelector("#image-zoom");

//-----------------------------------------------
//  FUNCTION 'openPopup'
//-----------------------------------------------
function openPopup(containerElement) {
  containerElement.classList.add("popup-container_visible");
  containerElement.addEventListener("mousedown", closePopupWithRemoteClick);
  document.addEventListener("keydown", closePopupWithEscape);
}

//-----------------------------------------------
//  FUNCTION 'closePopup'
//-----------------------------------------------
function closePopup(containerElement) {
  containerElement.classList.remove("popup-container_visible");
  containerElement.removeEventListener("mousedown", closePopupWithRemoteClick);
  document.removeEventListener("keydown", closePopupWithEscape);
}

//-----------------------------------------------
//  FUNCTION 'closePopupWithEscape'
//-----------------------------------------------
function closePopupWithEscape(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup-container_visible");
    closePopup(openedPopup);
  }
}

//-----------------------------------------------
//  FUNCTION 'closePopupWithRemoteClick'
//-----------------------------------------------
function closePopupWithRemoteClick(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
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
    zoomElement.src = this.src;
    openPopup(containerElementImage);
  }

  _handleHeart() {
    this.classList.toggle("card-grid__icon_active");
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
      .querySelector(".card-grid__picture")
      .addEventListener("click", this._handleZoom);
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
