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
    console.log("ddddddd1111 cardElement", cardElement);
    return cardElement;
  }

  _handleCan() {
    // console.log("2222b this", this);
    // console.log("2222c parent element of this =", this.parentElement);
    // console.log("2222c parent node of this =", this.parentNode);
    // const cardToRemove = this.parentElement;
    // cardToRemove.remove();
    this.parentElement.remove();
  }

  _handleZoom() {
    this._element.querySelector(".card-grid__picture").src = this._link;
    console.log("6666 this", this);
    console.log("6666 this._element", this._element);
    console.log("6666 this._link", this._src);
    console.log("6666 this._name", this._name);
    // function zoomPic(cardInfo) {
    //   const zoomTextElement = document.querySelector(".image-popup__picture-text");
    //   zoomElement.src = cardInfo.link;
    //   zoomElement.alt = cardInfo.name;
    //   zoomTextElement.textContent = cardInfo.name;
    //   openPopup(containerElementImage);
    // }
    // const containerElementImage = document.querySelector("#image-popup-container");
  }

  _handleHeart() {
    console.log("2222a this", this);
    console.log("3333a this._element", this._element);
    this.classList.toggle("card-grid__icon_active");
  }

  _setEventListeners() {
    // set listener for Heart
    console.log("0000a this", this);
    console.log("1111a this._element", this._element);
    this._element
      .querySelector(".card-grid__icon")
      .addEventListener("click", this._handleHeart);

    // set listener for Garbage Can
    console.log("0000b this", this);
    console.log("1111b this._element", this._element);

    this._element
      .querySelector(".card-grid__garbage")
      .addEventListener("click", this._handleCan);

    // add EventListener for zoomPic
    this._element
      .querySelector(".card-grid__picture")
      .addEventListener("click", this._handleZoom);

    console.log("55555b this", this);
    console.log("55555b this._element", this._element);
    console.log("55555c this._link", this._link);
    console.log("55555c this._name", this._name);
  }

  createCard() {
    this._element = this._getTemplate();
    // console.log("card", this._element);
    this._setEventListeners();

    console.log("GGGG this._link", this._link);
    this._element.querySelector(".card-grid__picture").src = this._link;

    console.log("GGGG this.name", this._name);
    this._element.querySelector(".card-grid__text").textContent = this._name;

    return this._element;
  }
}

export default Card;
