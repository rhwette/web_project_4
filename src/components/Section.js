// import { initialCards, selectors } from "../components/constants";

export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(`.${containerSelector}`);
    console.log("AAA0 SECTION data =", data);
    console.log("AAA1 SECTION this._renderedItems =", this._renderedItems);
    console.log("AAA2 SECTION this._renderer =", this._renderer);
    console.log("AAA3 SECTION this._container = ", this._container);
  }

  renderItems() {
    this._renderedItems.forEach(this._renderer);
    // const cardElement = createCard();
    // this._addItem(cardElement);
  }

  addItem(item) {
    this._container.append(item);
  }
}
