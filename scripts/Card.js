class Card {
  constructor(card, cardSelector) {
    this._name = card.name;
    this._link = card.link;

    this._cardSelector = cardSelector;

    this._imageElement = cardElement.querySelector(".card-grid__picture");
    this._titleElement = cardElement.querySelector(".card-grid__text");
    this._buttonHeart = cardElement.querySelector(".card-grid__icon");
    this._buttonCan = cardElement.querySelector(".card-grid__garbage");

    this._imageElement.src = card.link;
    this._imageElement.alt = card.name;
    this._titleElement.textContent = card.name;

  }

  _setEventListeners() {

      //listen for heart icon
    this._element
      .querySelector(".card-grid__icon")
      .addEventListener("click", _handleButtonHeart(buttonHeart));

      //listen for garbage can
    this._element
      .querySelector('.card-grid__garbage')
      .addEventListener("click", _handleButtonCan());

      //listen for big X to close zoom pic
    this._element
      .querySelector('.image-popup__button-closezoom')
      .addEventListener("click", _handleButtonZoomPicClose());

      //listen for imageElement
    this._element
      .querySelector('.image-popup__picture-zoom')
      .addEventListener("click", _handleImageElement());
    }

    _handleButtonHeart(heartToChange) {
      heartToChange.classList.toggle("card-grid__icon_active");
    }

    _handleButtonCan() {
      cardElement.remove();
    }

    _handleButtonZoomPicClose() {
      closePopupZoom();
    }

     _handleImageElement() {
       zoomPic(card);
     }
  
  }


  function zoomPic(cardInfo) {
    const zoomTextElement = document.querySelector(".image-popup__picture-text");
    zoomElement.src = cardInfo.link;
    zoomElement.alt = cardInfo.name;
    zoomTextElement.textContent = cardInfo.name;
    openPopup(containerElementImage);
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();
    this._setEventListeners();
  
  }
}

// export default Card;
