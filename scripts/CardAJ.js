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

  _setEventListeners() {
    // this is where we set up the events
    console.warn("this is not done yet");
  }

  createCard() {
    this._element = this._getTemplate();
    // console.log("card", this._element);
    this._setEventListeners();

    // this._element.querySelector(
    //   ".card-grid__picture"
    // ).style.backgroundImage = `url(${this._link})`;
    // console.log("GGGG this._link", this._link);

    // this._element.querySelector(
    //   ".card-grid__picture"
    // ).src = "`url(${this._link})`";

    // this._element.querySelector(".card-grid__picture").src = `"${this._link}"`;

    console.log("GGGG this._link", this._link);
    this._element.querySelector(".card-grid__picture").src = this._link;

    console.log("GGGG this.name", this._name);
    this._element.querySelector(".card-grid__text").textContent = this._name;

    return this._element;
  }
}

export default Card;
