export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    // FEEDBACK SECTION line 5.. pass the whole selector via arguments
    //  becuase it could be an id or something else, not only a class
    this._container = document.querySelector(containerSelector);
    // this._container = document.querySelector(`.${containerSelector}`);
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
