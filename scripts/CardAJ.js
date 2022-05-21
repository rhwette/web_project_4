const containerForImages = document.querySelector(".card-grid__format");
const containerElementImage = document.querySelector("#image-popup-container");
const zoomElement = document.querySelector("#image-zoom");
const zoomTextElement = document.querySelector(".image-popup__picture-text");
const buttonZoomPicClose = document.querySelector("#buttonZoomPicClose");

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

//-----------------------------------------------
//  FUNCTION 'closePopupZoom'
//-----------------------------------------------
// function closePopupZoom() {
//   closePopup(containerElementImage);
// }

//_________________________________________________________________

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;
    console.log("0000 START FUNCTION constructor");
    console.log(
      "0000a FUNCTION constructor => this._cardSelector =",
      this._cardSelector
    );
  }

  _getTemplate() {
    console.log("2222 START FUNCTION getTemplate");
    console.log("2222a this._cardSelector =", this._cardSelector);
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card-grid__style")
      .cloneNode(true);
    console.log("2222b cardElement =", cardElement);
    return cardElement;
  }

  _handleCan() {
    this.parentElement.remove();
  }

  _handleZoom() {
    console.log("6666a this =", this);
    console.log("6666b this.src = ", this.src);
    // console.log("6666c this._element", this._element);

    // this._element.querySelector(".card-grid__picture").src = this.link;
    console.log("6666f this.parent =", this.parentElement);

    console.log("88888 LOOK FOR ZOOM ELEMENT");
    console.log("8888a zoomElement =", zoomElement);
    zoomElement.src = this.src;
    console.log("8888b zoomElement.src =", zoomElement.src);
    console.log("8888c zoomElement.alt =", zoomElement.alt);

    // console.log("6666g this.parent cardName =", this.parentElement.#cardName);
    // function zoomPic(cardInfo) {
    //   const zoomTextElement = document.querySelector(".image-popup__picture-text");
    //   zoomElement.src = cardInfo.link;
    //   zoomElement.alt = cardInfo.name;
    //   zoomTextElement.textContent = cardInfo.name;
    // }
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
    console.log("4444a value of this = ", this);
    console.log("4444b listening on this._element = ", this._element);
    this._element
      .querySelector(".card-grid__picture")
      .addEventListener("click", this._handleZoom);
    console.log("4444c value of this = ", this);
  }

  createCard() {
    console.log("1111 START FUNCTION createCard");
    this._element = this._getTemplate();
    console.log(
      "3333a RESUME FUNCTION createCard - this._element =",
      this._element
    );
    console.log("3333b the value of this =", this);
    console.log("3333b the value of this._link =", this._link);
    this._element.querySelector(".card-grid__picture").src = this._link;

    console.log("3333b the value of this.name =", this._name);
    this._element.querySelector(".card-grid__text").textContent = this._name;

    console.log("3333c run setEventListeners on this._");
    console.log("3333d now draw images etc");
    this._setEventListeners();
    return this._element;
  }
}

export default Card;
