// containerSelector will be CSS class selector where the items will be rendered

export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderer = renderer;
    this._renderedItems = renderedItems;
    this._container = document.querySelector(`.${containerSelector}`);
  }

  renderItems(data) {
    this._renderedItems.forEach((data) => {
      const cardElement = card.createCard();
      this.setItem(cardElement);
    });
  }

  addItem(item) {
    this._container.append(item);
  }
}
