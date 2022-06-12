// put import statements here
//  will import from ./Card.js

// containerSelector will be CSS class selector where the items will be rendered

export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderer = renderer;
    this._renderedItems = items;
    this._container = document.querySelector(`.${containerSelector}`);
  }

  renderItems(items) {
    this._renderedItems.forEach((items) => {
      const cardElement = card.generateCard();
      this.setItem(cardElement);
    });
  }

  setItem(element) {
    this._container.append(element);
  }
}

export default Section;
