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
    document.getElementById("image-zoom").src = this._link;
    document.getElementById("image-zoom").alt = this._name;
    document.querySelector(".image-popup__picture-text").textContent =
      this._name;
    console.log(
      "dddd2HANDLEZOOM containerElementImage",
      this._containerElementImage
    );
    this._utilities.openPopup(this._containerElementImage);
  }

  _handleHeart() {
    this.classList.toggle("card-grid__icon_active");
  }

  _handleClosePopupZoom() {
    console.log("UTIL JS FUNCTION CLOSEPOPUPZOOM");
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
    console.log("3333aLISTENER this._element", this._element);
    this._element
      .querySelector("img")
      .addEventListener("click", this._handleZoom.bind(this));
    console.log("3333bLISTENER this", this);
    console.log("3333cLISTENER this.link", this._link);
    console.log("3333dLISTENER this.link", this._name);
    console.log("3333eLISTENER this._element", this._element);

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
    console.log("4444a FUNCTIONcreateCard -- this.element", this._element);
    console.log("4444b FUNCTIONcreateCard -- this._link", this._link);
    console.log("4444c FUNCTIONcreateCard -- this._name", this._name);
    return this._element;
  }
}

export default Card;
