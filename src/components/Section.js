export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(`.${containerSelector}`);
  }
  renderItems() {
    console.log("this._renderer=", this._renderer);
    // this._renderedItems.forEach(this._renderer);
    for (const cardData of this._renderedItems) {
      this._renderer(cardData);
    }
  }

  addItem(item) {
    this._container.append(item);
  }
}
